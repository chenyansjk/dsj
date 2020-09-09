$(function() {
  // 点击登入按钮
  $('#links_reg').on('click', function() {
    // 隐藏
    $('login-box').hide()
    // 展示
    $('reg-box').show()
  })
   // 点击注册按钮
   $('#links_login').on('click', function() {
    // 展示
    $('login-box').show()
    // 隐藏
    $('reg-box').hide()
  })
})