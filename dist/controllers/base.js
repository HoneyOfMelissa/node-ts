"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BaseController
 *
 * @class BaseController
 */
class BaseController {
    /**
     * Constructor
     *
     * @constructor
     */
    constructor() {
        this.title = 'TODO';
        this.scripts = [];
    }
    /**
     * Add a JS external file to the request.
     *
     * @param src {string} The src to the external JS file.
     */
    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    /**
     * Render page.
     *
     * @param req {Request} Request object.
     * @param res {Response} Response object.
     * @param view {String} View to render.
     * @param options {Object} Additional options to append to the view's local scope.
     */
    render(req, res, view, options) {
        res.locals.BASE_URL = '/';
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.js.map