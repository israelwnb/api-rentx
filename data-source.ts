import { DataSource } from "typeorm";

export const config = new DataSource({
    migrationsTableName: "migrations",
    type: "postgres",
    port: 5432,
    host: "localhost",
    username: "docker",
    password: "ignite",
    database: "rentx",
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    entities: ["./src/modules/**/entities/*.ts"],
});
