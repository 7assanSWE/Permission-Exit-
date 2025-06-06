const router = require('express').Router();

const ExitApprovalsController = require('../Controllers/ExitApprovalsController'); // Import the ExitApprovals Controller

router.get('/get-students-status-requested', ExitApprovalsController.getStudentsStatusRequested) // Get all students with status: Requested

router.post('/approve-exit', ExitApprovalsController.approveExit); // Approve student exit

router.post('/reject-exit', ExitApprovalsController.rejectExit); // Reject student exit


module.exports = router;