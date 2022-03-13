import { table, getMinifiedRecord } from "./utils/airtable";

export default async function handler(req, res) {
  const body = req.body;
  const id = body.id;

  try {
    const deletedRecords = await table.destroy([id]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(deletedRecords[0]));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ message: "Something went wrong" });
  }
}
