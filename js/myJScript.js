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
  var login = document.getElementById('login-id')
  var signup = document.getElementById('signup-id')
  var logout = document.getElementById('logout-id')


  if(storage.getItem('username')){
    welcomemessage="It's good to have you back"
    login.style.visibility='hidden'
    signup.style.visibility='hidden'
    document.getElementById('logout-id').style.display="block"
  }
  var storedUsername=storage.getItem('username')||emptyusername
  $(`#welcomeuser`).text(greeting+' '+storedUsername)
  $(`#welcomemessage`).text(welcomemessage)
})


// -------------------------------------------------------------------------------------------------------------



//for getting and displaying number of travellers,cabin class, from, to, dates
$(document).ready(function(e){
  var storage=window.localStorage
  $(`#search-form`).on(`submit`,function(e){

    var numberOfAdults = $(`#number-of-adults`).val()
    var numberOfInfant = $(`#number-of-infants`).val()
    var numberOfChild = $(`#number-of-child`).val()
    var cabinClass = $(`#cabin`).val()

    var departDate = $(`#depart`).val()
    var returnDate= $(`#return`).val()

    var fromWherez = $(`#from`).val()
    var fromWhere = fromWherez.toUpperCase()
    var whereToz = $(`#to`).val()
    var whereTo = whereToz.toUpperCase()

    storage.setItem('fromWhere',fromWhere)
    storage.setItem('whereTo', whereTo)

    storage.setItem('depart-date',departDate)
    storage.setItem('return-date', returnDate)

    storage.setItem('cabin-class',cabinClass)
    storage.setItem('number-of-adults',numberOfAdults)
    storage.setItem('number-of-infants',numberOfInfant)
    storage.setItem('number-of-child',numberOfChild)

  })
  var adultNumber = storage.getItem('number-of-adults')
  var infantNumber = storage.getItem('number-of-infants')
  var childNumber = storage.getItem('number-of-child')
  var cabinClass = storage.getItem('cabin-class')

  var departDate = storage.getItem('depart-date')
  var returnDate = storage.getItem('return-date')

  var whereTo = storage.getItem('whereTo')
  var fromWhere = storage.getItem('fromWhere')

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

  $(`.show-from-date`).text(departDate)

  $(`.whereTo`).text(whereTo)

  $(`.show-return-date`).text(returnDate)
  $(`.show-from-where`).text(fromWhere)
  $(`.whereToReturn`).text(whereTo)
  $(`#show-from-where-return`).text(fromWhere)
console.log(returnDate)
if(returnDate===""){
  $(`.show-return-date`).text(" ")
  $(`.time-return`).text(" ")
  $(`.whereToReturn`).text(" ")
  $(`#show-from-where-return`).text(" ")
  document.getElementById('arrow-return-id').style.display="none"
  document.getElementById('arrow-return-id-2').style.display="none"
  document.getElementById('arrow-return-id-3').style.display="none"
  document.getElementById('arrow-return-id-4').style.display="none"
  document.getElementById('arrow-return-id-5').style.display="none"
  document.getElementById('arrow-image-return').disabled=true;

  [].forEach.call(document.querySelectorAll('.arrow-return'), function (el) {
  el.style.visibility = 'hidden';
});
var adultNumber = storage.getItem('number-of-adults')
var infantNumber = storage.getItem('number-of-infants')
var childNumber = storage.getItem('number-of-child')
var cabinClass = storage.getItem('cabin-class')

var departDate = storage.getItem('depart-date')
var returnDate = storage.getItem('return-date')

var whereTo = storage.getItem('whereTo')
var fromWhere = storage.getItem('fromWhere')

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
}
  // DISPLAY IN SUMMARY
  $(`#summary-from-where`).text(fromWhere)
  $(`#summary-from-to`).text(whereTo)
  $(`#summary-depart-date`).text(departDate)
  $(`#summary-return-date`).text(returnDate)
  $(`#summary-travellers`).text(adultNumber + adult + childNumber + child + infantNumber + infant)
  $(`#summary-cabin-class`).text(cabinClass + " Class")

})

