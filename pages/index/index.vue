<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<Swiper
			class="swiper-container"
			:bannerList="bannerList"
			:indicatorDots="indicatorDots">
		</Swiper>
		<button type="warn" open-type="share">分享</button>
		<form class="hotFormId" @submit="getFormIdValue" report-submit='true'>
			<button formType="submit" type="primary">获取formId</button>
		</form>
	</view>
</template>

<script>
	import Swiper from '@/components/common/swiper.vue'
	import formIdMixin from '@/utils/form-id-mixins.js'
	
	export default {
		components: {
			Swiper
		},
		mixins: [formIdMixin],
		data() {
			return {
				title: 'Hello',
				bannerList: [
					{
						id: 1,
						imageUrl: require('@/static/images/index/swiper_01.png'),
						forwardUrl: 'https://www.baidu.com'
					},
					{
						id: 2,
						imageUrl: require('@/static/images/index/swiper_02.png'),
						forwardUrl: 'https://www.baidu.com'
					},
					{
						id: 3,
						imageUrl: require('@/static/images/index/swiper_03.png'),
						forwardUrl: 'https://www.baidu.com'
					}
				],
				indicatorDots: true
			}
		},
		onShareAppMessage() {
		    return {
		    	title: `hello world`,
		    	path: `/pages/mine/index`,
		    	imageUrl: require('@/static/images/index/swiper_01.png')
		    }
		},
		onLoad() {

		},
		methods: {
			getFormIdValue(e) {
				console.log(e.detail.formId)
				this.getFormIdData(e.detail.formId, 2)
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 50rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.swiper-container {
		width: 100%;
	}
</style>
