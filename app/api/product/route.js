import { connectToDB } from "@utils/db";
import Product from "@models/product";

export const POST = async (request, response) => {
    try{
        const productDetails = await request.json();
        await connectToDB();
        const product = new Product(productDetails);        
        product.save();
        response.send("Product created", { status : 201 });

    }catch(error){
        response.send(error, { status : 500 });
        console.log(error);
    }
}