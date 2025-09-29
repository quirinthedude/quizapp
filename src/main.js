// src/main.js (oder main.js – je nach Pfad in deiner index.html)

// 1) Bootstrap einbinden (Vite importiert aus node_modules)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './style.css';
import { QUIZ } from './data/quiz.js';
// console.log('Rubriken:', QUIZ.map(r => r.rubric));
// console.log('Fragen HTML:', QUIZ.find(r => r.rubric==='HTML')?.questions.length);

console.info('Using script:', import.meta.url);
if (!import.meta.url.includes('/src/main.js')) {
  console.warn('⚠️ Du editierst offenbar nicht /src/main.js');
}

// const html = QUIZ.find(r => r.rubric === 'HTML');
// const first = html.questions[0];
let currentDifficulty = "hard";
let currentRubric = "HTML";
let currentQuestionNumber = 1;
const currentQuest =
  (QUIZ.find(r => r.rubric === currentRubric)?.questions || [])
    .filter(q => q.difficulty === currentDifficulty)
    .slice(0, 10)
    .map(q => ({
      question:     q.text,
      answer_1:     q.choices[0],
      answer_2:     q.choices[1],
      answer_3:     q.choices[2],
      answer_4:     q.choices[3],
      right_answer: q.correctIndex + 1, // 0-basiert → 1-basiert
      answered:     true
    }));

function init() {

    renderQuestion();
    renderAnswers();
    renderQuestionNumber();
    renderDifficulty();
}

function renderQuestionNumber() {
    const questionNumber = document.getElementById('question-number');
    questionNumber.textContent = `Frage: ${currentQuestionNumber}/${currentQuest.length}`;
}

function renderDifficulty() {
    const level = document.getElementById('level');
    level.textContent = `Schwierigkeitsgrad : ${currentDifficulty}`
}

function renderQuestion() {
    const quizQuestion = document.getElementById('quiz-question');
    quizQuestion.textContent = `Frage: ${currentQuest[currentQuestionNumber].question}`;
}

function renderAnswers() {
    const answer1 = document.getElementById('answer_1');
    const answer2 = document.getElementById('answer_2');
    const answer3 = document.getElementById('answer_3');
    const answer4 = document.getElementById('answer_4');
    answer1.textContent = `${currentQuest[currentQuestionNumber].answer_1}`;
    answer2.textContent = `${currentQuest[currentQuestionNumber].answer_2}`;
    answer3.textContent = `${currentQuest[currentQuestionNumber].answer_3}`;
    answer4.textContent = `${currentQuest[currentQuestionNumber].answer_4}`;


}
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
init();
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