
import {
		FormIdModel
	} from '@/models/form-id.js'
const formIdModel = new FormIdModel();

export default {
  methods: {
	  // 设置type属性的意为区分不同类型传过来的formId值
	  getFormIdData(formId, type = 1) {
	  	const params = {
	  		formId,
	  		type
	  	}
	  	formIdModel.getFormId(params)
	  		.then(res => {
	  		})
	  		.catch(err => console.log(err))
	  },
  }
}