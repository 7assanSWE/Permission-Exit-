//Imports
require('dotenv').config({path: '../.env'}) // Load environment variables from .env file

// Middleware Imports
const express = require('express')
const cors = require('cors')

// Routes Imports
const exitRequests = require('./Routes/ExitRequests.js');
const exitApprovals = require('./Routes/ExitApprovals.js');


// environment variables
const PORT = process.env.PORT || 5000

  
// Express app
const app = express()


// Middleware
app.use(cors())
app.use(express.json()) 

// Routes
app.use('/api/exit-requests', exitRequests);
app.use('/api/requests-approvals', exitApprovals)


// Error handling 
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({Error: err.message  || 'Something broke!'})
})


// Start server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
