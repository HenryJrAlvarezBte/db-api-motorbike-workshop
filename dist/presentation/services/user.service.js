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
exports.UserService = void 0;
const user_model_1 = require("../../data/postgres/models/user.model");
const domain_1 = require("../../domain");
class UserService {
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_model_1.User.findOne({
                where: {
                    status: user_model_1.Status.AVAILABLE,
                    id: id,
                },
            });
            if (!user) {
                throw domain_1.CustomError.notFound('User not found');
            }
            return user;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_model_1.User.find({
                    where: {
                        status: user_model_1.Status.AVAILABLE,
                    },
                });
                return users;
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Error fetching users');
            }
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new user_model_1.User();
            user.name = data.name;
            user.email = data.email;
            user.password = data.password;
            user.role = data.role;
            try {
                return yield user.save();
            }
            catch (error) {
                throw domain_1.CustomError.internalServer('Error creating user.');
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementar lógica de actualización
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // Implementar lógica de eliminación
        });
    }
}
exports.UserService = UserService;
