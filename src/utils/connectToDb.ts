import mongoose from "mongoose";
import log from "./logger";

async function connectToDb() {
  const dbUri = process.env.DB_URI|| '';

  try {
    await mongoose.connect(dbUri);
    log.info("Connected to DB");
  } catch (e) {
    process.exit(1);
  }
}

export default connectToDb;