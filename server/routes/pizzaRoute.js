const express = require('express');
const router = express.Router();

const pizzamodel = require('../models/pizzamodel'); 

//Get all pizza
router.get('/getAllPizzas', async (req,res) =>{
    try {
        const pizzas = await pizzamodel.find({});
        res.send(pizzas);
    } catch (error) {
        res.json({message: error});   
    }
});

router.post("/addpizza", async (req, res) => {
    const pizza = req.body.pizza;
    try {
      const newPizza = new pizzamodel({
        name: pizza.name,
        image: pizza.image,
        varients: ["small", "medium", "larg"],
        description: pizza.description,
        category: pizza.category,
        prices: [pizza.prices],
      });
      await newPizza.save();
      res.status(201).send("New Pizza Added");
    } catch (error) {
      res.json({ message: error });
    }
});

router.post("/getpizzabyid", async (req, res) => {
    const pizzaId = req.body.pizzaId;
    try {
      const pizza = await pizzamodel.findOne({ _id: pizzaId });
      res.send(pizza);
    } catch (error) {
      res.json({ message: error });
    }
});
router.post("/updatepizza", async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await pizzamodel.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.description = updatedPizza.description),
      (pizza.image = updatedPizza.image),
      (pizza.category = updatedPizza.category),
      (pizza.prices = [updatedPizza.prices]);
    await pizza.save();
    res.status(200).send("Pizza Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
router.post("/deletepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await pizzamodel.findOneAndDelete({ _id: pizzaId });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});  
module.exports =router;