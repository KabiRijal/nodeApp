const asyncHandler = require("express-async-handler")

//@desc     Get goals
//routes    GET /api/goals
//@access   Private
const getGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get goals" })
})

//@desc     set goals
//routes    POST /api/goals/:id
//@access   Private
const setGoal = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please enter text")
  }
  res.status(200).json({ message: "Set Goals" })
})

//@desc     update goals
//routes    PUT /api/goals
//@access   Private
const updateGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
})

//@desc     Delete goals
//routes    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler((req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` })
})

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
}
