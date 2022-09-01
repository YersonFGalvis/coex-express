import { Product } from '../models/Product.js';
import { Op } from 'sequelize';

const controller = {};

controller.index = async (req, res) => {
	try {
		const product = await Product.findAll();
		res.json(product);
	} catch (error) {
		res.status(404).json(error);
	}
};

controller.store = async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.json(product);
	} catch (error) {
		res.status(404).json(error);
	}
};

controller.show = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return json.sendStatus(404);
		}
		const result = await Product.findOne({ where: { id: id } });
		res.json(result);
	} catch (error) {
		res.status(404).json(error);
	}
};

controller.update = async (req, res) => {
	try {
		const { id } = req.params;
		const body = req.body;
		if (!id) {
			return json.sendStatus(404);
		}
		console.log(id, body);
		const result = await Product.update(body, { where: { id: id } });
		res.json(result);
	} catch (error) {
		res.status(404).json(error);
	}
};
controller.delete = async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(404).json({ error: 'Id not found' });
		}
		const result = await Product.destroy({ where: { id: id } });
		res.json(result);
	} catch (error) {
		res.status(404).json(error);
	}
};

export default controller;
