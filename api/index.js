import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

export default {
	path: "/api",
	handler: app
};

app.get("/saved-units", async (req, res) => {
	const units = await prisma.savedUnits.findMany();
	res.json(units);
});

app.get("/saved-units/:id", async (req, res) => {
	const units = await prisma.savedUnits.findFirst({
		where: {
			id: parseInt(id)
		}
	});
	res.json(units);
});

app.post("/saved-units", async (req, res) => {
	const {
		id,
		activity,
		distance,
		duration,
		intensity,
		description,
		date,
		timestamp
	} = req.body;
	const unit = await prisma.savedUnits.create({
		data: {
			id,
			activity,
			distance,
			duration,
			intensity,
			description,
			date,
			timestamp
		}
	});
	res.status(200).json(unit);
});

app.delete(`/saved-units/:id`, async (req, res) => {
	const { id } = req.params;
	const unit = await prisma.savedUnits.delete({
		where: {
			id: parseInt(id)
		}
	});
	res.json(unit);
});

app.put("/saved-units/:id", async (req, res) => {
	const { id } = req.params;
	const {
		activity,
		distance,
		duration,
		intensity,
		description,
		date,
		timestamp
	} = req.body;
	const unit = await prisma.savedUnits.update({
		where: {
			id: parseInt(id)
		},
		data: {
			activity,
			distance,
			duration,
			intensity,
			description,
			date,
			timestamp
		}
	});
	res.status(200).json(unit);
});