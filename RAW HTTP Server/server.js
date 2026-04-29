const http = require('http');
const { send } = require('process');

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

const sendJson = (res, statusCode, data) => {
    const body = JSON.stringify(data);
    res.writeHead(statusCode, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
    });
    res.end(body);
}

const readRequestBody = (req) => {
    return new Promise((resolve, reject) => {
        let raw = '';
        req.setEncoding('utf8');
        req.on("data",  (chunk) => { raw += chunk; });
        req.on("end",   ()      => {
            try { resolve(JSON.parse(raw)); }
            catch { reject(new Error("Invalid JSON")); }
        });
        req.on("error", reject);
    });
}

async function handleRequest(req, res) {
    const { method, url } = req;
    const parts = url.split('/').filter(Boolean);

    if (method === "GET" && url === "/users") {
        return sendJson(res, 200, users);
    }

    if (method === "POST" && url === "/users") {
        try {
            const body = await readRequestBody(req);
            if (!body.name || !body.email) {
                return sendJson(res, 400, { error: "Missing 'name' or 'email'" });
            }
            const user = { id: nextID++, name: body.name, email: body.email };
            users.push(user);
            return sendJson(res, 201, user);
        } catch (error) {
            return sendJson(res, 400, { error: error.message });
        }
    }

    if (method === "GET" && parts.length === 2 && parts[0] === "users") {
        const id = parseInt(parts[1], 10);
        const user = users.find(u => u.id === id);
        if (!user) return sendJson(res, 404, { error: `User ${id} not found` });
        return sendJson(res, 200, user);
    }

    sendJson(res, 404, { error: "Not found" });
}

const PORT = process.env.PORT || 3000;
http.createServer(handleRequest).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



