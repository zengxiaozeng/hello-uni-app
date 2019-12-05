import {
	config
} from '../config.js'

class HTTP {
	constructor() {
		this.baseUrl = config.base_url
	}

	request({
		url,
		data = {},
		method = 'GET'
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}

	_request(url, resolve, reject, data = {}, method = 'GET') {
		uni.request({
			url: `${this.baseUrl}${url}`,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'appId': config.appId,
				'token': uni.getStorageSync('AuthTokens')
			},
			success: (res) => {
				if (res.data) {
					const _success = res.data.success;
					if (_success) {
						resolve(res.data)
					} else {
						reject(res.data.message)
						const error_code = res.data.code;
						const _message = res.data.message;
						this._show_error(error_code, _message)
					}
				} else {
					resolve(res.data)
				}
			},
			fail: (err) => {
				reject()
				this._show_error(1)
			}
		})
	}

	_show_error(error_code, _message) {
		uni.showToast({
			title: `${_message}`,
			icon: 'none',
			duration: 2000
		})
	}
}

export {
	HTTP
}
