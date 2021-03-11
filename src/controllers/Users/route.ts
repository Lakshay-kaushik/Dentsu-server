import { Router } from 'express';
import { validationHandler } from '../../libs/utilities';
import UserController from './UserController';
import validation from './validation';

const router = Router();


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
 *           - first_address
 *           - second_address
 *           - pincode
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
  .post(
    UserController.create,
  );

export default router;
