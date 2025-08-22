"use server";

import connectDb from "@/connectDb";
import User from "@/models/userModel";
import bcrypt from "bcrypt";

export async function doSignup(formData) {
  await connectDb();

  const password = formData.get("password");
  const confPassword = formData.get("confirmPassword");
  try {
    if (password != confPassword) {
      throw new Error("Wrong password");
    }

    const email = formData.get("email");

    if (!email || email.length === 0) {
      throw new Error("No email");
    }

    const user = await User.findOne({ email });

    if (user) {
      throw new Error("User already exists !!!");
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    payload.password = hashedPassword;

    await User.create(payload);
    return { status: true };
  } catch (error) {
    throw new Error(error.message);
  }
}
