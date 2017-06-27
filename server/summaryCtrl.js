module.exports = {
addItemToSummary: (req, res) => {
  const addedItem = req.body;

if (!req.session.summary) {
  req.session.summary = { 
    grade: null,
    configuration: null,
    cabsbeds: null,
    startingmsrp: null,
    exteriorcolor: null,
    colorprice: null,
    interiorcolor: null,
    packages: null,
    packageprice: null,
    accessories: null,
    accprice: null,
    subtotalmsrp: null,
    totalmsrpAsBuilt: null
  }
}
req.session.summary.push(addedItem);
return res.status(200).send('ok')
},

getSummary: (req, res) => {
 return res.status(200).send(req.session.summary)
}
}