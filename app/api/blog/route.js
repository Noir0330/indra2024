import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Event from "@/models/blog";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();
  const searchParams = queryString.parseUrl(req.url).query; // ?page=2
  console.log("searchParams => ", searchParams);

  const { page } = searchParams || {};
  const pageSize = 6;

  try {
    // current page
    const currentPage = Number(page) || 1;
    // skip
    const skip = (currentPage - 1) * pageSize;
    // count the blogs
    const totalBlogs = await Event.countDocuments({});

    const blogs = await Event.find({})
      .populate("postedBy", "name")
      .skip(skip)
      .limit(pageSize)
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        blogs,
        currentPage,
        totalPages: Math.ceil(totalBlogs / pageSize),
      },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
