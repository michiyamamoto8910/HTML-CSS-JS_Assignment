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
  $(`.show-return-date`).text(returnDate)
  $(`.show-from-where`).text(fromWhere)
  $(`.whereTo`).text(whereTo)
  $(`.whereToReturn`).text(whereTo)

  // DISPLAY IN SUMMARY
  $(`#summary-from-where`).text(fromWhere)
  $(`#summary-from-to`).text(whereTo)
  $(`#summary-depart-date`).text(departDate)
  $(`#summary-return-date`).text(returnDate)
  $(`#summary-travellers`).text(adultNumber + adult + childNumber + child + infantNumber + infant)
  $(`#summary-cabin-class`).text(cabinClass + " Class")

})

// FOR GETTING TIME
 $(document).ready(function(e){
  var storage = window.localStorage
  $(`#go-to-passenger-details`).on(`submit`,function(e){
  var setDepartDate = document.getElementById('try').innerHTML
 storage.setItem('get-depart-date',setDepartDate)
 console.log(getDepartDate);
})
var getDepartDate = storage.getItem('get-depart-date')
$(`#summary-depart-time`).text(getDepartDate)
})
// for passenger details modal

  $(`#confirm-passenger`).click(function(e){
    var storage = window.localStorage
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

    // DISPLAY IN SUMMARY
    $(`#summary-name`).text(modalNameLabel + firstNameOfPassenger +" "+ lastNameOfPassenger)
  })


//for second passenger
  $(`#another-confirm-passenger`).click(function(e){
    var storage = window.localStorage
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
