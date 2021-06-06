const http = require("http");
const date = require("./date.js");
const url = require("url");
const fs = require("fs");



const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.write(`Hello World3! ${date.getMessage()}`.toLocaleUpperCase() );

  //get Parameter from url----------
  // const q = url.parse(req.url, true).query;
  // const txt = q.year + " " + q.month+" "+q.class;
  // res.write(txt)


  //read file and write it in browser------------
  // fs.readFile("./dossier/demoFile.html", (err, data) => {
  //   if (err) {
  //     throw new Error(err.message);
  //   }
  //   res.write(data);
  //   res.end();
  // });

  //create new file and write html code---------------
//   fs.writeFile(
//     "./test.html",
//     `<html>
//   <body>
//   <h1>NODE JS2.36</h1>
// <p>MPDAM</p>
// </body>
// </html>`,
//     (err) => {if(err)throw err}
//   );

//create new file.txt and append data to it-------------------
// fs.appendFile('./try.txt','Hello content!',(err)=>{
//   if(err)throw new Error(err.message)
//   res.end();
// })

//open file and create it if it doesn't exist--------------------
// fs.open('./try2.txt','w',(err)=>{
//   if(err)throw new Error(err.message)
//   res.end();
// })

//delete file---------------
// fs.unlink('try.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });


//rename file--------------------------------
// fs.rename('try2.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });


});
server.listen(8081);
