import axios from "axios";

async function getUser() {
  const res = await axios.get("http://localhost:3000/api/user");
  // console.log(res.data);
  return res.data;
}

export default async function Home() {
  const userDetails = await getUser();
  return (
    <div>
      Hello there!
      <br />
      userName:{userDetails?.name}
      <br />
      password:{userDetails?.password}
    </div>
  );
}
