"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
process.loadEnvFile();
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asString(),
    PASSWORD_DATABASE: (0, env_var_1.get)('PASSWORD_DATABASE').required().asString(),
    USERNAME_DATABASE: (0, env_var_1.get)('USERNAME_DATABASE').required().asString(),
    DATABASE: (0, env_var_1.get)('DATABASE').required().asString(),
    PORT_DATABASE: (0, env_var_1.get)('PORT_DATABASE').required().asString(),
    HOST_DATABASE: (0, env_var_1.get)('HOST_DATABASE').required().asString(),
};
