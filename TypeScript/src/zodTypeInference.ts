import { z } from 'zod';
import express from "express";

const app = express();

// runtime validation
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});


//compile time type 
type finalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody : finalUserSchema = req.body;

  if (!success) {
    res.status(411).json({});
    return
  }

  res.json({
    message: "User updated"
  })
});

app.listen(3000);