const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-btn_burger');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelector('.menu-nav_item');
const container = document.querySelector('.container');

let showMenu = false;

class Menu {
    static toggleMenu() {
        if(!showMenu) {
            menuBurger.classList.add('open');
            menuNav.classList.add('open');
            navItem.classList.add('open');
            showMenu = true;
    
        } else {
            menuBurger.classList.remove('open');
            menuNav.classList.remove('open');
            navItem.classList.remove('open');
            showMenu = false;
        }
    }
    static hideShade(e) {
        if(showMenu ==true && e.target.classList.contains('menu-nav_link')){
            menuBurger.classList.remove('open');
            menuNav.classList.remove('open');
            navItem.classList.remove('open');
            showMenu = false;
        }
    }
}



class ScrollAction {
    static moveActive() {
        const itemActive = document.getElementsByClassName('menu-nav_item');
        
        const aboutArea = document.querySelector('.about_area');
        const aboutHead = document.querySelector('.about_head');
        const aboutPara = document.querySelector('.about_para');
        const aboutListHead = document.querySelector('.about_listhead');
        const aboutList = document.querySelector('.about_list');
        
        const projectArea = document.querySelector('.project_area');
        const projectHead = document.querySelector('.project_head');
        const projectItems = document.querySelector('.project_items');
        
        const contactHead = document.querySelector('.contact_head');
        const contactList = document.querySelector('.contact_list');
        
        const socialIcons = document.querySelector('.social-icons');
    
        let pageY = Math.ceil(container.scrollTop);
        let windowHgt = window.innerHeight;
        let itemArr = Array.from(itemActive);
    
        if(pageY < windowHgt) {
            itemArr[0].classList.add('active');
            itemArr[1].classList.remove('active');
            itemArr[2].classList.remove('active');
            itemArr[3].classList.remove('active');
            socialIcons.classList.remove('iconAnimate');
            
        } else if((pageY+10) > windowHgt && pageY < (1.9*windowHgt)) {
            aboutArea.classList.add('abtAreaAnimate');
            aboutHead.classList.add('abtHeadAnimate');
            aboutPara.classList.add('abtParaAnimate');
            aboutListHead.classList.add('abtListheadAnimate');
            aboutList.classList.add('abtListAnimate');
    
            itemArr[1].classList.add('active');
            itemArr[0].classList.remove('active');
            itemArr[2].classList.remove('active');
            itemArr[3].classList.remove('active');
            socialIcons.classList.remove('iconAnimate');
            
        } else if(pageY > (1.9*windowHgt) && pageY < (2.9*windowHgt)) {
            projectArea.classList.add('projAreaAnimate');
            projectHead.classList.add('projHeadAnimate');
            projectItems.classList.add('projItemsAnimate');
            
            itemArr[2].classList.add('active');
            itemArr[1].classList.remove('active');
            itemArr[0].classList.remove('active');
            itemArr[3].classList.remove('active');
            socialIcons.classList.remove('iconAnimate');
            
        } else if(pageY > (2.9*windowHgt)) {
            contactHead.classList.add('contHeadAnimate');
            contactList.classList.add('contListAnimate');
    
            socialIcons.classList.add('iconAnimate');
    
            itemArr[3].classList.add('active');
            itemArr[1].classList.remove('active');
            itemArr[2].classList.remove('active');
            itemArr[0].classList.remove('active');
            
        } else {
            
        }
    }
}



class ChronoMap {    
    static showTime() {
        const time = document.getElementById('time');
    
        let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes();
    
        const amPM = hour >= 12 ? 'PM' : 'AM';
    
        hour = hour % 12 || 12;
        time.innerHTML = `${hour}<span>:</span>${ChronoMap.addZero(min)} ${amPM}`;
    
        setTimeout(ChronoMap.showTime, 300);
    }
    
    static addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    
    static setBgGreet() {
        const greeting = document.getElementById('greeting');
        const homeSection = document.querySelector('#home');
    
        let today = new Date(),
        hour = today.getHours();    
    
        if(hour < 12) {
            homeSection.style.backgroundImage = "url('../img/morning.jpg')";
            homeSection.style.backgroundSize = 'cover';
            greeting.textContent = 'Good Morning!';
            homeSection.style.color = '#000';
        } else if(hour < 17) {
            homeSection.style.backgroundImage = "url('../img/afternoon4.jpg')";
            homeSection.style.backgroundSize = 'cover';
            greeting.textContent = 'Good Afternoon!';
        } else {
            homeSection.style.backgroundImage = "url('../img/evening.jpg')";
            homeSection.style.backgroundSize = 'cover';
            greeting.textContent = 'Good Evening!';
        }
    }    
}

ChronoMap.showTime();
ChronoMap.setBgGreet();

menuBtn.addEventListener('click', Menu.toggleMenu);
menuNav.addEventListener('click', Menu.hideShade);
container.addEventListener('scroll', ScrollAction.moveActive);


