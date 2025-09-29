// src/main.js

// ———————————————————————————————————————————————————————————————
// Imports (Vite): Bootstrap + Icons + eigenes CSS + Daten
// ———————————————————————————————————————————————————————————————
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './style.css';
import { QUIZ } from './data/quiz.js';

console.info('Using script:', import.meta.url);

// ———————————————————————————————————————————————————————————————
// Zustand (State)
// ———————————————————————————————————————————————————————————————
let currentDifficulty = 'hard';   //  'easy' | 'medium' | 'hard' 
let currentRubric     = 'HTML';   // 'HTML' | 'CSS' | 'JS' | 'JSON'
let currentIndex      = 0;        // 0-basiert!

// Fragen-Pool aufbereiten (max. 10)
const currentQuest =
  (QUIZ.find(r => r.rubric === currentRubric)?.questions || [])
    .filter(q => q.difficulty === currentDifficulty)
    .slice(0, 10)
    .map(q => ({
      question:     q.text,
      answer_1:     q.choices?.[0] ?? '',
      answer_2:     q.choices?.[1] ?? '',
      answer_3:     q.choices?.[2] ?? '',
      answer_4:     q.choices?.[3] ?? '',
      right_answer: (q.correctIndex ?? 0) + 1,
      answered:     false,
    }));

// Debug in der Konsole nutzbar machen (weil ES-Module nicht global sind)
window.__Q = { currentQuest, get index(){return currentIndex;} };

// ———————————————————————————————————————————————————————————————
// DOM-Helpers
// ———————————————————————————————————————————————————————————————
const $id = (id) => document.getElementById(id);

// Fragelement: erlaubt id ODER class 
const getQuestionEl = () =>
  $id('quiz-question') || document.querySelector('.quiz-question');

// ———————————————————————————————————————————————————————————————
// Render-Funktionen (defensiv, crasht nicht bei HMR-Zwischenzuständen)
// ———————————————————————————————————————————————————————————————
function renderQuestionNumber() {
  const el = $id('question-number');
  if (!el) return;
  el.textContent = `Frage: ${Math.min(currentIndex + 1, currentQuest.length)}/${currentQuest.length || 0}`;
}

function renderDifficulty() {
  const el = $id('level');
  if (!el) return;
  el.textContent = `Schwierigkeitsgrad : ${currentDifficulty}`;
}

function renderQuestion() {
  const el = getQuestionEl();
  const q  = currentQuest[currentIndex];
  if (!el || !q) return;
  el.textContent = `Frage: ${q.question}`;
}

function renderAnswers() {
  const q = currentQuest[currentIndex];
  if (!q) return;

  const a1 = $id('answer_1');
  const a2 = $id('answer_2');
  const a3 = $id('answer_3');
  const a4 = $id('answer_4');

  if (a1) a1.textContent = q.answer_1 ?? '';
  if (a2) a2.textContent = q.answer_2 ?? '';
  if (a3) a3.textContent = q.answer_3 ?? '';
  if (a4) a4.textContent = q.answer_4 ?? '';
}

function updateNextBtnState() {
  const btn = $id('next-btn');
  if (!btn) return;
  btn.disabled = currentIndex >= currentQuest.length - 1 || currentQuest.length === 0;
}

// ———————————————————————————————————————————————————————————————
// Interaktionen
// ———————————————————————————————————————————————————————————————
function onNext() {
  if (currentIndex < currentQuest.length - 1) {
    currentIndex++;
    renderQuestion();
    renderAnswers();
    renderQuestionNumber();
    updateNextBtnState();
  }
}

// ———————————————————————————————————————————————————————————————
// Init (HMR-sicher: kein Doppelstart, sauberes Aufräumen)
// ———————————————————————————————————————————————————————————————
let booted = false;

function init() {
  if (booted) return;      // schützt vor Doppelstart (z. B. durch HMR)
  booted = true;

  // DOM vorhanden?
  if (!getQuestionEl()) {
    console.warn('[quiz] init abgebrochen: #quiz-question fehlt (Timing/HMR?)');
    booted = false;
    return;
  }

  // Events binden
  const next = $id('next-btn');
  if (next) next.addEventListener('click', onNext);

  // Erste Ansicht
  renderQuestion();
  renderAnswers();
  renderQuestionNumber();
  renderDifficulty();
  updateNextBtnState();

  console.log('main.js geladen');
}

// sicherer Start (einmalig)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  queueMicrotask(init);
}

// ———————————————————————————————————————————————————————————————
// Vite HMR: sauber entsorgen & neu rendern
// ———————————————————————————————————————————————————————————————
if (import.meta.hot) {
  // Beim Ersetzen dieses Moduls: Listener lösen & Neu-Init erlauben
  import.meta.hot.dispose(() => {
    const next = $id('next-btn');
    if (next) {
      // Trick: Knoten ersetzen => alle Listener weg
      next.replaceWith(next.cloneNode(true));
    }
    booted = false; // beim nächsten Tick neu initialisieren
  });

  // Nach dem Hot-Swap neu rendern (oder notfalls neu initialisieren)
  import.meta.hot.accept(() => {
    try {
      renderQuestion();
      renderAnswers();
      renderQuestionNumber();
      renderDifficulty();
      updateNextBtnState();
    } catch (e) {
      console.warn('[HMR] re-render failed → re-init', e);
      queueMicrotask(init);
    }
  });
}
