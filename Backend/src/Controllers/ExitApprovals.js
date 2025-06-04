const pool = require('../config/db.js'); // Import the database connection pool

/**
 * POST request to approve student request exit
 * @route POST /api/exit-requests/Check-Exit
 * @access Public
 */
exports.checkExit = async (req, res) => {
      const studentId = req.body.studentId;

  const sql = `
    UPDATE Exit_Request er
    JOIN Student s ON er.FK_Student_ID = s.Student_ID
    SET er.Status = 'Exited'
    WHERE s.Student_ID = ? AND er.Status = 'Approved'
  `;

  try {
    const [result] = await pool.execute(sql, [studentId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Status updated to Exited' });
    } else {
      res.status(404).json({ message: 'No matching Approved status found for this student' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};