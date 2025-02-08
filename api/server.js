require('dotenv').config();
const express = require('express');
const cors = require('cors');
const classifyRoutes = require('../src/routes/classifyRoutes');

const app = express();

// ✅ Configure CORS securely
const allowedOrigins = process.env.CORS_ORIGIN || '*'; 
app.use(cors({
    origin: allowedOrigins,
    methods: ["GET"], 
    allowedHeaders: ["Content-Type"]
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ API Routes
app.use('/api', classifyRoutes);

// ✅ Default Route
app.get('/', (req, res) => {
    res.status(200).json({ message: '🚀 Number Classification API is running!' });
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;



















// // require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const classifyRoutes = require('./src/routes/classifyRoutes');

// const app = express();

// // Enable CORS for cross-origin requests
// app.use(cors());

// app.use(express.json());

// // Load routes
// app.use('/api', classifyRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// module.exports = app;