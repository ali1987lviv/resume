const skillsContainer = document.querySelector('.skills')
const languagesContainer = document.querySelector('.languages')
const tumbler = document.querySelector('.tumbler')
const infoBlock = document.querySelector('.info')
const contentBlock = document.querySelector('.content')
let state = true

const skills = [
  {name: 'HTML', level: 100},
  {name: 'CSS', level: 100},
  {name: 'Sass', level: 100},
  {name: 'Tailwind scc', level: 100},
  {name: 'JavaScript', level: 90},
  {name: 'React JS', level: 90},
  {name: 'Vue JS', level: 70},
  {name: 'Vue Class Component', level: 70},
  {name: 'Next JS', level: 90},
  {name: 'GraphQL', level: 60},
  {name: 'Node JS', level: 30},
  {name: 'Express', level: 30},
  {name: 'Shopify', level: 90},
  {name: 'Liquid', level: 90},
  {name: 'Builder.io', level: 100},
  {name: 'GitHub', level: 100},
  {name: 'Bitbucket', level: 100},
  {name: 'Buddy', level: 90},
  {name: 'JIRA', level: 100},
  {name: 'Asana', level: 100},
]

const languages = [
  {name: 'Russian', level: 100},
  {name: 'Ukrainian', level: 100},
  {name: 'English', level: 55},
  {name: 'Arabic', level: 50},
  {name: 'Turkish', level: 35},
]

const isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() 
    || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

skills.map(el => {
  const div = document.createElement('div')
  div.setAttribute('class', 'skills__item')
  div.innerHTML = `
    <span class='skills__item_name'>${el.name}</span>
    <span class='skills__item_level'>
      <div class='skills__item_level--value' style='width:${el.level}%;'></div>
    </span>
    `
  skillsContainer.appendChild(div)
})

languages.map(el => {
  const div = document.createElement('div')
  div.setAttribute('class', 'languages__item')
  div.innerHTML = `
    <span class='languages__item_name'>${el.name}</span>
    <span class='languages__item_level'>
      <div class='languages__item_level--value' style='width:${el.level}%;'></div>
    </span>
    `
  languagesContainer.appendChild(div)
})

const toggleHandler = () => {
  state
    ? infoBlock.classList.add('hidden')
      + tumbler.classList.add('hidden')
      + contentBlock.classList.add('full')
    : infoBlock.classList.remove('hidden')
      + tumbler.classList.remove('hidden')
      + contentBlock.classList.remove('full')

  state = !state
}

isMobile.any() ? toggleHandler() : null
tumbler.addEventListener('click', toggleHandler)