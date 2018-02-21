Page({
  data: {
    // text:"这是一个页面"  
    array: ["三年级", "四年级", "五年级", "六年级"],
    array1: ["一班", "二班", "三班", "四班", "五班"],
    toast1Hidden: true,
    index: 0,
    index1: 0
  },
  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  formSubmit: function (e) {
    e.detail.value.wechatID = wx.getStorageSync("wechatID")
    e.detail.value.ifn = 'false'
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var valuen = e.detail.value.nconnection;
    var usernamen = e.detail.value.username;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var reg = /^[\u4E00-\u9FA5]+$/;
    if (!myreg.test(valuen) || valuen.length < 11 || usernamen.length == 0) {
      if (!myreg.test(valuen) || valuen.length < 11) {
        wx.showToast({
          title: '手机号有误！',
        })
      }
      if (!reg.test(usernamen)) {
        wx.showToast({
          title: '用户名请用中文',
        })
      }
      

    } 
    else {
      wx.request({
        url: 'http://139.199.4.114:8080/superSSH/userInfoAction/test.action',
        data: e.detail.value,
        header: {
          'Content-Type': 'application/json;charset=utf-8'

        },
        success: function (res) {
          console.log("following.....")
          //console.log(e.detail.value)
          wx.request({
            url: 'http://139.199.4.114:8080/superSSH/userInfoAction/queryUserInfo.action',
            data: {
              //wechatID: wx.getStorageSync('wechatID')
              //wechatID: 'test'
            },
            header: {
              "content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            method: 'GET',
            success: function (res) {

              console.log("用户已注册" + res.data)
              // wx.getUserInfo()
              wx.redirectTo({
                url: '../problem/problem',
              })

            }
          })
        }
      })
    }
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  nextPage: function () {
    wx.navigateTo({
      url: '../problem/problem',
    })
  },
  validatemobile: function (e) {

  }
})