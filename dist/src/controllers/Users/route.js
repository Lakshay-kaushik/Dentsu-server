"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilities_1 = require("../../libs/utilities");
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
 *     description: Creates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - firstname: First_name
 *         description: User First name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *       - lastname: Last_name
 *         description: User Last name
 *         in: body
 *         required: false
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *       - mobilenumber: mobile_number
 *         description: User Mobile number
 *         in: body
 *         required: false
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *       - email: email
 *         description: User emailID
 *         in: body
 *         required: false
 *         schema:
 *           $ref: '#/definitions/UserPost'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 *         properties:
 *             firstname:
 *                   type: String
 *                   example: "Lakshay"
 *             lastname:
 *                 type: String
 *                 example: "Kaushik"
 *             email:
 *                type: String
 *                example: "LK@gmail.com"
 *             mobilenumber:
 *                type: Number
 *                example: 9540953776
 */
router.route('/')
    .post(utilities_1.validationHandler(''), UserController_1.default.create);
// /**
//  * @swagger
//  * /homes:
//  *   put:
//  *     security:
//  *       - Bearer: []
//  *     tags:
//  *       - Home
//  *     description: Updates a new Home
//  *     produces:
//  *       - application/json
//  *     parameters:
//  *       - name: firstaddress
//  *         lastaddress: lastaddress
//  *         pincode: pincode
//  *         description: Updated home name
//  *         in: body
//  *         required: true
//  *         schema:
//  *           $ref: '#/definitions/HomePut'
//  *     responses:
//  *       200:
//  *         description: Successfully created
//  *         schema:
//  *           $ref: '#/definitions/HomeObjectSuccess'
//  */
// router.route('/')
//   .put(
//     validationHandler(validation.update as any),
//     UserController.update,
//   );
exports.default = router;
//# sourceMappingURL=route.js.map