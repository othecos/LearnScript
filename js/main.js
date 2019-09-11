function onSelectedTab (tabID,sectionID){
    let items = document.getElementsByClassName('nav__tab')
    for (let index = 0; index < items.length; index++) {
        items[index].classList.remove('active');
    }
    document.getElementById(tabID).classList.add('active');
    document.getElementById(sectionID).scrollIntoView({behavior: 'smooth'});
}
