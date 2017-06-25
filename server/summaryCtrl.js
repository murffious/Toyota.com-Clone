module.exports = {
addItemToSummary: (req, res) => {
  const addedItem = req.body;

if (!req.session.summary) {
  req.session.cart = []
}
req.session.cart.push(newProduct);
return res.status(200).send('ok')
},

reqSummary: (req, res) => {
 return res.status(200).send(req.session.cart)
}
}