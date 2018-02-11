//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    const APP_ID = 'wxb688a2a83f235966';
    const APP_SECRET = 'd3d643c7fd6b67c6b64718bdc42cfc08';
    var OPEN_ID = ''//储存获取到openid  
    var SESSION_KEY = ''//储存获取到session_key  
   
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
              wx.setStorage({
                key: "wechatID", 
                data: OPEN_ID
              })
            }
          })
        }
      })
  
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.userInfo']) {
            console.log("没有授权")
            wx.authorize({
              scope: 'scope.userInfo',
              success() {
                wx.getUserInfo()
                console.log("同意授予用户权限")
              },
              fail(){
                  //console.log("用户拒绝授权，我们将杀一个程序员祭天！")
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

      
  },
  globalData: {
    userInfo: null,
  }
})