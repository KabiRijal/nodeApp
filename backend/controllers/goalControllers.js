const asyncHandler = require("express-async-handler")

const Goal = require("../models/goalModel")

//@desc     Get goals
//routes    GET /api/goals
//@access   Private
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})

//@desc     set goals
//routes    POST /api/goals/:id
//@access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please enter text")
  }

  const goal = await Goal.create({
    text: req.body.text,
  })

  res.status(200).json(goal)
})

//@desc     update goals
//routes    PUT /api/goals
//@access   Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error("Goal not found")
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedGoal)
})

//@desc     Delete goals
//routes    DELETE /api/goals/:id
//@access   Private
const deleteGoal = asyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  if(!goal){
    res.status(400)
    throw new Error('goal not found')
  }

  await goal.remove
  res.status(200).json({id:req.params.id})
})

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
}
