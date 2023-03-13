// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 第一种方式：简化的方式
    // max: Number
    // 第二种方式：完整的定义方式
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    n1: 0,
    n2: 0,
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      if (this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1,
      })
      this._showCount()
    },
    _showCount() { // 自定义方法建议以下划线(_)开头
      wx.showToast({
        title: 'count的值为:' + this.data.count,
        icon: 'none'
      })
    },
    showInfo() {
      console.log(this.data)
      console.log(this.properties)

      console.log(this.data === this.properties)
    },
    addN1() {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    addN2() {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  },

  /**
   * 数据监听器
   */
  observers: {
    'n1,n2'(n1, n2) {
      this.setData({
        sum: n1 + n2
      })
    },
    /**'n1,n2': function(n1, n2) {
      this.setData({
        sum: n1 + n2
      })
    }*/
  }
})
