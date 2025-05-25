const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>This is Rishi</h1><p>Welcome to my server!</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>About Page</h1><p>This is the about page.</p>');
    }
    else if (req.url == '/html') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else {
        // res.rishi(); 
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})