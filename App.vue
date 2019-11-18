<script>
	import {
		config
	} from './config.js'
	import {
		AppModel
	} from './models/app.js'
	const appModel = new AppModel()

	export default {
		data() {
			return {
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('on show');
			this.getLogin()
		},
		methods: {
			getLogin() {
				uni.login({
					success: function(res) {
						if (res.code) {
							const params = {
								code: res.code
							}
							appModel.login(params)
								.then(response => {
									this.$store.dispatch('setUserInfo', response.data)
   									uni.setStorageSync('AuthTokens', response.data.token)
									uni.login({
										success(response) {
											uni.setStorageSync('wxCode', response.code);
										}
									})
								})
								.catch(errors => {
									console.log(errors)
								});
						} else {
							console.log('获取用户登录态失败！' + res.errMsg);
						}
					},
					fail: function() {
						uni.showToast({
							title: '微信登录失败',
							icon: 'none'
						})
					}
				});
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
