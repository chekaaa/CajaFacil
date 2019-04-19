import { app } from "electron";
var sqlite3 = require("sqlite3").verbose();
const path = require("path");
const dbPath = path.join(app.getAppPath("userData"), "markertdb.sqlite3");
let db = new sqlite3.Database(dbPath);
//import { ipcMain } from "electron";
console.log(dbPath);

db.serialize(function() {
  db.run(
    "CREATE TABLE IF NOT EXISTS producto " +
      "(id_prod INTEGER PRIMARY KEY AUTOINCREMENT,cod_ucc14	INTEGER,nombre_prod	TEXT,descripcion	TEXT,cantidad_prod	INTEGER)"
  );
});

db.close();

//Reduce the products count depending on what products are passed in the methods

export function getProductByCode(sender, code) {
  db = new sqlite3.Database(dbPath);
  db.get("SELECT * FROM producto WHERE cod_ucc14 = ?", [code], function(
    err,
    row
  ) {
    console.log("Trying to get the product with the code: " + code);
    if (row !== undefined) {
      console.log("The product name is: " + row.nombre_prod);
      sender.send("productByCode", row);
    } else {
      sender.send("productByCode", null);
    }
  });
}

// export function GetProductName(event) {
//   db = new sqlite3.Database(dbPath);
//   db.serialize(function() {
//     db.each("SELECT nombre_prod AS name FROM producto", function(err, row) {
//       // console.log(row[0].id);
//       //event.sender.send("loremRows", row);
//       console.log("Nombre: " + row.name);
//     });
//   });

//   db.close();
// }
