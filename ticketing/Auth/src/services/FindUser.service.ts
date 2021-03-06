import { clientDB } from "../db";

export async function findUserByEmail(email: string): Promise<[number, any[]]> {
    const query =  `SELECT * FROM users where email = $1`;
    const res = await clientDB.query(query, [email]);
    return [res.rowCount, res.rows];
}
