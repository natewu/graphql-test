// import * as mongodb from "mongodb";

import express, {Express, Request, Response} from "express";

import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schemas";

const app: Express = express();
const port = process.env.PORT || 3000;
const corsOptions: cors.CorsOptions = {
   origin: "http://localhost:3000",
   credentials: true
}

// export async function connectToDatabase () {
//    const connectionString = "mongodb+srv://admin:VFH7wO9tBa3YlZHa@cluster0.zyoekxx.mongodb.net/?retryWrites=true&w=majority";

//    const client: mongodb.MongoClient = new mongodb.MongoClient(connectionString);
           
//    await client.connect();
       
//    const db: mongodb.Db = client.db("users");
//    const collection: mongodb.Collection = db.collection("users");

//    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${collection.collectionName}`);
// }

// connectToDatabase();



app.use(cors(corsOptions));

// db = db.client.db("users");

app.get('/', (req: Request, res: Response) => {
   res.send('🚀 Express + TypeScript Server');
});

app.use('/graphql', graphqlHTTP({
   schema,
   graphiql: true
}));

app.listen(port, () => {
   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});