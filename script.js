const typed = new Typed('#role', {
    // Waits 1000ms after typing "First"
    strings: ['', 'Full Stack Developer', 'Web Designer', 'UI Trainer'],
    typeSpeed: 100,
    loop: true
});

const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    navbar.classList.toggle('sticky', window.scrollY > 20);
});

function toggleMenu() {
  document.getElementById('menu').classList.toggle('active');
}

document.getElementById('menu-bar').addEventListener('click', toggleMenu);
document.querySelectorAll('.menu li').forEach(function(elem) {elem.addEventListener('click', toggleMenu)});

var titleAcc = document.getElementsByClassName("title-accordion");

for (let i = 0; i < titleAcc.length; i++) {
    titleAcc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var handsonAcc = document.getElementsByClassName("handson-accordion");

for (let i = 0; i < handsonAcc.length; i++) {
    handsonAcc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function downloadResume(e) {
    e.preventDefault();
    window.location.href = "./assets/resume/Magesh_VG_CV_D.pdf";
}

function sendEmail(e) {
  const senderName = document.getElementById('txt_name').value;
  const senderEmail = document.getElementById('txt_sender_email').value;
  if((!senderName || !senderEmail) || ((!senderName.trim() || !senderEmail.trim()) )) {
    alert("Please fill all fileds");
    return;
  }
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (!reg.test(senderEmail)) 
  {
      alert('Invalid Email Address');
      return;
  }
  const msgToBeSent = document.getElementById('txt_email_msg').value;
  
  const link = "mailto:vgmagesh5@gmail.com.com"
             + "?cc=" + senderEmail
             + "&subject=" + "Magesh, You got message from " + senderName
             + "&body=" + encodeURIComponent(msgToBeSent);
    
    window.location.href = link;
}

document.getElementById('downloadCV').addEventListener('click', downloadResume);
document.getElementById('btn_send_email').addEventListener('click', sendEmail);