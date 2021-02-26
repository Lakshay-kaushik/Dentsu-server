"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_1 = require("./controllers/home/route");
const route_2 = require("./controllers/Users/route");
const route_3 = require("./controllers/Address/route");
/* tslint:disable: no-var-requires */
const appInfo = require('../package.json');
const router = express_1.Router();
/**
 * @swagger
 * /version:
 *   get:
 *     tags:
 *       - General
 *     description: Get Version
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Version Response
 *         schema:
 *           type: object
 *           properties:
 *             version:
 *               type: string
 *               description: Version of the API.
 *             description:
 *               type: string
 *               description: Description of the API.
 *             name:
 *               type: string
 *               description: Name of the API.
 */
router.get('/version', (req, res) => {
    const { version, name, description } = appInfo;
    console.info(`version = ${version}, name = ${name}, description = ${description}`);
    if (!(typeof version && version)) {
        console.error('An error occurred while trying to get version: Version not defined');
        res.status(400).send(new Error('Version not defined'));
    }
    res.json({
        description,
        name,
        version,
    });
});
/**
 * @swagger
 * /health-check:
 *   get:
 *     tags:
 *       - General
 *     description: Health Check for Kuberenetes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: I am OK
 */
router.get('/health-check', (req, res) => {
    res.send('I am OK');
});
// mount home routes at /home
router.use('/homes', route_1.default);
router.use('/Users', route_2.default);
router.use('/Address', route_3.default);
exports.default = router;
//# sourceMappingURL=router.js.map