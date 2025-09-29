// src/data/quiz.js
export const QUIZ = [
  {
    rubric: "HTML",
    questions: [
      // ---------- EASY (10) ----------
      {
        id: "html-01-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Welches Tag steht für einen Absatz?",
        choices: ["<p>", "<section>", "<article>", "<br>"],
        correctIndex: 0
      },
      {
        id: "html-02-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Welche Überschrift ist die wichtigste?",
        choices: ["<h6>", "<h3>", "<h1>", "<title>"],
        correctIndex: 2
      },
      {
        id: "html-03-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Mit welchem Tag bindest du ein Bild ein?",
        choices: ["<picture>", "<img>", "<image>", "<figure>"],
        correctIndex: 1
      },
      {
        id: "html-04-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Was gehört in das Attribut href eines Links (<a>)?",
        choices: ["Die Ziel-URL", "Der Linktext", "Die Dateigröße", "Der MIME-Type"],
        correctIndex: 0
      },
      {
        id: "html-05-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Welches Attribut macht ein Eingabefeld verpflichtend?",
        choices: ["placeholder", "required", "aria-required", "mandatory"],
        correctIndex: 1
      },
      {
        id: "html-06-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Was bewirkt das Tag <br>?",
        choices: ["Seitenumbruch", "Zeilenumbruch", "Absatz", "Trennt Kopf/Fuß"],
        correctIndex: 1
      },
      {
        id: "html-07-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Wofür steht <ul>?",
        choices: [
          "Nummerierte Liste",
          "Ungeordnete Liste",
          "Definitionsliste",
          "Navigationsliste"
        ],
        correctIndex: 1
      },
      {
        id: "html-08-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Welches Attribut liefert Alternativtext für Bilder?",
        choices: ["title", "alt", "aria-label", "desc"],
        correctIndex: 1
      },
      {
        id: "html-09-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Welches Attribut zeigt oft einen Tooltip an?",
        choices: ["tooltip", "name", "title", "label"],
        correctIndex: 2
      },
      {
        id: "html-10-easy",
        rubric: "HTML",
        difficulty: "easy",
        text: "Welche Doctype-Deklaration ist heute Standard?",
        choices: [
          "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\">",
          "<!DOCTYPE html>",
          "<!DOCTYPE XHTML 1.0 Transitional>",
          "<!DOCTYPE document>"
        ],
        correctIndex: 1
      },

      // ---------- MEDIUM (10) ----------
      {
        id: "html-11-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Welches Attribut eines <form> gibt die Ziel-Adresse an?",
        choices: ["method", "name", "action", "target"],
        correctIndex: 2
      },
      {
        id: "html-12-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Welcher input-Typ erzeugt eine Checkbox?",
        choices: ["radio", "checkbox", "text", "select"],
        correctIndex: 1
      },
      {
        id: "html-13-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Welches Element ist semantisch und strukturiert Inhaltsabschnitte?",
        choices: ["<div>", "<span>", "<section>", "<b>"],
        correctIndex: 2
      },
      {
        id: "html-14-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Wie heißt das Element für einen Tabellentitel?",
        choices: ["<caption>", "<thead>", "<title>", "<summary>"],
        correctIndex: 0
      },
      {
        id: "html-15-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Wozu dient das Attribut lang am <html>-Tag?",
        choices: [
          "Sprache der Seite",
          "Zeichensatz",
          "Schriftfamilie",
          "Richtung des Textes"
        ],
        correctIndex: 0
      },
      {
        id: "html-16-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Wie öffnet ein Link in einem neuen Tab/Fenster?",
        choices: [
          'rel="noopener"',
          'target="_blank"',
          'download',
          'referrerpolicy="no-referrer"'
        ],
        correctIndex: 1
      },
      {
        id: "html-17-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Welches Element deklariert Metainformationen wie Charset/Viewport?",
        choices: ["<meta>", "<link>", "<base>", "<script>"],
        correctIndex: 0
      },
      {
        id: "html-18-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Wie bindest du externe CSS-Dateien ein?",
        choices: [
          '<style src="style.css">',
          '<link rel="stylesheet" href="style.css">',
          '<css href="style.css">',
          '<script href="style.css">'
        ],
        correctIndex: 1
      },
      {
        id: "html-19-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "In welchem Bereich steht der Dokumenttitel (<title>)?",
        choices: ["<header>", "<head>", "<body>", "<footer>"],
        correctIndex: 1
      },
      {
        id: "html-20-medium",
        rubric: "HTML",
        difficulty: "medium",
        text: "Was bewirkt das Attribut disabled bei Formular-Elementen?",
        choices: [
          "Es versteckt das Element",
          "Es macht das Element nicht benutzbar",
          "Es markiert das Element als ungültig",
          "Es macht das Element nur schreibgeschützt"
        ],
        correctIndex: 1
      },

      // ---------- HARD (10) ----------
      {
        id: "html-21-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Was steuert das Attribut autocomplete an Formularfeldern?",
        choices: [
          "Browservervollständigung",
          "Autokorrektur",
          "Automatischen Fokus",
          "Rechtschreibprüfung"
        ],
        correctIndex: 0
      },
      {
        id: "html-22-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Wozu dient <noscript>?",
        choices: [
          "Polyfills laden",
          "Inhalt anzeigen, falls JavaScript deaktiviert ist",
          "Audio/Video ohne JS einbetten",
          "CSS ohne <link> laden"
        ],
        correctIndex: 1
      },
      {
        id: "html-23-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Welches Element steht für semantische Betonung (nicht nur Kursivstil)?",
        choices: ["<i>", "<em>", "<b>", "<u>"],
        correctIndex: 1
      },
      {
        id: "html-24-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Welche sind globale Attribute (für fast alle Elemente gültig)?",
        choices: [
          "id, class",
          "href, src",
          "colspan, rowspan",
          "rows, cols"
        ],
        correctIndex: 0
      },
      {
        id: "html-25-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Welches Element ist für eigenständige, in sich geschlossene Inhalte gedacht?",
        choices: ["<section>", "<article>", "<aside>", "<main>"],
        correctIndex: 1
      },
      {
        id: "html-26-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Welcher MIME-Type ist der Standard für HTML-Dokumente?",
        choices: ["text/html", "application/xhtml+xml", "text/xml", "text/plain"],
        correctIndex: 0
      },
      {
        id: "html-27-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Was ermöglicht das Attribut srcset bei <img>?",
        choices: [
          "Mehrere alternative Bildquellen für unterschiedliche Auflösungen",
          "Untertitelspur hinzufügen",
          "Bild-Caching deaktivieren",
          "Vektorbild in Rasterbild umwandeln"
        ],
        correctIndex: 0
      },
      {
        id: "html-28-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Was macht das Attribut defer bei <script>?",
        choices: [
          "Blockiert das HTML-Parsing bis das Script fertig ist",
          "Führt das Script sofort vor dem Parsen aus",
          "Lädt das Script parallel und führt es nach dem Parsen aus",
          "Lädt CSS statt JS"
        ],
        correctIndex: 2
      },
      {
        id: "html-29-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Welche Gruppe enthält nur Void-Elements (ohne schließendes Tag)?",
        choices: [
          "<div>, <span>, <strong>",
          "<img>, <br>, <input>",
          "<p>, <li>, <h1>",
          "<script>, <style>, <link>"
        ],
        correctIndex: 1
      },
      {
        id: "html-30-hard",
        rubric: "HTML",
        difficulty: "hard",
        text: "Welche Elemente nutzt du zum Einbetten von Video und Ton in HTML5?",
        choices: [
          "<embed> und <object>",
          "<video> und <audio>",
          "<source> und <track> alleine",
          "<movie> und <sound>"
        ],
        correctIndex: 1
      }
    ]
  } ,
  {
  rubric: "CSS",
  questions: [
    // ---------- EASY (10) ----------
    {
      id: "css-01-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Mit welcher Syntax bindest du eine externe CSS-Datei in HTML ein?",
      choices: [
        '<style src="style.css">',
        '<link rel="stylesheet" href="style.css">',
        '<css href="style.css">',
        '<script src="style.css">'
      ],
      correctIndex: 1
    },
    {
      id: "css-02-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welche Eigenschaft setzt die Textfarbe?",
      choices: ["font-color", "text-color", "color", "foreground"],
      correctIndex: 2
    },
    {
      id: "css-03-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Wie sprichst du eine Klasse namens box an?",
      choices: [".box", "#box", "box{}", "*box"],
      correctIndex: 0
    },
    {
      id: "css-04-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welches Zeichen leitet eine ID-Selektor an?",
      choices: [".", "#", ":", ">"],
      correctIndex: 1
    },
    {
      id: "css-05-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welche Eigenschaft setzt die Hintergrundfarbe?",
      choices: ["background", "background-color", "bgcolor", "fill"],
      correctIndex: 1
    },
    {
      id: "css-06-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welche Eigenschaft ändert die Schriftgröße?",
      choices: ["font-size", "text-size", "size", "font-height"],
      correctIndex: 0
    },
    {
      id: "css-07-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welcher Wert blendet ein Element aus, reserviert aber den Platz?",
      choices: ["visibility: hidden", "display: none", "opacity: 0", "z-index: -1"],
      correctIndex: 0
    },
    {
      id: "css-08-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welches Box-Modell-Teil steht außerhalb des Rahmens?",
      choices: ["padding", "content", "margin", "border"],
      correctIndex: 2
    },
    {
      id: "css-09-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Welche Eigenschaft macht Text fett?",
      choices: ["font-weight: bold", "font-style: bold", "text-weight: bold", "weight: 700"],
      correctIndex: 0
    },
    {
      id: "css-10-easy",
      rubric: "CSS",
      difficulty: "easy",
      text: "Wie machst du ein Element zu einem Flex-Container?",
      choices: ["layout: flex", "display: flex", "flex: container", "position: flex"],
      correctIndex: 1
    },

    // ---------- MEDIUM (10) ----------
    {
      id: "css-11-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Wie selektierst du alle <p> direkt innerhalb eines Elements mit der Klasse .card?",
      choices: [".card p", ".card > p", "p .card", ".card + p"],
      correctIndex: 1
    },
    {
      id: "css-12-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Welche Einheit ist relativ zur Schriftgröße des Root-Elements?",
      choices: ["em", "rem", "vh", "px"],
      correctIndex: 1
    },
    {
      id: "css-13-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Welche Eigenschaft zentriert Flex-Items horizontal im Container?",
      choices: ["align-items: center", "justify-content: center", "place-items: center", "text-align: center"],
      correctIndex: 1
    },
    {
      id: "css-14-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Wie definierst du ein 3-Spalten Grid mit gleich breiten Spalten?",
      choices: [
        "grid-template-columns: 3fr;",
        "grid-template-columns: repeat(3, 1fr);",
        "grid-columns: 3;",
        "grid: 1fr 1fr 1fr;"
      ],
      correctIndex: 1
    },
    {
      id: "css-15-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Was macht box-sizing: border-box?",
      choices: [
        "Margin wird zur Breite addiert",
        "Padding & Border werden in Breite/Höhe eingerechnet",
        "Nur Border wird addiert",
        "Nichts; ist Default"
      ],
      correctIndex: 1
    },
    {
      id: "css-16-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Wie definierst du eine Medienabfrage für Bildschirme bis 600px Breite?",
      choices: [
        "@media (min-width: 600px) { ... }",
        "@media (max-width: 600px) { ... }",
        "@media screen (600px) { ... }",
        "@media width <= 600px { ... }"
      ],
      correctIndex: 1
    },
    {
      id: "css-17-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Welcher Selektor trifft auf alle <a>, die innerhalb von .nav liegen (egal wie tief)?",
      choices: [".nav > a", ".nav + a", ".nav a", "a .nav"],
      correctIndex: 2
    },
    {
      id: "css-18-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Wie machst du einen Container sticky unterhalb des Headers?",
      choices: [
        "position: fixed; top: 0;",
        "position: sticky; top: 0;",
        "position: absolute; top: 0;",
        "position: relative; top: 0;"
      ],
      correctIndex: 1
    },
    {
      id: "css-19-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Welches Pseudoklasse wählst du beim Hover über einen Link?",
      choices: [":focus", ":hover", ":active", ":visited"],
      correctIndex: 1
    },
    {
      id: "css-20-medium",
      rubric: "CSS",
      difficulty: "medium",
      text: "Welche Schreibweise ist korrekt für eine CSS-Variable und Verwendung?",
      choices: [
        "var(--primary); color: --primary;",
        "--primary: #0f0; color: var(--primary);",
        "$primary: #0f0; color: $primary;",
        "set(--primary, #0f0); color: var(--primary);"
      ],
      correctIndex: 1
    },

    // ---------- HARD (10) ----------
    {
      id: "css-21-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Was ist die Spezifität von `#app .card > p.highlight`?",
      choices: ["0-0-1-3", "0-1-2-1", "1-1-1-1", "1-2-1-0"],
      correctIndex: 2  // ID(1), Klassen(.card,.highlight)=2, Elemente(p)=1 → 1-2-1-0
    },
    {
      id: "css-22-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Welche Eigenschaft aktiviert Hardware-beschleunigte 2D/3D-Transformationen?",
      choices: [
        "transform: translateZ(0)",
        "will-change: opacity",
        "filter: blur(0)",
        "backface-visibility: hidden"
      ],
      correctIndex: 0
    },
    {
      id: "css-23-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Wie definierst du eine benannte Grid-Area für Header, Main, Footer?",
      choices: [
        'grid-template-areas: "header" "main" "footer";',
        'grid-areas: header main footer;',
        'areas: "header" "main" "footer";',
        'grid-template: areas(header main footer);'
      ],
      correctIndex: 0
    },
    {
      id: "css-24-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Welche Eigenschaft verhindert Umbrüche innerhalb eines Inline-Elements?",
      choices: ["white-space: nowrap", "word-wrap: none", "text-wrap: keep", "text-overflow: clip"],
      correctIndex: 0
    },
    {
      id: "css-25-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Wie erzeugst du ein responsives Quadrat über die Breite des Containers?",
      choices: [
        "width: 100%; height: 100%;",
        "aspect-ratio: 1 / 1; width: 100%;",
        "padding: 100% 0;",
        "height: 100vw; width: 100vh;"
      ],
      correctIndex: 1
    },
    {
      id: "css-26-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Welche Reihenfolge ist korrekt für das CSS-Kaskadenprinzip (vereinfacht)?",
      choices: [
        "User-Agent < Autor < Benutzer wichtig < Benutzer normal",
        "User-Agent < Benutzer normal < Autor normal < Autor wichtig < Benutzer wichtig",
        "Benutzer normal < User-Agent < Autor normal < Autor wichtig",
        "Autor wichtig < Benutzer wichtig < Autor normal < Benutzer normal < User-Agent"
      ],
      correctIndex: 1
    },
    {
      id: "css-27-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Welche Eigenschaft verhindert, dass ein absolut positioniertes Kind aus dem Container „ausbricht“?",
      choices: [
        "overflow: hidden am Container",
        "position: sticky am Kind",
        "z-index: 0 am Container",
        "clip-path am Kind"
      ],
      correctIndex: 0
    },
    {
      id: "css-28-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Wie definierst du eine variable Schrift mit optischem Schriftschnitt (100–900)?",
      choices: [
        "font-variation-settings: 'wght' 400;",
        "font-style: variable(100-900);",
        "font-optical-size: 400;",
        "font-weight: 100..900;"
      ],
      correctIndex: 0
    },
    {
      id: "css-29-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Was macht `contain: content;` (CSS Containment)?",
      choices: [
        "Begrenzt Layout-, Stil- und Paint-Effekte innerhalb des Elements",
        "Clippt den Inhalt an den Padding-Box-Rand",
        "Verhindert Reflows vollständig",
        "Erzwingt eine neue Stacking-Context"
      ],
      correctIndex: 0
    },
    {
      id: "css-30-hard",
      rubric: "CSS",
      difficulty: "hard",
      text: "Welche Kombination erzeugt eine sanfte, performante Fade-In-Animation beim Laden?",
      choices: [
        "animation: fade 200ms ease-out; will-change: opacity;",
        "transition: filter 200ms; filter: opacity(1);",
        "transition: opacity 200ms ease-out; opacity von 0 auf 1;",
        "animation: all 200ms linear;"
      ],
      correctIndex: 2
    }
  ]
} ,
{
  rubric: "JS",
  questions: [
    // ---------- EASY (10) ----------
    {
      id: "js-01-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Welche Schlüsselwörter deklarieren Variablen mit Block-Scope?",
      choices: ["var", "let und const", "function", "static"],
      correctIndex: 1
    },
    {
      id: "js-02-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Was vergleicht strikte Gleichheit?",
      choices: ["==", "===", "!=", "!=="],
      correctIndex: 1
    },
    {
      id: "js-03-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Wie holst du ein Element per CSS-Selektor?",
      choices: ["document.getElement()", "document.querySelector()", "window.select()", "$()"],
      correctIndex: 1
    },
    {
      id: "js-04-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Welche Methode hängt ein Event an ein Element?",
      choices: ["addEventListener", "onEventAttach", "appendEvent", "bindEvent"],
      correctIndex: 0
    },
    {
      id: "js-05-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Welche Methode fügt ein Element ans Ende eines Arrays?",
      choices: ["shift()", "unshift()", "push()", "pop()"],
      correctIndex: 2
    },
    {
      id: "js-06-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Was liefert `typeof null`?",
      choices: ["'null'", "'object'", "'undefined'", "'number'"],
      correctIndex: 1
    },
    {
      id: "js-07-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Wie wartest du nicht-blockierend eine Zeitspanne?",
      choices: ["sleep(1000)", "setTimeout(fn, 1000)", "wait(1000)", "delay(1000)"],
      correctIndex: 1
    },
    {
      id: "js-08-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Wo liegt Standard-Scope einer mit let deklarierten Variablen?",
      choices: ["global", "funktional", "blockweise", "modular nur per import"],
      correctIndex: 2
    },
    {
      id: "js-09-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Wie wandelst du eine Zahl in String um?",
      choices: ["(42).toString()", "String(42)", "'' + 42", "alle genannten"],
      correctIndex: 3
    },
    {
      id: "js-10-easy",
      rubric: "JS",
      difficulty: "easy",
      text: "Wie prüfst du die Länge eines Arrays?",
      choices: ["arr.count", "arr.size()", "arr.length", "len(arr)"],
      correctIndex: 2
    },

    // ---------- MEDIUM (10) ----------
    {
      id: "js-11-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Was beschreibt eine Closure am besten?",
      choices: [
        "Ein Objekt ohne Prototyp",
        "Eine Funktion mit Zugriff auf Variablen ihres äußeren Scopes",
        "Nur Arrow Functions",
        "Ein synchroner Callback"
      ],
      correctIndex: 1
    },
    {
      id: "js-12-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Was macht `Array.prototype.map`?",
      choices: [
        "Filtert Elemente heraus",
        "Reduziert auf einen Einzelwert",
        "Transformiert jedes Element und gibt ein neues Array zurück",
        "Fügt Elemente am Ende an"
      ],
      correctIndex: 2
    },
    {
      id: "js-13-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Was ist das Ergebnis von `[1,2,3].filter(x=>x>1)`?",
      choices: ["[1]", "[2,3]", "[3]", "[1,2]"],
      correctIndex: 1
    },
    {
      id: "js-14-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Wofür steht `event.preventDefault()`?",
      choices: [
        "Stoppt Event-Bubbling",
        "Verhindert die Standardaktion des Browsers",
        "Stoppt Capturing",
        "Entfernt den Listener"
      ],
      correctIndex: 1
    },
    {
      id: "js-15-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Wie fängst du Fehler in async/await ab?",
      choices: [
        "try { await ... } catch(e) { ... }",
        "await ... .error(e=>{})",
        "try await ... finally {}",
        "Nur mit window.onerror"
      ],
      correctIndex: 0
    },
    {
      id: "js-16-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Was macht `JSON.stringify({ a: 1 })`?",
      choices: ['"{ a: 1 }"', "'{\"a\":1}'", "'{a:1}'", "'[1]'"],
      correctIndex: 1
    },
    {
      id: "js-17-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Wie liest du einen Wert aus localStorage?",
      choices: [
        "localStorage.get('key')",
        "localStorage.readItem('key')",
        "localStorage.getItem('key')",
        "storage('key')"
      ],
      correctIndex: 2
    },
    {
      id: "js-18-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Was bewirkt `use strict`?",
      choices: [
        "Deaktiviert Hoisting",
        "Schaltet JS in einen strengeren Modus (z. B. verbietet implizite Globals)",
        "Beschleunigt den Code immer",
        "Macht Variablen unveränderlich"
      ],
      correctIndex: 1
    },
    {
      id: "js-19-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Wie importierst du eine benannte Funktion aus einem Modul?",
      choices: [
        "require('mod').fn",
        "import { fn } from './mod.js'",
        "import * as fn from './mod.js'",
        "module.import('fn')"
      ],
      correctIndex: 1
    },
    {
      id: "js-20-medium",
      rubric: "JS",
      difficulty: "medium",
      text: "Was gibt `Number.isNaN('NaN')` zurück?",
      choices: ["true", "false", "wirft Fehler", "undefined"],
      correctIndex: 1
    },

    // ---------- HARD (10) ----------
    {
      id: "js-21-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Wie funktioniert das Event Loop-Modell vereinfacht?",
      choices: [
        "JS-Threads verarbeiten parallel DOM und Skripte",
        "Ein einzelner Thread verarbeitet Call Stack und holt Tasks/Jobs aus Queues",
        "Zwei Threads: einer für Stack, einer für Heap",
        "Ein Thread pro Event Listener"
      ],
      correctIndex: 1
    },
    {
      id: "js-22-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Wie bindet sich `this` in Arrow Functions?",
      choices: [
        "Dynamisch zur Aufrufzeit",
        "An das umgebende Lexikalische Scope",
        "An das globale Objekt",
        "An den ersten Parameter"
      ],
      correctIndex: 1
    },
    {
      id: "js-23-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Was macht `Object.create(null)`?",
      choices: [
        "Erzeugt ein Objekt ohne Prototyp",
        "Erzeugt ein Array",
        "Erzeugt ein Objekt mit `Object.prototype`",
        "Erzeugt eine Klasse"
      ],
      correctIndex: 0
    },
    {
      id: "js-24-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Welcher Aufruf klont ein flaches Objekt korrekt?",
      choices: [
        "const copy = obj",
        "const copy = { ...obj }",
        "const copy = Object.link(obj)",
        "const copy = JSON.copy(obj)"
      ],
      correctIndex: 1
    },
    {
      id: "js-25-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Welche Aussage zu Promises ist korrekt?",
      choices: [
        "Ein Promise kann von fulfilled zurück zu pending wechseln",
        "Ein Promise hat die Zustände: pending, fulfilled oder rejected",
        "Promises blockieren den Thread",
        "Promises sind identisch zu Callbacks"
      ],
      correctIndex: 1
    },
    {
      id: "js-26-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Was ist der Unterschied zwischen Microtasks und Macrotasks?",
      choices: [
        "Macrotasks (setTimeout, I/O) werden nach dem Rendern, Microtasks (Promises) vor dem nächsten Tick ausgeführt",
        "Microtasks sind langsamer",
        "Macrotasks laufen im Worker",
        "Kein Unterschied"
      ],
      correctIndex: 0
    },
    {
      id: "js-27-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Welche Methode ändert das Original-Array NICHT?",
      choices: ["splice()", "sort()", "reverse()", "slice()"],
      correctIndex: 3
    },
    {
      id: "js-28-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Wie fängst du Fehler bei fetch mit async/await korrekt?",
      choices: [
        "const res = await fetch(url); const data = await res.json();",
        "try { const res = await fetch(url); if(!res.ok) throw new Error(res.status); const data = await res.json(); } catch(e) { ... }",
        "await fetch(url).catch(e=>{}); const data = await res.json();",
        "fetch(url); const data = await res.json();"
      ],
      correctIndex: 1
    },
    {
      id: "js-29-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Welche Aussage über Prototypen ist richtig?",
      choices: [
        "Jedes Objekt hat exakt denselben Prototyp",
        "Funktionen besitzen eine `prototype`-Property, die bei `new` als Prototyp genutzt wird",
        "Nur Arrays haben Prototypen",
        "Prototypen sind nur in TypeScript relevant"
      ],
      correctIndex: 1
    },
    {
      id: "js-30-hard",
      rubric: "JS",
      difficulty: "hard",
      text: "Was trifft auf `Object.freeze(obj)` zu?",
      choices: [
        "Macht das Objekt unveränderlich (keine neuen/gelöschten/geänderten Properties)",
        "Friert nur Arrays ein",
        "Schützt auch verschachtelte Objekte rekursiv",
        "Hebt Strict Mode auf"
      ],
      correctIndex: 0
    }
  ]
},
{
  rubric: "JSON",
  questions: [
    // ---------- EASY (10) ----------
    {
      id: "json-01-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Wofür steht JSON?",
      choices: [
        "Java Source Object Notation",
        "JavaScript Object Notation",
        "Java Serialized Object Network",
        "Joined Schema Object Notation"
      ],
      correctIndex: 1
    },
    {
      id: "json-02-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Wie müssen Schlüssel (Property-Namen) in gültigem JSON formatiert sein?",
      choices: ["Ohne Anführungszeichen", "Mit einfachen Anführungszeichen", "Mit doppelten Anführungszeichen", "Beliebig"],
      correctIndex: 2
    },
    {
      id: "json-03-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Welche Werte sind in JSON gültig?",
      choices: [
        "Objekte, Arrays, Strings, Zahlen, true, false, null",
        "Funktionen und Date",
        "Undefined und NaN",
        "DOM-Knoten"
      ],
      correctIndex: 0
    },
    {
      id: "json-04-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Wie wandelst du ein JSON-String in ein Objekt um?",
      choices: ["JSON.load()", "JSON.decode()", "JSON.parse()", "evalJSON()"],
      correctIndex: 2
    },
    {
      id: "json-05-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Wie erstellst du aus einem Objekt einen JSON-String?",
      choices: ["toJSON()", "JSON.stringify()", "JSON.encode()", "object.toJSON()"],
      correctIndex: 1
    },
    {
      id: "json-06-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Ist ein abschließendes Komma in JSON erlaubt?",
      choices: ["Ja", "Nein", "Nur bei Arrays", "Nur bei Objekten"],
      correctIndex: 1
    },
    {
      id: "json-07-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Sind Kommentare in JSON erlaubt?",
      choices: ["Ja, mit //", "Ja, mit /* */", "Nein", "Nur in Strings"],
      correctIndex: 2
    },
    {
      id: "json-08-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Welche Zeichen müssen in JSON-Strings escaped werden (z. B. in URLs)?",
      choices: ["Nur Umlaute", "Steuerzeichen und Anführungszeichen", "Nur Leerzeichen", "Keine Zeichen"],
      correctIndex: 1
    },
    {
      id: "json-09-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Welche Kodierung ist üblich für JSON-Dateien?",
      choices: ["UTF-8", "ASCII", "UTF-16LE", "Latin-1"],
      correctIndex: 0
    },
    {
      id: "json-10-easy",
      rubric: "JSON",
      difficulty: "easy",
      text: "Welcher MIME-Type ist typisch für JSON im Web?",
      choices: ["text/json", "application/json", "application/x-json", "text/plain"],
      correctIndex: 1
    },

    // ---------- MEDIUM (10) ----------
    {
      id: "json-11-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie greifst du auf den Wert `name` in `{ \"name\": \"Max\" }` zu, nachdem du geparst hast?",
      choices: ["obj.name", "obj['name']", "beides funktioniert", "nur per JSON.get('name')"],
      correctIndex: 2
    },
    {
      id: "json-12-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie wandelst du Datumsstrings beim Parsen in echte Date-Objekte um?",
      choices: [
        "Geht nicht mit JSON.parse",
        "Mit Reviver-Funktion: JSON.parse(str, (k,v)=> Date.parse(v)? new Date(v): v)",
        "Mit JSON.date()",
        "Automatisch, wenn ISO-Format"
      ],
      correctIndex: 1
    },
    {
      id: "json-13-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie formatierst du JSON hübsch (mit Einrückung)?",
      choices: [
        "JSON.stringify(obj, 2)",
        "JSON.stringify(obj, null, 2)",
        "JSON.format(obj, 2)",
        "JSON.stringifyPretty(obj)"
      ],
      correctIndex: 1
    },
    {
      id: "json-14-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie gehst du sicher mit unbekannten/fehlenden Feldern um?",
      choices: [
        "Optional Chaining/Default: obj?.user?.email ?? 'n/a'",
        "Nur mit try/catch",
        "JSON.parse wirft immer bei fehlenden Feldern",
        "Geht nicht"
      ],
      correctIndex: 0
    },
    {
      id: "json-15-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie serialisierst du nur bestimmte Eigenschaften eines Objekts?",
      choices: [
        "JSON.stringify(obj, ['id', 'name'])",
        "JSON.stringify.only(obj, ...)",
        "obj.toJSON(['id','name'])",
        "Nicht möglich"
      ],
      correctIndex: 0
    },
    {
      id: "json-16-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Was macht die Reviver-Funktion in JSON.parse?",
      choices: [
        "Ersetzt JSON.parse vollständig",
        "Erlaubt Transformation von Werten während des Parsens",
        "Formatiert den Output",
        "Validiert automatisch gegen ein Schema"
      ],
      correctIndex: 1
    },
    {
      id: "json-17-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie überträgst du sicher JSON per fetch?",
      choices: [
        "fetch(url, { headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), method: 'POST' })",
        "fetch.json(url, data)",
        "XMLHttpRequest nur",
        "Nur GET erlaubt JSON"
      ],
      correctIndex: 0
    },
    {
      id: "json-18-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie gehst du mit großen JSON-Dateien im Browser um?",
      choices: [
        "Immer komplett in den Speicher laden",
        "Streaming/Chunking oder pagination serverseitig",
        "eval statt parse nutzen",
        "Base64 zuerst decodieren"
      ],
      correctIndex: 1
    },
    {
      id: "json-19-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Welche Aussage zu JSON und Sicherheit trifft eher zu?",
      choices: [
        "eval(JSON) ist sicher, wenn der Server vertraut ist",
        "Immer JSON.parse verwenden statt eval",
        "JSON ist automatisch signiert",
        "CORS gilt nicht für JSON"
      ],
      correctIndex: 1
    },
    {
      id: "json-20-medium",
      rubric: "JSON",
      difficulty: "medium",
      text: "Wie serialisierst du zyklische Referenzen?",
      choices: [
        "JSON.stringify kann das direkt",
        "Mit einem Replacer, der Zyklen auflöst (z. B. per WeakSet)",
        "Mit JSON.cycle()",
        "Zyklen sind in JSON erlaubt"
      ],
      correctIndex: 1
    },

    // ---------- HARD (10) ----------
    {
      id: "json-21-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Welche Aussage zu JSON Schema trifft zu?",
      choices: [
        "Es ist eine Sprache zum Validieren der Struktur von JSON-Daten",
        "Es ersetzt JSON",
        "Es ist nur für Datenbanken",
        "Es dient nur der Serialisierung"
      ],
      correctIndex: 0
    },
    {
      id: "json-22-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Was ist bei Floats in JSON zu beachten?",
      choices: [
        "Sie werden immer exakt gespeichert",
        "IEEE-754 Rundungsfehler können auftreten (z. B. 0.1+0.2)",
        "Nur ganze Zahlen sind erlaubt",
        "JSON nutzt Dezimal128"
      ],
      correctIndex: 1
    },
    {
      id: "json-23-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Wie gehst du mit großen Integern in JSON um (über Number.MAX_SAFE_INTEGER)?",
      choices: [
        "Als String übertragen",
        "Als BigInt direkt in JSON",
        "Als Hex nur",
        "Nicht möglich"
      ],
      correctIndex: 0
    },
    {
      id: "json-24-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Welche Aussage zu JSONP ist korrekt?",
      choices: [
        "JSONP ist eine sichere Alternative zu CORS",
        "JSONP nutzt `<script>` und eine Callback-Funktion",
        "JSONP ist ein MIME-Type",
        "JSONP erlaubt POST"
      ],
      correctIndex: 1
    },
    {
      id: "json-25-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Wie validierst du JSON gegen ein Schema im Client?",
      choices: [
        "Mit JSON.validate()",
        "Mit Bibliotheken wie Ajv gegen ein JSON-Schema",
        "Nur per eval",
        "Nicht möglich"
      ],
      correctIndex: 1
    },
    {
      id: "json-26-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Welche Aussage zu Datumswerten in JSON trifft zu?",
      choices: [
        "JSON hat einen nativen `date`-Typ",
        "ISO-8601 Strings sind üblich; Umwandlung in Date-Objekte erfolgt in der App",
        "Dates werden automatisch geparst",
        "Dates dürfen nur in Millisekunden sein"
      ],
      correctIndex: 1
    },
    {
      id: "json-27-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Wie überträgst du binäre Daten sinnvoll in JSON?",
      choices: [
        "Direkt als Uint8Array",
        "Als Base64-String",
        "Als Binärliteral",
        "Geht nicht"
      ],
      correctIndex: 1
    },
    {
      id: "json-28-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Welche Aussage zu `toJSON()` ist korrekt?",
      choices: [
        "Wenn an einem Objekt definiert, wird der Rückgabewert bei stringify serialisiert",
        "Hat keinen Effekt",
        "Erzwingt Pretty-Print",
        "Wird beim Parsen genutzt"
      ],
      correctIndex: 0
    },
    {
      id: "json-29-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Wie gehst du bei inkompatiblen Feldnamen zwischen Server und Client vor?",
      choices: [
        "Server anpassen",
        "Beim Parsen mappen (Reviver/Mapping-Layer)",
        "Immer snake_case verwenden",
        "Immer camelCase verwenden"
      ],
      correctIndex: 1
    },
    {
      id: "json-30-hard",
      rubric: "JSON",
      difficulty: "hard",
      text: "Wie gehst du mit optionalen Feldern und Abwärtskompatibilität um?",
      choices: [
        "Strikte Validierung; alles andere ablehnen",
        "Versionierung im Schema oder Feature Flags; Defaults im Client",
        "Immer alle Felder senden",
        "Nur Kommentare in JSON nutzen"
      ],
      correctIndex: 1
    }
  ]
}

];

