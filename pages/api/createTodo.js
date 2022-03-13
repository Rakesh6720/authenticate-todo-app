import { table } from "./utils/airtable";

export default async function handler(req, res) {
  const body = req.body;
  const description = body.description;

  try {
    const createdRecords = await table.create([
      { fields: { description: description } },
    ]);
    const createdRecord = {
      id: createdRecords[0].id,
      fields: createdRecords[0].fields,
    };
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.json({ message: "Something went wrong" });
  }
}
