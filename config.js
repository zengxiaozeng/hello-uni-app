let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = '192.168.1.1:8090' // qe环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wxeb407bb6c397aa4c',
	appKey: '675aeecfdac05b6b82b9910a8fd00e88'
}

export { config }