/* a sticky nav that changes coloUr once user has scrolled past the header. */


$(window).on('scroll', function() {
  console.log('Scrolled!');
// Add a scroll event to the window object, Log to Console
  
  var faqDistance =  $('.faq').offset().top;
  console.log(faqDistance);
// Add scrolled class to nav once user has reached the FAQ section.
// Measure how far down the section is; select FAQ section and use .offset().top to find pixels from the top to section. Save it to a var.
  
  var distanceScrolled = $(window).scrollTop();
  console.log(distanceScrolled);
// Use scrollTop() method on window object to find pixels down the page scrolled. Create var distanceScrolled, set it equal.

  if(distanceScrolled >= faqDistance) {
   $('nav').addClass('scrolled'); 
  }
  else { $('nav').removeClass('scrolled'); }
// If distance scrolled is greater than/equal to the distance from FAQ to the top, add class to nav.
// Otherwise, remove class from nav
});
  

  