// FOR GETTING TIME AND PRICE

//PAL
 $(document).ready(function(e){
  var storage = window.localStorage
  $(`#go-to-passenger-details-pal`).on(`submit`,function(e){
  var setDepartTime = document.getElementById('pal-depart-time').innerHTML
  var setReturnTime = document.getElementById('pal-return-time').innerHTML
  var setPrice = document.getElementById('pal-price').innerHTML
  var setAirline = document.getElementById('pal-name').innerHTML

  storage.setItem('pal-name',setAirline)
  storage.setItem('pal-price', setPrice)
  storage.setItem('get-depart-time',setDepartTime)
  storage.setItem('get-return-time',setReturnTime)
})
var getDepartTime = storage.getItem('get-depart-time')
var getReturnTime = storage.getItem('get-return-time')
var getPalPrice = storage.getItem('pal-price')
var getAirlineName = storage.getItem('pal-name')

$(`#summary-airline`).text(getAirlineName)
$(`#summary-price`).text(getPalPrice)
$(`#summary-depart-time`).text(getDepartTime)
$(`#summary-return-time`).text(getReturnTime)
})

//CATHAY Pacific
$(document).ready(function(e){
 var storage = window.localStorage
 $(`#go-to-passenger-details-cathay`).on(`submit`,function(e){
 var setDepartTimeCathay = document.getElementById('cathay-depart-time').innerHTML
 var setReturnTimeCathay = document.getElementById('cathay-return-time').innerHTML
 var setPriceCathay = document.getElementById('cathay-price').innerHTML
 var setAirlineCathay = document.getElementById('cathay-name').innerHTML

 storage.setItem('pal-name-cathay',setAirlineCathay)
 storage.setItem('pal-price-cathay', setPriceCathay)
 storage.setItem('get-depart-time-cathay',setDepartTimeCathay)
 storage.setItem('get-return-time-cathay',setReturnTimeCathay)
})
var getDepartTimeCathay = storage.getItem('get-depart-time-cathay')
var getReturnTimeCathay = storage.getItem('get-return-time-cathay')
var getPalPriceCathay = storage.getItem('pal-price-cathay')
var getAirlineNameCathay = storage.getItem('pal-name-cathay')

$(`#summary-airline`).text(getAirlineNameCathay)
$(`#summary-price`).text(getPalPriceCathay)
$(`#summary-depart-time`).text(getDepartTimeCathay)
$(`#summary-return-time`).text(getReturnTimeCathay)
})

// for passenger details modal
$(document).ready(function(e){
  var storage = window.localStorage
  $(`#confirm-passenger-form`).on(`submit`,function(e){
    e.preventDefault()
    var firstName=$(`#first-name`).val()
    var lastName=$(`#last-name`).val()
    var passportNumber=$(`#passport-number`).val()

    storage.setItem('first-name',firstName)
    storage.setItem(`last-name`,lastName)
    storage.setItem(`passport-number`,passportNumber)
    var firstNameOfPassenger = storage.getItem('first-name')
    var lastNameOfPassenger = storage.getItem(`last-name`)
    var passportNumberOfPassenger = storage.getItem(`passport-number`)

    var modalNameLabel = "Name: "
    var passportNumberLabel = "Passport Number: "

    $(`#first-name-modal`).text(modalNameLabel + firstNameOfPassenger +" "+ lastNameOfPassenger)
    $(`#passport-number-modal`).text(passportNumberLabel+" "+passportNumberOfPassenger)

    })
    var firstNameOfPassengers = storage.getItem('first-name')
    var lastNameOfPassengers = storage.getItem(`last-name`)
    var passportNumberOfPassengers = storage.getItem(`passport-number`)

    var modalNameLabels = "Name: "
    var passportNumberLabels = "Passport Number: "

    // DISPLAY IN SUMMARY
    $(`#summary-name`).text(modalNameLabels + firstNameOfPassengers +" "+ lastNameOfPassengers)

})

