require('dotenv').config();
const express = require('express');
const cors = require('cors');
const classifyRoutes = require('./src/routes/classifyRoutes');

const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Load routes
app.use('/api', classifyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
