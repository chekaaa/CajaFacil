import { app, ipcMain } from "electron";
var sqlite3 = require("sqlite3").verbose();
const path = require("path");
let dbPath = path.resolve(process.resourcesPath, "markertdb.sqlite3");
let db = new sqlite3.Database(dbPath);
//mport { ipcMain } from "electron";

db.serialize(function() {
  db.run(
    "CREATE TABLE IF NOT EXISTS producto " +
      "(id_prod INTEGER PRIMARY KEY AUTOINCREMENT,cod_ucc14	INTEGER,nombre_prod	TEXT,descripcion	TEXT,cantidad_prod	INTEGER,precio_prod	INTEGER)"
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

export function commitSale(sender, productList) {
  db.serialize(function() {
    db = new sqlite3.Database(dbPath);
    var stmt = db.prepare(
      "UPDATE producto SET cantidad_prod = cantidad_prod - ? WHERE id_prod = ?"
    );
    productList.forEach(product => {
      stmt.run(product.quantity, product.id);
    });
    stmt.finalize();
  });

  db.close();

  sender.send("onSaleDone", null);
}

export function getProductList(sender, name) {
  db.serialize(function() {
    db = new sqlite3.Database(dbPath);
    let query = "SELECT * FROM producto";
    if (name !== null) {
      query += " WHERE lower(nombre_prod) LIKE '%" + name.toLowerCase() + "%'";
    }
    console.log(query);

    db.all(query, function(err, rows) {
      sender.send("productListSent", rows);
    });
  });

  db.close();
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
