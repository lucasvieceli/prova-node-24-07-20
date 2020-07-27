import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as expressJsonCompress from "express-json-compress";
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerConfig from './config/swagger.json';
import {routers} from "./routers";

const dotenv = require('dotenv');
dotenv.config();


const app: express.Application = express();
app.use(bodyParser.json({limit: '40mb'}));
app.use(bodyParser.urlencoded({limit: '40mb', extended: true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(expressJsonCompress);

// cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Expose-Headers', 'Content-Length, X-CSRF-Token');
    next();
}); // cors


app.use('/', routers);

export default app;
