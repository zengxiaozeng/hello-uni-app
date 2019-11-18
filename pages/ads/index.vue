<template>
	<view class="ads-container">
		<image class="ads-img" :src="ads" lazy-load=true mode="aspectFill"></image>
		<text v-if="isCountDownShow && isClickSkip === 0" @click="skipTo">{{countDownTime}}</text>
	</view>
</template>

<script>

export default {
	name: "ads",
	data() {
		return {
			ads: require('@/static/images/feifei.jpg'),
			countDownTime: '',
			seconds: 5,
			timer: null,
			isCountDownShow: false,
			isClickSkip: 0
		}
	},
	onReady() {
		this.initData()
	},
	methods: {
		initData() {
			this.isCountDownShow = true
			
			this.countDown(this.seconds)
		},
		skipTo() {
			this.clearTimer()
			uni.reLaunch({
			    url: '/pages/index/index'
			})
		},
		// 倒计时
		countDown(times) {
			const _self = this
			_self.timer = setInterval(function() {
				_self.countDownTime = `${times}s`
				times--
				if (times < -1) {
					_self.countDownTime = ''
					_self.clearTimer()
					uni.reLaunch({
					    url: '/pages/index/index'
					})
				}
			}, 1000)
		},
		clearTimer() {
			clearInterval(this.timer)
			this.timer = null
		}
	},
	onHide() {
		this.clearTimer()
	}
};
</script>
<style lang="less">
page {
	height: 100%;
}
.ads-container {
	position: relative;
	width: 750rpx;
	height: 100%;
	>.ads-img {
		width: 750rpx;
		height: 100%;
	}
	>text {
		position: fixed;
		top: 20upx;
		right: 20upx;
		width: 80upx;
		border-radius: 80upx;
		background-color: rgba(0, 0, 0, 0.5);
		color: #fff;
		font-size: 26upx;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
	}
}
</style>
