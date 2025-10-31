/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const swagger_1 = __webpack_require__(7);
const auth_module_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(25);
const ormconfig_1 = __webpack_require__(26);
const config_1 = __webpack_require__(24);
const user_module_1 = __webpack_require__(37);
const services = [app_service_1.AppService, config_1.ConfigService];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forRoot((0, ormconfig_1.getOrmConfig)()),
            swagger_1.SwaggerModule,
            auth_module_1.AuthModule,
            AppModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: services,
        exports: services,
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
let AppService = class AppService {
    getData() {
        return { message: "Hello API" };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const auth_controller_1 = __webpack_require__(9);
const auth_service_1 = __webpack_require__(10);
const jwt_1 = __webpack_require__(11);
const config_1 = __webpack_require__(24);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get("JWT_SECRET"),
                    signOptions: { expiresIn: "1d" },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(7);
const auth_service_1 = __webpack_require__(10);
const auth_dto_1 = __webpack_require__(22);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(params, body) {
        const { role } = params;
        return await this.authService.login(role, body);
    }
    async forgot(body) {
        return await this.authService.forgot(body);
    }
    async verifyOtp(body) {
        return await this.authService.verifyOtp(body);
    }
    async resetPassword(body) {
        return await this.authService.resetPassword(body);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Post)("/:role/login"),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof auth_dto_1.LoginParamsDro !== "undefined" && auth_dto_1.LoginParamsDro) === "function" ? _b : Object, typeof (_c = typeof auth_dto_1.LoginDto !== "undefined" && auth_dto_1.LoginDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)("/forgot"),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof auth_dto_1.ForgotDto !== "undefined" && auth_dto_1.ForgotDto) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "forgot", null);
tslib_1.__decorate([
    (0, common_1.Post)("/verify-otp"),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof auth_dto_1.VerifyOtpDto !== "undefined" && auth_dto_1.VerifyOtpDto) === "function" ? _e : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "verifyOtp", null);
