// ════════════════════════════════════════
//  QUIZ DATA — all 5 topics
// ════════════════════════════════════════
const quizData = {

  // ── 01: LOGICAL OPERATORS ──
  operators: {
    title: 'Logical Operators',
    icon: '∧',
    color: 'var(--cyan)',
    num: '01',
    questions: [
      {
        q: 'Which operator returns TRUE only when BOTH inputs are true?',
        opts: ['Disjunction (∨)', 'Conjunction (∧)', 'Negation (¬)', 'Exclusive OR (⊕)'],
        ans: 1,
        explain: '∧ (AND) is true only when both p AND q are true. One false input makes the whole thing false.'
      },
      {
        q: 'What is the truth value of ¬(¬T)?',
        opts: ['F', 'T', 'Undefined', 'Both T and F'],
        ans: 1,
        explain: 'Double negation cancels out: ¬(¬T) = ¬F = T. Negating twice returns to the original value.'
      },
      {
        q: 'p → q is FALSE when:',
        opts: ['p is F and q is T', 'p is F and q is F', 'p is T and q is T', 'p is T and q is F'],
        ans: 3,
        explain: 'Implication is ONLY false when the hypothesis p is TRUE but the conclusion q is FALSE. A false premise makes the implication vacuously true.'
      },
      {
        q: 'Which operator is TRUE when exactly ONE of the two inputs is true?',
        opts: ['Conjunction (∧)', 'Disjunction (∨)', 'Exclusive OR (⊕)', 'Biconditional (↔)'],
        ans: 2,
        explain: 'XOR (⊕) is true when exactly one input is true. Both true or both false → XOR gives false.'
      },
      {
        q: 'What is the truth value of F ∨ F?',
        opts: ['T', 'F', 'Undefined', 'Depends on context'],
        ans: 1,
        explain: 'Disjunction (OR) is only false when BOTH inputs are false. F ∨ F = F.'
      },
      {
        q: 'p ↔ q is TRUE when:',
        opts: ['p is T and q is F', 'p is F and q is T', 'p and q have the same truth value', 'p and q have different truth values'],
        ans: 2,
        explain: 'Biconditional (↔) is true when both propositions share the same truth value — both T or both F.'
      },
      {
        q: 'What is the correct operator precedence from highest to lowest?',
        opts: ['∧ > ¬ > ∨ > → > ↔', '¬ > ∧ > ∨ > → > ↔', '¬ > ∨ > ∧ > → > ↔', '↔ > → > ∨ > ∧ > ¬'],
        ans: 1,
        explain: 'Precedence order: ¬ binds tightest, then ∧, then ∨, then →, then ↔ (lowest).'
      },
      {
        q: 'Evaluate: ¬T ∧ F',
        opts: ['T', 'F', 'T ∧ F', '¬F'],
        ans: 1,
        explain: 'Step 1: ¬T = F (negation first, higher precedence). Step 2: F ∧ F = F.'
      },
      {
        q: 'Which statement correctly describes the OR operator (∨)?',
        opts: [
          'True only when both inputs are true',
          'True when at least one input is true',
          'True only when exactly one input is true',
          'True only when both inputs are false'
        ],
        ans: 1,
        explain: 'OR (∨) is inclusive — true when at least one input is true, including when both are true. Only false when BOTH are false.'
      },
      {
        q: 'What does "vacuously true" mean for implication p → q?',
        opts: [
          'q is always true regardless of p',
          'The implication is false when p is false',
          'When p is false, the implication is automatically true',
          'p and q are both false'
        ],
        ans: 2,
        explain: 'When the hypothesis p is FALSE, the implication p → q is always TRUE — vacuously true. The "if" condition was never triggered, so it can\'t be violated.'
      }
    ]
  },

  // ── 02: LOGICAL EQUIVALENCES ──
  equivalences: {
    title: 'Logical Equivalences',
    icon: '≡',
    color: 'var(--pink)',
    num: '02',
    questions: [
      {
        q: 'What does p ≡ q mean?',
        opts: [
          'p and q are the same proposition',
          'p and q have identical truth values in all cases',
          'p implies q and q implies p',
          'p and q are both tautologies'
        ],
        ans: 1,
        explain: 'p ≡ q means p and q are logically equivalent — they produce the same truth value for every possible combination of variable values. Their truth tables are identical.'
      },
      {
        q: 'Which of the following is De Morgan\'s first law?',
        opts: [
          '¬(p ∨ q) ≡ ¬p ∧ ¬q',
          '¬(p ∧ q) ≡ ¬p ∨ ¬q',
          '¬(p → q) ≡ p ∧ ¬q',
          '¬(p ↔ q) ≡ p ⊕ q'
        ],
        ans: 1,
        explain: 'De Morgan\'s 1st law: ¬(p ∧ q) ≡ ¬p ∨ ¬q. Negating a conjunction flips it to a disjunction with both sides negated.'
      },
      {
        q: 'Which law states that p ∨ (p ∧ q) ≡ p?',
        opts: ['Idempotent Law', 'Absorption Law', 'Domination Law', 'Distributive Law'],
        ans: 1,
        explain: 'Absorption Law: p ∨ (p ∧ q) ≡ p. The "p" absorbs the compound expression because p already covers all cases where p ∧ q is true.'
      },
      {
        q: 'What is the equivalence of p → q?',
        opts: ['¬q → ¬p', '¬p ∨ q', 'q → p', 'Both A and B'],
        ans: 3,
        explain: 'p → q ≡ ¬p ∨ q (implication as disjunction) AND p → q ≡ ¬q → ¬p (contrapositive). Both are correct equivalences.'
      },
      {
        q: 'p ∧ F ≡ ?',
        opts: ['p', 'T', 'F', '¬p'],
        ans: 2,
        explain: 'Domination Law for AND: p ∧ F ≡ F. ANDing anything with False always produces False — F dominates the AND operator.'
      },
      {
        q: 'Which law says p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)?',
        opts: ['Associative Law', 'Commutative Law', 'Distributive Law', 'Absorption Law'],
        ans: 2,
        explain: 'Distributive Law: AND distributes over OR, just like multiplication distributes over addition in algebra. p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r).'
      },
      {
        q: 'What is ¬(¬p) equivalent to?',
        opts: ['¬p', 'p', 'T', 'F'],
        ans: 1,
        explain: 'Double Negation Law: ¬(¬p) ≡ p. Negating twice cancels out and returns the original proposition.'
      },
      {
        q: 'p ∨ ¬p is always:',
        opts: ['False (Contradiction)', 'True (Tautology)', 'Contingent', 'Equivalent to p'],
        ans: 1,
        explain: 'p ∨ ¬p is a tautology — always true regardless of p\'s value. This is the Law of Excluded Middle: a proposition is either true or its negation is true.'
      },
      {
        q: 'Which of the following is the contrapositive of p → q?',
        opts: ['q → p', '¬p → ¬q', '¬q → ¬p', 'p → ¬q'],
        ans: 2,
        explain: 'The contrapositive of p → q is ¬q → ¬p — swap AND negate both sides. The contrapositive is logically equivalent to the original. Don\'t confuse with inverse (¬p → ¬q) which is NOT equivalent.'
      },
      {
        q: 'p ↔ q is logically equivalent to:',
        opts: [
          '(p → q) ∨ (q → p)',
          '(p ∧ q) ∨ (¬p ∧ ¬q)',
          'p ⊕ q',
          'Both A and B'
        ],
        ans: 1,
        explain: 'p ↔ q ≡ (p ∧ q) ∨ (¬p ∧ ¬q). It\'s true when both are true OR both are false. It also equals (p → q) ∧ (q → p), not the OR version in option A.'
      }
    ]
  },

  // ── 03: BIT OPERATIONS ──
  bitops: {
    title: 'Logic & Bit Operations',
    icon: '⊕',
    color: 'var(--green)',
    num: '03',
    questions: [
      {
        q: 'In bitwise operations, what do 0 and 1 represent?',
        opts: [
          '0 = True, 1 = False',
          '0 = False, 1 = True',
          '0 = Unknown, 1 = True',
          'They have no logical meaning'
        ],
        ans: 1,
        explain: 'In bitwise logic: 0 = False and 1 = True. Every logical operator (AND, OR, NOT, XOR) applies directly to individual bits.'
      },
      {
        q: 'What is 1010 AND 1100?',
        opts: ['1110', '0110', '1000', '0010'],
        ans: 2,
        explain: 'AND requires both bits to be 1. Comparing position by position: 1∧1=1, 0∧1=0, 1∧0=0, 0∧0=0 → result is 1000.'
      },
      {
        q: 'What is 1010 OR 1100?',
        opts: ['1000', '1110', '0110', '0100'],
        ans: 1,
        explain: 'OR needs at least one 1. Position by position: 1∨1=1, 0∨1=1, 1∨0=1, 0∨0=0 → result is 1110.'
      },
      {
        q: 'What is 1010 XOR 1100?',
        opts: ['1110', '1000', '0110', '0010'],
        ans: 2,
        explain: 'XOR is true when exactly one bit is 1. Position by position: 1⊕1=0, 0⊕1=1, 1⊕0=1, 0⊕0=0 → result is 0110.'
      },
      {
        q: 'What is NOT 1010?',
        opts: ['1010', '1111', '0101', '0000'],
        ans: 2,
        explain: 'NOT flips every bit. 1→0 and 0→1. NOT 1010 = 0101.'
      },
      {
        q: 'What is the primary use of the bitwise AND operation?',
        opts: ['Setting specific bits to 1', 'Toggling specific bits', 'Masking — isolating specific bits', 'Flipping all bits'],
        ans: 2,
        explain: 'AND is used for masking. By ANDing with a mask (e.g. n & 0xFF), you isolate specific bits while zeroing out the rest. Common in networking, image processing, and hardware registers.'
      },
      {
        q: 'You want to check if the last bit of integer n is 0 (even number). Which operation do you use?',
        opts: ['n OR 1', 'n AND 1', 'n XOR 1', 'NOT n'],
        ans: 1,
        explain: 'n & 1 checks the last (least significant) bit. If n & 1 == 0, the last bit is 0 and n is even. If n & 1 == 1, n is odd.'
      },
      {
        q: 'Which bitwise operation is used for toggling a specific bit?',
        opts: ['AND ( & )', 'OR ( | )', 'XOR ( ^ )', 'NOT ( ~ )'],
        ans: 2,
        explain: 'XOR toggles bits. XORing with 1 flips a bit (0→1 or 1→0); XORing with 0 leaves it unchanged. n ^ (1 << k) toggles the k-th bit without touching the others.'
      },
      {
        q: 'Given bit strings A = 11001010 and B = 10110101, what is A OR B?',
        opts: ['10000000', '11111111', '01111111', '10001010'],
        ans: 1,
        explain: 'OR each position: 1∨1=1, 1∨0=1, 0∨1=1, 0∨1=1, 1∨0=1, 0∨1=1, 1∨0=1, 0∨1=1 → 11111111. Every position has at least one 1.'
      },
      {
        q: 'Which logic gate is equivalent to the bitwise XOR operation?',
        opts: ['AND gate', 'OR gate', 'NAND gate', 'XOR gate'],
        ans: 3,
        explain: 'The XOR gate is the digital circuit equivalent of the bitwise XOR operation. It outputs 1 when inputs differ and 0 when they match — identical behavior to the ⊕ operator.'
      }
    ]
  },

  // ── 04: PROPOSITIONAL LOGIC ──
  proplogic: {
    title: 'Propositional Logic',
    icon: '→',
    color: 'var(--yellow)',
    num: '04',
    questions: [
      {
        q: 'Which of the following is a valid proposition?',
        opts: [
          '"What time is it?"',
          '"Close the door."',
          '"Manila is the capital of the Philippines."',
          '"This statement is false."'
        ],
        ans: 2,
        explain: 'A proposition must be a declarative statement with a definite truth value (T or F). "Manila is the capital of the Philippines" is a clear declarative statement. Questions, commands, and paradoxes are not propositions.'
      },
      {
        q: 'A compound proposition that is ALWAYS TRUE regardless of variable values is called a:',
        opts: ['Contradiction', 'Contingency', 'Tautology', 'Biconditional'],
        ans: 2,
        explain: 'A tautology is always true no matter what truth values the variables take. Example: p ∨ ¬p is always true (Law of Excluded Middle).'
      },
      {
        q: 'A compound proposition that is ALWAYS FALSE regardless of variable values is called a:',
        opts: ['Tautology', 'Contradiction', 'Contingency', 'Implication'],
        ans: 1,
        explain: 'A contradiction is always false. Example: p ∧ ¬p is always false — a proposition can\'t be both true and false simultaneously.'
      },
      {
        q: 'Given p → q, what is its CONTRAPOSITIVE?',
        opts: ['q → p', '¬p → ¬q', '¬q → ¬p', '¬p → q'],
        ans: 2,
        explain: 'The contrapositive of p → q is ¬q → ¬p — swap both sides AND negate both. The contrapositive is logically equivalent to the original implication.'
      },
      {
        q: 'Given p → q, what is its CONVERSE?',
        opts: ['¬p → ¬q', '¬q → ¬p', 'q → p', 'p → ¬q'],
        ans: 2,
        explain: 'The converse of p → q is q → p — just swap the hypothesis and conclusion. The converse is NOT logically equivalent to the original.'
      },
      {
        q: 'Given p → q, what is its INVERSE?',
        opts: ['q → p', '¬q → ¬p', '¬p → ¬q', 'p ∧ ¬q'],
        ans: 2,
        explain: 'The inverse of p → q is ¬p → ¬q — negate both sides without swapping. The inverse is equivalent to the converse, but NOT to the original.'
      },
      {
        q: 'Which two forms of an implication are logically equivalent to each other?',
        opts: [
          'Original and Converse',
          'Original and Contrapositive',
          'Converse and Inverse',
          'Both B and C'
        ],
        ans: 3,
        explain: 'Original ≡ Contrapositive, AND Converse ≡ Inverse. So both pairs B and C are correct. The original and converse are NOT equivalent to each other.'
      },
      {
        q: 'Modus Ponens is the argument form: p, p → q, ∴ ___',
        opts: ['¬p', '¬q', 'q', 'p ∧ q'],
        ans: 2,
        explain: 'Modus Ponens: given p is true, and given p → q, we can conclude q. It\'s the most fundamental valid argument form in logic.'
      },
      {
        q: 'Modus Tollens is the argument form: ¬q, p → q, ∴ ___',
        opts: ['q', 'p', '¬p', '¬q → ¬p'],
        ans: 2,
        explain: 'Modus Tollens: given ¬q (conclusion is false) and p → q, we conclude ¬p (hypothesis must also be false). It works because p → q ≡ ¬q → ¬p (contrapositive).'
      },
      {
        q: 'Which of these is NOT a proposition?',
        opts: [
          '"2 is a prime number."',
          '"x + 1 = 5"',
          '"The moon orbits the Earth."',
          '"Dogs are mammals."'
        ],
        ans: 1,
        explain: '"x + 1 = 5" is NOT a proposition — it\'s a predicate/open sentence. Its truth value depends on what x is. Without a specific value for x, it can\'t be T or F. The others are all declarative statements with definite truth values.'
      }
    ]
  },

  // ── 05: TRUTH TABLES ──
  truthtable: {
    title: 'Truth Tables',
    icon: 'T/F',
    color: 'var(--purple)',
    num: '05',
    questions: [
      {
        q: 'How many rows does a truth table with 3 variables need?',
        opts: ['3', '6', '8', '9'],
        ans: 2,
        explain: 'With n variables, a truth table needs 2ⁿ rows — one for every possible combination of T/F. With 3 variables: 2³ = 8 rows.'
      },
      {
        q: 'In a truth table for p ∧ q, which row gives a TRUE result?',
        opts: ['p=T, q=F', 'p=F, q=T', 'p=F, q=F', 'p=T, q=T'],
        ans: 3,
        explain: 'AND (∧) is only true when BOTH inputs are true. Only p=T, q=T satisfies this.'
      },
      {
        q: 'In a truth table for p → q, which row gives a FALSE result?',
        opts: ['p=F, q=F', 'p=F, q=T', 'p=T, q=T', 'p=T, q=F'],
        ans: 3,
        explain: 'Implication is only false when the hypothesis is true and the conclusion is false — p=T, q=F. All other combinations produce true.'
      },
      {
        q: 'How many rows in a truth table with 4 variables?',
        opts: ['4', '8', '12', '16'],
        ans: 3,
        explain: '2⁴ = 16 rows. The formula is always 2ⁿ where n is the number of distinct variables.'
      },
      {
        q: 'In a truth table, p ↔ q is TRUE when:',
        opts: [
          'p=T, q=F only',
          'p=F, q=T only',
          'p and q have different values',
          'p and q have the same value'
        ],
        ans: 3,
        explain: 'Biconditional (↔) is true when both sides match — both T or both F. It\'s false when they differ.'
      },
      {
        q: 'Which expression is a tautology? (True in ALL rows of its truth table)',
        opts: ['p ∧ q', 'p → q', 'p ∨ ¬p', 'p ↔ q'],
        ans: 2,
        explain: 'p ∨ ¬p is always true regardless of p\'s value. T ∨ F = T and F ∨ T = T. It\'s the Law of Excluded Middle — a tautology.'
      },
      {
        q: 'To prove two expressions are logically equivalent using truth tables, you must show:',
        opts: [
          'At least one row where they match',
          'Their final columns are identical in every row',
          'Both are tautologies',
          'One implies the other'
        ],
        ans: 1,
        explain: 'Logical equivalence (≡) requires identical truth values in EVERY row. If even one row differs, they are not equivalent.'
      },
      {
        q: 'What is the correct output column for p ⊕ q (XOR) in row p=T, q=T?',
        opts: ['T', 'F', 'Undefined', 'Same as p ∨ q'],
        ans: 1,
        explain: 'XOR is false when both inputs are the same. T ⊕ T = F. XOR is only true when exactly one input is true.'
      },
      {
        q: 'When filling a truth table with 3 variables (p, q, r), how often does the LAST variable (r) alternate?',
        opts: ['Every 4 rows', 'Every 2 rows', 'Every row', 'Every 3 rows'],
        ans: 2,
        explain: 'The standard pattern: the last variable alternates every row (T,F,T,F...), the second-to-last every 2 rows (T,T,F,F...), and the first every 4 rows (T,T,T,T,F,F,F,F).'
      },
      {
        q: 'Which of the following expressions is a contradiction? (False in ALL rows)',
        opts: ['p ∨ q', 'p ∧ ¬p', 'p → p', 'p ∨ ¬p'],
        ans: 1,
        explain: 'p ∧ ¬p is always false — a proposition can\'t be true AND false simultaneously. It\'s the Law of Non-Contradiction, a classic contradiction.'
      }
    ]
  }

};

