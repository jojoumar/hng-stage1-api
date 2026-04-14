const express = require('express');
const app = express();

const PORT = 3000;

// Root
app.get('/', (req, res) => {
	res.status(200).json({ message: "API is running" })
 });
//
//   // Health
app.get('/health', (req, res) => {
	res.status(200).json({ message: "healthy" });
})

     // Me
app.get('/me', (req, res) => {
	res.status(200).json({
		name: "Umar Joannah Martha",
		email: "jojoumar0918@gmail.com",
		github: "https://github.com/jojoumar"
	});
});

app.listen(PORT, '127.0.0.1', () => {
	console.log(`Server running on port ${PORT}`);
});
