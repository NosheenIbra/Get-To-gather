import './style.css'
import nav from './src/component/header'
import main from './src/component/main/main'

const app = document.querySelector('#app')
app.insertAdjacentElement('afterbegin',nav)
app.insertAdjacentElement('afterbegin', main)