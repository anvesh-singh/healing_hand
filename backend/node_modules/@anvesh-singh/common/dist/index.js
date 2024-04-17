"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorsigninInput = exports.DoctorsignupInput = exports.PatientsigninInput = exports.PatientsignupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.PatientsignupInput = zod_1.default.object({
    FirstName: zod_1.default.string(),
    LastName: zod_1.default.string(),
    Email: zod_1.default.string().email(),
    Phone: zod_1.default.string(),
    Password: zod_1.default.string().min(6),
    address: zod_1.default.object({
        street: zod_1.default.string(),
        city: zod_1.default.string(),
        state: zod_1.default.string(),
        zip: zod_1.default.string()
    }).optional(),
});
exports.PatientsigninInput = zod_1.default.object({
    Email: zod_1.default.string().email(),
    Password: zod_1.default.string().min(6),
});
exports.DoctorsignupInput = zod_1.default.object({
    FirstName: zod_1.default.string(),
    LastName: zod_1.default.string(),
    Email: zod_1.default.string().email(),
    Phone: zod_1.default.string(),
    Password: zod_1.default.string().min(6),
    address: zod_1.default.object({
        street: zod_1.default.string(),
        city: zod_1.default.string(),
        state: zod_1.default.string(),
        zip: zod_1.default.string()
    }).optional(),
});
exports.DoctorsigninInput = zod_1.default.object({
    Email: zod_1.default.string().email(),
    Password: zod_1.default.string().min(6),
});
