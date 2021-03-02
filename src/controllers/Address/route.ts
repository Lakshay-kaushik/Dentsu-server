import { Router } from 'express';
import { validationHandler } from '../../libs/utilities';
import AddressController from './AddressController';
import validation from './validation';

const router = Router();


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
  .put(
    validationHandler(validation.update as any),
    AddressController.update,
  );

  
  router.route('/')
  .post(
    validationHandler(''),
    AddressController.create,
  );

export default router;
