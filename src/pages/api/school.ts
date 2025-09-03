import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
  port: 4000,
  user: "3x2rF2JQCzrJ1ps.root",
  password: "z56aji3T6F4TuvQA", // set in Vercel
  database: "test",
  ssl: { rejectUnauthorized: true },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, address, city, state, contact, email_id, image } = req.body;
    try {
      const [result] = await pool.query(
        "INSERT INTO schools (name, address, city, state, contact, email_id) VALUES (?, ?, ?, ?, ?, ?)",
        [name, address, city, state, contact, email_id]
      );
      res.status(200).json({ success: true, id: (result as any).insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  } else if (req.method === "GET") {
    try {
      const [rows] = await pool.query("SELECT * FROM schools");
      res.status(200).json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Database error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
