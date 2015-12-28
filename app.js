var http = require("http");
var data = require("./data");

var proxy = http.createServer(function (req, res) {

    res.writeHead(200, {"content-type": "text/json"});
    oddIndex(res);

});

function oddIndex(res) {
    var oddIndex = data.filter(function(item) {
        return (item.index % 2 !== 0);
    });

    res.end(JSON.stringify(oddIndex, null, 2));
}

proxy.listen(3000);
console.log("Server running on localhost 3000");