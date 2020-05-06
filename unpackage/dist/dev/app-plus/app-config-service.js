
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/mine/mine","pages/index/search-index/search-index","pages/index/index-publish/index-publish","pages/news/topic-sort/topic-sort","pages/news/hot-sort-detail/hot-sort-detail","pages/paper/s-paper-friend-list/s-paper-friend-list","pages/paper/s-paper-chat/s-paper-chat"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#fff","backgroundColor":"#fff"},"tabBar":{"selectedColor":"#fee42c","color":"#b5b5b5","backgroundColor":"#ffffff","borderStyle":"black","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/indexed.png","text":"糗事","pagePath":"pages/index/index"},{"iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/newsed.png","text":"动态","pagePath":"pages/news/news"},{"iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/papered.png","text":"小纸条","pagePath":"pages/paper/paper"},{"iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeed.png","text":"我的","pagePath":"pages/mine/mine"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"QSBK","compilerVersion":"2.6.15","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#f7f7f7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#cccccc","disabled":"true"},"buttons":[{"color":"#ff9619","colorPressed":"#bbbbbb","float":"left","fontSize":"20px","fontSrc":"/static/font/icon.ttf","text":""},{"color":"#000000","colorPressed":"#bbbbbb","float":"right","fontSize":"20px","fontSrc":"/static/font/icon.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"小纸条","enablePullDownRefresh":true,"titleNView":{"buttons":[{"color":"#000000","colorPressed":"#bbbbbb","float":"left","fontSrc":"/static/font/icon.ttf","fontSize":"20px","text":""},{"color":"#000000","colorPressed":"#bbbbbb","float":"right","fontSrc":"/static/font/icon.ttf","fontSize":"20px","text":""}]}}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/index/search-index/search-index","meta":{},"window":{"titleNView":{"autoBackButton":false,"searchInput":{"align":"left","borderRadius":"10rpx","placeholder":"搜索糗事","placeholderColor":"#cccccc","backgroundColor":"#f7f7f7"},"buttons":[{"float":"right","fontSize":"30rpx","text":"取消","color":"#000000","fontWeight":"bold"}]}}},{"path":"/pages/index/index-publish/index-publish","meta":{},"window":{"titleNView":false}},{"path":"/pages/news/topic-sort/topic-sort","meta":{},"window":{"navigationBarTitleText":"话题分类"}},{"path":"/pages/news/hot-sort-detail/hot-sort-detail","meta":{},"window":{"enablePullDownRefresh":true,"titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/paper/s-paper-friend-list/s-paper-friend-list","meta":{},"window":{"animationType":"slide-in-left","titleNView":{"autoBackButton":false,"searchInput":{"placeholder":"搜索糗事","borderRadius":"10rpx","backgroundColor":"#f7f7f7","placeholderColor":"#cdcdcd","align":"left"},"buttons":[{"float":"right","fontSize":"30rpx","text":"取消"}]}}},{"path":"/pages/paper/s-paper-chat/s-paper-chat","meta":{},"window":{"navigationBarTitleText":"聊天页","titleNView":{"buttons":[{"float":"right","fontSrc":"/static/font/icon.ttf","text":"","fontSize":"40rpx"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
