const router = require("express").Router();
const phones = require('../data/phones.json')


router.get("/", (req, res, next) => {
  console.log("hello")
  res.status(200).json({ message: "succesful connected" })
});

router.get("/phones", (req, res, next) => {
  res.status(200).json(phones)
});

router.get("/phones/:id", (req, res, next) => {
  let id = req.params.id;
  let specificPhone = phones.find(phone => phone.id == id)
  res.status(200).json(specificPhone)
});


module.exports = router;


