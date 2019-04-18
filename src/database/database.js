var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.resolve(__dirname, "../src/database/testbd.db");
const db = new sqlite3.Database(dbPath);
//import { ipcMain } from "electron";
console.log(dbPath);

export function CreateDatabase(event) {
  db.serialize(function() {
    db.run("CREATE TABLE lorem (info TEXT)");

    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
    });
  });

  db.close();
}

export function GetLurem(event) {
  db.serialize(function() {
    db.all("SELECT rowid AS id, info FROM lorem", function(err, row) {
      // console.log(row[0].id);
      event.sender.send("loremRows", row);
    });
  });

  db.close();
}
