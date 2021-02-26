"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilities_1 = require("../../libs/utilities");
const AddressController_1 = require("./AddressController");
const validation_1 = require("./validation");
const router = express_1.Router();
/**
 * @swagger
 * /Address:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Address
 *     description: Updates a new Address
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: First_address
 *         Last_address: Last_address
 *         Pincode: Pincode
 *         description: Updated Address
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/HomePut'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/:id')
    .put(utilities_1.validationHandler(validation_1.default.update), AddressController_1.default.update);
exports.default = router;
//# sourceMappingURL=route.js.map