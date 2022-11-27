const express = require("express");
const router = express.Router();
const { getActions, addActions, deleteActions } = require("../controllers/transactions");

// router.get('/', (req, res) => res.send("Hello"));
router
    .route("/")
    .get(getActions)
    .post(addActions);


router
    .route("/:id")
    .delete(deleteActions);

module.exports = router;
