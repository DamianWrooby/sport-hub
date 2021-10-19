import axios from "axios";
import { API_URL } from "../config/config";

export const ApiService = {
	init() {
		axios.defaults.baseURL = API_URL;
	},

	get(resource, id = "") {
		return axios.get(`${resource}/${id}`).catch(error => {
			throw new Error(`ApiService ${error}`);
		});
	},

	post(resource, params) {
		return axios.post(`${resource}`, params).catch(error => {
			throw new Error(`ApiService ${error}`);
		});
	},

	update(resource, params) {
		return axios.put(`${resource}`, params).catch(error => {
			throw new Error(`ApiService ${error}`);
		});
	},

	delete(resource) {
		return axios.delete(resource).catch(error => {
			throw new Error(`ApiService ${error}`);
		});
	}
};

ApiService.init();

export const SavedUnitsService = {
	get(id) {
		return ApiService.get("saved-units", id);
	},

	create(params) {
		return ApiService.post("saved-units", params);
	},

	update(id, params) {
		return ApiService.update(`saved-units/${id}`, params);
	},

	destroy(id) {
		return ApiService.delete(`saved-units/${id}`);
	}
};
