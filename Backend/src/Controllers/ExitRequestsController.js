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
 * Get all tournaments
 * @route GET /api/tournaments
 * @access Public
 */
exports.requestExit = async (req, res) => {
  try {
    const { studentId, empId, resId } = req.body;

    // Validate input
    if (!studentId || !empId || !resId) {
      return res.status(400).json({ error: 'Missing studentId, empId, or resId.' });
    }

    const [result] = await pool.query(
      `INSERT INTO Exit_Request 
       (Status, Created_At, FK_Emp_ID, FK_Student_ID, FK_Res_ID)
       VALUES ('Pending', NOW(), ?, ?, ?)`,
      [empId, studentId, resId]
    );

    res.status(201).json({
      message: 'Exit request submitted successfully.',
      requestId: result.insertId
    });

  } catch (error) {
    console.error('Error processing exit request:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
