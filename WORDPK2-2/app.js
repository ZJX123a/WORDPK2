//app.js
App({

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    var EncryptedData = ''
    var IV = ''
    // 登录

    var that = this;
    wx.login({
      success: function (res) {
        //console.log(res.code)
        wx.getUserInfo({
          lang: "zh-CN",
          withCredentials: "true",
          success: function (res) {
            //var userInfo = res.userInfo
            //EncryptedData=res.encryptedData
            //wx.setStorageSync('EncryptedData', res.encryptedData)
            //  IV=res.iv
            //wx.setStorageSync('IV', res.iv)
            wx.setStorageSync('userInfoA', res.userInfo)
            //  console.log(EncryptedData + "   " + IV)
            // var nnnnnn= wx.getStorageInfoSync('userInfoA')
          //  console.log(wx.getStorageSync('userInfoA'))
          
          }
        })
        // console.log('EncryptedData' + EncryptedData)
        console.log("res.code:"+res.code)
        wx.setStorageSync('wechatIDA', res.code)
        wx.request({
          url: "http://localhost:8080/superSSH/userInfoAction/queryUserInfo.action",
          lang: "zh_CN",
          withCredentials: "true",
          data: {
            wechatID: res.code,
            //encryptedData: wx.getStorageSync('EncryptedData'),
           // iv: wx.getStorageSync('IV')
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'GET',
          success: function (res) {
           // console.log(res.data)
            if (res.data != 0) {
              console.log("用户已注册" + res.data)
              // wx.getUserInfo()
              wx.redirectTo({
                url: '../problem/problem',
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

  },
  globalData: {
    userInfo: null

  }
})