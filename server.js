const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://abbos97DB:SknWiXvzIhPpIOVt@cluster0.joyqir0.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(connectionString, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, client) => {
    if(err) console.log("ERROR on connection Mongodb");
    else {
        console.log("Monogdb connection secceed");
        module.exports = client;

        const app = require("./app")
        const server = http.createServer(app);
        let PORT = 3005;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port ${PORT}, http://localhost:${PORT}`)
        })
    }
})