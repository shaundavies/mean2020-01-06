const http = require("http")
const fs = require("fs")
const server = http.createServer(function(request, response) {
  console.log("client request URL: ", request.url)

  // this is how we do routing:copy
  if (request.url === "/") {
    fs.readFile("index.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" }) // send data about response
      response.write(contents) //  send response body
      response.end() // finished!
    })
  } else if (request.url === "/api") {
    response.writeHead(200, { "Content-Type": "application/json" }) // send data about response
    const contents = {
      results: "success",
      message: "you requested /api"
    }

    if (request.method === "POST") {
      // undefined b/c we did not send any data with our post
      // no form data or manually provided data
      console.log(request.body)

      contents.message = "you posted something"
    } else if (request.method === "PUT") {
      contents.message = "you put something"
    } else {
      contents.message = "you got something"
    }

    response.write(JSON.stringify(contents)) //  send response body
    response.end() // finished!
  } else if (request.url === "/styles.css") {
    fs.readFile("styles.css", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/css" }) // send data about response
      response.write(contents) //  send response body
      response.end() // finished!
    })
  }
  // request didn't match anything:
  else {
    response.writeHead(404)
    response.end("File not found!!!")
  }
})
// tell your server which port to run on
server.listen(7000)
// print to terminal window
console.log("Running in localhost at port 7000")
