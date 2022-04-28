import electron, { app, BrowserWindow } from "electron";
import * as path from "path";
import serve from "electron-serve";

const isDev = !electron.app.isPackaged;

const loadURL = serve({
  directory: path.join(__dirname, "../src/renderer/build"),
});

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    title: "barebone-electron-sveltekit-typescript",
    height: 600,
    width: 800,
  });

  const loadDev = () => {
    mainWindow.loadURL("http://localhost:3000").catch(() => {
      setTimeout(() => {
        loadDev();
      }, 200);
    });
  };

  // if isDev, load the dev server, if not load the index.html of the app.
  if (isDev) {
    loadDev();
    mainWindow.webContents.openDevTools();
  } else loadURL(mainWindow);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
