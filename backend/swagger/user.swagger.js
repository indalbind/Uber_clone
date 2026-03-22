/**
 * @swagger
 * tags:
 *   name: User
 *   description: User authentication and profile management
 *
 * /api/users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
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
 *             properties:
 *               fullname:
 *                 type: object
 *                 required:
 *                   - firstname
 *                 properties:
 *                   firstname:
 *                     type: string
 *                     minLength: 3
 *                     example: indal
 *                   lastname:
 *                     type: string
 *                     minLength: 3
 *                     example: bind
 *               email:
 *                 type: string
 *                 format: email
 *                 minLength: 5
 *                 example: indal@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 6
 *                 example: strongPass123
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: User registered successfully
 *               token: "jwt_token_here"
 *       400:
 *         description: Validation error
 *       409:
 *         description: Email already exists
 *       500:
 *         description: Internal server error
 *
 * /api/users/login:
 *   post:
 *     summary: Login a user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: indal@gmail.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: strongPass123
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               token: "jwt_token_here"
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 *
 * /api/users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               fullname:
 *                 firstname: indal
 *                 lastname: bind
 *               email: indal@gmail.com
 *               socketId: null
 *       401:
 *         description: Unauthorized
 *
 * /api/users/logout:
 *   post:
 *     summary: Logout a user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       401:
 *         description: Unauthorized
 */
