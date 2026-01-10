import mongodb from "mongodb";
import * as dotenv from "dotenv"
const { MongoClient } = mongodb;
dotenv.config()
const url = process.env.Mongourl;

if (!url) {
  throw new Error("MongoDB URL is not defined");
}

const client = new MongoClient(url);

let  listDatabases =async (client:mongodb.MongoClient):  Promise<mongodb.BSON.Document> =>  await client.db("adhil").collection("adhilc").find().toArray();
let  collectiondb=async (client:mongodb.MongoClient):  Promise<mongodb.BSON.Document> =>  await client.db("adhil").collection("adhilc");


interface datatype{
  name:string
  age:number
  phonenumber:number
}


 async function insertdata(data:datatype,collection:mongodb.BSON.Document) {
  
  return  await collection.insertOne(data)
}

async function main() {
  try {
   let connet=  await client.connect();
   console.log("connected suces fuly")
 let collectionpa= await collectiondb(client)
  
let data:datatype={
  name:"sona",
  age:30,
  phonenumber:777777
}

  let insert =await insertdata(data,collectionpa)
  // let insert=await collectionpa.insertOne(data)

console.log(insert,"is inset")

 let dbs =await listDatabases(client);
 console.log(dbs,"iss")

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
