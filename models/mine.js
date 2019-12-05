import { HTTP } from '../utils/http.js'

class MineModel extends HTTP {
	
	// 爱心记录查询
	loveList(params) {
	    return this.request({
	        url: `/love_list`,
			method: 'POST',
			data: {
				currentPage: params.currentPage,
				loveType: params.loveType,
				pageSize: params.pageSize
			}
	    })
	}
	
	// 兑换记录查询
	exchangeRecordList(params) {
	    return this.request({
	        url: `/exchange_record_list`,
			method: 'POST',
			data: {
				...params
			}
	    })
	}
}

export { MineModel }