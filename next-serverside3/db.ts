import { PrismaClient } from '@prisma/client'

console.log("Inside db.ts");
const prismaClientSingleton = () => {
  console.log("prisma client instance created");
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma