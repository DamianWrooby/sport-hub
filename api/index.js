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
