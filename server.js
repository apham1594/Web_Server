// create an app that has two web servers: one that listens on port 7000 and one that listens on port 7500.
var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;
// * Each server will respond with a different inspirational quote of your choosing.
function handleRequest(request, response) {
    // when request comes in you generate a response with a string and what url it came through
    response.end('Yes! It works! ' + request.url);

}

var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);

    server1.listen(PORT1, function() {
        console.log('Working hard for something we don`t care about is called STRESSED...');
    });




server2.listen(PORT2, function() {
    console.log('Working hard for something we love is called PASSION!');
})