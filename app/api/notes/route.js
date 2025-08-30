import connectDb from "@/connectDb";
import Notes from "@/models/notesModel";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  try {
    await connectDb();

    const session = await auth();

    if (!session || !session.user.id) {
      return NextResponse.json(
        {
          success: false,
          msg: "not authorized",
        },
        {
          status: 400,
        }
      );
    }

    const userId = session.user.id;

    const notes = await Notes.find({
      userId: userId,
    });
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
    await connectDb();

    const token = await auth();

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

export async function PUT(req) {
  try {
    await connectDb();

    const session = await auth();

    if (!session || !session.user.id) {
      return NextResponse.json(
        {
          msg: "not authenticated",
          success: false,
        },
        { status: 400 }
      );
    }

    const { title, content, noteId } = await req.json();

    if (!title || !noteId) {
      return NextResponse.json(
        {
          success: false,
          msg: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const note = await Notes.findByIdAndUpdate(
      {
        _id: noteId,
        userId: session.user.id,
      },
      {
        title,
        content,
      },
      {
        new: true,
      }
    );

    if (!note) {
      return NextResponse.json(
        {
          success: false,
          msg: "Note not found or user not authorized to update it",
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        msg: "Successfully updated",
        success: true,
        note,
      },
      { status: 200 }
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
