   // Set the date we're counting down to
   const countDownDate = new Date("July 1, 2023 00:00:00").getTime();

   // Update the countdown every 1 second
   const x = setInterval(function() {
       const now = new Date().getTime();
       const distance = countDownDate - now;

       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
       + minutes + "m " + seconds + "s ";

       if (distance < 0) {
           clearInterval(x);
           document.getElementById("countdown").innerHTML = "EXPIRED";
       }
   }, 1000);

   // Handle form submission
   document.getElementById("subscribe-form").addEventListener("submit", function(event) {
       event.preventDefault();
       const email = document.getElementById("email").value;
       alert("Thank you for subscribing with: " + email);
       // Here you would typically send this email to your server or a service
   });