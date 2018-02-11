Page({
  data: {
    // text:"这是一个页面"  
    array: ["三年级", "四年级", "五年级","六年级"],
    array1:["一班","二班","三班","四班","五班"],
    toast1Hidden: true,
    index: 0,
    index1:0
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
    e.detail.value.ifn = 'false'
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var valuen = e.detail.value.nconnection;
    if (valuen.length < 11) {
      wx.showToast({
        title: '手机号有误！',
      })
      //   return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(valuen)) {
      wx.showToast({
        title: '手机号有误！',
      })
    }
    wx.request({
      url: 'http://localhost:8080/superSSH/userInfoAction/test.action',
      data: e.detail.value,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  validatemobile: function (e) {

  }
})