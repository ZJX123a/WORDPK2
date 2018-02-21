Page({
  data: {
    // text:"这是一个页面"  
    array: ["预备生", "一年级", "二年级"],
    toast1Hidden: true,
    index: 0,
    weID: ''
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
  formSubmit: function (e) {
    /*wx.getStorageSync({
      key: 'wechatID',
      success: function (res) {
        e.detail.value.wechatID = res.data
        console.log(res.data)
      }
    })*/
    e.detail.value.wechatID = wx.getStorageSync('wechatIDA')
    console.log("wechatID:"+e.detail.value.wechatID)
    e.detail.value.ifn = 'true'

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var valuen = e.detail.value.nconnection;
    var usernamen = e.detail.value.username;
    var nschooln = e.detail.value.nschool;
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    var reg = /^[\u4E00-\u9FA5]+$/;
    if (!myreg.test(valuen) || valuen.length < 11 || usernamen.length == 0 || nschooln.length == 0 || !reg.test(usernamen)) {
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


      if (nschooln.length == 0) {
        wx.showToast({
          title: '学校不能为空！',
        })
      }

    } else {
     // console.log(e.)
    // e.detail.value.wechatID=wx.getStorageSync('wechatIDA')
    // console.log(e.detail.value)
      wx.request({
        url: 'http://localhost:8080/superSSH/userInfoAction/test.action',
        data: e.detail.value,
        header: {
          'Content-Type': 'application/json;charset=utf-8'
         
        },
        success: function (res) {
          console.log("following.....")
          console.log("插入成功！")
          wx.redirectTo({
            url: '../problem/problem',
          })
          //console.log(e.detail.value)
        /*  wx.request({
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
          })*/

        }
      })
    }


  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  validatemobile: function (e) {
  
  },

})