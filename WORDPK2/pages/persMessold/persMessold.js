Page({
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var score1 = e.detail.value;
    wx.request({
      url: 'http://localhost:8080/superSSH/userInfoAction/test.action',
      data: score1,
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
  }
})