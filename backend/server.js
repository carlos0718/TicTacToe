const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const CONNECTION_URL = 'mongodb+srv://cjvirbox:admin123@cluster0.hcpft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// Conexión a la base de datos
mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('Connected to the database');
	})
	.catch((error) => {
		console.log('Error connecting to the database');
		console.log(error);
	});

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

//manejo de conexion de sockets
io.on('connection', (socket) => {
	console.log('New client connected');
	// Manejar eventos específicos (ej. movimientos del juego)
	socket.on('move', (data) => {
		// Reenviar los datos a todos los clientes
		io.emit('move', data);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});

	// Additional socket event handlers can be added here
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
