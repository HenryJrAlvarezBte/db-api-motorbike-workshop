"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const domain_1 = require("../../domain");
const create_user_dto_1 = require("../../domain/dtos/users/create-user.dto");
const update_user_dto_1 = require("../../domain/dtos/users/update-user.dto");
class UserController {
    constructor(userService) {
        this.userService = userService;
        this.handleError = (error, res) => {
            if (error instanceof domain_1.CustomError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            console.log(error);
            return res.status(500).json({ message: 'Something went very wrong! 💥' });
        };
        this.findAllUsers = (req, res) => {
            this.userService
                .findAll()
                .then((data) => res.status(200).json(data))
                .catch((error) => this.handleError(error, res));
        };
        this.findOneUser = (req, res) => {
            const { id } = req.params;
            this.userService
                .findOne(id)
                .then((data) => res.status(200).json(data))
                .catch((error) => this.handleError(error, res));
        };
        this.createUser = (req, res) => {
            const [error, createUserDto] = create_user_dto_1.CreateUserDTO.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            this.userService
                .create(createUserDto)
                .then((data) => res.status(200).json(data))
                .catch((error) => this.handleError(error, res));
        };
        this.updateUser = (req, res) => {
            const { id } = req.params;
            const [error, updateUserDto] = update_user_dto_1.UpdateUserDTO.create(req.body);
            if (error)
                return res.status(422).json({ message: error });
            this.userService
                .update(id, updateUserDto)
                .then((data) => res.status(200).json(data))
                .catch((error) => this.handleError(error, res));
        };
        this.deleteUser = (req, res) => {
            const { id } = req.params;
            this.userService.delete(id);
        };
    }
}
exports.UserController = UserController;
