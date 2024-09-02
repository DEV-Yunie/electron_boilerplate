const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.ts")
    }
  })
  if (process.env.ELECTRON_DEBUG) {
    win.loadURL("http://localhost:3000");
  } else {
    win.loadFile(path.join(__dirname, "../view/build/index.html"))
  }
  
}
app.whenReady().then(() => {
  createWindow();
})

app.on("window-all-closed", () => {
  app.quit();
})