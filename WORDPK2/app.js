//app.js
App({

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const APP_ID = 'wxb688a2a83f235966';//输入小程序appid  
    const APP_SECRET = '3d41126ea7c0d373463990f0b003bf23';//输入小程序app_secret  
    var OPEN_ID = ''//储存获取到openid  
    var SESSION_KEY = ''//储存获取到session_key  
    // 登录
    /*wx.login({
      //获取code
  
      success: function (res) {
        code = res.code //返回code
        console.log(code);
      }
    })
    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=' + code + '&grant_type=authorization_code',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        openid = res.data.openid //返回openid
        console.log(openid);
      }
    })*/


    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          //获取openid接口  
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: APP_ID,
            secret: APP_SECRET,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function (res) {
            console.log(res.data)
            OPEN_ID = res.data.openid;//获取到的openid  
            SESSION_KEY = res.data.session_key;//获取到session_key  
            console.log(OPEN_ID)
            console.log(SESSION_KEY)
            wx.setStorageSync("wechatID", OPEN_ID)
            wx.request({
              url: 'http://localhost:8080/superSSH/userInfoAction/queryUserInfo.action',
              data: {
                wechatID: OPEN_ID
              },
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              method: 'GET',
              success: function (res) {
                if (res.data != 0) {
                  console.log("用户已注册" + res.data)
                 // wx.getUserInfo()
                  wx.redirectTo({
                    url: '../login/login',
                  })
                }
                else {
                  console.log("用户未注册")
                  wx.getSetting({
                    success(res) {
                      if (!res.authSetting['scope.userInfo']) {
                        console.log("没有授权")
                        wx.authorize({
                          scope: 'scope.userInfo',
                          success() {
                            wx.getUserInfo()
                            console.log("同意授予用户权限")
                            wx.redirectTo({
                              url: '../index/index',
                            })
                          },
                          fail() {
                            wx.showModal({
                              title: '用户拒绝授权',
                              content: '我们将杀一个程序员祭天',
                              success: function (res) {
                                if (res.confirm) {
                                  console.log('用户点击确定')
                                  wx.navigateTo({
                                    url: '../index/index'
                                  })
                                } else if (res.cancel) {
                                  console.log('用户点击取消')
                                  url: '../index/index'
                                }
                              }
                            })
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        })
      }
    })

  },
  globalData: {
    userInfo: null

  }
})