import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = 3000;

app.use(express.json());

const otpLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 3, // Limit each IP to 3 OTP requests per windowMs
    message: 'Too many requests, please try again after 5 minutes',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const passwordResetLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many password reset attempts, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});

const otpStore: Record<string, string> = {};

app.post('/generate-otp', otpLimiter, (req : any, res : any) => {
    console.log(req.body);
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;

    console.log(`OTP for ${email}: ${otp}`);
    res.status(200).json({ message: "OTP generated and logged" });
});


app.post('/reset-password', passwordResetLimiter, (req : any, res : any) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: "Email, OTP, and new password are required" });
    }
    if (Number(otpStore[email]) === Number(otp)) {
        console.log(`Password for ${email} has been reset to: ${newPassword}`);
        delete otpStore[email];
        res.status(200).json({ message: "Password has been reset successfully" });
    } else {
        res.status(401).json({ message: "Invalid OTP" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
