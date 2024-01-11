const express = require('express');

const Menu = require("../models/menu_model");



const menu_create = async (req, res) => {
    try {
        console.log("printing body");
        console.log(req.body);
        const newMenu = await Menu.create(req.body);

        res.status(201).json({
            status: 'success',
            data: { menu: newMenu }
        });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }

// Controller to handle feedback operations
const feedbackController = {
  // Create new feedback
  createFeedback: async (req, res) => {
    try {
      const { name, location, rating, feedback } = req.body;

      // Validate input (you may want to add more validation)
      if (!name || !location || !rating || !feedback) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      // Create a new cafe instance
      const newCafe = new Cafe({
        name,
        location,
        rating,
        feedback,
      });

      // Save the cafe to the database
      await newCafe.save();

      // Respond with a success message
      res.status(201).json({ message: 'Feedback created successfully.' });
    } catch (error) {
      console.error('Error creating feedback:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get all feedback
  getAllFeedback: async (req, res) => {
    try {
      const feedback = await Cafe.find({});
      res.json({ feedback });
    } catch (error) {
      console.error('Error getting feedback:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Get feedback by ID
  getFeedbackById: async (req, res) => {
    try {
      const { id } = req.params;
      const feedback = await Cafe.findById(id);
      if (!feedback) {
        return res.status(404).json({ error: 'Feedback not found.' });
      }
      res.json({ feedback });
    } catch (error) {
      console.error('Error getting feedback by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Update feedback by ID
  updateFeedbackById: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, location, rating, feedback } = req.body;

      // Validate input (you may want to add more validation)
      if (!name || !location || !rating || !feedback) {
        return res.status(400).json({ error: 'All fields are required.' });
      }

      const updatedFeedback = await Cafe.findByIdAndUpdate(
        id,
        { name, location, rating, feedback },
        { new: true } // Return the updated document
      );

      if (!updatedFeedback) {
        return res.status(404).json({ error: 'Feedback not found.' });
      }

      res.json({ message: 'Feedback updated successfully.', feedback: updatedFeedback });
    } catch (error) {
      console.error('Error updating feedback by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Delete feedback by ID
  deleteFeedbackById: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedFeedback = await Cafe.findByIdAndDelete(id);

      if (!deletedFeedback) {
        return res.status(404).json({ error: 'Feedback not found.' });
      }

      res.json({ message: 'Feedback deleted successfully.', feedback: deletedFeedback });
    } catch (error) {
      console.error('Error deleting feedback by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = feedbackController;

};

module.exports = {
    menu_create
}
