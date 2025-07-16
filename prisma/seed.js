const { PrismaClient, Prisma } = require("../src/generated/prisma");

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
          published: true,
          image: "some-image.jpg",
          created: new Date().toISOString(),
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
          image: "another-image.jpg",
          created: new Date().toISOString(),
        },
      ],
    },
  },
  {
    name: "Bob",
    email: "bob@prisma.io",
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
          published: true,
          image: "bob-image.jpg",
          created: new Date().toISOString(),
        },
      ],
    },
  },
];

async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
