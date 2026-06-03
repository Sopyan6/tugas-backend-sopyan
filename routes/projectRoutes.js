'use strict';
const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} = require('../controllers/projectController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Public routes (bisa diakses semua orang)
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

// Admin only routes (CRUD)
router.post('/', protect, adminOnly, createProject);
router.put('/:id', protect, adminOnly, updateProject);
router.delete('/:id', protect, adminOnly, deleteProject);

module.exports = router;