import express from "express";

const router = express.Router();

router.get("/api/auth/logout", (req, res) => {
  req.session = null;
  res.status(200).send({});
});

export { router as logoutRouter };
