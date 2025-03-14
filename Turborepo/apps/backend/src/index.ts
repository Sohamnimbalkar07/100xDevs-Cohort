import express, { Request, Response, NextFunction } from 'express';
import { userSchema } from '@repo/common/index';

const app = express();
const PORT = 3003;

app.use(express.json());

app.get('/', (req: any, res: any) => {
    const user = {
        name: "Soham Vilas Nimbalkar",
        email: "sohamnimbalkar07@gmail.com",
        age: 24
    };

    const validationResult = userSchema.safeParse(user);

    if (!validationResult.success) {
        return res.status(400).json({ errors: validationResult.error.format() });
    }

    const validData = validationResult.data;
    return res.status(200).json({ message: 'User data is valid', data: validData });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    if (!res.headersSent) {
        res.status(500).json({ message: 'Something went wrong!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
