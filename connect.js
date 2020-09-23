const edgedb = require("edgedb");
const assert = require("assert");
require('dotenv').config();
 
async function main() {

  // dsn: 'edgedb://user:password@host:port/database?option=value'
  // see $HOME/.edgedb/credentials/<instance_name>.json to get parameters
  const conn = await edgedb.connect(process.env.EDGEDB_DSN);
  
  try{
    let data = await conn.queryOne("SELECT 1 + 1");
    console.log("1+1=", data);

    // The result is a number and equals 2
    assert(typeof data === "number");
    assert(data === 2);

  } finally {
    conn.close();
  }

}
 
main();
