//for getting,displaying,and checking the username
$(document).ready(function(e){
  var storage=window.localStorage
  $(`#loginform`).on(`submit`,function(e){
    var username=$(`#username`).val()
    storage.setItem('username',username)
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

//for getting and displaying number of travellers and cabin class
$(document).ready(function(e){
  var storage=window.localStorage
  $(`#search-form`).on(`submit`,function(e){

    var numberOfAdults = $(`#number-of-adults`).val()
    var numberOfInfant = $(`#number-of-infants`).val()
    var numberOfChild = $(`#number-of-child`).val()
    var cabinClass = $(`#cabin`).val()
    storage.setItem('cabin-class',cabinClass)
    storage.setItem('number-of-adults',numberOfAdults)
    storage.setItem('number-of-infants',numberOfInfant)
    storage.setItem('number-of-child',numberOfChild)

  })
  var adultNumber = storage.getItem('number-of-adults')
  var infantNumber = storage.getItem('number-of-infants')
  var childNumber = storage.getItem('number-of-child')
  var cabinClass = storage.getItem('cabin-class')
  let adult=" Adult,"
  let child= " Child,"
  let infant=" Infant"

  if(adultNumber < 1){
    adult=""
  }
  if(infantNumber < 1){
    infant=""
    child=" Child"
  }
  if(childNumber < 1){
    child=""
    adult=" Adult"
  }

  if(childNumber < 1 && infantNumber >= 1){
    adult = " Adult,"
  }

  $(`.show-homies`).text(adultNumber + adult + childNumber + child + infantNumber + infant )
  $(`.show-cabin`).text(cabinClass + " Class")
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
