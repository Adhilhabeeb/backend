const http = require('http');
const port = 7000;
let fs=require("node:fs")
 
let path=require("node:path")
// Create the server
const server = http.createServer((req, res) => {
  
const filePath = path.join(__dirname, 'index.html');
fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle file reading errors (e.g., file not found)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404: File Not Found');
      return;
    }
console.log(data.toString(),"is te data")
    // Set the content type to 'text/html'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    // Send the file content in the response body
    res.end(data);
  }) 
});

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
