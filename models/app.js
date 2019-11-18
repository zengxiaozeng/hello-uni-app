import { HTTP } from '../utils/http.js'

class AppModel extends HTTP {
	login(params) {
        return this.request({
            url: `${this.baseUrl}/user/login`,
			method: 'POST',
			data: params
        })
    }
}

export { AppModel }