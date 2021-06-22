const Meals = require('../models/mealsModel');

exports.getAllMeals = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      message: 'List of all meals',
    },
  });
};

exports.createNewMeal = async (req, res) => {
  try{
    const newMeal = await Meals.create(req.body)
    res.status(200).json({
      status: 'success',
      data: {
        meal: newMeal,
      },
    });
  } catch (e) {
    res.status(400).json({
      
    })
  }
};

exports.getMeal = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
    data: {
      message: `Product for id ${id} is attached`,
    },
  });
};

exports.updateMeal = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'success',
    data: {
      message: `Product with id ${id} has been updated`,
    },
  });
};

exports.deleteMeal = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
