<template>
	<view class="mine-container">
		<header>
			<view class="view-header_root" v-if="hasAuthorUrserInfo">
				<view>
					<image class="avatar-img" :src="userInfo.avatarUrl | formatAvatarUrl"></image>
				</view>
				<text>{{userInfo.userName | formatUserName}}</text>
			</view>
			<view class="view-header_root" v-else>
				<userInfoBtn @onClickBtn="onGetAuthData" >
					<section class="un-auth">
						<view>
							<image class="avatar-img" :src="userInfo.avatarUrl | formatAvatarUrl"></image>
						</view>
						<text>uni-小程序</text>
					</section>
				</userInfoBtn>
			</view>
		</header>
		<main>
			<view class="top-cnt"></view>
			<view class="btm-cnt">
				<view class="view-item-container" v-for="(item, index) in cellDataArray" :key="index" @tap="jumpToLoveRecord(item)">
					<text :class="item.img"></text>
					<text v-if="index!=2" class="text-item-title">{{item.title}}</text>
					<button v-else open-type="contact" bindcontact="handleContact" class="button-item-title">{{item.title}}</button>
				</view>
				<view class="view-item-container logout-cell" @tap="logoutFansTeam">
					<text :class="logOutCell.img"></text>
					<text class="text-item-title">{{logOutCell.title}}</text>
				</view>
			</view>
		</main>

		<neil-modal :auto-close="false" :show="logout" :confirmColor="'#F73657'" @cancel="bindBtn" @confirm="bindBtn"
		 :confirmText="'确认'" :cancelText="'取消'">
			<view class="logout-modal-content">
				<view class="logout-title">是否确定</view>
			</view>
		</neil-modal>
	</view>
</template>

<script>
	import neilModal from '@/components/neil-modal/neil-modal.vue'
	import userInfoBtn from '@/components/common/userInfoBtn.vue'
	import { mapGetters } from 'vuex'

	export default {
		components: {
			neilModal,
			userInfoBtn
		},
		data() {
			return {
				cellDataArray: [
					{
						img: 'icon-font icon-redeem_icon',
						title: '路由跳转',
						type: 2,
						url: "love_record/love_record"
					},
					{
						img: 'icon-font icon-redeem_icon',
						title: '分页记录列表',
						type: 1,
						url: "love_record/love_record"
					},
					{
						img: 'icon-font icon-redeem_icon',
						title: '联系客服',
						type: 3
					}
				],
				logOutCell: {
					img: 'icon-font icon-redeem_icon',
					title: '弹框',
					type: 4
				},
				idolName: "",
				logout: false,
				newNickname: "",
				idolInfo: {},
				starUrl: ''
			}
		},
		computed: {
			...mapGetters([
				'userInfo'
			])
		},
		filters: {
			formatAvatarUrl(val) {
				if (val) {
					return val
				} else {
					return require('@/static/images/common/default-avatar.png')
				}
			},
			formatUserName(val) {
				console.log(val)
				if (val) {
					return val
				} else {
					console.log(2222)
					return 'uni-小程序'
				}
			}
		},
		onShow() {
			// this.getInitData()
		},
		methods: {
			logoutFansTeam() {
				this.idolName = this.userInfo.starName;
				this.logout = true;
			},
			onGetAuthData() {
				//获取授权成功后的数据
				console.log(3333)
			},
			//爱心记录
			jumpToLoveRecord(item) {
				switch(item.type) {
					case 1:
						uni.navigateTo({
							url: '../records/records'
						});
						break;
					case 2:
						uni.navigateTo({
							url: '../records/records'
						});
						break;
					case 4:
						this.showOffical = true;
						break;
				}
			},
			bindBtn(type) {
				this.logout = false
			}
		}
	}
</script>

<style lang="less">
	.mine-container {
		.user-info-container {
			button {
				line-height: 40upx;
			}
		}
		
	}
