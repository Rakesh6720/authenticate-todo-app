import { table, minifyRecords } from "./utils/airtable";

export default async function handler(req, res) {
  const records = await table.select({}).firstPage();
  const minifiedRecords = minifyRecords(records);
  res.statusCode = 200;
  res.json(minifiedRecords);
}
