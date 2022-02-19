let http = require('http');
let users = [
  { id: 1, name: '昌平66' },
  { id: 2, name: '海淀66' },
]

let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader("Content-Type", "application/json;charset=utf-8"); 

  if (req.url === '/api/users') {
    res.end(JSON.stringify(users))
  }else {
    res.end('not found')
  }
})

server.listen(6006, () => {
  console.log(`后端api接口服务已经启动在6006端口了`)
})
