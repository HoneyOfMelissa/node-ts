import { Router, Request, Response, NextFunction } from 'express';
import { BaseController } from './base';

/**
 * IndexController
 *
 * @class IndexController
 */
export class IndexController extends BaseController {

  /**
   * Create routes.
   *
   * @override
   */
  public create(): Router {
    const router = Router();
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
  private index(router: Router): void {
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        this.title = `Express`;
        this.render(req, res, 'index');
        next();
      } catch (err) {
        next(err);
      }
    });
  }
}