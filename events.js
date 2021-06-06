const events = require('events');
const eventEmitter = new events.EventEmitter();
//open
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    // const readStream = fs.createReadStream('./try.txt');

    // readStream.on('open', function () {
    //   console.log('The file is open');
    //   res.end();
    // });


    const myEventHandler = function () {
        console.log('I hear a scream!');
      }

      eventEmitter.on('mpdam', myEventHandler);
      eventEmitter.emit('mpdam');

      res.end();


}).listen(8081)