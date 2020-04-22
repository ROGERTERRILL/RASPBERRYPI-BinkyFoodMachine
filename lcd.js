const Lcd = require('lcd');
const moment = require('moment')
const lcd = new Lcd({ rs: 25, e: 24, data: [23, 17, 21, 22], cols: 16, rows: 2}) // These pin numbers must reflect the schematic.

lcd.on('ready', () => {
  setInterval(() => {
    lcd.setCursor(0, 0);
    lcd.print(moment().format('h:mm:ss a'), (err) => {
      if (err) {
        throw err;
      }
    });
  }, 1000);
});

process.on('SIGINT', () => {
  lcd.close();
  process.exit();
});