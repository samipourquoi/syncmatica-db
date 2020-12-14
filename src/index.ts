import * as express from "express";
import { Database } from "./misc/database";
import { Syncmatica } from "./syncmatica";

const app = express();
export const db = new Database("syncmatica.db");
const syncmatica = new Syncmatica();

app.get("/", (req, res) => {
	res.send("hello world");
});

app.get("/info", async (req, res) => {
	try {
		let info = await syncmatica.getInfo();
		res.send(info);
	} catch (e) {
		res.status(400).send("an unexpected error has occured");
	}
});

app.listen(80, () => {
	console.log("listening to port 80");
});
