const http = require('http');
const { listenerCount } = require('process');

http.createServer((req, res) => {

    res.writeHead( 200, {'Content-Type':'application/json'});

    let salida = {
        nombre: 'Alejandro',
        edad : 99999999,
        url: req.url
    }
    res.write( JSON.stringify(salida))
    res.end()
})

.listen(3000);

console.log('Escuchando el puerto 3030');