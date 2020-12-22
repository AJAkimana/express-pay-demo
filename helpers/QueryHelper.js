/**
 * QueryHelper
 */
export class QueryHelper {
	/**
	 *
	 * @param {Array} model Array of object
	 */
	constructor(model) {
		this.model = model;
	}
	/**
	 *
	 * @param {String} key
	 * @param {*} value
	 */
	findOne(key, value) {
		return this.model.find((item) => item[key] === value);
	}
	/**
	 *
	 * @param {String} key
	 * @param {*} value
	 */
	findAll(key, value) {
		let items = this.model;
		if (key && value) {
			items = this.model.filter((item) => item[key] === value);
		}
		return items;
	}
	/**
	 *
	 * @param {Object} data
	 */
	create(data) {
		let item = this.findOne('id', data.id);
		if (!item) {
			this.model.push(data);
			item = data;
		}
		return item;
	}
	clearAll() {
		this.model = [];
		return [];
	}
}
