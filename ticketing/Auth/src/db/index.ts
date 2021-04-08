import { Client } from "pg";

const connectionString = 'postgresql://durgakiran:durgakiran@auth-pg-srv:5432/users';

const client = new Client({connectionString});

export { client as clientDB };
