import { dbneon } from "../config/neondb.js";
import bcrypt from "bcrypt";

export const registerUser = async (email, password) => {
  const trx = await dbneon.transaction();
  try {
    const hashPassword = await bcrypt.hash(password + "", 10);

    const [user] = await trx("users").insert(
      {
        email: email.toLowerCase(),
        password: hashPassword,
      },
      ["email", "id"]
    );

    await trx.commit();
    return user;
  } catch (error) {
    await trx.rollback();
    console.log(error);
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await dbneon("users")
      .select("id", "email", "password")
      .where({ email: email.toLowerCase() })
      .first();
    // return user;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const users =  await dbneon("users").select("id", "email");
   
    return users
  } catch (error) {
    throw error;
  }
};
