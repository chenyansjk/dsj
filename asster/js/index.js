$(function () {
  var layer = layui.layer
  getUserInfo()
  function getUserInfo() {
    $.ajax({
      method: 'GET',
      url: '/my/userinfo',
    
      success: function (res) {
        if (res.status !== 0) {
          return layer.msg(res.message)
        }
        renderAvatar(res.data)

      },
    //  error: function() {},
//      complete: function (res) {
// console.log(res);
// if (res.responseJSON.status===1 && res.responseJSON.message === '身份认证失败') 
//  //  强制清空token
// localStorage.removeItem('token')
// // 2. 强制跳转到登录页面
// location.href = '/login.html'
//      }
      
    })
  }
  function renderAvatar(user) {
var name = user.nicknme || user.username
$('.welcome').html('欢迎&nbsp;&nbsp' + name)
if (user.user_pic !== null) {
  $('.layui-nav-img').attr('src',user.user_pic).show()
  $('.text-avatar').hide()
} else {
  var first = name[0].toUpperCase()
  $('.text-avatar').html(first).show()
  $('.layui-nav-img').hide()
}
  }
  $('#logout').on('click', function () {
    layer.confirm('确定退出登录？',{ icon: 3, title: '提示' }, function (index) {
     
   // 1. 清空本地存储中的 token
      localStorage.removeItem('token')
      // 强制跳转到登录页面
      location.href= '/login.html'
       // 关闭 confirm 询问框
      layer.close(index)
    })
 })
 
})