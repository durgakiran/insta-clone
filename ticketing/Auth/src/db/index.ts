import { Client } from "pg";

const connectionString = 'postgresql://postgres:durgakiran@auth-pg-srv:5432/postgres';

const client = new Client({connectionString});

export { client as clientDB };
