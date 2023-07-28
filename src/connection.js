import knex from 'knex';

export const connection = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "oakandaspen",
    password: "oakandaspen",
    database: "breederscompanion",
  },
});
