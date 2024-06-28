

//slice function
function sliceTextToNumber(className) {
    var elements = document.getElementsByClassName(className);

    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.textContent.trim();
    var maxChars = parseInt(element.getAttribute('data-max'));

    if (text.length > maxChars) {
        var slicedText = text.slice(0, maxChars);
        element.textContent = slicedText + '...';
    }
    }
}

// Example: Slice text based on the data-max attribute
sliceTextToNumber('slice');

//end slice function

// loader
function loader() {
  $('.lds-ellipsis').fadeOut();
  $('.preloader').delay(333).fadeOut('slow');
  $('body').delay(333);
  $('body').css('overflow-y','auto');
}

//end loader




if ($(window).width() <= 1024) {  

    $(window).scroll(() => {
      if ($(window).scrollTop() >= 30) {
      
      
        $('.position').css('fixed')
        $('.navbar').css('top', '0px')
        $('.first-nav').css('display', 'none')
        $('.navbar').css('box-shadow', ' 0px 0px 10px 0px rgba(0, 0, 0, 0.25)')
        
      }else if ($(window).scrollTop() <= 67) {
        // $('.position').css('static')
        $('.navbar').css('top', '65px')
        $('.first-nav').css('display', 'block') 
        $('.navbar').css('box-shadow', 'none')

      }
    });

  
  
} else{
// header
$(window).scroll(() => {
  if ($(window).scrollTop() >= 67) {
   
   
    $('.position').css('fixed !important')
    $('.navbar').css('top', '0px')
    $('.navbar').css('box-shadow', ' 0px 0px 10px 0px rgba(0, 0, 0, 0.25)')

    // $('.first-nav').css('display', 'none')
    
  }else if ($(window).scrollTop() <= 67) {
    // $('.position').css('static')
    $('.navbar').css('top', '65px')
    $('.navbar').css('box-shadow', 'none')

    
    // $('.first-nav').css('display', 'block')

  }
});
}






// news at navbar slider
$('.owl-carousel.news').owlCarousel({
  margin: 25,
    nav: true,
    autoplay: true,
    autoplayTimeout:5000,
    rtl:true,
    loop:true,
    
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items:1 }
}});


// .hero section slider
$('.owl-carousel.hero-slider').owlCarousel({
  margin:1,
    nav: true,
    autoplay: true,
    autoplayTimeout:5000,
    rtl:true,
    autoplaySpeed: 2000,
    // loop:true,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items:1 }
}});

// .tabs slider
$('.owl-carousel.tabs-slider').owlCarousel({
  margin: 0,
    nav: true,  
    autoplay: false,
    // autoplayTimeout:5000,
    rtl:true,
    // autoplaySpeed: 2000,
    // loop:true,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items:4 }
}});

// tabs add active
$("#pills-tab .nav-link").on("click", function() {
  // Remove 'active' class from all tabs
  $("#pills-tab .nav-link").removeClass("active");

  // Add 'active' class to the clicked tab
  $(this).addClass("active");
});

// .tabs slider
$('.owl-carousel.categries-slider').owlCarousel({
  margin: 0,
    nav: true,  
    autoplay: true,
    autoplayTimeout:5000,
    rtl:true,
    autoplaySpeed: 2000,
    // loop:true,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items:3 }
}});


$('.owl-carousel.rendom-slider').owlCarousel({
  margin: 25,
    nav: true,  
    autoplay: true,
    autoplayTimeout:5000,
    rtl:true,
    autoplaySpeed: 2000,
    // loop:true,
    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1170: { items:2 }
}});



// Function to allow only numbers
function isNumberKey(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  
  // Function to prevent copying and pasting non-numeric characters in a number input
  function onPaste(event) {
    const pastedText = event.clipboardData?.getData('text');
    if (pastedText && /\D/.test(pastedText)) {
      event.preventDefault(); // Cancel the paste action if it contains non-numeric characters
    }
  }
  
  // Function to allow only letters
  function handleKeydown(event) {
    const allowedKeys = /[a-zA-Zء-ي\s]/;
    const keyPressed = event.key;
  
    if (!allowedKeys.test(keyPressed)) {
      event.preventDefault();
    }
  }
  
  // Function to prevent copying and pasting numbers in a text input
  function handlePaste(event) {
    event.preventDefault();
  
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text/plain');
    const allowedPattern = /^[a-zA-Zء-ي\s]+$/;
  
    if (!allowedPattern.test(pastedText)) {
      // Optionally, you can display an error message or perform some action here.
      return;
    }
  
    // Manipulate the pasted text if needed
    const modifiedText = pastedText.toUpperCase();
  
    // Insert the modified text into the input field or perform any other desired action
    const inputElement = event.target;
    const currentPosition = inputElement.selectionStart || 0;
    const inputValue = inputElement.value;
    const newValue = inputValue.slice(0, currentPosition) + modifiedText + inputValue.slice(currentPosition);
    inputElement.value = newValue;
  }



  



// phones plugin
// function iti() {

  
// let input = document.querySelector("#phonee"),
// errorMsg = document.querySelector("#error-msg1"),
// validMsg = document.querySelector("#valid-msg1");

// // initialize plugin
// let iti = window.intlTelInput(input, {
// preferredCountries: ["sa", "ae", "eg", "qa", "kw", "jo"],
// separateDialCode: true,
// utilsScript:
//   "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
// });

// // here, the index maps to the error code returned from getValidationError - see readme
// let errorMap = [
// "رقم الهاتف غير صحيح",
// "رقم الدولة غير صحيح",
// "رقم الهاتف غير صحيح",
// "رقم الهاتف غير صحيح",
// "رقم الهاتف غير صحيح",
// ];

// let reset = () => {
// input.classList.remove("error");
// errorMsg.innerHTML = "";
// errorMsg.classList.add("hide");
// errorMsg.classList.add("text-danger");
// };

// // on blur: validate
// input.addEventListener("keyup", () => {
// reset();
// if (input.value.trim()) {
//   if (iti.isValidNumber()) {
//     validMsg.classList.remove("hide");
//   } else {
//     input.classList.add("error");
//     let errorCode = iti.getValidationError();
//     errorMsg.innerHTML = errorMap[errorCode];
//     errorMsg.classList.remove("hide");
//   }
// }
// });



  
// }


function getCurrentDate() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth(); // Months are zero-based
  const year = today.getFullYear();

  // Array of month names in Arabic
  const arabicMonths = [
      'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
      'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];

  // Get the month name in Arabic
  const arabicMonth = arabicMonths[month];

  // Display the formatted date in the HTML element with id="current-date"
    $('.day').text(day);
    $('.month').text(arabicMonth);
    $('.year').text(year);
  
}



$(document).ready(function(){

    $('.open-search').click((event) => {
      // event.stopPropagation();
      $('.open-search').css('display', 'none');
      $('.close-search').css('display', 'block');
      $('.search-div').fadeIn();
    });
    
    $('.close-search').click((event) => {
      // event.stopPropagation();
      $('.close-search').css('display', 'none');
      $('.open-search').css('display', 'block');
      $('.search-div').fadeOut();
    });


  AOS.init();



  $('.counter1').counterUp({
    delay: 10,
    // duration: 80000,
    time: 5000,

  });

  $('.counter2').counterUp({
    delay: 10,
    time: 3000,
  });




    getCurrentDate() 
    loader()  

    

    
    
    
 
});


