"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilities_1 = require("../../libs/utilities");
const AddressController_1 = require("./AddressController");
const validation_1 = require("./validation");
const router = express_1.Router();
/**
 * @swagger
 * /Address/{id}:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Address
 *     description: Updates a new Address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         type: string
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           required:
 *           - first_address
 *           - second_address
 *           - pincode
 *           properties:
 *             first_address:
 *               type: string
 *               example: E-1406,SG Grand, Sector-4
 *               description: Email of the user
 *             second_address:
 *               type: string
 *               example: Rajnagar, Extension
 *               description: Name of the user
 *             pincode:
 *               type: number
 *               example: 924122
 *               description: pincode of user address
 *     responses:
 *       200:
 *         description: Successfully Updated
 *         schema:
 *           $ref: '#/definitions/AddressObjectSuccess'
 *     properties:
 *           first_address:
 *                 type: String
 *                 example: "E-1406, SG Grand, sector-4"
 *           second_address:
 *               type: String
 *               example: "Rajnagar Extension, ghaziabad"
 *           Pinocde:
 *               type: Number
 *               example: 954214
 */
router.route('/:id')
    .put(utilities_1.validationHandler(validation_1.default.update), AddressController_1.default.update);
/**
 * @swagger
 * /Address:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Address
 *     description: Creates a new Address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           required:
 *           - userId
 *           - first_address
 *           - second_address
 *           - pincode
 *           properties:
 *             userId:
 *               type: string
 *               discription: userId of the user
 *             first_address:
 *               type: string
 *               example: E-1406,SG Grand, Sector-4
 *               description: First address of the user
 *             second_address:
 *               type: string
 *               example: Rajnagar, Extension
 *               description: Second address of the user
 *             pincode:
 *               type: number
 *               example: 924122
 *               description: pincode of user address
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/UserObjectSuccess'
 *         properties:
 *             first_address:
 *                   type: String
 *                   example: "E-1406, SG Grand, sector-4"
 *             second_address:
 *                 type: String
 *                 example: "Rajnagar Extension, ghaziabad"
 *             Pinocde:
 *                type: Number
 *                example: 954214
 */
router.route('/')
    .post(utilities_1.validationHandler(validation_1.default.create), AddressController_1.default.create);
exports.default = router;
//# sourceMappingURL=route.js.map