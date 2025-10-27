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
const typeorm_1 = __webpack_require__(12);
const ormconfig_1 = __webpack_require__(13);
const config_1 = __webpack_require__(14);
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
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_1.ConfigService],
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
        const user = {
            name: "John Doe",
            id: 30,
            email: "john.doe@example.com",
        };
        return { message: "Hello API", user };
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
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(7);
const auth_service_1 = __webpack_require__(10);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login() {
        return await this.authService.login();
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Post)("login"),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Authentication"),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(11);
let AuthService = class AuthService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async login() {
        return await this.dataSource.query("SELECT 1");
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], AuthService);


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOrmConfig = void 0;
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
        entities: [],
        migrationsTableName: "migrations",
        migrationsRun: true,
        synchronize: false,
        migrations: [],
    };
};
exports.getOrmConfig = getOrmConfig;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

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
let cachedApp;
const isVercel = !!process.env.VERCEL_ENV;
const isDevelopment = process.env.NODE_ENV === "development";
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule); // no express passed
    app.setGlobalPrefix("api");
    if (!isVercel) {
        const PORT = process.env.PORT || 3000;
        if (isDevelopment) {
            const config = new swagger_1.DocumentBuilder()
                .setTitle("Cats example")
                .setDescription("The cats API description")
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