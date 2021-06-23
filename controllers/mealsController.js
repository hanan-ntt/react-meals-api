const Meals = require('../models/mealsModel');

exports.getAllMeals = async (req, res) => {
  try {
    const meals = await Meals.find();
    res.status(200).json({
      status: 'success',
      results: meals.length,
      data: {
        meals,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: 'Uh oh! Something went wrong',
      },
    });
  }
};

exports.createNewMeal = async (req, res) => {
  try {
    const newMeal = await Meals.create(req.body);
    res.status(200).json({
      status: 'success',
      data: {
        meal: newMeal,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: e,
      },
    });
  }
};

exports.getMeal = async (req, res) => {
  try {
    const id = req.params.id;
    const meal = await Meals.findById(id);
    res.status(200).json({
      status: 'success',
      data: {
        meal,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'fail',
      data: {
        message: e,
      },
    });
  }
};

exports.updateMeal = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const meal = await Meals.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        meal,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'fail',
      data: {
        message: e,
      },
    });
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    const id = req.params.id;
    await Meals.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
      data: {
        message: `Your selected product has been deleted`,
      },
    });
  } catch (e) {
    res.status(404).json({
      status: 'fail',
      data: {
        message: e,
      },
    });
  }
};
