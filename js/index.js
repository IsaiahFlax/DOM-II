// Your code goes here
const imgChange = document.querySelector('.intro img')

imgChange.addEventListener('mouseenter', () => {  //1 mouseenter
    imgChange.style.transform = "scale(1.2)"
    imgChange.style.transition = "all 0.3s"
  })

  imgChange.addEventListener('mouseleave', () => {  //2 mouseleave
    imgChange.style.transform = "scale(1)" 
    imgChange.style.transition = "all 0.3s"
  })

let clickCounter = 0

  imgChange.addEventListener('click', () => {  //3 click
      clickCounter++ 
      if (clickCounter % 2) {
    imgChange.style.transform = "scale(1.2)"
    imgChange.style.transition = "all 0.3s"
      } else {
          imgChange.style.transform = "scale(1)"  
      }
  })


  const webPage = document.querySelector('html');
  webPage.addEventListener('mousemove', () => {  //4 mousemove
      webPage.style.opacity = "0.8"
    //webPage.style.background = 'red';
  })


  const logo = document.querySelector('.logo-heading')
logo.addEventListener('dblclick', () => { 
  const horn = new Audio('http://soundbible.com/mp3/Ahooga%20Car%20Horn-SoundBible.com-1499602683.mp3');
  horn.play()  
  horn.addEventListener('ended', () => {   //5 doubleclick
    console.log(horn.currentSrc)
  })
})
 
window.addEventListener('load', (event) => {  //6 load
    console.log('page is fully loaded')
    logo.textContent = "NOT Fun Bus"
  });

  window.addEventListener('scroll', (event) => {  //7scroll
    logo.textContent = "Fun Bus"
  });

  const navBar = document.querySelector('.main-navigation')

  navBar.addEventListener('mouseover', (event) => {  //8 mouseover
      navBar.style.background = 'red'
  });

  navBar.addEventListener('mouseout', (event) => {  //9 mouseout
    navBar.style.background = 'white'
});

webPage.addEventListener('mousedown', (event) => {  //10 mousedown
    logo.style.color = "red"
  });
  webPage.addEventListener('mouseup', (event) => {  //10 mousedown
    logo.style.color = "black"

  });

  const intro = document.querySelector('.intro')
const introH2 = document.querySelector('.intro h2')
intro.addEventListener('click', (e) => {
  console.log('intro clicked')
})
introH2.addEventListener('click', (e) => {  //without stopPropagaton both will consolelog when this is clicked...
  e.stopPropagation()
  console.log('intro h2 clicked')
})

const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(navLinks)
  })
})
  