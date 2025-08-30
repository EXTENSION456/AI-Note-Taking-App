import connectDb from "@/connectDb";
import Notes from "@/models/notesModel";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  try {
    await connectDb();
    const notes = await Notes.find({});
    return NextResponse.json(
      {
        notes,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error, "error while fetching");
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req) {
  try {
    console.log("api notes post");
    await connectDb();

    const token = await auth(); 
    console.log(token, "token"); // Log the token to inspect its content

    // 1. Verify the token and extract the user ID.
    if (!token || !token.user.id) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }
    const userId = token.user.id;

    const { title, content } = await req.json();

    if (!title) {
      return NextResponse.json(
        {
          success: false,
          msg: "Title is required",
        },
        { status: 400 }
      );
    }

    const newNote = await Notes.create({
      title,
      content: content,
      userId: userId,
    });

    return NextResponse.json(
      {
        success: true,
        msg: "Note created successfully",
        note: newNote,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error, " error while creating");
    return NextResponse.json(
      {
        success: false,
        msg: "server error",
      },
      { status: 500 }
    );
  }
}
