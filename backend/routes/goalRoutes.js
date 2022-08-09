const express = require("express")
const router = express.Router()
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers")

// router.get("/", getGoal)
// router.post("/", setGoal)
// can be written as
router.route('/').get(getGoal).post(setGoal)

// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal)
// can be written as
router.route('/:id').put(updateGoal).delete(deleteGoal)

// Before implementing controller
// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: `delete goal ${req.params.id}` })
// })
// After implementing controller
// router.delete("/:id", deleteGoal)



module.exports = router
