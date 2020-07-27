import * as debug from 'debug';
import * as http from 'http';
import "reflect-metadata";
import Server from './server';
import {sequelize} from "./sequelize";
import {ON_RESTART_CONSTANTS, PubSub} from "./services/subscribes";

const normalizePort = (val: number|string): number|string|boolean => {
    const port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) { return val; } else if (port >= 0) { return port; } else { return false; }
}
const onError = (error: NodeJS.ErrnoException): void  => {
    if (error.syscall !== 'listen') { throw error; }
    const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}
const onListening = () => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
}

debug('ts-express:server');
const port = normalizePort(3000);
Server.set('port', port);

const server = http.createServer(Server);
server.on('error', onError);
server.on('listening', onListening);

sequelize.authenticate().then(async () => {
    await sequelize.query("SET time_zone='-03:00';");
    await server.listen(port);
    PubSub.publish(ON_RESTART_CONSTANTS, {});
    console.log('iniciou ' + port);
})

export default server;
