const router = require('express').Router();

const ExitRequestsController = require('../Controllers/ExitRequestsController.js'); // Import the ExitRequests Controller

router.get('/Students', ExitRequestsController.getAllStudents); // Get all students

router.post('/Request-Exit', ExitRequestsController.requestExit); // Post exit request for a student

router.post('/Check-Exit', ExitRequestsController.checkExit); // Post exit check for a student


module.exports = router;