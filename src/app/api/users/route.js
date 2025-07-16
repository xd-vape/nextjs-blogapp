import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient();

// const newUser = await prisma.user.create({
//   data: {
//     name: "Max Musterman",
//     email: "max@example.de",
//   },
// });

// console.log(newUser);

export async function GET(req) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}
