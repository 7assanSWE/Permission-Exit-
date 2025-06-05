const router = require('express').Router();

const ExitApprovalsController = require('../Controllers/ExitApprovalsController'); // Import the adminController

router.post('/approve-exit', ExitApprovalsController.approveExit); // Approve student exit

router.post('/reject-exit', ExitApprovalsController.rejectExit); // Reject student exit


module.exports = router;