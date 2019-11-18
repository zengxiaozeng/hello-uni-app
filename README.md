小程序的开发选型，推荐这篇文章[小程序开发：用原生还是选框架](https://juejin.im/post/5cfdcf056fb9a07ecd3d5068)

选型之类过多的话语就不说了，个人还是比较推荐uni-app，要么就原生。

废话不多说，开干。

### 一、注册
网址： [微信注册](https://mp.weixin.qq.com)，根据指引填写信息

PS：开发选型的时候一定要注意主体账号信息的分类，简单解释就是这个小程序是要干嘛的，定位要精准，小程序的上线目前越来越严格，并不是所有小程序都能过审的。比如，人脸授权这种功能，你就很难过审...如果有这个功能，我劝你放弃，走APP。
### 二、登录设置
登录后找到设置模块，在这里你可以设置一些小程序的主题信息，比较重要的就是这个`AppID(小程序ID)`，唯一的，相当于微信小程序的敲门砖

当项目是多人协作的时候，你可以添加多个开发者账号

![](https://user-gold-cdn.xitu.io/2019/11/13/16e63478e842b9a1?w=2604&h=1096&f=png&s=211485)
### 三、选框架，安装开发工具
这里用的是`uni-app`，当然`微信小程序`的`微信开发者工具`也是要安装的，微信开发者工具呢建议还是安装最新版的，原因当然是最新版的会不断加入很多新特性。`uni-app`的开发也必须安装`HBuilderX`工具，这个是捆绑的，没得选择。虽然有很多人吐槽这个`HBuilderX`，号称傻瓜式的编程工具。好吧，要用`uni-app`，你必须得<font color=red>装！！！</font>

工具安装：

[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

[HBuilderX](https://www.dcloud.io/hbuilderx.html)

至此，所有的准备工作都OK了，接下来直接进入项目开发了。

### 四、项目开发

1、新建一个`uni-app`项目
![](https://user-gold-cdn.xitu.io/2019/11/13/16e636c0f0355821?w=1082&h=764&f=png&s=952864)

![](https://user-gold-cdn.xitu.io/2019/11/13/16e638aa3f19e13a?w=1172&h=636&f=png&s=88199)
2、项目结构

![](https://user-gold-cdn.xitu.io/2019/11/13/16e6393577d5fc21?w=198&h=415&f=png&s=75145)
```
.
├─ common/              # 公用工具库文件
├─ components/          # uni-app组件目录
│  ├─ comp-a.vue        # 可复用的a组件
├─ hybrid/              # 存放本地网页的目录
├─ pages/               # 业务页面文件存放的目录
│  ├─ home/            
│  │  ├─ index.vue      # home页面
│  ├─ list/            
│  │  ├─ index.vue      # list页面
├─ platforms/           # 存放各平台专用页面的目录
├─ static               # 存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─ unpackage/           # 打包目录
├─ wxcomponents/        # 存放小程序组件的目录
├─ App.vue              #  应用配置，用来配置App全局样式以及监听
├─ main.js              # Vue初始化入口文件
├─ manifest.json        # 配置应用名称、appid、logo、版本等打包信息
├─ package.json         # 配置页面路由、导航条、选项卡等页面类信息
```
Tips:

`static` 目录下的 `js` 文件不会被编译，如果里面有 es6 的代码，不经过转换直接运行，在手机设备上会报错。

`css`、`less/scss` 等资源同样不要放在 static 目录下，建议这些公用的资源放在 `common` 目录下。

3、项目运行
[图片]
![](https://user-gold-cdn.xitu.io/2019/11/13/16e63a6536705aba?w=887&h=285&f=png&s=230798)


![](https://user-gold-cdn.xitu.io/2019/11/13/16e63a6c12cee7ed?w=1005&h=688&f=png&s=493355)
第一次运行容易报图上的错，这个时候，可以手动打开`微信开发者工具`，`扫码登录(加入开发者账号)`。然后再重新运行到小程序，或者配置微信开发者工具的默认路劲，这样一劳永逸，就不用每次先开`微信小程序`再运行项目了。
[图片]
![](https://user-gold-cdn.xitu.io/2019/11/13/16e63ac8009f6505?w=1272&h=413&f=png&s=429688)
再运行的时候通常还是容易报错...不过别着急，一步一步来

![](https://user-gold-cdn.xitu.io/2019/11/13/16e63b27b5441ada?w=1255&h=261&f=png&s=447199)

![](https://user-gold-cdn.xitu.io/2019/11/13/16e63b29a1cb35c6?w=478&h=425&f=png&s=141278)
再次重新运行小程序，终于可以编译成功了，图为demo模板的页面
[图片]
![](https://user-gold-cdn.xitu.io/2019/11/13/16e63b5da08549ff?w=413&h=734&f=png&s=112576)
当然，至此只是让你先体验一下uni-app，接下来直接进入正式开发

### 五、正式项目开发

之前的模板内容太多了，项目重新开启前还是重新建一个空的模板吧，新建项目的时候依然选择uni-app项目+默认模板

![](https://user-gold-cdn.xitu.io/2019/11/15/16e6ce9a9394e2cf?w=198&h=218&f=png&s=12850)

1.配置AppID


![](https://user-gold-cdn.xitu.io/2019/11/15/16e6ceb12035082a?w=1218&h=449&f=png&s=107626)

2.运行项目

为了方便开发，可以安装一个内置的终端，可以不用额外打开终端

![](https://user-gold-cdn.xitu.io/2019/11/15/16e6cee49b4301d3?w=195&h=43&f=png&s=2694)

3.搭建目录框架

因为使用默认模板，所以项目结构很干净。接下来先把目录框架搞定，当然你也可以按照自己的个人习惯和喜好自由设置

因为之前安装了内置终端，所以直接打开终端，会默认打开你所在的项目的根路径，直接在根路径下命令行创建目录文件

```
mkdir components models store utils
```

![](https://user-gold-cdn.xitu.io/2019/11/15/16e6cf54fb58d282?w=580&h=379&f=png&s=33964)

4.微信路由
准确的来说`uni-app`小程序也是单页面的形式。在小程序中，路由是不用自己定义的。`uni-app`路由全部交给框架统一管理，开发者需要在`pages.json`里配置每个路由页面的路径及页面样式，不支持 `Vue Router`，如图，`pages`属性值的数组内容即为路由路劲

```
{
    "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    	{
            "path": "pages/index/index",
            "style": {
            	"navigationBarTitleText": "首页",
            	"navigationBarBackgroundColor": "#FFFFFF"
            }
    	},
        {
            "path" : "pages/mine/index",
            "style" : {
            	"navigationBarTitleText": "个人中心",
            	"navigationBarBackgroundColor": "#FFFFFF"
            }
        }
    ],
    "globalStyle": {
    	"navigationBarTextStyle": "black",
    	"navigationBarTitleText": "uni-app",
    	"navigationBarBackgroundColor": "#F8F8F8",
    	"backgroundColor": "#FFFFFF"
    },
    "tabBar": {
    	"color": "#BBBBBB",
    	"selectedColor": "#212121",
    	"borderStyle": "black",
    	"backgroundColor": "#ffffff",
    	"list": [
            {
            	"pagePath": "pages/index/index",
            	"iconPath": "static/images/tabbar/fans.png",
            	"selectedIconPath": "static/images/tabbar/fans@selected.png",
            	"text": "首页"
            },
            {
            	"pagePath": "pages/mine/index",
            	"iconPath": "static/images/tabbar/mine.png",
            	"selectedIconPath": "static/images/tabbar/mine@selected.png",
            	"text": "个人中心"
            }
        ]
    }
}
```

5.`vuex`状态管理

首先，`uni-app` 内置了 `vuex`。但是`vuex`是不支持持久化存储的，所以需要结合第三方来一起协作。

默认的模板项目首先是没有`node-modules`模块依赖的，也就是说你没法进行一些第三方的扩展，所以为了让你的项目更加的灵活性，你需要执行以下命令来搭配一些第三方来更随心所欲的开发项目
```
npm init -y
npm install vuex-persistedstate --save
```

`store.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/modules/home.js'
import mine from '@/store/modules/mine.js'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
    storage: {
    	getItem: key => uni.getStorageSync(key),
        setItem: (key, value) => uni.setStorageSync(key, value),
        removeItem: key => uni.clearStorageSync(key)
    }
})

const store = new Vuex.Store({
    modules: {
    	home,
    	mine
    },
    plugins:[vuexPersisted]
})

export default store
```

`home`里面的`vuex`结构也展示一下吧

```js
const home = {
    state: {
    	...
    },
    mutations: {
    	...
    },
    actions: {
    	...
    },
    getters: {
    	...
    }
}

export default home
```

最后，在`main.js`里面引用
```js
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()

```

至此，含两个`tabbr`选项的无数据交互的小程序ui结构就搭好了。


![](https://user-gold-cdn.xitu.io/2019/11/15/16e6db090d459b76?w=307&h=552&f=gif&s=19909)

6.封装`api模块`

因为需要调用服务端的登录口子，所以我们优先把请求接口的模块给添加进来吧。

`config`配置，`appId`和`appKey`可以从[微信官方](https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=624706352&lang=zh_CN)开发模块获取到


![](https://user-gold-cdn.xitu.io/2019/11/15/16e6de7573e9b0ab?w=1286&h=613&f=png&s=79747)

```js
//uni-app内置有区别环境的不同，可以直接通过process.env.NODE_ENV获取
//！！！注意，这里的接口当然是不能访问的，正式的api接口是商业保密的，后期抽时间用node来补上吧。项目无法正常接口请求，请谅解。但是跟着我的思路，把一个项目跑起来是没有任何问题的。
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
```
封装接口请求

```js
import {
	config
} from '../config.js'

class HTTP {
	constructor() {
		this.baseUrl = config.base_url
	}

	request({
		url,
		data = {},
		method = 'GET'
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method)
		})
	}

	_request(url, resolve, reject, data = {}, method = 'GET') {
		uni.request({
			url: url,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'appId': config.appId,
				'token': uni.getStorageSync('AuthTokens')
			},
			success: (res) => {
				if (res.data) {
					const _success = res.data.success;
					if (_success) {
						resolve(res.data)
					} else {
						reject(res.data.message)
						const error_code = res.data.code;
						const _message = res.data.message;
						this._show_error(error_code, _message)
					}
				} else {
					resolve(res.data)
				}
			},
			fail: (err) => {
				reject()
				this._show_error(err.message)
			}
		})
	}

	_show_error(error_code, _message) {
		uni.showToast({
			title: `${_message}`,
			icon: 'none',
			duration: 2000
		})
	}
}

export {
    HTTP
}
```
到此Api请求的模块就封装好了，现在开始做接口请求必须携带的`AuthTokens`秘钥

因为小程序肯定会频繁的切换后台或者直接切回首页面，结合小程序的生命周期等，在首页的主入口一般都会调一次登录口子，获取秘钥`token`

`App.vue`

```js
import { AppModel } from './models/app.js'
const appModel = new AppModel()

onShow: function() {
    console.log('on show');
    this.getLogin()
},

methods: {
    getLogin() {
        uni.login({
            success: function(res) {
                if (res.code) {
                    appModel.login({
                        code: res.code
                    }).then(response => {
                        this.$store.dispatch('setUserInfo', response.data)
                        //这里存储了之后，等再进入小程序获取数据或其它的Api交互时，就可以带上放在header头中去向服务端发起请求
                        uni.setStorageSync('AuthTokens', response.data.token)
                        uni.login({
                            success(response) {
                                uni.setStorageSync('wxCode', response.code);
                            }
                        })
                    }).catch(errors => {
                        console.error(errors)
                    })
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
```

`AppModel`的接口定义，按照如下标准直接定义即可

```js
import { HTTP } from '../utils/http.js'

class AppModel extends HTTP {
    login(params) {
        return this.request({
            url: `${this.baseUrl}/user/login`,
            method: 'POST',
            data: params
        })
    }
}

export { AppModel }
```

上面还应用了`vuex`的状态管理`this.$store.dispatch('setUserInfo', response.data)`，所以你还要到`store`下的`home` `modules模块`做好状态管理，主要还是`vuex`的日常操作。一般来说同步存储只要放`mutations`里面定义即可，主要还是看个人习惯吧

```js
state: {
    userInfo: {}
},
mutations: {
    SET_USER_INFO: (state, userInfo) => {
    	state.userInfo = userInfo
    }
},
actions: {
    // 缓存用户信息
    setUserInfo({
        commit
    }, userInfo) {
    	commit('SET_USER_INFO', userInfo)
    }
},
getters: {
    userInfo: state => state.userInfo
}
```

### 六、静默授权

<font color=red>授权登录</font>是一大重点，在项目刚开始开发的时候尤其要注意。小程序目前已有官方规定明确禁止新用户初次打开小程序就唤起授权登录获取用户信息的弹框，也就是说，如果你不当回事的话，即使开发完毕发布，微信官方团队也会直接咔嚓回。那个时候再改，代价就太大了

所以呢，目前采用的是静默授权登录的方式。什么是静默授权呢，就是新用户进入你的小程序后，他可以无障碍的访问你的小程序，当他需要分享、进详情页、交互动作、点赞、购买...需要深一层次体验我们的小程序的时候，这个时候唤起授权弹窗让用户授权之后再继续下一步是合理的。

接下来是授权登录的实现。暂时把它放在`个人中心`的头像区域吧

1.找到`pages`-->`mine`页面

在`ui`搭建的工程中，项目默认引用`less`预处理，虽然不用安装第三方依赖，都是`uni-app`内置的，但是想要让项目正常运行，还是要安装编译时的对应工具，否则会报错


![](https://user-gold-cdn.xitu.io/2019/11/15/16e6e42bcc3fc7fe?w=1017&h=45&f=png&s=51059)

工具--->插件安装

![](https://user-gold-cdn.xitu.io/2019/11/15/16e6e438e1a2a2f8?w=707&h=230&f=png&s=79947)

然后安装对应的依赖即可，再重新运行项目


![](https://user-gold-cdn.xitu.io/2019/11/15/16e6e44e8d839fd0?w=725&h=124&f=png&s=22540)

为了统一`静默授权`处理，还是抽离一个公共组件，存放在`components`->`common`->`userInfoBtn.vue`。

要调取用户的授权登录，必须调用微信自带的`button`控件才行，包括后面的`分享`功能模块也一样。必须要用到它里面自带的`open-type`属性。

引用微信自带的`button`当然会有很多丑陋的问题，比如样式，所以这里还是要重置下样式

```js
<template>
    <view class="user-info-container">
        <button class="user-info-btn" open-type="getUserInfo" @getuserinfo="mpGetUserInfo" withCredentials="true">
            <slot></slot>
        </button>
    </view>
</template>

<script>
import {
    AppModel
} from '@/models/app.js'
const appModel = new AppModel();
export default {
    name: 'userInfoBtn',
    data() {
        return {
            userInfo: {}
        }
    },
    methods: {
        mpGetUserInfo(result) {
            //根据调用系统自带button携带的result信息判断是否有授权信息
            if (result.detail.errMsg !== 'getUserInfo:ok') {
                wx.showToast({
                    title: '取消授权',
                    icon: 'none',
                    duration: 2000
                })
                //hasUserInfo为存储用户是否授权信息
                uni.setStorageSync('hasUserInfo', false)
                return;
            }
            wx.checkSession({
                success() {
                    console.log('有效');
                    //因为用户授权后需求获取用户授权信息，所以这里必传encryptedData、iv两个参数获取用户头像和昵称信息
                    appModel.login({
                        code: uni.getStorageSync('wxCode'),
                        encryptedData: result.detail.encryptedData,
                        iv: result.detail.iv
                    }).then(response => {
                        this.$store.dispatch('setUserInfo', response.data)
                        uni.setStorageSync('AuthTokens', response.data.token)
                        uni.setStorageSync('hasUserInfo', true)
                        this.$emit('onClickBtn')
                        this.userInfo = result.detail.userInfo
                        uni.login({
                            success(response) {
                                uni.setStorageSync('wxCode', response.code);
                            }
                        })
                    })
                },
                fail() {
                    console.log('失效');
                    uni.login({
                        success: function(res) {
                            if (res.code) {
                                uni.setStorageSync('wxCode', res.code);
                                const params = {
                                    code: res.code
                                }
                                appModel.login({
                                    code: uni.getStorageSync('wxCode'),
                                    encryptedData: result.detail.encryptedData,
                                    iv: result.detail.iv
                                }).then(response => {
                                    uni.login({
                                        success(response) {
                                            uni.setStorageSync('wxCode', response.code);
                                        }
                                    })
                                    this.$store.dispatch('setUserInfo', response.data)
                                    uni.setStorageSync('AuthTokens', response.data.token)
                                    uni.setStorageSync('hasUserInfo', true)
                                    this.$emit('onClickBtn')
                                    this.userInfo = result.detail.userInfo
                                })
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
            })
        },
    }
}
</script>

// 样式重置，这里的样式坑是必踩的
<style lang="less" scoped>
    .user-info-btn::after {
        border: 0;
    }
    
    .user-info-btn {
        background-color: transparent;
        line-height: 0;
        padding: 0;
        font-size: 0;
    }
</style>
```

2.引用上面的封装授权按钮

```js
<header>
	<view class="view-header_root" v-if="hasAuthorUrserInfo">
		<view>
			<image class="avatar-img" :src="userInfo.avatarUrl | formatAvatarUrl"></image>
			<image class="avatar-img2" :src="starUrl" v-if="userInfo.starId > 0"></image>
		</view>
		<text>{{userInfo.userName | formatUserName}}</text>
	</view>
	<view class="view-header_root" v-else>
		<userInfoBtn @onClickBtn="onGetAuthData" >
			<section class="un-auth">
				<view>
					<image class="avatar-img" :src="userInfo.avatarUrl | formatAvatarUrl"></image>
					<image class="avatar-img2" :src="starUrl" v-if="userInfo.starId > 0"></image>
				</view>
				<text>uni-小程序</text>
			</section>
		</userInfoBtn>
	</view>
</header>

methods: {
    onGetAuthData() {
    	//授权成功后的回调事件
    	console.log('success')
    }
}
```

这里说一个小技巧，在`vue`项目中引用第三方UI框架时，肯定会涉及到修改样式的问题。由于我们在Vue文件中加入了`scoped`属性，就是为了防止页面之间的样式污染，所以你想要修改样式的话，有两种方式，第一种是新起一个`style`，不加`scoped`，然后严格遵循`BEM`命名模式修改样式，尽量避免样式污染其它页面。第二种就是引用`css`的`/deep/`，如

```js
<style lang="less" scoped>
/deep/ .user-info-btn {
    background-color: red;
}
</style>
```
至此静默授权的组件封装和功能都实现完毕了。还是要再强调一遍，目前开发的小程序必须采用静默授权登录的方式，否则你很大概率会被拒...

### 七、功能扩展

为了让这个项目不至于这么空壳，计划加入一些常用的功能，比如记录列表上拉加载，下拉刷新、轮播图、分享、开屏广告页、在线客服引入...

1.上拉加载、下拉刷新


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7c5fdc49a2256?w=320&h=568&f=gif&s=2020180)

入口就是在个人中心的`分页记录列表`

首先加页面路由，在`page`目录下新增一个`records`页面，然后在项目根目录下的`pages.json`挂载上，如果要新开页面的话，都要在这个目录下注册页面

如动态图所示，这里还抽了一个`tab`选项卡的小组件。直接开箱即用就行。

上拉加载下拉刷新在`uni-app`官网上其实是有介绍的。这里单独取出来是因因为接口都配置好了，只要替换成你项目中的服务端数据和修改下样式即可，功能是已经实现了的。代码就不全贴了，直接大致介绍下功能点吧

上拉加载下拉刷新这功能大致分两种情况，第一种是整个页面的上拉下拉，这种实现比较简单，首先当然是要在项目根目录下的`pages.json`声明页面的可加载属性

```js
{
    "path" : "pages/records/records",
    "style" : {
        ...
        "enablePullDownRefresh": true
    }
}
```

然后主要实现两个方法功能

```js
//页面上拉触底事件的处理函数
onReachBottom() {
},
//页面下拉初始化刷新
onPullDownRefresh() {
}
```

是否加载完毕可以在服务端接口返回数据中对对象做处理，对应的业务在代码中都有实现好，因为接口无法正常调用，所以你要使用的话，需要替换成你自己联调的接口。

2.联系客服

小程序要做好的话，那细节之处肯定是必不可少的。比如客服功能的引入，实时根据用户的反馈完善或者修复问题

小程序中不需要你额外接入在线聊天工具，当然，如果你想体验性做得好点，那可以多投入些精力做好实施聊天这一大模块。这里简单介绍一下用小程序自带的反馈聊天模块

首先，还是得应用微信自带的`button按钮`,指定`open-type`的值为`contact`
```js
<button open-type="contact" bindcontact="handleContact" class="button-item-title">{{item.title}}</button>
```
在小程序中，开发者可以登录 `微信小程序管理后台`，进入菜单“客服反馈”页面获取反馈内容


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7d60f3c38e6c3?w=1406&h=691&f=png&s=112792)

3.分享

说完联系客服顺便说下分享吧，都是同样的套路，同样是应用微信自带的`button按钮`,指定`open-type`的值为`share`，然后在`vue`属性上指明你要分享的内容

```js
onShareAppMessage() {
    return {
    	title: `分享的标题`,
    	path: `/pages/mine/index?id=${分享要带的参数}`,
    	imageUrl: `分享的url`
    }
}
```

分享出去的携带的参数`id`提取的方式是利用小程序的生命周期函数`onLoad`
```
onLoad(option) {
    console.log(option)
    this.id = option.id
}
```

4.轮播图+跳转第三方url

同样封装成一个工具库`components->common->swiper.vue`，工具类就不多说了，引用的是系统自带的[swiper](https://uniapp.dcloud.io/component/swiper?id=swiper-item)组件

这里介绍一下跳转第三方url页吧，包括在UI搭建阶段轮播图引用其它外域链接的图片url，这两个其实算是一类问题。

`微信安全规范`里面，是明确禁止没有在`微信开发者后台`加入合法域名时，加入任何的外域链接都为非法链接，也就是说，即使是联调的服务端接口，也得把合法域名加进微信的`服务器域名名单`，包括使用微信拍照或者上传图片都必须额外加上这个合法域名名单，图片信息才能正常显示，接口才能正常引用。配置详情如下

[配置路径](https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=1531766382&lang=zh_CN)


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7d7160bf9f048?w=1446&h=653&f=png&s=148629)

配置完后微信开发者工具详情栏目里项目配置里会出现合法域名信息
![](https://user-gold-cdn.xitu.io/2019/11/18/16e7d7716990a216?w=407&h=486&f=png&s=38594)
或者在开发环境时可以把这里勾上，但最终项目上线后还是得记得配置对应的合法域名信息

配置好后，当你的轮播图对应的是后台的详情地址或者是微信公众号的内容时，才能够正确跳转到对应的路径中。唯一要注意的是，在本地微信开发者工具是无法测试这一功能的，最好用真机测试，否则还是要务必保证你的合法域名都在微信后台添加上了，并且本地设置也去除了合法域名的校检


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7d805c3a3ec66?w=386&h=442&f=png&s=43168)

```js
//轮播图跳转第三方url
uni.navigateTo({
    url: `bannerWebView?url=${encodeURIComponent(url)}`
})
```

如上代码所示，详情页跳转第三方url，你必须得新开一个页面`bannerWebview`作为第三方路劲承载的容器，当然，别忘了路由注册。这里，你要跳转的`url`最好`encodeURIComponent(url)`，然后在`bannerWebview`文件中，利用微信自带的`<web-view :src="url"></web-view>`，即可进行第三方页面的跳转，再次强调一遍，跳转第三方最好用真机做测试。

这样，轮播图功能就搞定了

扩展功能就先做这些吧，后续有时间再加一下上去...


### 八、开屏广告页

现在很多大流量的APP在首次打开时会有一个3~7S不等的小广告，当然，做得有好点你可以让他随时都能跳过。小程序里面也有广告页这样的概念，接下来就让我们来实现一下吧

首先是广告页的入口构思，广告页放哪个位置合适呢？是放首页作为弹窗出现？？？还是作为小程序主入口出现？？？因为广告页不可能每次打开小程序都出现一次广告，那用户肯定十分反感，过度挑战用户的耐心，肯定难逃被用户卸载的下场...一般合理一点的需求就是每天的第一次打开时，加入一个3~7S不等的小广告。接下来我们来实现一下作为主入口出现的小广告。

首先，在`pages.json`注册页面路由，这里务必要注意一点，pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages，所以要动pages数组第一项值，改为广告页

```
"pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
        "path": "pages/ads/index",
        "style": {
            "navigationBarTitleText": "uni-小程序",
            "navigationBarBackgroundColor": "#FFFFFF"
        }
    },
    ... //紧跟其它的页面
]
```

广告页无非就是一个定时器，然后加一张海报或者由后台动态配置图片内容。这里提几个小点应该注意的地方，广告页肯定分打开的时机，也就是说你得判断好广告页按规定时间展示，不能每次打开都有广告页的出现。这里可以让服务端传给你一个参数。

计数器结束后，可以立即跳转到小程序首页，并且终止定时器

```
methods: {
    uni.reLaunch({
        url: '/pages/index/index'
    })
},
onHide() {
    //清除定时器 
    this.clearTimer()
}
```

广告页功能的最后，打测试包或者正式包的时候一定要记得修改主入口页信息！！！否则上线后会一片空白，等广告页定时器结束之后才到主页

### 九、发布测试

打开微信开发者工具，在工具栏找到上传，填写版本号，发布。测试版本号可以随意填写，不过建议还是规范一点写比较好

![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dc29da934523?w=1147&h=338&f=png&s=55178)

上传成功之后，可以打开[微信开发者管理后台](https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=1531766382&lang=zh_CN)，现在可以看到开发者的版本


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dc6480c472ee?w=1728&h=894&f=png&s=105694)

然后指定小程序的主入口页，主要参照`pages.json`属性值`pages数组`的第一项的值


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dc7c27981747?w=618&h=475&f=png&s=27998)

然后，就可以作为体验版本提交了。

### 九、发布正式

测试版本和正式版本还是有差距的。正式版本中，因为小程序发版限制在2M以内，所以有几点务必要引起注意

- 图片用`CDN`，不要用本地图片加载，图片内容太大
- 确认涉及到这些功能点的域名信息在`微信开发后台管理`中有配置

![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dcb649d14cf5?w=383&h=490&f=png&s=35407)
- 使用[iconFont](https://www.iconfont.cn/)替代纯色小图标
- 尽量不要引用第三方字体
- 雪碧图
- ... ...

发布上线。

测试发版只要在开发者工具中直接打包上线即可，没有这么多的条条框框。但是正式版发版就不一样了，就最关键的一点，开发版和正式版的服务端域名肯定不一样吧？！所以，为了避免每次发版手动频繁修改配置接口，造成哪次不小心把测试版的发线上去，最好做个区分，把开发环境和正式环境区分开来。发正式版本的时候打正式环境的包

主要配置呢就是在根目录新建个`config.js`文件，区分开发和正式版就是自带的`process.env.NODE_ENV`属性值

```js
if (process.env.NODE_ENV == 'development') {
    BASE_URL = '192.168.1.1:8090' // qe环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
```

然后打正式包的时候，选择`HBuilderX`开发工具工具栏`发行->小程序（微信）`


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dd4dc2820bad?w=639&h=139&f=png&s=59018)

然后检查`小程序名称+AppId`，确认无误点击发行，会再在微信开发者工具里开一个窗口，运行同样的小程序。区别只是域名地址不一样了，开发版本是本地ip，发行后的服务域名是正式的线上地址。以防万一，可以打开微信开发者工具栏的工具面板查看一下域名是否正确

![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dd5f44ad5e26?w=433&h=243&f=png&s=24829)


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dd947082d022?w=620&h=295&f=png&s=46810)

确认无误后再重复测试版本发版即可


![](https://user-gold-cdn.xitu.io/2019/11/18/16e7dda738c710bf?w=919&h=307&f=png&s=34994)

至此，小程序的开发到上线就全部完成了。

### 十、题外话

还是回归到框架的选型来讲讲，选用`uni-app`开发小程序，打包上传后，代码竟惊人的被压缩到了`1M以内`。相对比`mpvue`就重了不少，有大`1M多`。

当时并行做的是两个小程序，基于`mpvue`和基于`uni-app`，结果是`mpvue`因为前期问题不断，导致发版被拒次数增多，最后都修复完全正式上线之后，再更新迭代，审核的时间依然长的很。但是`uni-app`做的小程序就没这个问题了，前期的几版发版比较顺利的话，后期再更新迭代，那速度真是嗖嗖的，普遍都是在一个工作日内。等信用（通过率）累计到了一定程度，会直接上微信审核的`白名`单，开启`半小时审核急速上线`的通道，真香~

好了，基于`uni-app`的小程序开发到此结束了，喜欢的话请多赐个<font size=15 color=red>赞!!!</font>吧。

### 十、Github源码

[手把手带你搭建React16+Router+Redux-saga+Antd后台管理系统](https://juejin.im/post/5dbd891851882524cb79547f)

### 十一、基于React+Redux-saga的实战项目

[手把手带你搭建React16+Router+Redux-saga+Antd后台管理系统](https://juejin.im/post/5dbd891851882524cb79547f)



























