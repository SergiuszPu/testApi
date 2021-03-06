const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const testimonialsRoutes = require('./router/testimonials.router');
const seatsRouter = require('./router/seats.router');
const concertsRouter = require('./router/concerts.router');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/', testimonialsRoutes);
app.use('/api/', seatsRouter);
app.use('/api/', concertsRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res) => {
    res.status(404).json({ message: 'not found' });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('Server is running on port: 8000');
});