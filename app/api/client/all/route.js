import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Phone from "@/models/phone";

export async function GET() {
  await dbConnect();

  try {
    const phones = await Phone.find({});
    console.log(phones);

    if (!phones)
      return NextResponse.json({ message: "Client Error" }, { status: 400 });

    return NextResponse.json({ phones });
  } catch (err) {
    console.log(err);

    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
