<template>
    <view class="yx-tab-wrap" :style="{backgroundColor: bgColor}">
        <view class="yx-tab-item"
			v-for="(item, index) in tabData" 
			:key="index" @click="clickTab(item, index)">
			<text v-if="seletedIndex === index" :style="{color: txtActiveColor}">{{item}}</text>
			<text v-else :style="{color: txtColor}">{{item}}</text>
			<text class="yx-tab-under-line" v-if="seletedIndex === index" :style="{backgroundColor: underLineColor}"></text>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
			// tab背景颜色
            bgColor: {
                type: String,
                default(){
                    return '#F73657';
                }
            },
			// tab文字默认颜色
			txtColor: {
				type: String,
                default(){
                    return '#FFFFFF';
                }
			},
			// tab激活状态文字颜色
			txtActiveColor: {
				type: String,
                default(){
                    return '#FFFFFF';
                }
			},
			// 是否显示underLine
			showUnderLine: {
				type: Boolean,
				default() {
					return true;
				}
			},
			// underLine的颜色
			underLineColor: {
				type: String,
                default(){
                    return '#FFFFFF';
                }
			},
			// tab项为数组
            tabData: {
                type: Array,
                default() {
                    return ['demo1', 'demo2', 'demo3'];
                }
            }
        },
        data() {
            return {
                seletedIndex: 0
            };
        },
		methods: {
			clickTab(item, index) {
				this.seletedIndex = index;
				this.$emit('seletedTab', index);
			}
		}
    }
</script>

<style scoped>
    .yx-tab-wrap {
        width: 750upx;
        height: 94upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		background: #F73657;
    }
    
    .yx-tab-item {
        font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #FFFFFF;
		letter-spacing: 0;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		position: relative;
    }
	
	.yx-tab-active {
		color: #FFFFFF;
	}
	
	.yx-tab-under-line {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 6upx;
		border-radius: 3upx;
		background: #FFFFFF;
	}
</style>
