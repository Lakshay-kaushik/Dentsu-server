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
  .post(
    validationHandler(validation.create),
    UserController.create,
  );

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

export default router;
