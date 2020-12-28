document.addEventListener("DOMContentLoaded", function(){
  const contactForm = document.getElementById('form-contact')
  contactForm.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("I've been submitted!")
    contactForm.reset()
  })
})