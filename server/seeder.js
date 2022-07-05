const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectdb = require('./config/config')
const Pizza = require('./models/pizzamodel');
const Pizzas = require('./data/pizza-data');

dotenv.config();
connectdb();

// import data

const importdata = async ()=>{
    try {
        await Pizza.deleteMany();
        const sampledata = Pizzas.map(pizza => {return {...pizza}})
        await Pizza.insertMany(sampledata);
        console.log("data imported");
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
}

const datadestroy = ()=>{};

if (process.argv[2]==='-d') {
    datadestroy();
}else{
    importdata();
}