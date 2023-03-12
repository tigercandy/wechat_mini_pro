// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  // 定义按钮事件
  btnTapHandler(e) {
    console.log(e)
  },

  addCount() {
    this.setData({
      count: this.data.count + 1
    })
  },

  btnTap(e) {
    console.log(e.target.dataset.info)
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },

  getInfo() {
    wx.request({
      url: 'https://api.apiopen.top/musicRankings',
      method: "GET",
      data: {
        "page": 1
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },

  postInfo() {
    wx.request({
      url: 'https://api.apiopen.top/post',
      method: "POST",
      data: {
        "name": "candy",
        "age": 27
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },

  gotoMine() {
    wx.switchTab({
      url: '/pages/mine/mine',
    })
  },

  gotoInfo() {
    wx.navigateTo({
      url: '/pages/info/info',
    })
  },

  inputHandler(e) {
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  },
  
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})