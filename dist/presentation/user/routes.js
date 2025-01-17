"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const user_service_1 = require("../services/user.service");
class UserRouter {
    static get routes() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const controller = new controller_1.UserController(userService);
        router.get('/', controller.findAllUsers);
        router.get('/:id', controller.findOneUser);
        router.post('/', controller.createUser);
        router.patch('/:id', controller.updateUser);
        router.delete('/:id', controller.deleteUser);
        return router;
    }
}
exports.UserRouter = UserRouter;
