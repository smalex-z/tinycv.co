document.addEventListener('DOMContentLoaded', function () {
    var sidebar = document.querySelector('.sidebar');
    var content = document.querySelector('.content');
    var scrollTimeout;
  
    function toggleSidebar() {
      if (content.scrollTop > 50) {
        sidebar.classList.add('scrolled');
        content.classList.add('scrolled');
      } else {
        sidebar.classList.remove('scrolled');
        content.classList.remove('scrolled');
      }
    }
  
    function highlightActiveButtonOnScroll() {
      const sections = document.querySelectorAll('.content section');
      const buttons = document.querySelectorAll('.nav-button');
  
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const threshold = window.innerHeight * 0.4; // Adjust the threshold as needed
  
        if (rect.top <= threshold && rect.bottom >= threshold) {
          buttons.forEach((button) => {
            button.classList.remove('active');
          });
          buttons[index].classList.add('active');
        }
      });
    }
  
    function highlightActiveButton() {
      const currentHash = window.location.hash;
      const buttons = document.querySelectorAll('.nav-button');
      buttons.forEach((button) => {
        button.classList.remove('active');
      });
      const activeButton = document.querySelector(`.nav-button[href="${currentHash}"]`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
    }
    
    var sendButton = document.querySelector('.button input[type="button"]');

  sendButton.addEventListener('click', function () {
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const emailBody = `Name: ${name}%0D%0A%0D%0ASubject: ${subject}%0D%0A%0D%0AMessage: ${message}`;

    // Construct the mailto link with the dynamic email body
    const mailtoLink = `mailto:alexzheng2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the email client with the pre-filled email
    window.location.href = mailtoLink;
  });

  
    // Call the functions initially to set up the page
    highlightActiveButtonOnScroll();
    highlightActiveButton();
  
    // Add an event listener to update the active button when scrolling
    content.addEventListener('scroll', function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        toggleSidebar();
        highlightActiveButtonOnScroll();
      }, 100);
    });
  
    // Add an event listener to update the active button when the window is resized
    window.addEventListener('resize', highlightActiveButtonOnScroll);
  
    // Add an event listener to update the active button when the URL hash changes
    window.addEventListener('hashchange', highlightActiveButton);
  });
  