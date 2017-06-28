module.exports = {
addItemToSummary: (req, res) => {
  const addedItem = req.body;

if (!req.session.summary) {
  req.session.summary = { 
  }
}

// for in loop over req.body then set it equal to that key value pair for (var key in reqBody){
  // obj1[key] = reqBOdy[key]
// }
for (key in addedItem) {
  req.session.summary[key] = addedItem[key]
}
console.log("I am here now" + req.session.summary)
return res.status(200).send('ok')
},

getSummary: (req, res) => {
 return res.status(200).send(req.session.summary)
}
}