var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get("/:text", function(req, res) {
    var dt = new Date(req.params.text)
    if (dt.toDateString() == "Invalid Date"){
            res.end(JSON.stringify({ "unix": null, "natural": null }));
    } else {
        res.end(JSON.stringify({ "unix": dt.getTime()/1000, "natural": dt.toDateString() }));
    }
    
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})