// ════════════════════════════════════════
//  QUIZ ENGINE
// ════════════════════════════════════════
let currentQuiz = null;
let currentQ = 0;
let score = 0;
let answered = false;

function openQuiz(id) {
  currentQuiz = id;
  currentQ = 0;
  score = 0;
  answered = false;

  document.getElementById('quiz-home').style.display = 'none';
  document.getElementById('quiz-detail').style.display = 'block';

  const data = quizData[id];

  document.getElementById('quiz-header').innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:20px;">
      <span style="font-size:40px;line-height:1;">${data.icon}</span>
      <div>
        <div style="font-size:11px;color:var(--muted);letter-spacing:0.15em;margin-bottom:6px;">QUIZ · TOPIC ${data.num}</div>
        <div style="font-family:var(--serif);font-size:clamp(24px,4vw,36px);font-weight:700;letter-spacing:-0.03em;color:${data.color};">${data.title}</div>
      </div>
    </div>`;

  document.getElementById('quiz-progress-bar').style.background = data.color;
  renderQuestion();
  window.scrollTo(0, 0);
}

function renderQuestion() {
  const data = quizData[currentQuiz];
  const q = data.questions[currentQ];
  const total = data.questions.length;
  answered = false;

  document.getElementById('quiz-progress-label').textContent = `QUESTION ${currentQ + 1} / ${total}`;
  document.getElementById('quiz-score-label').textContent = `SCORE: ${score} / ${total}`;
  document.getElementById('quiz-progress-bar').style.width = ((currentQ / total) * 100) + '%';

  const letters = ['A', 'B', 'C', 'D'];
  const optsHtml = q.opts.map((opt, i) => `
    <button class="q-option" onclick="selectAnswer(${i})" id="opt-${i}">
      <span class="opt-letter">${letters[i]}</span>
      <span>${opt}</span>
    </button>`).join('');

  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-question-wrap').style.display = 'block';
  document.getElementById('quiz-question-wrap').innerHTML = `
    <div class="quiz-question-card">
      <div class="q-num">QUESTION ${currentQ + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">${optsHtml}</div>
      <div class="q-feedback" id="q-feedback"></div>
      <button class="q-next-btn" id="q-next-btn" onclick="nextQuestion()">
        ${currentQ + 1 < total ? 'Next Question →' : 'See Results →'}
      </button>
    </div>`;
}

function selectAnswer(chosen) {
  if (answered) return;
  answered = true;

  const data = quizData[currentQuiz];
  const q = data.questions[currentQ];
  const isCorrect = chosen === q.ans;
  if (isCorrect) score++;

  document.querySelectorAll('.q-option').forEach(btn => btn.disabled = true);

  const chosenBtn = document.getElementById('opt-' + chosen);
  const correctBtn = document.getElementById('opt-' + q.ans);

  if (isCorrect) {
    chosenBtn.classList.add('correct');
  } else {
    chosenBtn.classList.add('wrong');
    correctBtn.classList.add('reveal-correct');
  }

  const fb = document.getElementById('q-feedback');
  fb.className = 'q-feedback show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.innerHTML = (isCorrect ? '✓ Correct! ' : '✗ Wrong. ') + q.explain;

  document.getElementById('quiz-score-label').textContent = `SCORE: ${score} / ${data.questions.length}`;
  document.getElementById('q-next-btn').classList.add('show');
}

function nextQuestion() {
  const total = quizData[currentQuiz].questions.length;
  currentQ++;
  if (currentQ >= total) {
    showResults();
  } else {
    renderQuestion();
    window.scrollTo(0, 0);
  }
}

function showResults() {
  const data = quizData[currentQuiz];
  const total = data.questions.length;
  const pct = Math.round((score / total) * 100);

  let color = 'var(--pink)';
  let msg = 'Needs work. Go back and review the topic before retrying.';
  if (pct >= 90)      { color = 'var(--green)';  msg = 'Excellent. You clearly know this topic well.'; }
  else if (pct >= 70) { color = 'var(--yellow)'; msg = 'Good. A few gaps — review the ones you missed.'; }
  else if (pct >= 50) { color = 'var(--orange)'; msg = 'Halfway there. Review the topic, then retry.'; }

  document.getElementById('quiz-progress-bar').style.width = '100%';
  document.getElementById('quiz-question-wrap').style.display = 'none';

  const results = document.getElementById('quiz-results');
  results.style.display = 'block';
  results.innerHTML = `
    <div class="quiz-results-card">
      <div class="result-score" style="color:${color}">${score}/${total}</div>
      <div class="result-label">${pct}% · ${data.title}</div>
      <div class="result-message">${msg}</div>
      <button class="retry-btn" style="border-color:${color};color:${color}" onclick="openQuiz('${currentQuiz}')">Retry Quiz</button>
    </div>`;

  window.scrollTo(0, 0);
}

function closeQuiz() {
  document.getElementById('quiz-detail').style.display = 'none';
  document.getElementById('quiz-home').style.display = 'block';
  window.scrollTo(0, 0);
}