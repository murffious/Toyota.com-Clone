module.exports = {
addItemToSummary: (req, res) => {
  const addedItem = req.body;
  // console.log("Item to be added: ", addedItem)
  // console.log("SESSION: ", req.session.summary)

if (!req.session.summary) {
  req.session.summary = []
}
// for (key in addedItem) {
//   req.session.summary[key] = addedItem[key]
// }

 req.session.summary.push(addedItem)
//  console.log("SESSION PART2: ", req.session.summary)

return res.status(200).send(req.session.summary)
},

getSummary: (req, res) => {
 return res.status(200).send(req.session.summary)
},

removeItemFromSummary: (req, res) => {
    
}
}