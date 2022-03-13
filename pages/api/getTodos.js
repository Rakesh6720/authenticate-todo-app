import { table, minifyRecords } from "./utils/airtable";

export default async function handler(req, res) {
  try {
    const records = await table.select({}).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.statusCode = 200;
    res.json(minifiedRecords);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ message: "Something went wrong" });
  }
}
