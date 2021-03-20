var ping = require('ping');

function Ping(hostIp) {
    let host = hostIp
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(` To też działa ${msg}`);
    });
}
Ping('10.52.131.200')