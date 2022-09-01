import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

db.authenticate()
	.then(() => console.log('Base de datos conectada'))
	.catch((err) => console.log(err));

app.set('port', process.env.PORT || 3000);

app.use('/', router);

app.listen(app.get('port'), () => {
	console.log('Server conectado');
});
