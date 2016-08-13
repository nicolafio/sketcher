const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', () => {

    win = new BrowserWindow({ width: 800, height: 600 });
    win.loadURL(`file://${__dirname}/main.htm`);
    win.on('closed', () => { win = null; });

});

app.on('window-all-closed', () => { app.quit(); });