import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Phone from "@/models/phone";

export async function POST(request) {
  const _req = await request.json();
  await dbConnect();

  try {
    const { phone } = _req;
    console.log("=========", phone);
    const existingPhone = await Phone.findOne({ phone: phone });
    console.log(existingPhone);

    if (existingPhone) {
      return NextResponse.json(
        { message: "Phone already exist" },
        { status: 409 }
      );
    }

    await new Phone({ phone }).save();

    return NextResponse.json({ message: "Succeed" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
