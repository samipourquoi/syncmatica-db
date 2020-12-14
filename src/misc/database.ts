import * as sqlite3 from "sqlite3";
import { RunResult, Statement } from "sqlite3";

export class Database extends sqlite3.Database {
	constructor(db: string) {
		super(db);
	}

	async_run(sql: string, vars: any[] = []): Promise<RunResult> {
		return new Promise((resolve, reject) => {
			this.run(sql, vars, (data: RunResult, err: Error) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	}

	async_get(sql: string, vars: any[] = []): Promise<Statement> {
		return new Promise((resolve, reject) => {
			this.get(sql, vars, (err: Error, data: Statement) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	}

	async_all(sql: string, vars: any[] = []): Promise<Statement> {
		return new Promise((resolve, reject) => {
			this.all(sql, vars, (data: Statement, err: Error) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	}
}