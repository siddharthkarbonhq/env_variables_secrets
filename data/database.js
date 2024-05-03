// import { MongoClient } from 'mongodb';

// const clusterAddress = process.env.MONGODB_ADDRESS;
// const dbUser = process.env.MONGODB_USERNAME;
// const dbPassword = process.env.MONGODB_PASSWORD;
// const dbName = process.env.MONGODB_DB_NAME;

// const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri);

// console.log('Trying to connect to db');

// try {
//   await client.connect();
//   await client.db(dbName).command({ ping: 1 });
//   console.log('Connected successfully to server');
// } catch (error) {
//   console.log('Connection failed.');
//   await client.close();
//   console.log('Connection closed.');
// }

// const database = client.db(dbName);

// export default database;

import { MongoClient } from 'mongodb';

const clusterAddress = process.env.MONGODB_ADDRESS;
const dbUser = process.env.MONGODB_USERNAME;
const dbPassword = process.env.MONGODB_PASSWORD;
const dbName = process.env.MONGODB_DB_NAME;

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

async function main() {
    try {
        await client.connect();
        await client.db(dbName).command({ ping: 1 });
        console.log('Connected successfully to server');
    } catch (error) {
        console.error('Connection failed.', error);
        try {
            await client.close();
            console.log('Connection closed.');
        } catch (closeError) {
            console.error('Failed to close the connection:', closeError);
        }
    }
}

main();

const database = client.db(dbName);

export default database;
