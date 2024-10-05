import axios from "axios";

async function todoDetails() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return response.data;   
}

// async function userDetails() {
//   const response = await axios.get("https://localhost:3000/api/user");
//   return response.data;
// }

export default async function Home() {
  const todoData = await todoDetails();
  // const userData = await userDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center flex-col items-center ga-4">
        {/* <div className="border p-8 rounded">
          <div>TaskName: {userData?.name}</div>
          Completed:{userData?.email}
        </div> */}
        <div className="border p-8 rounded">
          <div>TaskName: {todoData?.title}</div>
          Completed:{todoData?.completed}
        </div>
      </div>
    </div>
  );
}
