"use server";

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

  if (errors.userName || errors.password) {
    return {
      errors: errors,
      success: false,
    };
  }

  // Save user in the database

  // Return user with a cookie

  return {
    success: true,
  };
};
