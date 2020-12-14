import { db } from "./index";
import { DBInfo } from "./types/dbinfo";

export class Syncmatica {
	constructor() {
		this.initDatabase();
	}

	initDatabase() {
		db.run("CREATE TABLE IF NOT EXISTS syncmatics (name TEXT, content BLOB)")
	}

	async getInfo(): Promise<DBInfo> {
		let { amount } = await db.async_get("SELECT count() as amount FROM syncmatics;") as any;
		console.log(amount);

		return {
			amount: amount,
		} as DBInfo;
	}
}