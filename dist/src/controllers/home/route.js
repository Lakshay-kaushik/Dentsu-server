"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const utilities_1 = require("../../libs/utilities");
const HomeController_1 = require("./HomeController");
const validation_1 = require("./validation");
const router = express_1.Router();
/**
 * @swagger
 * /homes:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns all Home names
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: true
 *         type: string
 *       - in: query
 *         name: skip
 *         required: true
 *         type: integer
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of Home
 *         schema:
 *           $ref: '#/definitions/HomeArraySuccess'
 */
router.route('/')
    .get(utilities_1.validationHandler(validation_1.default.list), HomeController_1.default.list);
/**
 * @swagger
 * /homes/{id}:
 *   get:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Returns a Home
 *     parameters:
 *       - name: id
 *         in: path
 *         description: 'Unique id of Home'
 *         type: string
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 */
router.route('/:id')
    .get(utilities_1.validationHandler(validation_1.default.get), HomeController_1.default.get);
/**
 * @swagger
 * /homes:
 *   post:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Creates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Home name
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/HomePost'
 *     responses:
 *       200:
 *         description: Successfully created
 *         schema:
 *           $ref: '#/definitions/HomeObjectSuccess'
 *         properties:
 *             first_name:
 *                   type: String
 *                   example: "Lakshay"
 *             Second_name:
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
    .post(utilities_1.validationHandler(''), HomeController_1.default.create);
/**
 * @swagger
 * /homes:
 *   put:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Updates a new Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: first_address
 *         Last_address: Last_address
 *         pincode: pincode
 *         description: Updated home name
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
router.route('/')
    .put(utilities_1.validationHandler(validation_1.default.update), HomeController_1.default.update);
/**
 * @swagger
 * /homes/{id}:
 *   delete:
 *     security:
 *       - Bearer: []
 *     tags:
 *       - Home
 *     description: Deletes a Home
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Original id of the home ie to be deleted
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: A Home
 *         schema:
 *           $ref: '#/definitions/DeleteSuccess'
 */
router.route('/:id')
    .delete(utilities_1.validationHandler(validation_1.default.delete), HomeController_1.default.delete);
exports.default = router;
//# sourceMappingURL=route.js.map