//for second passenger
  $(document).ready(function(e){
    var storage = window.localStorage
  $(`#another-confirm-passenger-form`).on(`submit`,function(e){
    e.preventDefault()
    var firstName=$(`#first-name`).val()
    var lastName=$(`#last-name`).val()
    var passportNumber=$(`#passport-number`).val()
    var secondFirstName = $(`#second-first-name`).val()
    var secondLastName = $(`#second-last-name`).val()
    var secondPassportNumber = $(`#second-passport-number`).val()

    storage.setItem('first-name',firstName)
    storage.setItem(`last-name`,lastName)
    storage.setItem(`passport-number`,passportNumber)
    storage.setItem(`second-first-name`,secondFirstName)
    storage.setItem(`second-last-name`,secondLastName)
    storage.setItem(`second-passport-number`,secondPassportNumber)

    var firstNameOfPassenger = storage.getItem('first-name')
    var lastNameOfPassenger = storage.getItem(`last-name`)
    var passportNumberOfPassenger = storage.getItem(`passport-number`)
    var secondFirstNameOfPassenger= storage.getItem('second-first-name')
    var secondLastNameOfPassenger = storage.getItem('second-last-name')
    var secondPassportNumberOfPassenger = storage.getItem('second-passport-number')

    var modalNameLabel = "Name: "
    var passportNumberLabel = "Passport Number: "

    let line = "------------------------------------------------------------------------"
    let displayName = "Name: "
    let displayPassportNumber = "Passport number: "
    console.log(secondFirstNameOfPassenger);
    $(`#first-name-modal`).text(modalNameLabel + firstNameOfPassenger +" "+ lastNameOfPassenger)
    $(`#passport-number-modal`).text(passportNumberLabel+" "+passportNumberOfPassenger)

    $(`#line-for-display`).text(line)
    $(`#other-passenger-name`).text(displayName + secondFirstNameOfPassenger +" " + secondLastNameOfPassenger)
    $(`#other-passenger-passport-number`).text(displayPassportNumber + secondPassportNumberOfPassenger)
  })
  var firstNameOfPassengers = storage.getItem('first-name')
  var lastNameOfPassengers = storage.getItem(`last-name`)
  var passportNumberOfPassengers = storage.getItem(`passport-number`)
  var secondFirstNameOfPassengers= storage.getItem('second-first-name')
  var secondLastNameOfPassengers = storage.getItem('second-last-name')
  var secondPassportNumberOfPassengers = storage.getItem('second-passport-number')

  var modalNameLabels = "Name: "
  var passportNumberLabels = "Passport Number: "

    $(`#summary-name`).text(modalNameLabels + firstNameOfPassengers +" "+ lastNameOfPassengers)
    if(secondFirstNameOfPassengers){
      $(`#summary-second-passenger-name`).text(modalNameLabels+ " "+ secondFirstNameOfPassengers + secondLastNameOfPassengers)
    }

})

// payment section

$(`#visa`).click(function(e){
  var showLogo = "Visa"
  $(`#display-what-type-of-payment`).text(showLogo)
})
$(`#paypal`).click(function(e){
  var showLogo = "Paypal"
  $(`#display-what-type-of-payment`).text(showLogo)
})
$(`#mastercard`).click(function(e){
  var showLogo = "Master Card"
  $(`#display-what-type-of-payment`).text(showLogo)
})

$(window).unload(function(){
  localStorage.clear();
});
// $(document).ready(function(e){
//   var storage = window.localStorage
//   $(`#form-of-payment`).on(`submit`,function(e){
//     var fname= $(`#payment-first-name`).val()
//     var lname = $(`#payment-last-name`).val()
//
//     storage.setItem('first-name', fname)
//     storage.setItem('last-name', lname)
//   })
//   var firstNameOfPassengerFromPayment = storage.getItem('first-name')
//   var lastNameOfPassengerFromPayment = storage.getItem('last-name')
//   var nameForSummary = "Name: "
//   console.log(firstNameOfPassengerFromPayment);
//   $(`#summary-name`).text(nameForSummary+firstNameOfPassengerFromPayment)
//
// })















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
