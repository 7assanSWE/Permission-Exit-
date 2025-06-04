const router = require('express').Router();

const ExitRequestsController = require('../Controllers/ExitApprovalsController.js'); // Import the adminController

router.get('/Students', ExitRequestsController.getAllStudents); // Get all students

module.exports = router;