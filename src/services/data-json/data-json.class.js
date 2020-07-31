/* eslint-disable no-unused-vars */
exports.DataJson = class DataJson {
	constructor(options, data) {
		this.options = options || {};
		this.data = [];
	}
	async find(params) {
		console.log(this.data);
		return this.data;
	}

	async get(id, params) {
		return this.data;
	}

	async create(data, params) {
		if (Array.isArray(data)) {
			return Promise.all(data.map((current) => this.create(current, params)));
		}
		this.data = data;
		return data;
	}

	async update(id, data, params) {
		return data;
	}

	async patch(id, data, params) {
		return data;
	}

	async remove(id, params) {
		return { id };
	}
};
