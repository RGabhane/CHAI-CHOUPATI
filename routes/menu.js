const express = require('express');
const menuController = require('../controller/menuController');

const router = express.Router();

router.post("/create_menu_item", menuController.menu_create);

module.exports = router;


// Display all feedback
router.get('/feedback', feedbackController.getAllFeedback);

// Display a form to add new feedback
router.get('/feedback/new', (req, res) => {
  res.render('newFeedback');
});

// Handle adding new feedback (using feedbackController)
router.post('/feedback', feedbackController.createFeedback);

// Display feedback by ID
router.get('/feedback/:id', feedbackController.getFeedbackById);

// Update feedback by ID
router.put('/feedback/:id', feedbackController.updateFeedbackById);

// Delete feedback by ID
router.delete('/feedback/:id', feedbackController.deleteFeedbackById);

module.exports = router;
