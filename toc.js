
'use strict'

{
const $ = q => document.querySelector(q)
const $$ = q => Array.from(document.querySelectorAll(q))

const menu = [
    `<nav id="menu">
    <button type="button" name="Menu" id="Menu" class="menu_button">
    <span>&#9776;&nbsp;MENU</span>
    </button> 
  </nav>`,

    `<nav id="menuX">
    <div class="div_menu_x">
      <span class="icon">&#9776;&nbsp;</span>
      <span>MEMU</span>
      <button type="button" name="MenuX" id="MenuX" class="menu_buttonX">
        <span>X</span>
      </button> 
    </div>
    <ul id="menu_list">
      <li><a href="#link1" class="menu_link"></a></li>
    </ul>
  </nav>`,
]

//Lauout flex erstellen (flex conteiner mit flex boksen):
const inhalt = Array.from(document.body.children) // Konvertiere die HTMLCollection in ein Array
const DIV_FLEX_ITEM1 = document.createElement('div')
DIV_FLEX_ITEM1.classList.add('flex-item')
DIV_FLEX_ITEM1.classList.add('visible')
while (inhalt.length > 0) {       // Verschiebe jedes Kinderelement in das neue DIV
  DIV_FLEX_ITEM1.appendChild(inhalt[0]);
  inhalt.shift();
}
document.body.appendChild(DIV_FLEX_ITEM1)

const DIV_FLEX_ITEM2 = document.createElement('div')
DIV_FLEX_ITEM2.classList.add('flex-item')
DIV_FLEX_ITEM2.classList.add('visible')
DIV_FLEX_ITEM2.innerHTML = menu.join('')

const DIV_FLEX_CONTAINER = document.createElement('div') // element erstellen
DIV_FLEX_CONTAINER.classList.add('flex-container') //klass dazufügen
document.body.appendChild(DIV_FLEX_CONTAINER) 
$('.flex-container').appendChild(DIV_FLEX_ITEM1)
$('.flex-container').appendChild(DIV_FLEX_ITEM2)

//Menu offnen mit Klick und auf X schlossen auch mit klick:      
const showMenu = () => {
  $('.menu_button').addEventListener('click', () => (show()),)
    const show = () => {
      $('#menu').classList.add('active')
      $('#menuX').classList.add('active')
    }
}

const closedMenu = () => {
  $('.menu_buttonX').addEventListener('click', () => (close()),)
   const close = () => {
    $('#menu').classList.remove('active')
    $('#menuX').classList.remove('active')
  }
}

showMenu()
closedMenu()

//eine Rekursion (wiederholung Funktion)so viel li erstellen wie viel h2 gibt es: 
const menuLength = () => {
const liLength = () => $$('.menu_link').length
if ($$('h2').length > liLength()) {
  const li = $('ul li:first-child').cloneNode(true)
  $('ul').appendChild(li) 
menuLength()
} 
liLength()
}

menuLength()

//eine Schleife für li.innerHTML so wie h2.innerHTML machen:
const liInnerHTML = () => {
  for (let i = 0; i < $$('h2').length; i++) {
    $$('a')[i].innerHTML = $$('h2')[i].innerHTML
  }
}

liInnerHTML()


//eine Schleife für href verschiedene Werte geben für verlinken:
const createValuesForAttributes = () => {
  for (let i = 0; i < $$('h2').length; i++) {
    $$('a')[i].href = `#link${i}`
    }
  
  for (let i = 0; i < $$('h2').length; i++) {
      $$('h2')[i].id = `link${i}`
    }
}

createValuesForAttributes()

}