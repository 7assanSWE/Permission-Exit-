const pool = require('../config/db.js'); // Import the database connection pool


/**
 * Get reqeust to retreive all students of status: Requested
 * @route Get /api/requests-approvals/get-students-status-requested
 * @access Public
 */
exports.getStudentsStatusRequested = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT 
        s.Student_ID,
        s.First_n,
        s.Middle_n,
        s.Last_n,
        er.Status
      FROM Student s, Exit_Request er
      WHERE s.Student_ID = er.FK_Student_ID
      AND
      er.Status = 'Requested'`
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};




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