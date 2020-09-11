$(function() {
  // 点击登入按钮
  $('#links_reg').on('click', function() {
    // 隐藏
    $('.login-box').hide()
    // 展示
    $('.reg-box').show()
  })
   // 点击注册按钮
   $('#links_login').on('click', function() {
    // 展示
    $('.login-box').show()
    // 隐藏
    $('.reg-box').hide()
  })
  /**
   * 自定义表单验证规则
   */
  // 获取form表单模块
  var form = layui.form
  var layer = layui.layer
  // 定义验证规则
  form.verify({
    password: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
    // value 就是指使用了这个规则的表单中的属性值
    repassword: function (value) {
      // 内部的规则， 实际上就是判断密码以及确认密码输入框内容是否一致
      // 目前已经获取到确认密码输入框内容 就是value
      // 值需要获取密码输入框的内容即可、 
      var pwd = $('.reg-box [name=password]').val()

      if (pwd !== value) {
        return '两次密码不一致'
      }
    }
  })
  // 注册功能
  $('#form_reg').on('submit', function(e) {
    e.preventDefault()
    var data = {
      username: $('#form_reg [name=username]').val(),
    password: $('#form_reg [name=password]').val(),
  }
  $.post('/api/reguser', data,  function(res) {

 
    if (res.status !==0) {
      return layer.msg(res.message);
      
    }
    layer.msg('注册成功，请登入');
    // 模拟用户点击操作
    $('#links_login').on('click')
    
  })
  })
  // 登入功能
  $('#form_login').submit(function (e) {
    e.preventDefault()
    $.ajax({
      url:'/api/login',
      method: 'POST',
    data: $(this).serialize(),
    success: function(res) {
      if(res.status !==0) {
        return layer.msg(res.message)
      }
      localStorage.setItem('token', res.token)
      location.href= '/index.html'
    }
    })
  })
})