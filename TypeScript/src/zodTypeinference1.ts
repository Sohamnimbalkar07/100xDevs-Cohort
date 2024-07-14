import { z } from 'zod';

const A = z.string();
type A = z.infer<typeof A>; // string

//const p: A = 12; // TypeError
const p: A = "Soham"; // compiles