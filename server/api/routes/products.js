const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "products GET request /products",
	});
});
router.post("/", (req, res, next) => {
	const data = {
		name: req.body.name,
		quantity: req.body.quantity,
	};
	res.status(201).json({
		message: "products POST request /products",
		product: data,
	});
});
router.get("/:productId", (req, res, next) => {
	res.status(200).json({
		id: req.params.productId,
	});
});

module.exports = router;
