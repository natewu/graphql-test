// const MongoClient = require('mongodb').MongoClient;

// class Mongo {
//    private static client: any;
//    public static db: any;

//    constructor() {
//       Mongo.client = new MongoClient("mongodb+srv://admin:VFH7wO9tBa3YlZHa@cluster0.zyoekxx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
//       Mongo.db = null;
//    }

//    public static async connect() {
//       await this.client.connect();
      
//       return this.db;
//    }

//    public async getDb(database: string) {
//       if (Mongo.db) {
//          return Mongo.db;
//       }
//       Mongo.db = await Mongo.client.db(database);
//       return Mongo.db;
//    }
// }

// Mongo.db = null;

// export { Mongo };

const MongoClient = require('mongodb').MongoClient;

export class Mongo {
   static db: null
   static url: string
   static options: { bufferMaxEntries: number; reconnectTries: number; useNewUrlParser: boolean; useUnifiedTopology: boolean }

   static async connect() {
      if (this.db) return this.db
      this.db = await MongoClient.connect(this.url, this.options)
      return this.db
   }
}

Mongo.db = null
Mongo.url = 'mongodb+srv://admin:VFH7wO9tBa3YlZHa@cluster0.zyoekxx.mongodb.net/?retryWrites=true&w=majority'
Mongo.options = {
   bufferMaxEntries:   0,
   reconnectTries:     5000,
   useNewUrlParser:    true,
   useUnifiedTopology: true,
}
