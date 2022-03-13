import { table, getMinifiedRecord } from "./utils/airtable";

export default async function handler(req, res) {
  const body = req.body;
  const id = body.id;
  const fields = body.fields;

  try {
    const updatedRecords = await table.update([{ id: id, fields: fields }]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ message: "Something went wrong" });
  }
}
