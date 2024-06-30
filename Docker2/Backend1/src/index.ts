
import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());
import dotenv from "dotenv";

dotenv.config();

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    })
})

app.post("/", async (req, res) => {
    await client.user.create({
        data: {
            email: "rohitsarade@gmail.com",
            name: "Rohit Sarade"
        }
    })

    res.json({
        message: "Done signing up!"
    })
})

app.listen(3000, () => {
    console.log(process.env.DATABASE_URL);
    console.log("app started")
});