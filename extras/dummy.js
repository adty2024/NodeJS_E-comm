const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action = "/message" method = "POST"><input type = "text" name = "message"></input><button type = "submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

});

server.listen(3000);