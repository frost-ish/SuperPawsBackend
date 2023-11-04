const sayHello = (req, res) => {
    res.json({"message" : "hello"}) 
}
module.exports = {sayHello}