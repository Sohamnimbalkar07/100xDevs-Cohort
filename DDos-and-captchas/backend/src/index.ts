import express from 'express';
import cors from "cors";

const SECRET_KEY = "secret-key";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const otpStore: Record<string, string> = {};

app.post('/generate-otp', (req : any, res : any) => {
  console.log(req.body)
  const email = req.body.email;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[email] = otp;

  console.log(`OTP for ${email}: ${otp}`);
  res.status(200).json({ message: "OTP generated and logged" });
});


app.post('/reset-password', async (req : any, res : any) => {
  const { email, otp, newPassword, token } = req.body;
  console.log(token);

  let formData = new FormData();
	formData.append('secret', '0x4AAAAAAA4YGe0LahUTE1NVXKPsF0bcAzs');
	formData.append('response', token);

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: formData,
		method: 'POST',
	});

  const challengeSucceeded = (await result.json()).success;
  console.log(challengeSucceeded);
  if (!challengeSucceeded) {
    return res.status(403).json({ message: "Invalid reCAPTCHA token" });
  }

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
