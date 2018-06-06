const { app, BrowserWindow, ipcMain } = require('electron');
const { getWindows, getOpacity, setOpacity } = require('win-opacity');

let win = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    frame: false,
    transparent: true
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
  const windows = getWindows()
    // Filter out windows that I don't want to appear in the list
    // These are system windows that cannot be changed anyway
    .filter(({ title }) => ![
      'Action center',
      'Cortana',
      'Mail', 
      'Microsoft Edge',
      'Microsoft Store', 
      'New notification', 
      'Settings', 
      'Start',
      'Window',
      'Windows Default Lock Screen',
      'Windows Shell Experience Host'
    ].includes(title))
    .sort((a, b) => {
      const aTitle = a.title.toLocaleLowerCase();
      const bTitle = b.title.toLocaleLowerCase();
      if (aTitle < bTitle) {
        return -1;
      }
      if (aTitle > bTitle) {
        return 1;
      }
      return 0;
    });
  win.webContents.send('receive-windows', windows.map(window => ({
    ...window,
    opacity: getOpacity(window) || 255
  })));
});

ipcMain.on('change-opacity', (_, handle, opacity) => {
  setOpacity(handle, opacity);
});