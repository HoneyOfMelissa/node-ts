"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const index_1 = require("./controllers/index");
/**
 * Application.
 *
 * @class App
 */
class App {
    /**
     * Bootstrap the application.
     *
     * @static
     * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
     */
    static bootstrap() {
        return new App();
    }
    /**
     * Constructor.
     *
     * @constructor
     */
    constructor() {
        this.app = express();
        this.setConfig();
        this.setRoutes();
        this.setApiRoutes();
        this.setErrorHandler();
    }
    /**
     * Configure application
     *
     */
    setConfig() {
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');
        this.app.use(logger('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static(path.join(__dirname, 'public')));
    }
    /**
     * Create and return Router.
     *
     */
    setRoutes() {
        // Custom routes
        this.app.use('/', new index_1.IndexController().create());
    }
    /**
     * Create REST API routes
     *
     */
    setApiRoutes() {
    }
    /**
     * Create Error handler
     *
     */
    setErrorHandler() {
        // Catch 404 and forward to error handler
        this.app.use((req, res, next) => {
            next(createError(404));
        });
        // Error handler
        this.app.use((err, req, res, next) => {
            // Set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};
            // Render the error page
            res.status(err.status || 500);
            res.render('error');
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map