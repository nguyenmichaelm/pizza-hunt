const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');
const pizzaController = require('../../controllers/pizza-controller');

// add prefix of `/comments` to routes created in `pizza-routes.js`
router.use('/comments', commentRoutes);
// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;