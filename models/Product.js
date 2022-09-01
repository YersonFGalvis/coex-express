import sequelize from 'sequelize';
import db from '../config/db.js';

export const Product = db.define('product', {
	name: {
		type: sequelize.STRING,
	},
	price: {
		type: sequelize.NUMBER,
	},
	stock: {
		type: sequelize.NUMBER,
	}
});
