<template>
	<section class="records-container">
		<header>
			<yx-tab :tabData="tabData.tabName" @seletedTab="changeTab" :txtActiveColor="'#F84C69'" :txtColor="'#212121'"
			 :bgColor="'#FFFFFF'" :underLineColor="'#F84C69'"></yx-tab>
		</header>
		<main>
			<ul v-if="dataArray && dataArray.length > 0">
				<li v-for="(item, index) in dataArray" :key="index">
					<p>
						<text>{{item.loveClass | formatStarName}}</text>
						<text v-if="selectedTab === 0">+{{item.loveCount}}</text>
						<text v-else>-{{item.loveCount}}</text>
					</p>
					<text>{{item.createTime}}</text>
				</li>
			</ul>
			<section v-else>
				<image lazy-load=true :src="noDataUrl"></image>
				<p>暂无记录</p>
			</section>
		</main>
		<footer v-if="showLoadMore">{{loadMoreText}}</footer>
	</section>
</template>

<script>
	import YxTab from '@/components/common/yxTab.vue'
	import { MineModel } from '@/models/mine.js'
	const mineModel = new MineModel()
	
	export default {
		components: {
			YxTab
		},
		data() {
			return {
				noDataUrl: require('@/static/images/common/not-result.png'),
				dataArray: [],
				pagination: {
					page: 0,
					size: 20,
					totalNumber: 0
				},
				loadMoreText: "加载中...",
				showLoadMore: false,
				isRefresh: true,
				selectedTab: 0,
				tabData: {
					isActive: 0,
					tabName: ["获取记录", "送出记录"]
				}
			}
		},
		filters: {
			formatStarName(val) {
				switch (val) {
					case 2:
						return '任务'
					case 3:
						return '抽奖'
					case 7:
						return '赠送'
					case 9:
						return '奖励'
					case 10:
						return '补偿'
				}
			}
		},
		onLoad: function (options) {
			this.getInitData(0)
		},
		onUnload() {
			this.dataArray = []
			this.loadMoreText = "加载更多"
			this.showLoadMore = false
		},
		//页面上拉触底事件的处理函数
		onReachBottom() {
			if (!this.isRefresh) {
				this.loadMoreText = "~ 没有更多数据了 ~"
				return
			}
			this.loadMoreText = "加载中..."
			this.showLoadMore = true
			this.pagination.page ++
			this.getInitData(this.pagination.page)
		},
		//页面下拉初始化刷新
		onPullDownRefresh() {
			this.dataArray = []
			this.pagination.page = 0
			this.loadMoreText = ""
			this.getInitData(this.pagination.page)
		},
		methods: {
			getInitData(page) {
				uni.showLoading({
					title: '正在加载...'
				})
				mineModel.loveList({
					currentPage: page,
					loveType: this.selectedTab + 1,
					pageSize: this.pagination.size
				})
					.then(res => {
						this.dataArray = this.dataArray.concat(res.data.list)
						if (res.data.list.length < this.pagination.size) {
							this.isRefresh = false
						} else {
							this.isRefresh = true
						}
						uni.hideLoading()
						uni.stopPullDownRefresh()
					})
					.catch(err => {
						console.log(err)
						uni.hideLoading()
						uni.stopPullDownRefresh()
					})
				
			},
			changeTab(index) {
				this.showLoadMore = false
				this.dataArray = []
				this.selectedTab = index;
				this.getInitData(0);
				console.log(this.selectedTab)
			}
		}
	}
</script>

<style lang="less" scoped>
	.records-container {
		position: relative;
		>header {
			position: fixed;
			top: 0;
			left: 0;
			width: 750upx;
			z-index: 1;
		
			/deep/ .yx-tab-wrap {
				width: 390upx;
				padding: 0 180upx!important;
			}
		
			border-bottom: 1upx solid #f0f0f0;
		}
		>main {
			padding: 94upx 30upx 0 30upx;
			>ul {
				>li {
					height: 155upx;
					border-bottom: 1upx solid #E5E5E5;
					display: flex;
					flex-direction: column;
					justify-content: center;
					>p {
						display: flex;
						justify-content: space-between;
						font-size: 36upx;
						color: #212121;
						line-height: 50upx;
						margin-bottom: 8upx;
					}
					>text {
						font-size: 24upx;
						color: #9E9E9E;
						line-height: 33upx;
					}
				}
			}
			>section {
				text-align: center;
				padding-top: 280upx;
				>image {
					height: 300upx;
					width: 300upx;
				}
				>p {
					font-size: 28upx;
					color: #757575;
					line-height: 40upx;
					margin-top: 6upx;
				}
			}
		}
		>footer {
			height: 120upx;
			line-height: 120upx;
			text-align: center;
		}
	}
</style>
