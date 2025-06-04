const pool = require('../config/db.js'); // Import the database connection pool


/**
 * Get all students
 * @route GET /api/exit-requests/Students
 * @access Public
 */
exports.getAllStudents = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT 
        s.Student_ID,
        s.First_n,
        s.Middle_n,
        s.Last_n,
        er.Status
      FROM Student s
      LEFT JOIN Exit_Request er 
      ON s.Student_ID = er.FK_Student_ID`
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

/**
 * POST request to issue an exit request for a student
 * @route POST /api/exit-requests/Request-Exit
 * @access Public
 */
exports.requestExit = async (req, res) => {
  const studentId = req.body.studentId;

  const sql = `
    UPDATE Exit_Request er
    JOIN Student s ON er.FK_Student_ID = s.Student_ID
    SET er.Status = 'Requested'
    WHERE s.Student_ID = ? AND er.Status = 'Present'
  `;

  try {
    const [result] = await pool.execute(sql, [studentId]);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Status updated to Requested' });
    } else {
      res.status(404).json({ message: 'No matching Present status found for this student' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * POST request to check student exit
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

