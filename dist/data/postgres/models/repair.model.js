"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repair = exports.RepairStatus = void 0;
const typeorm_1 = require("typeorm");
var RepairStatus;
(function (RepairStatus) {
    RepairStatus["PENDING"] = "PENDING";
    RepairStatus["COMPLETED"] = "COMPLETED";
    RepairStatus["CANCELLED"] = "CANCELLED";
})(RepairStatus || (exports.RepairStatus = RepairStatus = {}));
let Repair = class Repair extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.id = '';
        this.userId = '';
    }
};
exports.Repair = Repair;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Repair.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        nullable: false,
    }),
    __metadata("design:type", Date)
], Repair.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: RepairStatus,
        default: RepairStatus.PENDING,
    }),
    __metadata("design:type", String)
], Repair.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        nullable: false,
    }),
    __metadata("design:type", String)
], Repair.prototype, "userId", void 0);
exports.Repair = Repair = __decorate([
    (0, typeorm_1.Entity)()
], Repair);
