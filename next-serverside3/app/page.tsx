import axios from "axios";

// async function getUser() {
//   const res = await axios.get("http://localhost:3000/api/user");
//   // console.log(res.data);
//   return res.data;
// }


import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getLastUser() {
  try {
    const lastUser = await client.user.findFirst({
      orderBy: {
        id: "desc",
      },
      select: {
        userName: true, 
        password: true,   
      },
    });
    return lastUser;
  } catch (error) {
    console.error("Error fetching last user:", error);
    return null;
  } finally {
    await client.$disconnect();
  }
}

export default async function Home() {
  const userDetails = await getLastUser();
  // const userDetails = await getUser();
  // console.log("User:", userDetails); 

  return (
    <div>
      Hello there!
      <br />
      {userDetails ? (
        <>
          UserName: {userDetails.userName}
          <br />
          Password: {userDetails.password}
        </>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
}
