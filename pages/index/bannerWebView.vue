<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				url: ''
			}
		},
		onLoad: function(options) {
			this.url = decodeURIComponent(options.url); //注意，此赋值方法不是微信官方赋值方法，页面无法获取数据
			console.log(this.url)
		}
	};
</script>
<style>
	page {
		height: 100%;
	}
</style>
<style lang="less" scoped>
	.webViewWrap {
		width: 750rpx;
		height: 100%;
	}
</style>
