import axios from "axios";
import { createStat } from "./stats-db";

export type FetchStat = {
	url: string;
	method: string;
	status: number;
	duration: number;
	timestamp: number;
};

export const api = axios.create({
	baseURL: "/api",
});

export const swapi = axios.create({
	baseURL: "https://swapi.tech/api",
});

swapi.interceptors.request.use(
	(config) => {
		config.metadata = { startTime: performance.now() };
		return config;
	},
	(error) => Promise.reject(error),
);

swapi.interceptors.response.use(
	async (response) => {
		const endTime = performance.now();
		const startTime = response.config.metadata?.startTime || endTime;
		const duration = endTime - startTime;

		const stat: FetchStat = {
			url: response.config.url || "",
			method: response.config.method?.toUpperCase() || "GET",
			status: response.status,
			duration,
			timestamp: Date.now(),
		};

		try {
			await createStat({
				...stat,
				timestamp: new Date(stat.timestamp),
			});
		} catch (error) {
			console.error("Failed to save stat:", error);
		}

		return response;
	},
	async (error) => {
		const endTime = performance.now();
		const startTime = error.config?.metadata?.startTime || endTime;
		const duration = endTime - startTime;

		const stat: FetchStat = {
			url: error.config?.url || "",
			method: error.config?.method?.toUpperCase() || "GET",
			status: error.response?.status || 0,
			duration,
			timestamp: Date.now(),
		};

		try {
			await createStat({
				...stat,
				timestamp: new Date(stat.timestamp),
			});
		} catch (error) {
			console.error("Failed to save stat:", error);
		}

		return Promise.reject(error);
	},
);

declare module "axios" {
	interface AxiosRequestConfig {
		metadata?: {
			startTime: number;
		};
	}
}
