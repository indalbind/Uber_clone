/**
 * @swagger
 * tags:
 *   name: Captain
 *   description: Captain management and login
 *
 * /api/captains/register:
 *   post:
 *     summary: Register a new captain
 *     tags: [Captain]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullname
 *               - email
 *               - password
 *               - vehicle
 *             properties:
 *               fullname:
 *                 type: object
 *                 required:
 *                   - firstname
 *                   - lastname
 *                 properties:
 *                   firstname:
 *                     type: string
 *                     example: shadow
 *                   lastname:
 *                     type: string
 *                     example: bind
 *               email:
 *                 type: string
 *                 format: email
 *                 example: shadow@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPassword123
 *               vehicle:
 *                 type: object
 *                 required:
 *                   - color
 *                   - plate
 *                   - capacity
 *                   - vehicleType
 *                 properties:
 *                   color:
 *                     type: string
 *                     example: red
 *                   plate:
 *                     type: string
 *                     example: ABC-123
 *                   capacity:
 *                     type: integer
 *                     example: 4
 *                   vehicleType:
 *                     type: string
 *                     enum: [car, motorcycle, truck]
 *                     example: car
 *     responses:
 *       201:
 *         description: Captain registered successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Captain registered successfully
 *               data:
 *                 id: "64abc123"
 *                 email: "shadow@gmail.com"
 *       400:
 *         description: Bad request
 *       409:
 *         description: Captain already exists
 *       500:
 *         description: Internal server error
 * 
 * 
 */
