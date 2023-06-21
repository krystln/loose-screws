import { connectToDB } from "@utils/db";
import Job from "@models/jobs";

export const POST = async (request) => {
    const { body } = request;
    const { name, email, description } = await request.json();
    console.log("Request recieved, body: ", body);
    try{
        await connectToDB();
        const job = new Job({
            name,
            email,
            description
        });
        job.save();
        return new Response("Job created", { status : 201 });
    }catch(error){
        return new Response(error, { status : 500 });
    }
}
