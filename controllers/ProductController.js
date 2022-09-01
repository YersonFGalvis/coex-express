import { Product } from '../models/Product.js';
import { Op } from 'sequelize';

const controller = {};

controller.index = async (req, res) => {
	try {
		const product = await Product.findAll();
		console.log(product);
	} catch (error) {
		console.log(error);
	}
};

export default controller;
