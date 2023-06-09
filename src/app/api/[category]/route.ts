import { NextResponse } from "next/server";
import connectMongo from "@/app/utils/dbConfig";
import { Item } from "@/app/models/itemModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export async function GET(req: any, context: any) {
  const { category } = context.params;
  console.log(category);
  const query = { "item_category": category };
  try {
    console.log("CONNECTING TO MONGO");
    const database = await connectMongo();

    console.log("CONNECTED TO MONGO");

    console.log("FETCHING DOCUMENTS HERE");
    const fetchedItems = await Item.find(query);

    console.log("FETCHED DOCUMENTS");
    return new NextResponse(JSON.stringify(fetchedItems), {
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    NextResponse.json({ error });
  }
}
