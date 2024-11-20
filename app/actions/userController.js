"use server";

import { getCollection } from "../lib/db.js";
import bcrypt from "bcrypt";
import { cookies } from "next/headers.js";
import jwt from "jsonwebtoken";
import { redirect } from "next/dist/server/api-utils/index.js";

function isAlphaNumeric(x) {
  const regex = /^[a-zA-Z0-9]*$/;
  return regex.test(x);
}

export const login = async function (prevState, formData) {
  const failObject = {
    success: false,
    message: "Invalid username / password.",
  };

  const ourUser = {
    userName: formData.get("username"),
    password: formData.get("password"),
  };

  if (typeof ourUser.userName != "string") ourUser.userName = "";
  if (typeof ourUser.password != "string") ourUser.password = "";

  const collection = await getCollection("users");
  const user = await collection.findOne({ userName: ourUser.userName });

  if (!user) {
    return failObject;
  }

  const matchOrNot = bcrypt.compareSync(ourUser.password, user.password);

  if (!matchOrNot) {
    return failObject;
  }

  // Create JWT
  const ourTokenValue = jwt.sign(
    {
      skyColor: "blue",
      userId: user._id,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWTSECRET
  );

  // Return user with a cookie
  cookies().set("ourhaikuapp", ourTokenValue, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    secure: true,
  });
  return redirect("/");
};

export const logout = async function () {
  cookies().delete("ourhaikuapp");
  redirect("/");
};

export const register = async function (prevState, formData) {
  const errors = {};
  const ourUser = {
    userName: formData.get("username"),
    password: formData.get("password"),
  };

  if (typeof ourUser.userName != "string") ourUser.userName = "";
  if (typeof ourUser.password != "string") ourUser.password = "";

  ourUser.userName = ourUser.userName.trim();
  ourUser.password = ourUser.password.trim();

  if (ourUser.userName.length < 3)
    errors.userName = "Username must be atleast 3 characters.";
  if (ourUser.userName.length > 30)
    errors.userName = "Username cannot exceed 30 characters.";
  if (!isAlphaNumeric(ourUser.userName))
    errors.userName = "You can only contain letters and numbers.";
  if (ourUser.userName == "") errors.userName = "You must provide a username.";

  if (ourUser.password.length < 8)
    errors.password = "password must be atleast 8 characters.";
  if (ourUser.password.length > 50)
    errors.password = "password cannot exceed 50 characters.";
  if (ourUser.password == "") errors.password = "You must provide a password.";

  if (errors.userName || errors.password) {
    return {
      errors: errors,
      success: false,
    };
  }

  // hash password
  const salt = bcrypt.genSaltSync(10);
  ourUser.password = bcrypt.hashSync(ourUser.password, salt);
  // Save user in the database
  const usersCollection = await getCollection("users");
  const newUser = await usersCollection.insertOne(ourUser);
  const userId = newUser.insertedId.toString();
  // Create JWT
  const ourTokenValue = jwt.sign(
    {
      skyColor: "blue",
      userId: userId,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWTSECRET
  );

  // Return user with a cookie
  cookies().set("ourhaikuapp", ourTokenValue, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24,
    secure: true,
  });

  return {
    success: true,
  };
};
