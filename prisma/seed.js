const { PrismaClient, Prisma } = require("../src/generated/prisma");

const prisma = new PrismaClient();

const userData = [
  {
    name: "Josh",
    email: "josh@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          slug: "join-the-prisma-discord",
          content: "https://pris.ly/discord",
          published: true,
          image: "some-image.jpg",
        },
        {
          title: "Prisma on YouTube",
          slug: "prisma-on-youTube",
          content: "https://pris.ly/youtube",
          image: "another-image.jpg",
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

// main();
