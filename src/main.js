// src/main.js (oder main.js – je nach Pfad in deiner index.html)

// 1) Bootstrap einbinden (Vite importiert aus node_modules)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './style.css';
import { QUIZ } from './data/quiz.js';
console.log('Rubriken:', QUIZ.map(r => r.rubric));
console.log('Fragen HTML:', QUIZ.find(r => r.rubric==='HTML')?.questions.length);


const html = QUIZ.find(r => r.rubric === 'HTML');
const first = html.questions[0];


// einbinden von rubric: html
////////////////////////////////////////////////////////////////////////////////////
// document.querySelector('.quiz-question').textContent = first.text;
// document.querySelector('.quiz-answers').innerHTML = first.choices
//   .map((txt, i) => `
//     <div class="d-flex align-items-center mb-3">
//       <div class="badge bg-secondary me-3">${'ABCD'[i]}</div>
//       <button class="btn w-100 text-start btn-outline-primary">${txt}</button>
//     </div>
//   `)
//   .join('');


// kleiner Funktionstest, dass JS läuft:
console.log('main.js geladen');

// Beispiel: erste Frage einsetzen
// const questionEl = document.querySelector('.quiz-question');
// const answersEl  = document.querySelector('.quiz-answers');

// if (questionEl && answersEl) {
//   questionEl.textContent = 'Was ist 2 + 2?';
//   ['3','4','5'].forEach((txt,i)=>{
//     const b=document.createElement('button');
//     b.className='btn btn-outline-primary d-block mb-2';
//     b.textContent=txt;
//     b.onclick=()=>alert(i===1?'Richtig ✅':'Falsch ❌');
//     answersEl.appendChild(b);
//   });
// }