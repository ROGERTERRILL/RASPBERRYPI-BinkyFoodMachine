const { Gpio } = require('onoff');

const ledExample = () =>{
    // Handler when the DOM is fully loaded
    

    // set BCM 4 pin as 'output'
    const ledOut = new Gpio('4', 'out');

    // current LED state
    let isLedOn = false;

    // run a infinite interval
    setInterval(() => {
        ledOut.writeSync(isLedOn ? 0 : 1); // provide 1 or 0 
        isLedOn = !isLedOn; // toggle state
        console.log(isLedOn);
    },500);
  };

module.exports ={
    ledExample
 }