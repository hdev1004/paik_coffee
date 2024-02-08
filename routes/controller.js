
const CoffeeModel = require("../models/coffee");

exports.getAllCoffee = async (req, res) => {
    let coffee = new CoffeeModel();
    
    const [ result ] = await coffee.getAllCoffee();
    res.json(result)
}

exports.getGroupAllCoffee = async (req, res) => {
    let coffee = new CoffeeModel();
    let params = req.params;
    
    const [ result ] = await coffee.getGroupAllCoffee(params.id);
    res.json(result)
}

exports.insertBillList = async (req, res) => {
    let coffee = new CoffeeModel();
    let body = req.body;
    console.log("BODY : ", body);

    const [ result ] = await coffee.insertBillList(body);
    res.json(result)
}

exports.getBillList = async (req, res) => {
    let coffee = new CoffeeModel();
    let params = req.params;
    
    const [ result ] = await coffee.getBillList(params.id);
    res.json(result)
}