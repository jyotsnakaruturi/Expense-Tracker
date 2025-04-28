const express = require("express");
const router = express.Router();
 

const Expense = require("../models/Expense");

// ADD EXPENSE

router.post("/", async (req, res) => {
  const newExpense = Expense(req.body);
  try {
    const expense = await newExpense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET ALL EXPENSES

router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE EXPENSES

/*router.put("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});*/
router.put("/:id", async (req, res) => {
  try {
    // Log the incoming request body (data you're trying to update)
    console.log("Received data for update:", req.body); 

    const expense = await Expense.findByIdAndUpdate(
      req.params.id,  // Get the ID from the URL
      { $set: req.body },  // Set the update data
      { new: true }  // Return the updated document
    );

    // Log the updated expense
    console.log("Updated Expense:", expense); 

    if (!expense) {
      // If no expense found with the given ID, return a 404 response
      return res.status(404).json({ message: "Expense not found" });
    }

    // Send the updated expense as the response
    res.status(200).json(expense);
  } catch (error) {
    // Log any errors that occur during the update process
    console.error("Error updating expense:", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
});



// DELETE EXPENSE

router.delete("/:id", async(req, res) => {
  try {

    await Expense.findByIdAndDelete(req.params.id);
    res.status(201).json("expense has been successfully deleted")
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
