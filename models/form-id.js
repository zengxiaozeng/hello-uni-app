import { HTTP } from '../utils/http.js'

class FormIdModel extends HTTP {
	getFormId(params) {
        return this.request({
            url: `/api/getFormId`,
			method: 'POST',
			data: params
        })
    }
}

export { FormIdModel }