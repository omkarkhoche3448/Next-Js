"use server";

import client from "@/db"; 

export async function Signup(username: string, password: string) {
    try {
        const res = await client.user.create({
            data: {
                userName: username,
                password: password,
            },
        });
        console.log(res)
        return res; 
    } catch (error) {
        console.log("Error during signup:", error);
        throw new Error("Signup failed");
    }
}
