// ———————————————————————————————————————————————————————————————
// Imports (Vite): Bootstrap + Icons + eigenes CSS + Daten
// ———————————————————————————————————————————————————————————————
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './style.css';

import { RUBRICTEXT } from './data/content.js';

// ———————————————————————————————————————————————————————————————
// Variabeln definieren
// ———————————————————————————————————————————————————————————————

let currentRubric;

// ———————————————————————————————————————————————————————————————
// DOM-Helpers
// ———————————————————————————————————————————————————————————————

const $id = (id) => document.getElementById(id);

// ———————————————————————————————————————————————————————————————
// Funktionen
// ———————————————————————————————————————————————————————————————
function chooseCSS() {
    const HTML = $id('HTML');
    const CSS = $id('CSS');
    const JS = $id('JS');
    currentRubric = 'CSS';
    localStorage.setItem('quiz.rubric', 'CSS');
    localStorage.setItem('quiz.level', 'easy'); // oder gewählte Stufe
    const startBtn = document.querySelector('.btn.btn-primary');
    if (startBtn) startBtn.href = `game.html?rubric=${currentRubric}&level=easy`;
    HTML.classList.remove('active');
    HTML.setAttribute('onclick', "chooseHTML()");
    JS.classList.remove('active');
    JS.setAttribute('onclick', "chooseJS()");
    CSS.classList.add('active');
    CSS.removeAttribute('onclick');
    renderRubric(1);
};

function chooseJS() {
    const HTML = $id('HTML');
    const CSS = $id('CSS');
    const JS = $id('JS');
    currentRubric = 'JS';
    localStorage.setItem('quiz.rubric', 'JS');
    localStorage.setItem('quiz.level', 'easy'); // oder gewählte Stufe
    const startBtn = document.querySelector('.btn.btn-primary');
    if (startBtn) startBtn.href = `game.html?rubric=${currentRubric}&level=easy`;
    HTML.classList.remove('active');
    HTML.setAttribute('onclick', "chooseHTML()");
    CSS.classList.remove('active');
    CSS.setAttribute('onclick', "chooseCSS()");
    JS.classList.add('active');
    JS.removeAttribute('onclick');
    renderRubric(2);
};

function chooseHTML() {
    const HTML = $id('HTML');
    const CSS = $id('CSS');
    const JS = $id('JS');
    currentRubric = 'HTML';
    localStorage.setItem('quiz.rubric', 'HTML');
    localStorage.setItem('quiz.level', 'easy'); // oder gewählte Stufe
    const startBtn = document.querySelector('.btn.btn-primary');
    if (startBtn) startBtn.href = `game.html?rubric=${currentRubric}&level=easy`;
    CSS.classList.remove('active');
    CSS.setAttribute('onclick', "chooseCSS()");
    JS.classList.remove('active');
    JS.setAttribute('onclick', "chooseJS()");
    HTML.classList.add('active');
    HTML.removeAttribute('onclick');
    renderRubric(0);
};

function renderRubric(rubricIndex) {
    const QUIZRUBRIC = $id('INDEX-CONTENT');
    QUIZRUBRIC.innerHTML = RUBRICTEXT[rubricIndex];
}

window.chooseCSS = chooseCSS;
window.chooseHTML = chooseHTML;
window.chooseJS = chooseJS;
// Einmaliger Initial-Start, wenn das DOM bereit ist
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('quiz.rubric') || 'HTML';
  if (saved === 'CSS') {
    chooseCSS();
  } else if (saved === 'JS') {
    chooseJS();
  } else {
    chooseHTML(); // Default
  }
});

