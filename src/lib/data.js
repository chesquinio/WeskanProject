import { User } from "../models/User";
import { mongooseConnect } from "./mongoose";

export async function getUserByEmail(email) {
  try {
    await mongooseConnect();

    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    return null;
  }
}
