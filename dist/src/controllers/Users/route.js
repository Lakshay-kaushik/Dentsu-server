"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./UserController");
const router = express_1.Router();
/**
 * @swagger
 * /Users:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - User
 *     description: Creates a new User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           required:
 *           - first_name
 *           - last_name
 *           - email
 *           - mobile_number
 *           properties:
 *             first_name:
 *               type: string
 *               example: lakshay
 *               description: Email of the user
 *             last_name:
 *               type: string
 *               example: kaushik
 *               description: Name of the user
 *             email:
 *               type: string
 *               example: email@successive.tech
 *               description: Role of the user
 *             mobile_number:
 *               type: string
 *               example: 9997123123
 *               description: Password created by user
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/UserObjectSuccess'
 *         properties:
 *             first_name:
 *                   type: String
 *                   example: "Lakshay"
 *             last_name:
 *                 type: String
 *                 example: "Kaushik"
 *             email:
 *                type: String
 *                example: "LK@gmail.com"
 *             mobile_number:
 *                type: Number
 *                example: 9540953776
 */
router.route('/')
    .post(UserController_1.default.create);
exports.default = router;
//# sourceMappingURL=route.js.map