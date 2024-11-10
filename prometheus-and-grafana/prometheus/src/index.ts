import express from "express";
import { metricsMiddleware, cleanupMiddleware } from "./metrics";
import client from "prom-client";

const app = express();
app.use(express.json());
app.use(metricsMiddleware);

app.get("/user", (req, res) => {
    res.send({
        name: "John Doe",
        age: 25,
    });
});

// app.get("/user", async (req, res) => {
//     console.log("inside get user");
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     res.send({
//         name: "John Doe",
//         age: 25,
//     });
// });

app.post("/user", (req, res) => {
    const user = req.body;
    res.send({
        ...user,
        id: 1,
    });
});

app.get("/metrics", async (req, res) => {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.end(metrics);
})

app.listen(3000);