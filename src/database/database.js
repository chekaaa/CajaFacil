var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.resolve(__dirname, "../src/database/storedb.db");
const db = new sqlite3.Database(dbPath);
//import { ipcMain } from "electron";
console.log(dbPath);

db.serialize(function() {
  db.run(
    "CREATE TABLE IF NOT EXISTS producto " +
      "(id_prod INTEGER PRIMARY KEY AUTOINCREMENT,cod_ucc14	INTEGER,nombre_prod	TEXT,descripcion	TEXT,cantidad_prod	INTEGER)"
  );
});

db.close();

export function GetLurem(event) {
  db.serialize(function() {
    db.all("SELECT rowid AS id, info FROM lorem", function(err, row) {
      // console.log(row[0].id);
      event.sender.send("loremRows", row);
    });
  });

  db.close();
}
