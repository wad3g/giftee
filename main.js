var menubar = require('menubar');
var Menu = require('menu');
var globalShortcut = require('global-shortcut');
var path = require('path');

var mb = menubar({
  dir: __dirname,
  width:640,
  height: 640,
  frame: true,
  transparent: true,
  resize:true,
});

mb.on('ready', function ready () {
  console.log('app is ready');
  mb.tray.on('right-click', function(){
    mb.hideWindow();
    var contextMenu = Menu.buildFromTemplate([
      { label: 'Quit', click: function() { mb.app.quit() } }
    ]);
    this.popUpContextMenu(contextMenu);
  });
});
