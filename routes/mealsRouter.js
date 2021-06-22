const {
  getAllMeals,
  createNewMeal,
  getMeal,
  updateMeal,
  deleteMeal,
} = require('../controllers/mealsController');
const express = require('express');

const router = express.Router();

router.route('/').get(getAllMeals).post(createNewMeal);
router.route('/:id').get(getMeal).patch(updateMeal).delete(deleteMeal);

module.exports = router;
