import pc from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthenticationError, ForbiddenError } from "apollo-server";
import jwt from "jsonwebtoken";
const prisma = new pc.PrismaClient();
const resolvers = {
  Query: {
    users: async (_, args, { userId }) => {
      if (!userId) throw new ForbiddenError("you must be logged in ");
      const users = await prisma.user.findMany({
        orderBy: {
          createAt: "desc",
        },
        where: { id: { not: userId } },
      });
      return users;
    },
    messagesByUser: async (_, { receiverId }, { userId }) => {
      if (!userId) throw new ForbiddenError("you must be logged in ");
      const message=await prisma.message.findMany({
        orderBy:{
          createAt:"asc"
        },
        where:{
          OR: [
          {
            senderId: userId,
            receiverId: receiverId,
          },
          { senderId: receiverId, receiverId: userId },
        ],
      }});
      return message
    },
  },
  User: {},
  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await prisma.user.findUnique({
        where: { email: userNew.email },
      });
      if (user)
        throw new AuthenticationError("user already exist with this email");
      const hashedPassword = await bcrypt.hashSync(userNew.password, 10);
      const newUser = prisma.user.create({
        data: {
          ...userNew,
          password: hashedPassword,
        },
      });
      return newUser;
    },

    signInUser: async (_, { userSignin }) => {
      const user = await prisma.user.findUnique({
        where: { email: userSignin.email },
      });
      if (!user)
        throw new AuthenticationError("User is not sighed up with this email");
      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!doMatch)
        throw new AuthenticationError("email or password incorrect");
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return { token };
    },

    createMessage: async (_, { receiverId, text }, { userId }) => {
      if (!userId) throw new ForbiddenError("you must be logged in ");
      const message = await prisma.message.create({
        data: {
          text,
          receiverId,
          senderId: userId,
        },
      });
      return message;
    },
  },
};

export default resolvers;