tslib_1.__decorate([
    (0, common_1.Post)("/reset-password"),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof auth_dto_1.ResetPasswordDto !== "undefined" && auth_dto_1.ResetPasswordDto) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Authentication"),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(11);
const bcrypt = __webpack_require__(12);
const crypto = __webpack_require__(13);
const shared_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
const exceptions_1 = __webpack_require__(21);
let AuthService = class AuthService {
    constructor(dataSource, jwtService) {
        this.dataSource = dataSource;
        this.jwtService = jwtService;
        this.userRepository = this.dataSource.getRepository(user_entity_1.User);
    }
    async login(role, body) {
        const user = await this.userRepository.findOne({
            where: { email: body.email, role, status: shared_1.IUserStatus.ACTIVE },
            select: ["id", "password", "role"],
        });
        if (!user)
            throw new exceptions_1.Forbidden("Invalid credentials");
        // use bcrypt to compare passwords in a real application
        const comparison = await bcrypt.compare(body.password, user.password);
        if (!comparison)
            throw new exceptions_1.Forbidden("Invalid credentials");
        const token = await this.jwtService.signAsync({
            uid: user.id,
            uuid: user.userId,
            iam: user.role,
        });
        return { token, role: user.role };
    }
    async forgot(body) {
        const user = await this.userRepository.findOne({
            where: { email: body.email, status: shared_1.IUserStatus.ACTIVE },
            select: ["id", "resetRequest"],
        });
        if (!user)
            throw new exceptions_1.NotFound("User not found");
        // check if requested 5 minutes ago
        if (user.resetRequest &&
            new Date().getTime() - new Date(user.resetRequest).getTime() <
                5 * 60 * 1000) {
            throw new exceptions_1.Forbidden("Password reset already requested. Please wait.");
        }
        // generate reset token
        const expiryMinutes = parseInt(process.env.OTP_EXPIRY ?? "") || 15;
        const resetOtp = crypto
            .randomInt(0, 1000000)
            .toString()
            .padStart(6, "0")
            .toUpperCase();
        const resetOtpExpiry = new Date(Date.now() + expiryMinutes * 60 * 1000);
        user.resetOtp = resetOtp;
        user.resetOtpExpiry = resetOtpExpiry;
        user.resetRequest = new Date();
        await this.userRepository.save(user);
        // TODO: Send Email Here
        return { message: "Password reset OTP sent to email" };
    }
    async verifyOtp(body) {
        const user = await this.userRepository.findOne({
            where: { email: body.email, resetOtp: body.otp },
            select: ["id", "resetOtpExpiry"],
        });
        if (!user)
            throw new exceptions_1.NotFound("Invalid OTP");
        // check if otp is expired
        if (user.resetOtpExpiry && new Date(user.resetOtpExpiry) < new Date()) {
            throw new exceptions_1.Forbidden("OTP has expired");
        }
        return { message: "OTP verified successfully" };
    }
    async resetPassword(body) {
        const user = await this.userRepository.findOne({
            where: { email: body.email, resetOtp: body.otp },
            select: ["id", "password", "resetOtpExpiry", "resetOtp"],
        });
        if (!user)
            throw new exceptions_1.NotFound("Invalid OTP");
        // check if otp is expired
        if (user.resetOtpExpiry && new Date(user.resetOtpExpiry) < new Date()) {
            throw new exceptions_1.Forbidden("OTP has expired");
        }
        // hash the new password
        const hashedPassword = await bcrypt.hash(body.password, 10);
        user.password = hashedPassword;
        // clear reset otp fields
        user.resetOtp = null;
        user.resetOtpExpiry = null;
        user.resetRequest = null;
        await this.userRepository.save(user);
        return { message: "Password reset successfully" };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("shared");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(3);
const shared_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(15);
const sector_entity_1 = __webpack_require__(17);
const adminRiderStats_view_1 = __webpack_require__(20);
const payment_entity_1 = __webpack_require__(19);
const house_entity_1 = __webpack_require__(18);
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "phone", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "cnic", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "address", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", select: false }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: shared_1.IUserRole,
        enumName: "user_role_enum",
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof shared_1.IUserRole !== "undefined" && shared_1.IUserRole) === "function" ? _a : Object)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: shared_1.IUserStatus,
        enumName: "user_status_enum",
    }),
    tslib_1.__metadata("design:type", typeof (_b = typeof shared_1.IUserStatus !== "undefined" && shared_1.IUserStatus) === "function" ? _b : Object)
], User.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", select: false }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "resetOtp", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "date", select: false }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "resetOtpExpiry", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "date", select: false }),
    tslib_1.__metadata("design:type", Object)
], User.prototype, "resetRequest", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], User.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], User.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => sector_entity_1.Sector, (sector) => sector.rider),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "sectors", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => adminRiderStats_view_1.AdminRiderStatsView, (stats) => stats.rider),
    tslib_1.__metadata("design:type", typeof (_g = typeof adminRiderStats_view_1.AdminRiderStatsView !== "undefined" && adminRiderStats_view_1.AdminRiderStatsView) === "function" ? _g : Object)
], User.prototype, "adminRiderStats", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (payment) => payment.rider),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "riderPayments", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (payment) => payment.owner),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "ownerPayments", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => house_entity_1.House, (house) => house.rider),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "riderHouses", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => house_entity_1.House, (house) => house.owner),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "ownerHouses", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)("user")
], User);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sector = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
const house_entity_1 = __webpack_require__(18);
let Sector = class Sector {
};
exports.Sector = Sector;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Sector.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    tslib_1.__metadata("design:type", String)
], Sector.prototype, "sectorId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], Sector.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Sector.prototype, "fees", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    tslib_1.__metadata("design:type", String)
], Sector.prototype, "description", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Sector.prototype, "riderId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (rider) => rider.sectors),
    (0, typeorm_1.JoinColumn)({ name: "riderId" }),
    tslib_1.__metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Sector.prototype, "rider", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Sector.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Sector.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => house_entity_1.House, (house) => house.sector),
    tslib_1.__metadata("design:type", Array)
], Sector.prototype, "houses", void 0);
exports.Sector = Sector = tslib_1.__decorate([
    (0, typeorm_1.Entity)("sector")
], Sector);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.House = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
const sector_entity_1 = __webpack_require__(17);
const payment_entity_1 = __webpack_require__(19);
let House = class House {
};
exports.House = House;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "houseId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "fees", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "house", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "street", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "address", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    tslib_1.__metadata("design:type", String)
], House.prototype, "plotSize", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "riderId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "ownerId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], House.prototype, "sectorId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], House.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], House.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (rider) => rider.riderHouses),
    (0, typeorm_1.JoinColumn)({ name: "riderId" }),
    tslib_1.__metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], House.prototype, "rider", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (owner) => owner.ownerHouses),
    (0, typeorm_1.JoinColumn)({ name: "ownerId" }),
    tslib_1.__metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], House.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => sector_entity_1.Sector, (sector) => sector.houses),
    (0, typeorm_1.JoinColumn)({ name: "sectorId" }),
    tslib_1.__metadata("design:type", typeof (_e = typeof sector_entity_1.Sector !== "undefined" && sector_entity_1.Sector) === "function" ? _e : Object)
], House.prototype, "sector", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => payment_entity_1.Payment, (payment) => payment.house),
    tslib_1.__metadata("design:type", Array)
], House.prototype, "payments", void 0);
exports.House = House = tslib_1.__decorate([
    (0, typeorm_1.Entity)("house")
], House);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Payment = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
const house_entity_1 = __webpack_require__(18);
let Payment = class Payment {
};
exports.Payment = Payment;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], Payment.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "varchar", unique: true }),
    tslib_1.__metadata("design:type", String)
], Payment.prototype, "paymentId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    tslib_1.__metadata("design:type", Number)
], Payment.prototype, "amount", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    tslib_1.__metadata("design:type", String)
], Payment.prototype, "paymentDate", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "time" }),
    tslib_1.__metadata("design:type", String)
], Payment.prototype, "paymentTime", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    tslib_1.__metadata("design:type", String)
], Payment.prototype, "reason", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Payment.prototype, "riderId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Payment.prototype, "ownerId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    tslib_1.__metadata("design:type", Number)
], Payment.prototype, "houseId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Payment.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Payment.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (rider) => rider.riderPayments),
    (0, typeorm_1.JoinColumn)({ name: "riderId" }),
    tslib_1.__metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], Payment.prototype, "rider", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (owner) => owner.ownerPayments),
    (0, typeorm_1.JoinColumn)({ name: "ownerId" }),
    tslib_1.__metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], Payment.prototype, "owner", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => house_entity_1.House, (house) => house.payments),
    (0, typeorm_1.JoinColumn)({ name: "riderId" }),
    tslib_1.__metadata("design:type", typeof (_e = typeof house_entity_1.House !== "undefined" && house_entity_1.House) === "function" ? _e : Object)
], Payment.prototype, "house", void 0);
exports.Payment = Payment = tslib_1.__decorate([
    (0, typeorm_1.Entity)("payment")
], Payment);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminRiderStatsView = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
let AdminRiderStatsView = class AdminRiderStatsView {
};
exports.AdminRiderStatsView = AdminRiderStatsView;
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", String)
], AdminRiderStatsView.prototype, "riderId", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.adminRiderStats),
    (0, typeorm_1.JoinColumn)({ name: "riderId" }),
    tslib_1.__metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], AdminRiderStatsView.prototype, "rider", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Number)
], AdminRiderStatsView.prototype, "assignedHouses", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ViewColumn)(),
    tslib_1.__metadata("design:type", Number)
], AdminRiderStatsView.prototype, "collectedAmount", void 0);
exports.AdminRiderStatsView = AdminRiderStatsView = tslib_1.__decorate([
    (0, typeorm_1.ViewEntity)({
        name: "admin_riders_stats",
        materialized: true,
    })
], AdminRiderStatsView);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unauthorized = exports.BadRequest = exports.Forbidden = exports.NotFound = exports.BaseHttpException = void 0;
const common_1 = __webpack_require__(4);
class BaseHttpException extends common_1.HttpException {
    constructor(message, status, data) {
        super({ message, data }, status);
    }
}
exports.BaseHttpException = BaseHttpException;
class NotFound extends BaseHttpException {
    constructor(message, data) {
        super(message, common_1.HttpStatus.NOT_FOUND, data);
    }
}
exports.NotFound = NotFound;
class Forbidden extends BaseHttpException {
    constructor(message, data) {
        super(message, common_1.HttpStatus.FORBIDDEN, data);
    }
}
exports.Forbidden = Forbidden;
class BadRequest extends BaseHttpException {
    constructor(message, data) {
        super(message, common_1.HttpStatus.BAD_REQUEST, data);
    }
}
exports.BadRequest = BadRequest;
class Unauthorized extends BaseHttpException {
    constructor(message, data) {
        super(message, common_1.HttpStatus.UNAUTHORIZED, data);
    }
}
exports.Unauthorized = Unauthorized;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordDto = exports.VerifyOtpDto = exports.ForgotDto = exports.LoginDto = exports.LoginParamsDro = void 0;
const tslib_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(23);
const shared_1 = __webpack_require__(14);
class LoginParamsDro {
}
exports.LoginParamsDro = LoginParamsDro;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEnum)(shared_1.IUserRole),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof shared_1.IUserRole !== "undefined" && shared_1.IUserRole) === "function" ? _a : Object)
], LoginParamsDro.prototype, "role", void 0);
class LoginDto {
}
exports.LoginDto = LoginDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class ForgotDto {
}
exports.ForgotDto = ForgotDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ForgotDto.prototype, "email", void 0);
class VerifyOtpDto extends ForgotDto {
}
exports.VerifyOtpDto = VerifyOtpDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MinLength)(6),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], VerifyOtpDto.prototype, "otp", void 0);
class ResetPasswordDto extends VerifyOtpDto {
}
exports.ResetPasswordDto = ResetPasswordDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ResetPasswordDto.prototype, "password", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ResetPasswordDto.prototype, "confirmPassword", void 0);


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrmConfig = void 0;
const entities_1 = __webpack_require__(27);
const _1730419200000_populate_user_id_1 = __webpack_require__(28);
const _1761569196818_create_user_1 = __webpack_require__(29);
const _1761647706957_add_otp_fields_1 = __webpack_require__(30);
const _1761895013315_create_sector_1 = __webpack_require__(31);
const _1761895759479_store_sectors_1 = __webpack_require__(32);
const _1761895956017_create_house_1 = __webpack_require__(33);
const _1761896669705_auto_generate_house_fields_1 = __webpack_require__(34);
const _1761898314920_create_payment_1 = __webpack_require__(35);
const house_entity_1 = __webpack_require__(18);
const payment_entity_1 = __webpack_require__(19);
const _1761899382721_create_admin_riders_stats_1 = __webpack_require__(36);
const entities = [entities_1.User, entities_1.Sector, entities_1.AdminRiderStatsView, house_entity_1.House, payment_entity_1.Payment];
const migrations = [
    _1761569196818_create_user_1.CreateUser1761569196818,
    _1761647706957_add_otp_fields_1.AddOtpFields1761647706957,
    _1730419200000_populate_user_id_1.PopulateUserId1730419200000,
    _1761895013315_create_sector_1.CreateSector1761895013315,
    _1761895759479_store_sectors_1.StoreSectors1761895759479,
    _1761895956017_create_house_1.CreateHouse1761895956017,
    _1761896669705_auto_generate_house_fields_1.AutoGenerateHouseFields1761896669705,
    _1761898314920_create_payment_1.CreatePayment1761898314920,
    _1761899382721_create_admin_riders_stats_1.CreateAdminRidersStats1761899382721,
];
const getOrmConfig = () => {
    return {
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT ?? "5432", 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        migrationsTransactionMode: "each",
        schema: "public",
        entities,
        migrationsTableName: "migrations",
        migrationsRun: true,
        synchronize: false,
        migrations,
        logging: process.env.NODE_ENV === "development" ? "all" : ["error"],
        logger: "formatted-console",
    };
};
exports.getOrmConfig = getOrmConfig;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopulateUserId1730419200000 = void 0;
class PopulateUserId1730419200000 {
    async up(queryRunner) {
        // Populate existing records with auto-generated userId values
        await queryRunner.query(`
      UPDATE "user" 
      SET "userId" = 'U-' || LPAD(id::text, 3, '0')
      WHERE "userId" IS NULL OR "userId" = '';
    `);
        // Add unique constraint and make userId NOT NULL
        await queryRunner.query(`
      ALTER TABLE "user" 
      ALTER COLUMN "userId" SET NOT NULL;
    `);
        await queryRunner.query(`
      ALTER TABLE "user" 
      ADD CONSTRAINT "UQ_user_userId" UNIQUE ("userId");
    `);
        // Create a function to auto-generate userId for new inserts
        await queryRunner.query(`
      CREATE OR REPLACE FUNCTION generate_user_id()
      RETURNS TRIGGER AS $$
      BEGIN
        -- Update the userId after insert when we have the ID
        UPDATE "user" 
        SET "userId" = 'U-' || LPAD(NEW.id::text, 3, '0')
        WHERE id = NEW.id AND ("userId" IS NULL OR "userId" = '');
        
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);
        // Create trigger to auto-generate userId after insert
        await queryRunner.query(`
      CREATE TRIGGER user_id_trigger
      AFTER INSERT ON "user"
      FOR EACH ROW
      EXECUTE FUNCTION generate_user_id();
    `);
    }
    async down(queryRunner) {
        // Remove trigger and function
        await queryRunner.query(`DROP TRIGGER IF EXISTS user_id_trigger ON "user";`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS generate_user_id();`);
        // Remove unique constraint
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT IF EXISTS "UQ_user_userId";`);
        // Make userId nullable again
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "userId" DROP NOT NULL;`);
        // Clear userId values
        await queryRunner.query(`UPDATE "user" SET "userId" = NULL;`);
    }
}
exports.PopulateUserId1730419200000 = PopulateUserId1730419200000;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUser1761569196818 = void 0;
class CreateUser1761569196818 {
    async up(queryRunner) {
        // user role enum
        await queryRunner.query(`
      CREATE TYPE "user_role_enum"
      AS ENUM(
        'Admin',
        'Rider',
        'Owner'
      );
    `);
        // order status enum
        await queryRunner.query(`
      CREATE TYPE "user_status_enum"
      AS ENUM(
        'Active',
        'Inactive'
      );
    `);
        // Create user table
        await queryRunner.query(`
      CREATE TABLE "user" (
        id SERIAL PRIMARY KEY,
        "userId" varchar,
        
        "name" varchar,
        "phone" varchar,
        "email" varchar,
        "cnic" varchar,
        "address" varchar,
        
        "password" varchar,
        "role" user_role_enum,
        "status" user_status_enum,
        
        "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
      );
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE user;`);
        await queryRunner.query(`DROP TYPE "user_role_enum";`);
        await queryRunner.query(`DROP TYPE "user_status_enum";`);
    }
}
exports.CreateUser1761569196818 = CreateUser1761569196818;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AddOtpFields1761647706957 = void 0;
class AddOtpFields1761647706957 {
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "user"
            ADD COLUMN "resetOtp" VARCHAR,
            ADD COLUMN "resetRequest" TIMESTAMP,
            ADD COLUMN "resetOtpExpiry" TIMESTAMP;    
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "user"
            DROP COLUMN "resetOtp",
            DROP COLUMN "resetRequest",
            DROP COLUMN "resetOtpExpiry";    
        `);
    }
}
exports.AddOtpFields1761647706957 = AddOtpFields1761647706957;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSector1761895013315 = void 0;
class CreateSector1761895013315 {
    async up(queryRunner) {
        // Create sector table
        await queryRunner.query(`
            CREATE TABLE sector (
                id SERIAL PRIMARY KEY,
                "sectorId" varchar,
                
                "name" varchar,
                "fees" int,
                "description" text,
                
                "riderId" int,
                
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);
        // create foreign key constraint with user table
        await queryRunner.query(`
            ALTER TABLE sector
            ADD CONSTRAINT "FK_sector_rider"
            FOREIGN KEY ("riderId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
        // Create a function to auto-generate sectorId for new inserts
        await queryRunner.query(`
      CREATE OR REPLACE FUNCTION generate_sector_id()
      RETURNS TRIGGER AS $$
      BEGIN
        -- Update the sectorId after insert when we have the ID
        UPDATE "sector" 
        SET "sectorId" = 'S-' || LPAD(NEW.id::text, 3, '0')
        WHERE id = NEW.id AND ("sectorId" IS NULL OR "sectorId" = '');
        
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);
        // Create trigger to auto-generate sectorId after insert
        await queryRunner.query(`
      CREATE TRIGGER sector_id_trigger
      AFTER INSERT ON "sector"
      FOR EACH ROW
      EXECUTE FUNCTION generate_sector_id();
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE sector;`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS generate_sector_id();`);
    }
}
exports.CreateSector1761895013315 = CreateSector1761895013315;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoreSectors1761895759479 = void 0;
const shared_1 = __webpack_require__(14);
class StoreSectors1761895759479 {
    async up(queryRunner) {
        const sectors = [
            { name: "D-12/1", fees: shared_1.BASE_SECTOR_FEE },
            { name: "D-12/2", fees: shared_1.BASE_SECTOR_FEE },
            { name: "D-12/3", fees: shared_1.BASE_SECTOR_FEE },
            { name: "D-12/4", fees: shared_1.BASE_SECTOR_FEE },
        ];
        await queryRunner.query(`
            INSERT INTO "sector" (name, fees)
            VALUES ${sectors.map((s) => `('${s.name}', ${s.fees})`).join(", ")}
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM sector`);
    }
}
exports.StoreSectors1761895759479 = StoreSectors1761895759479;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateHouse1761895956017 = void 0;
class CreateHouse1761895956017 {
    async up(queryRunner) {
        // Create house table
        await queryRunner.query(`
            CREATE TABLE house (
                id SERIAL PRIMARY KEY,
                "houseId" varchar,
                
                "house" varchar NOT NULL,
                "street" varchar NOT NULL,
                "address" varchar,
                "plotSize" varchar,
                "notes" text,
                "fees" int NOT NULL,
                
                "riderId" int,
                "ownerId" int,
                "sectorId" int NOT NULL,
                
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);
        // create foreign keys
        await queryRunner.query(`
            ALTER TABLE house
            ADD CONSTRAINT "FK_house_rider"
            FOREIGN KEY ("riderId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
        await queryRunner.query(`
            ALTER TABLE house
            ADD CONSTRAINT "FK_house_owner"
            FOREIGN KEY ("ownerId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
        await queryRunner.query(`
            ALTER TABLE house
            ADD CONSTRAINT "FK_house_sector"
            FOREIGN KEY ("sectorId") REFERENCES "sector"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE house;`);
    }
}
exports.CreateHouse1761895956017 = CreateHouse1761895956017;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoGenerateHouseFields1761896669705 = void 0;
class AutoGenerateHouseFields1761896669705 {
    async up(queryRunner) {
        // auto generated address field (house + street + sector.name)
        await queryRunner.query(`
          CREATE OR REPLACE FUNCTION generate_full_address()
          RETURNS TRIGGER AS $$
          DECLARE
            sector_name varchar;
          BEGIN
            SELECT name INTO sector_name FROM sector WHERE id = NEW."sectorId";
            NEW.address = NEW.house || ', ' || NEW.street || ', ' || sector_name;
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;
        `);
        // trigger on update of house
        await queryRunner.query(`
            CREATE TRIGGER full_address_trigger
            BEFORE INSERT OR UPDATE ON "house"
            FOR EACH ROW
            EXECUTE FUNCTION generate_full_address();
            `);
        // auto generated id sector.name-street-house eg. D-12/3-12-177
        await queryRunner.query(`
          CREATE OR REPLACE FUNCTION generate_house_id()
          RETURNS TRIGGER AS $$
          DECLARE
            sector_name varchar;
          BEGIN
            SELECT name INTO sector_name FROM sector WHERE id = NEW."sectorId";
            NEW."houseId" = sector_name || '-' || NEW.street || '-' || NEW.house;
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;
        `);
        await queryRunner.query(`
          CREATE TRIGGER house_id_trigger
          BEFORE INSERT ON "house"
          FOR EACH ROW
          EXECUTE FUNCTION generate_house_id();
        `);
        // function to update house fields when sector name changes
        await queryRunner.query(`
          CREATE OR REPLACE FUNCTION update_houses_on_sector_change()
          RETURNS TRIGGER AS $$
          BEGIN
            -- Update address and houseId for all houses in the updated sector
            UPDATE "house" 
            SET 
              address = house || ', ' || street || ', ' || NEW.name,
              "houseId" = NEW.name || '-' || street || '-' || house
            WHERE "sectorId" = NEW.id;
            
            RETURN NEW;
          END;
          $$ LANGUAGE plpgsql;
        `);
        // trigger on sector name update
        await queryRunner.query(`
          CREATE TRIGGER sector_update_trigger
          AFTER UPDATE OF name ON "sector"
          FOR EACH ROW
          WHEN (OLD.name IS DISTINCT FROM NEW.name)
          EXECUTE FUNCTION update_houses_on_sector_change();
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TRIGGER IF EXISTS sector_update_trigger ON "sector";`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS generate_full_address();`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS generate_house_id();`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS update_houses_on_sector_change();`);
    }
}
exports.AutoGenerateHouseFields1761896669705 = AutoGenerateHouseFields1761896669705;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePayment1761898314920 = void 0;
class CreatePayment1761898314920 {
    async up(queryRunner) {
        // payment status enum
        await queryRunner.query(`
      CREATE TYPE "payment_status_enum"
      AS ENUM(
        'Pending',
        'Completed'
      );
    `);
        // payment method enum
        await queryRunner.query(`
      CREATE TYPE "payment_method_enum"
      AS ENUM(
        'Cash',
        'Card',
        'Online'
      );
    `);
        // Create payment table
        await queryRunner.query(`
            CREATE TABLE payment (
                id SERIAL PRIMARY KEY,
                "paymentId" varchar,
                
                "amount" float NOT NULL,
                "paymentDate" date,
                "paymentTime" time,
                "reason" text,
                "status" payment_status_enum DEFAULT 'Pending',
                "paymentMethod" payment_method_enum,
                
                "riderId" int,
                "houseId" int,
                "ownerId" int,
                
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now()
            );
        `);
        // relations
        await queryRunner.query(`
            ALTER TABLE payment
            ADD CONSTRAINT "FK_payment_house"
            FOREIGN KEY ("houseId") REFERENCES "house"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
        await queryRunner.query(`
            ALTER TABLE payment
            ADD CONSTRAINT "FK_payment_rider"
            FOREIGN KEY ("riderId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
        await queryRunner.query(`
            ALTER TABLE payment
            ADD CONSTRAINT "FK_payment_owner"
            FOREIGN KEY ("ownerId") REFERENCES "user"(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
        // Create a function to auto-generate paymentId for new inserts
        await queryRunner.query(`
      CREATE OR REPLACE FUNCTION generate_payment_id()
      RETURNS TRIGGER AS $$
      BEGIN
        -- Update the paymentId after insert when we have the ID
        UPDATE "payment" 
        SET "paymentId" = 'P-' || LPAD(NEW.id::text, 3, '0')
        WHERE id = NEW.id AND ("paymentId" IS NULL OR "paymentId" = '');
        
        RETURN NEW;
      END;
      $$ LANGUAGE plpgsql;
    `);
        // Create trigger to auto-generate paymentId after insert
        await queryRunner.query(`
      CREATE TRIGGER payment_id_trigger
      AFTER INSERT ON "payment"
      FOR EACH ROW
      EXECUTE FUNCTION generate_payment_id();
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE payment;`);
        await queryRunner.query(`DROP TYPE IF EXISTS "payment_status_enum";`);
        await queryRunner.query(`DROP TYPE IF EXISTS "payment_method_enum";`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS generate_payment_id();`);
    }
}
exports.CreatePayment1761898314920 = CreatePayment1761898314920;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateAdminRidersStats1761899382721 = void 0;
class CreateAdminRidersStats1761899382721 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE MATERIALIZED VIEW admin_riders_stats AS
            SELECT 
                r.id AS "riderId",
                COUNT(h.id)::int AS "assignedHouses",
                SUM(p.amount)::float AS "collectedAmount"
            FROM "user" r
            LEFT JOIN "house" h on h."riderId" = r.id
            LEFT JOIN payment p
                on p."riderId" = r.id 
                AND p.status = 'Completed'
            WHERE r.role = 'Rider'
            GROUP BY r.id;
            `);
        // Create unique index to support concurrent refresh
        await queryRunner.query(`
            CREATE UNIQUE INDEX admin_riders_stats_rider_id_idx 
            ON admin_riders_stats ("riderId");
            `);
        // refresh this view on house insert, or update of riderId
        await queryRunner.query(`
            CREATE OR REPLACE FUNCTION refresh_admin_riders_stats()
            RETURNS TRIGGER AS $$
            BEGIN
                REFRESH MATERIALIZED VIEW CONCURRENTLY admin_riders_stats;
                RETURN NEW;
            END;
            $$ LANGUAGE plpgsql;
        `);
        await queryRunner.query(`
            CREATE TRIGGER admin_riders_stats_trigger
            AFTER INSERT OR UPDATE OF "riderId" ON "house"
            FOR EACH ROW
            EXECUTE FUNCTION refresh_admin_riders_stats();
        `);
        // refresh the view whenever a payment row is inserted
        await queryRunner.query(`
            CREATE TRIGGER admin_riders_stats_payment_insert_trigger
            AFTER INSERT ON "payment"
            FOR EACH ROW
            EXECUTE FUNCTION refresh_admin_riders_stats();
        `);
        // refresh the view whenever a payment status changes
        await queryRunner.query(`
            CREATE TRIGGER admin_riders_stats_payment_update_trigger
            AFTER UPDATE OF "status" ON "payment"
            FOR EACH ROW
            WHEN (OLD.status IS DISTINCT FROM NEW.status)
            EXECUTE FUNCTION refresh_admin_riders_stats();
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TRIGGER IF EXISTS admin_riders_stats_payment_insert_trigger ON "payment";
        `);
        await queryRunner.query(`
            DROP TRIGGER IF EXISTS admin_riders_stats_payment_update_trigger ON "payment";
        `);
        await queryRunner.query(`
            DROP TRIGGER IF EXISTS admin_riders_stats_trigger ON "house";
        `);
        await queryRunner.query(`
            DROP FUNCTION IF EXISTS refresh_admin_riders_stats();
        `);
        await queryRunner.query(`
            DROP INDEX IF EXISTS admin_riders_stats_rider_id_idx;
        `);
        await queryRunner.query(`
            DROP MATERIALIZED VIEW IF EXISTS admin_riders_stats;
            `);
    }
}
exports.CreateAdminRidersStats1761899382721 = CreateAdminRidersStats1761899382721;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(11);
const user_controller_1 = __webpack_require__(38);
const user_service_1 = __webpack_require__(40);
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [jwt_1.JwtModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UserModule);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(7);
const user_dto_1 = __webpack_require__(39);
const user_service_1 = __webpack_require__(40);
const shared_1 = __webpack_require__(14);
const auth_guard_1 = __webpack_require__(41);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async getRiders(query) {
        return await this.userService.getRiders(query);
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)("/riders"),
    (0, swagger_1.ApiQuery)({
        name: "search",
        required: false,
        description: "Search by name, email or phone",
    }),
    (0, swagger_1.ApiQuery)({
        name: "status",
        required: false,
        description: `Filter by user status ${Object.values(shared_1.IUserStatus).join(", ")}`,
    }),
    tslib_1.__param(0, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.RidersQueryDto !== "undefined" && user_dto_1.RidersQueryDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "getRiders", null);
exports.UserController = UserController = tslib_1.__decorate([
    (0, common_1.Controller)("user"),
    (0, swagger_1.ApiTags)("User"),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RidersQueryDto = void 0;
const tslib_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(23);
const shared_1 = __webpack_require__(14);
class RidersQueryDto {
}
exports.RidersQueryDto = RidersQueryDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], RidersQueryDto.prototype, "search", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({ enum: shared_1.IUserStatus }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(shared_1.IUserStatus),
    tslib_1.__metadata("design:type", typeof (_a = typeof shared_1.IUserStatus !== "undefined" && shared_1.IUserStatus) === "function" ? _a : Object)
], RidersQueryDto.prototype, "status", void 0);


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
const shared_1 = __webpack_require__(14);
let UserService = class UserService {
    constructor(dataSource) {
        this.userRepository = dataSource.getRepository(user_entity_1.User);
    }
    async getRiders(query) {
        const filters = {
            role: shared_1.IUserRole.RIDER,
            ...(query.status ? { status: query.status } : {}),
        };
        const riders = await this.userRepository.find({
            where: [
                { name: (0, typeorm_1.ILike)(`%${query.search}%`) },
                { email: (0, typeorm_1.ILike)(`%${query.search}%`) },
                { phone: (0, typeorm_1.ILike)(`%${query.search}%`) },
            ].map((condition) => ({ ...condition, ...filters })),
            relations: ["adminRiderStats"],
        });
        return { riders };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], UserService);


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(11);
const exceptions_1 = __webpack_require__(21);
const shared_1 = __webpack_require__(14);
const typeorm_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(16);
let AuthGuard = class AuthGuard {
    constructor(jwtService, dataSource) {
        this.jwtService = jwtService;
        this.dataSource = dataSource;
        this.userRepository = this.dataSource.getRepository(user_entity_1.User);
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new exceptions_1.Unauthorized("No token provided");
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET,
            });
            const user = await this.userRepository.findOne({
                where: { id: payload.uid, status: shared_1.IUserStatus.ACTIVE },
            });
            if (!user)
                throw new Error("User not found");
            request.user = user;
        }
        catch {
            throw new exceptions_1.Unauthorized("Invalid or expired token");
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(" ") ?? [];
        return type === "Bearer" ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _b : Object])
], AuthGuard);


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        host
            .switchToHttp()
            .getResponse()
            .status(exception.getStatus())
            .send({
            status: exception.getStatus(),
            ...exception.getResponse(),
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = handler;
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(7);
const exception_filter_1 = __webpack_require__(42);
let cachedApp;
const isVercel = !!process.env.VERCEL_ENV;
const isDevelopment = process.env.NODE_ENV === "development";
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule); // no express passed
    app.enableCors({ origin: "*" });
    app.setGlobalPrefix("api");
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    if (!isVercel) {
        const PORT = process.env.PORT || 3000;
        if (isDevelopment) {
            const config = new swagger_1.DocumentBuilder()
                .setTitle("D-12 Security")
                .setDescription("The D-12 Security API description")
                .setVersion("1.0")
                .build();
            const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
            swagger_1.SwaggerModule.setup("docs", app, documentFactory);
            swagger_1.SwaggerModule.setup("docs.json", app, documentFactory, {
                swaggerOptions: { docExpansion: "none" },
            });
        }
        await app.listen(PORT);
        common_1.Logger.log(`Starting server on http://localhost:${PORT}`);
        common_1.Logger.log(`Swagger on http://localhost:${PORT}/docs`);
    }
    else {
        await app.init();
        return app.getHttpAdapter().getInstance(); // get internal express instance
    }
}
async function handler(req, res) {
    if (!cachedApp) {
        cachedApp = await bootstrap();
    }
    cachedApp(req, res);
}
if (!isVercel)
    bootstrap();

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=main.js.map