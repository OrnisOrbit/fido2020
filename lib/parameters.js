import dotenv from 'dotenv'
dotenv.config();

let dbName = process.env.DB_NAME;
if (!dbName) {
    dbName = 'fidonet2020_db';

    console.warn(`The database name was not provided. The default value was set to '${dbName}'.`);
}

let dbUser = process.env.DB_USER;
if (!dbUser) {
    dbUser = 'fidonet2020_db_user';

    console.warn(`The database user was not set. The default value is selected to '${dbUser}'.`);
}

const dbPass = process.env.DB_PASS;
if (!dbPass) {
    throw new Error('The database password was not provided. Please specify it in the .env file.');
}

let dbHost = process.env.DB_HOST;
if (!dbHost) {
    dbHost = 'localhost';

    console.warn(`The database host was not set. The default value is selected to '${dbHost}'.`);
}

let dbPort = process.env.DB_PORT;
if (!dbPort) {
    dbPort = '3306';

    console.warn(`The database port was not provided. The default value is set to '${dbPort}'.`);
}

let dbDialect = process.env.DB_DIALECT;
if (!dbDialect) {
    dbDialect = 'mysql';

    console.warn(`The database dialect was not provided. The default value is set to '${dbDialect}'.`);
}

const adminUser = process.env.ADMIN_USER;
if (!adminUser) {
    throw new Error('The admin login was not specified. Please add it to the .env file.');
}

const adminPass = process.env.ADMIN_PASS;
if (!adminPass) {
    throw new Error('The admin password was not specified. Please add it to the .env file.');
}

let port = process.env.PORT;
if (!port) {
    port = '8080';

    console.warn(`The port was not specified. The default value is set to '${port}'.`);
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
    throw new Error('The session secret was not specified. Please add it to the .env file.');
}

let passHashingRounds = process.env.PASS_HASHING_ROUNDS;
if (!passHashingRounds) {
    passHashingRounds = '8';

    console.warn(`The password hashing rounds was not set. The default value is selected to '${passHashingRounds}'.`);
}

export default {
    dbName,
    dbUser,
    dbPass,
    dbHost,
    dbPort,
    dbDialect,
    adminUser,
    adminPass,
    port,
    sessionSecret,
    passHashingRounds
};

