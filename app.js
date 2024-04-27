(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
  });
})();



document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // Get form values
  var form = this;
  var name = form['name'].value;
  var email = form['email'].value;
  var subject = form['subject'].value;
  var message = form['message'].value;
  

  (function () {
    emailjs.init("QFK_Wm-_p4DjEA4jB");
})();

  emailjs.send("service_87jsnri", "template_1j074vs", {
      name: name,
      email: email,
      subject: subject,
      message: message
  }).then(function(response) {
      console.log('Email sent:', response);
      alert('Email sent successfully!');
      form.reset(); 
  }, function(error) {
      console.error('Email failed to send:', error);
      alert('Email failed to send. Please try again later.');
  });
});