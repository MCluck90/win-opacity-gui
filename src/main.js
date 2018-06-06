const { app, BrowserWindow, ipcMain } = require('electron');
const { getWindows } = require('win-opacity');

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html');

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app
  .on('ready', createWindow)
  .on('window-all-closed', () => {
    // Leave it open on macOS unless the user explicitly exits
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })
  .on('activate', () => {
    // Recreate the window when the dock icon is clicked and no other windows are open
    if (win === null) {
      createWindow();
    }
  });

ipcMain.on('request-windows', () => {
  win.webContents.send('receive-windows', getWindows());
});