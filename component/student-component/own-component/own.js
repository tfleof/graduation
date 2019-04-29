// pages/student/own/own.js
//获取应用实例
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    gradename: '暂无班级',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  /**
   * 在组件实例进入页面节点树时执行
   */
  created() {
    console.log(app.globalData.userInfo);
    wx.setNavigationBarTitle({
      title: '我的'
    });
    //设置所属班级
    wx.request({
      url: app.globalData.localhttp + 'user/getUserByOpenId',
      data: {
        'openId': app.globalData.openid
      },
      method: 'GET',
      success: function(res) {
        var user = res.dat.data;
        console.log(user);
        if (user != null) {
          // wx.request({
          //   url: app.globalData.localhttp + 'grade/getOne',
          //   data: {
          //     'gradeId': user.gradeId
          //   },
          //   method: 'GET',
          //   success: function(res) {
          //     var grade = res.data.data;
          //     if (grade == undefined) {
          //       var toastText = '获取班级信息失败' + res.data.msg;
          //       wx.showToast({
          //         title: toastText,
          //         icon: '',
          //         duration: 2000
          //       });
          //     } else {
          //       that.setData({ //设置变量
          //         gradename: grade.name,
          //       });
          //     }
          //   }
          // })
        }
      }
    })
  }
  // wx.request({
  //   url: app.globalData.localhttp + 'grade/getOne',
  //   data: {
  //     'gradeId': options.gradeId
  //   },
  //   method: 'GET',
  //   success: function (res) {
  //     var grade = res.data.data;
  //     if (grade == undefined) {
  //       var toastText = '获取班级信息失败' + res.data.msg;
  //       wx.showToast({
  //         title: toastText,
  //         icon: '',
  //         duration: 2000
  //       });
  //     } else {
  //       that.setData({ //设置变量
  //         gradeName: grade.name,
  //         gradeCount: grade.count
  //       });
  //     }
  //   }
  // }),
})