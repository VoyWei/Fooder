// pages/aboutme/aboutme.js
Page({
  data: {
    gridList: [
      { enName: 'favorite', zhName: '收藏' },
      { enName: 'history', zhName: '浏览记录' },
      { enName: 'setting', zhName: '设置' }
    ],
    skin: '/images/skin.jpg'
  },
  onLoad: function (cb) {
    var that = this
    console.log(app.globalData.userInfo)
    // 检测是否存在用户信息
    if (app.globalData.userInfo != null) {
      that.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      app.getUserInfo()
    }
    typeof cb == 'function' && cb()
  },
  onShow: function () {
    var that = this
  },
  onPullDownRefresh: function () {
    this.onLoad(function () {
      wx.stopPullDownRefresh()
    })
  },
  viewGridDetail: function (e) {
    var data = e.currentTarget.dataset
    wx.navigateTo({
      url: "../" + data.url + '/' + data.url
    })
  }
})