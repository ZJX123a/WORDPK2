//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '单词PK',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    //组件名字、组件属性、组件可选值   判断小程序的API，回调，参数，组件等是否在当前版本可用
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: false
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        },
        fail: function () {
          // 调用微信弹窗接口
          wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法正常使用******的功能体验。请10分钟后再次点击授权，或者删除小程序重新进入。',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    //获得UserInfo之后将其值赋值给globalData
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 oldPage:function(){
   wx.navigateTo({
     url: '../persMessold/persMessold',
   })
 },
 newPage:function(){
   wx.navigateTo({
     url: '../persMessnew/persMessnew',
   })
 }
})
