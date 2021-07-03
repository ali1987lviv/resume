const skillsContainer = document.querySelector('.skills')
const languagesContainer = document.querySelector('.languages')
const moveButton = document.querySelector('.moveButton')
const infoBlock = document.querySelector('.info')
let state = true

const skills = [
  {name: 'HTML', level: 100},
  {name: 'CSS', level: 100},
  {name: 'Sass', level: 100},
  {name: 'JavaScript', level: 90},
  {name: 'React JS', level: 90},
  {name: 'Next JS', level: 90},
  {name: 'GraphQL', level: 60},
  {name: 'Node JS', level: 30},
  {name: 'Express', level: 30},
  {name: 'Shopify', level: 90},
  {name: 'Liquid', level: 70},
  {name: 'Builder.io', level: 100},
  {name: 'GitHub', level: 100},
  {name: 'JIRA', level: 100},
  {name: 'Asana', level: 100},
]

const languages = [
  {name: 'Russian', level: 100},
  {name: 'Ukrainian', level: 90},
  {name: 'English', level: 55},
  {name: 'Arabic', level: 50},
  {name: 'Turkish', level: 35},
]

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

const toggleInfoBlock = () => {
  state ? infoBlock.classList.add('hidden')
    + moveButton.classList.add('hidden')
    : infoBlock.classList.remove('hidden')
    + moveButton.classList.remove('hidden')

  state = !state
}

moveButton.addEventListener('click', toggleInfoBlock)