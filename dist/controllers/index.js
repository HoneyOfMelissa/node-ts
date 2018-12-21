"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const base_1 = require("./base");
/**
 * IndexController
 *
 * @class IndexController
 */
class IndexController extends base_1.BaseController {
    /**
     * Create routes.
     *
     * @override
     */
    create() {
        const router = express_1.Router();
        this.index(router);
        return router;
    }
    /**
     * Constructor
     *
     * @constructor
     */
    constructor() {
        super();
    }
    /**
     * Show home.
     *
     * @param router {Router} Express Router object.
     */
    index(router) {
        router.get('/', (req, res, next) => {
            try {
                this.title = `Express`;
                this.render(req, res, 'index');
                next();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.IndexController = IndexController;
//# sourceMappingURL=index.js.map