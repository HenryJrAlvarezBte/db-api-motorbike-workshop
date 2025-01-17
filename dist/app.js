"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const postgres_database_1 = require("./data/postgres/postgres-database");
const config_1 = require("./config");
const server_1 = require("./presentation/server");
const routes_1 = require("./presentation/routes");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const postgres = new postgres_database_1.PostgresDatabase({
            username: config_1.envs.USERNAME_DATABASE,
            password: config_1.envs.PASSWORD_DATABASE,
            host: config_1.envs.HOST_DATABASE,
            database: config_1.envs.DATABASE,
            port: Number(config_1.envs.PORT_DATABASE),
        });
        yield postgres.connect();
        const server = new server_1.Server({
            port: Number(config_1.envs.PORT),
            routes: routes_1.AppRoutes.routes,
        });
        yield server.start();
    });
}
main();
