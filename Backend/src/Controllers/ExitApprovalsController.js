const pool = require('../config/db.js'); // Import the database connection pool

/**
 * POST request to approve student request exit
 * @route POST /api/requests-approvals/approve-exit
 * @access Public
 */
exports.approveExit = async (req, res) => {
      const studentId = req.body.studentId;

  const sql = `
    UPDATE Exit_Request er
    JOIN Student s ON er.FK_Student_ID = s.Student_ID
    SET er.Status = 'Approved'
    WHERE s.Student_ID = ? AND er.Status = 'Requested'
  `;

  try {
    const [result] = await pool.execute(sql, [studentId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Status updated to Approved' });
    } else {
      res.status(404).json({ message: 'No matching Requested status found for this student'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/**
 * POST request to reject student request exit
 * @route POST /api/requests-approvals/reject-exit
 * @access Public
 */
exports.rejectExit = async (req, res) => {
      const studentId = req.body.studentId;

  const sql = `
    UPDATE Exit_Request er
    JOIN Student s ON er.FK_Student_ID = s.Student_ID
    SET er.Status = 'Rejected'
    WHERE s.Student_ID = ? AND er.Status = 'Requested'
  `;

  try {
    const [result] = await pool.execute(sql, [studentId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Status updated to Rejected' });
    } else {
      res.status(404).json({ message: 'No matching Requested status found for this student'});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};