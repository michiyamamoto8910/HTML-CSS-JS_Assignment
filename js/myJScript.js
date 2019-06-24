$(document).ready(function(e){
  var storage=window.localStorage
  $(`#loginform`).on(`submit`,function(e){
    var username=$(`#username`).val()
    storage.setItem('username',username)
    console.log(username);
  })
  var greeting = 'Welcome!'
  var emptyusername='Guest'
  let welcomemessage='Search flights below'
  if(storage.getItem('username')){
    welcomemessage="It's good to have you back"
  }
  var storedUsername=storage.getItem('username')||emptyusername
  $(`#welcomeuser`).text(greeting+' '+storedUsername)
  $(`#welcomemessage`).text(welcomemessage)
})





















// // $(document).ready(function(){
// //   var storage=window.localStorage
// //   $(`#mainform`).on(`submit`,function(e){
// //     e.preventDefault()
// //     var wherefrom=$(`#from`).val()
// //     //storage.setItem('from', wherefrom)
// //     var whereTo=$(`#to`).val()
// //     var whendepart=$(`#depart`).val()
// //     var whenreturn=$(`#return`).val()
// //     $(`#displayfrom`).text(wherefrom)
// //     $(`#displayto`).text(whereTo)
// //     $(`#displaydepart`).text(whendepart)
// //     $(`#displayreturn`).text(whenreturn)
// //   })
//   //var storedFrom=storage.getItem('from')
//   //$(`#displayfrom`).text(storedFrom)
//   // storage.clear()
// })
