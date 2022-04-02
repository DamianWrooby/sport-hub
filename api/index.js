import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

export default {
	path: "/api",
	handler: app
};

app.get("/completed-units", async (req, res) => {
	const units = await prisma.completedUnits.findMany();
	res.json(units);
});

app.get("/completed-units/:id", async (req, res) => {
	const units = await prisma.completedUnits.findFirst({
		where: {
			id: parseInt(id)
		}
	});
	res.json(units);
});

app.post("/completed-units", async (req, res) => {
	const { id, activity, distance, duration, intensity, description, date, timestamp } = req.body;
	const prismaResult = await prisma.completedUnits.create({
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
	res.status(200).json(prismaResult);
});

app.delete(`/completed-units/:id`, async (req, res) => {
	const { id } = req.params;
	const unit = await prisma.completedUnits.delete({
		where: {
			id: parseInt(id)
		}
	});
	res.json(unit);
});

app.put("/completed-units/:id", async (req, res) => {
	const { id } = req.params;
	const { activity, distance, duration, intensity, description, date, timestamp } = req.body;
	const unit = await prisma.completedUnits.update({
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
