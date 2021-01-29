const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
const Contact = require("../../models/Contact");

router.post("/ContactUs", async (req, res) => {
  await Contact.create(
    {
      name: req.body.name,
      Lname: req.body.Lname,
      email: req.body.email,
      message: req.body.message,
    },
    (err, doc) => {
      if (!err) {
        res.send("success");
      }
    }
  );
});
router.get("/ContactUs", async (req, res) => {
  let contactadmins = await Contact.find();
  console.log(contactadmins, "contactadmins");
  res.json(contactadmins);
});
module.exports = router;
