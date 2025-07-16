const { PrismaClient, Prisma } = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: "Alice", email: "alicse@example.com" },
      { name: "Bob", email: "bob@sexample.com" },
    ],
  });
  console.log("Database has been seeded. 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
