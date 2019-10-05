function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

function validateLogin() {
    event.preventDefault()
    let tab_learn =   document.getElementById('tab-learn')
    let tab_home =   document.getElementById('tab-home')
    tab_learn.style.display = 'flex'
    tab_home.style.display = 'none'
    
    let learn =   document.getElementById('learn')
    console.log(tab_learn,learn)

  let items = document.getElementsByClassName('nav__tab')
  for (let index = 0; index < items.length; index++) {
      items[index].classList.remove('active');
  }
  tab_learn.classList.add('active');
 learn.scrollIntoView({behavior: 'smooth'});

}