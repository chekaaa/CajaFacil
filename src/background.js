"use strict";

import { app, protocol, BrowserWindow } from "electron";
import {
  createProtocol,
  installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
import { ipcMain } from "electron";

const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(["app"], { secure: true });
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 1024,
    minHeight: 720,
    show: false
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    win.setMenu(null);
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
  win.maximize();
  win.show();
  win.on("closed", () => {
    win = null;
  });

  console.log(process.env.WEBPACK_DEV_SERVER_URL);
}

//Sql stuff
import {
  getProductByCode,
  commitSale,
  getProductList
} from "./database/database.js";

ipcMain.on("getProductByCode", (event, code) => {
  getProductByCode(event.sender, code);
});

ipcMain.on("onCommitSale", (event, productList) => {
  commitSale(event.sender, productList);
});

ipcMain.on("onInventoryRequest", (event, name) => {
  getProductList(event.sender, name);
});

ipcMain.on("showWindowtFunction", function(e, data) {
  const modalPath =
    process.env.NODE_ENV === "development"
      ? process.env.WEBPACK_DEV_SERVER_URL
      : `file://${__dirname}/index.html`;
  let win = new BrowserWindow({
    width: 400,
    height: 320,
    webPreferences: { webSecurity: false }
  });
  win.on("close", function() {
    win = null;
  });
  win.loadURL(modalPath);
});
//Testin send and recive IPC between VUE and electron using the example database

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools();
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