</style>
<style lang="less" scoped>
	.input-nickname {
		width: 462upx;
		height: 86upx;
		margin-bottom: 16upx;
		margin-top: 16upx;
		background: #FFFFFF;
		border: 1upx solid #F0F0F0;
		border-radius: 4upx;
		display: flex;
		align-items: center;

		>input {
			width: 398upx;
			margin: 16upx 32upx;
			font-family: PingFangSC-Regular;
			font-size: 28upx;
			color: #212121;
		}
	}

	.neil-modal__footer {
		border-top: 1px solid #e5e5e5;
	}

	.view-item-container {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.view-level {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100upx;
	}

	.text-level {
		margin-left: -40upx;
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #FFFFFF;
		line-height: 40upx;
	}


	.view-header_root {
		width: 750upx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: -64upx;
		padding: 0 40upx 0 30upx;
		text {
			margin-top: 20upx;
			font-size: 24upx;
			color: #fff;
		}
		.un-auth {
			display: flex;
			flex-direction: column;
		}
	}

	.view-user-info {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		// margin-right: 40upx;
		align-items: center;

		>view {
			display: flex;
			justify-content: center;
			align-items: center;

			>text {
				font-family: PingFangSC-Medium;
				font-size: 32upx;
				color: #FFFFFF;
				letter-spacing: 0;
				display: inline-block;
				max-width: 200upx;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
		}
	}

	

	.view-header_root {
		>view {
			&:nth-child(1) {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: row;
			}

			&:nth-child(2) {
				width: 436upx;
			}
		}
	}

	.avatar-img {
		width: 120upx;
		height: 120upx;
		border-radius: 60upx;
	}

	.text-question-below {
		// font-family: PingFangSC-Medium;
		font-size: 40upx;
		font-weight: 500;
		color: #FFFFFF;
		margin-left: 32upx;
	}

	.view-question {
		width: 264upx;
		margin-left: 32upx;
		margin-right: 32upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.image-question {
		width: 24upx;
		height: 24upx;
	}

	.text-question {
		font-size: 24upx;
		color: #FFFFFF;
	}

	.text-item-title {
		margin-left: 35upx;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #212121;
	}

	.button-item-title {
		margin-left: 35upx;
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #212121;
		outline: none;
		padding: 0 0;
		width: 610upx;
		background: #FFFFFF;
		text-align: start;

	}

	button::after {
		border: none;
	}


	page {
		height: 100%;

		.mine-container {
			height: 100%;
			background: #F7F7F7;

			>header {
				width: 750upx;
				height: 312upx;
				background-image: linear-gradient(-180deg, #4bbbff 0%, #157cfd 100%);
				display: flex;
				flex-direction: row;
			}

			>main {

				.btm-cnt {
					margin-top: 24upx;
					background: #fff;
					padding: 0 32upx;

					>view {
						display: flex;
						align-items: center;
						height: 120upx;
						border-bottom: 1px solid #F7F7F7;
						font-family: PingFangSC-Regular;
						font-size: 32upx;
						color: #212121;
						letter-spacing: 0;

						>image {
							width: 40upx;
							height: 40upx;
							margin-right: 30upx;
						}
					}
				}
			}
		}
	}

	.dialog-title {
		font-family: PingFangSC-Regular;
		font-size: 36upx;
		color: #000000;
		text-align: center;
	}

	.dialog-content {
		font-family: PingFangSC-Regular;
		font-size: 30upx;
		color: #888888;
		text-align: center;
		line-height: 40px;
	}

	.view-footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.logout-modal-content {
		width: 464upx;
		padding: 30upx 38upx 30upx;
		border-bottom: 1px solid #e5e5e5;
		display: flex;
		flex-direction: column;
		align-items: center;

		.logout-title {
			font-family: PingFangSC-Regular;
			font-size: 36upx;
			color: #000000;
			text-align: center;
			line-height: 50upx;
		}
	}
</style>
