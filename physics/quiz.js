// ════════════════════════════════════════
//  PHYSICS QUIZ DATA — based on actual class content
// ════════════════════════════════════════

const quizData = {

  measurements: {
    title: 'Measurements & Instruments', icon: '📏', color: 'var(--cyan)',
    questions: [
      { q: "What is the least count of a standard Vernier caliper?", opts: ["1 mm", "0.1 mm", "0.05 mm", "0.01 mm"], ans: 2, exp: "A standard Vernier caliper has a least count of 0.05 mm — smaller than a ruler (1 mm) but larger than a micrometer (0.01 mm)." },
      { q: "What is the least count of a micrometer caliper?", opts: ["0.5 mm", "0.1 mm", "0.05 mm", "0.01 mm"], ans: 3, exp: "The micrometer caliper has the smallest least count at 0.01 mm, making it the most precise of the three." },
      { q: "Reading a scale from an angle instead of straight on causes:", opts: ["Zero error", "Parallax error", "Human error", "Worn jaw error"], ans: 1, exp: "Parallax error occurs when your eye is not aligned directly with the measurement mark, causing you to read the wrong value." },
      { q: "A Vernier caliper reads zero error when the jaws are closed. What should you do?", opts: ["Ignore it", "Replace the caliper", "Record it and add/subtract from all readings", "Divide all readings by 2"], ans: 2, exp: "Zero error must be recorded and applied — add or subtract the zero error from every reading to get the true value." },
      { q: "Given: Main scale = 3 cm, coinciding division = 3rd, LC = 0.2 cm. What is the reading?", opts: ["3.2 cm", "3.3 cm", "3.6 cm", "3.03 cm"], ans: 2, exp: "Reading = Main scale + (n × LC) = 3 + (3 × 0.2) = 3.6 cm" },
      { q: "The pitch of a micrometer is 0.5 mm and it has 50 circular divisions. What is the least count?", opts: ["0.5 mm", "0.1 mm", "0.01 mm", "0.001 mm"], ans: 2, exp: "LC = P / N = 0.5 / 50 = 0.01 mm" },
      { q: "Why does the metric system have an advantage over the English system?", opts: ["It's older", "Every unit is a power of 10 apart", "It uses more units", "It's based on the foot"], ans: 1, exp: "Metric is base-10 — conversions only require moving the decimal. English uses arbitrary factors (12, 3, 5280) making errors more likely." },
      { q: "Micrometer: sleeve = 5 mm, thimble division = 42, LC = 0.01 mm. Reading?", opts: ["5.42 mm", "5.042 mm", "42.5 mm", "47 mm"], ans: 0, exp: "Reading = Sleeve + (thimble × LC) = 5 + (42 × 0.01) = 5.42 mm" },
      { q: "Why can't you just make scale divisions infinitely small to increase accuracy?", opts: ["It's too expensive", "The human eye can't distinguish between divisions that are too close", "Instruments break at small scales", "Physics doesn't allow it"], ans: 1, exp: "The human eye has a physical limit. Divisions too small become unreadable, causing more errors — not more precision." },
      { q: "Which error is caused by old or damaged instrument jaws that don't close evenly?", opts: ["Parallax error", "Human error", "Zero error", "Worn jaw error"], ans: 3, exp: "Worn jaws cause systematic error — every reading is off by the same amount because the jaws can't close flush." }
    ]
  },

  conversion: {
    title: 'Unit Conversion', icon: '⇄', color: 'var(--green)',
    questions: [
      { q: "Convert 5 inches to cm. (1 in = 2.54 cm)", opts: ["10 cm", "12.7 cm", "7.54 cm", "5.254 cm"], ans: 1, exp: "5 in × (2.54 cm / 1 in) = 12.7 cm. The 'in' cancels, leaving cm." },
      { q: "Convert 60 km/h to m/s.", opts: ["60 m/s", "21.6 m/s", "16.67 m/s", "0.06 m/s"], ans: 2, exp: "60 × (1000/1) × (1/3600) = 60000/3600 = 16.67 m/s" },
      { q: "Why must you cube the conversion factor when converting in³ to cm³?", opts: ["Because volume has 3 dimensions", "Because cm is bigger than in", "It's a rule of thumb", "You don't — only square it"], ans: 0, exp: "Volume is 3-dimensional. Each dimension needs the conversion, so 1 in³ = (2.54)³ cm³ = 16.39 cm³." },
      { q: "1 in³ = ? cm³ (1 in = 2.54 cm)", opts: ["2.54 cm³", "6.45 cm³", "16.39 cm³", "25.4 cm³"], ans: 2, exp: "(2.54)³ = 16.387 ≈ 16.39 cm³" },
      { q: "In the conversion factor method, the unit you want to eliminate goes on the:", opts: ["Top of the fraction", "Bottom of the fraction", "Left side", "Either side"], ans: 1, exp: "The unit you want to cancel goes on the bottom (denominator) so it cancels with the same unit on top." },
      { q: "The prefix 'milli' means:", opts: ["× 10³", "× 10⁻²", "× 10⁻³", "× 10⁻⁶"], ans: 2, exp: "Milli = × 10⁻³. So 1 mm = 0.001 m." },
      { q: "Convert 3 miles to cm. (1 mi = 5280 ft, 1 ft = 12 in, 1 in = 2.54 cm)", opts: ["15,840 cm", "482,803.2 cm", "160,934 cm", "48,280 cm"], ans: 1, exp: "3 × 5280 × 12 × 2.54 = 482,803.2 cm" },
      { q: "The prefix 'kilo' means:", opts: ["× 10⁻³", "× 10²", "× 10³", "× 10⁶"], ans: 2, exp: "Kilo = × 10³. So 1 km = 1000 m." },
      { q: "1 kilogram = ? pounds", opts: ["1 lb", "2.205 lb", "0.453 lb", "4.536 lb"], ans: 1, exp: "1 kg = 2.205 lb. Alternatively, 1 lb = 453.6 g = 0.4536 kg." },
      { q: "In a chain conversion from miles to cm, which units cancel step by step?", opts: ["mi → km → m → cm", "mi → ft → in → cm", "mi → yd → ft → cm", "mi → m → cm"], ans: 1, exp: "3 mi × (5280 ft/mi) × (12 in/ft) × (2.54 cm/in) — each previous unit cancels with the next." }
    ]
  },

  vectors: {
    title: 'Vectors & Vector Addition', icon: '→', color: 'var(--yellow)',
    questions: [
      { q: "Which of these is a VECTOR quantity?", opts: ["Temperature", "Speed", "Mass", "Velocity"], ans: 3, exp: "Velocity has both magnitude and direction. Speed, temperature, and mass are scalars — magnitude only." },
      { q: "Which of these is a SCALAR quantity?", opts: ["Force", "Displacement", "Speed", "Acceleration"], ans: 2, exp: "Speed is scalar — it only tells you how fast, not which direction. Velocity = speed + direction." },
      { q: "Two forces of 3 N and 4 N act at 90° to each other. What is the resultant?", opts: ["7 N", "1 N", "5 N", "12 N"], ans: 2, exp: "R = √(3² + 4²) = √(9 + 16) = √25 = 5 N. This is the classic 3-4-5 right triangle." },
      { q: "The equilibrant force is:", opts: ["Equal to the resultant, same direction", "Equal to the resultant, opposite direction", "Half the resultant", "The sum of all forces"], ans: 1, exp: "The equilibrant equals the resultant in magnitude but acts in the opposite direction — it balances the resultant." },
      { q: "The component method is best because:", opts: ["It's faster than drawing", "It works for any number of vectors and is most precise", "It only needs 2 vectors", "It requires no math"], ans: 1, exp: "Component method works for any number of vectors and doesn't rely on drawing accuracy — it's the most reliable." },
      { q: "If ΣVx is negative and ΣVy is negative, the resultant is in:", opts: ["Quadrant I (North of East)", "Quadrant II (North of West)", "Quadrant III (South of West)", "Quadrant IV (South of East)"], ans: 2, exp: "Both negative → Quadrant III → South of West. Remember: ΣVy is stated first." },
      { q: "Vx = V cosθ means:", opts: ["The vertical component", "The horizontal component", "The resultant", "The angle"], ans: 1, exp: "Vx = V cosθ is the horizontal (x) component. Vy = V sinθ is the vertical (y) component." },
      { q: "F1 = 30 N at 0°, F2 = 40 N at 90°. What is ΣVy?", opts: ["0 N", "30 N", "40 N", "50 N"], ans: 2, exp: "F1y = 30 sin0° = 0. F2y = 40 sin90° = 40. ΣVy = 0 + 40 = 40 N." },
      { q: "The parallelogram method can only add:", opts: ["1 vector at a time", "2 vectors at a time", "3 vectors at a time", "Any number of vectors"], ans: 1, exp: "Parallelogram method only handles 2 vectors at once. For more, you must repeat the process or use polygon/component method." },
      { q: "In the direction rule, which component is stated FIRST?", opts: ["ΣVx (horizontal)", "ΣVy (vertical)", "The larger component", "The positive component"], ans: 1, exp: "ΣVy is always stated first — e.g., 'South of West' not 'West of South', because ΣVy is the numerator in arctan." }
    ]
  },

  uam: {
    title: 'Uniformly Accelerated Motion', icon: '⚡', color: 'var(--pink)',
    questions: [
      { q: "What makes motion 'uniformly accelerated'?", opts: ["Velocity is constant", "Acceleration is constant", "Distance is constant", "Time is constant"], ans: 1, exp: "UAM = constant acceleration. Velocity changes by the same amount every second." },
      { q: "A car goes from 0 to 30 m/s in 6 seconds. What is the acceleration?", opts: ["180 m/s²", "5 m/s²", "0.2 m/s²", "36 m/s²"], ans: 1, exp: "a = (v₂ - v₁) / t = (30 - 0) / 6 = 5 m/s²" },
      { q: "Which equation do you use when you know v₁, a, and t — and want v₂?", opts: ["2as = v₂² - v₁²", "s = v₁t + ½at²", "v₂ = v₁ + at", "s = ((v₁+v₂)/2) × t"], ans: 2, exp: "v₂ = v₁ + at — directly gives final velocity when you have initial velocity, acceleration, and time." },
      { q: "A ball starts at rest and accelerates at 4 m/s² for 5 seconds. How far does it travel?", opts: ["20 m", "50 m", "100 m", "10 m"], ans: 1, exp: "s = v₁t + ½at² = 0 + ½(4)(25) = 50 m" },
      { q: "Which equation has NO time variable?", opts: ["v₂ = v₁ + at", "s = v₁t + ½at²", "2as = v₂² - v₁²", "s = ((v₁+v₂)/2) × t"], ans: 2, exp: "2as = v₂² - v₁² — the only kinematic equation without t. Use it when time is unknown." },
      { q: "Two cars travel in the same direction at 60 km/h and 40 km/h. Relative velocity of faster to slower?", opts: ["100 km/h", "20 km/h", "60 km/h", "40 km/h"], ans: 1, exp: "Relative velocity = 60 - 40 = 20 km/h. Same direction = subtract." },
      { q: "What is the difference between speed and velocity?", opts: ["Speed is faster", "Velocity includes direction, speed does not", "Speed is a vector", "They are the same thing"], ans: 1, exp: "Speed is scalar (magnitude only). Velocity is vector (magnitude + direction)." },
      { q: "A ball's velocity goes from 10 m/s to 4 m/s in 3 seconds. What is the acceleration?", opts: ["-2 m/s²", "2 m/s²", "-4.67 m/s²", "4.67 m/s²"], ans: 0, exp: "a = (v₂ - v₁)/t = (4 - 10)/3 = -6/3 = -2 m/s². Negative = deceleration." },
      { q: "On an inclined plane, the ball's acceleration is:", opts: ["Equal to g = 9.8 m/s²", "Greater than g", "A component of g — less than 9.8 m/s²", "Zero"], ans: 2, exp: "On an incline, acceleration = component of g along the slope. Always less than 9.8. The steeper the incline, the closer to g." },
      { q: "A car travels at v₁ = 5 m/s, a = 2 m/s², for t = 4s. What is its displacement?", opts: ["36 m", "28 m", "20 m", "8 m"], ans: 0, exp: "s = v₁t + ½at² = 5(4) + ½(2)(16) = 20 + 16 = 36 m" }
    ]
  },

  freefall: {
    title: 'Free Falling Bodies', icon: '↓', color: 'var(--purple)',
    questions: [
      { q: "What is the acceleration of a freely falling object on Earth?", opts: ["0 m/s²", "4.9 m/s²", "9.8 m/s²", "19.6 m/s²"], ans: 2, exp: "g = 9.8 m/s² downward, always. This is constant for all objects in free fall." },
      { q: "A coin is dropped from rest. What is its velocity after 3 seconds?", opts: ["3 m/s", "9.8 m/s", "19.6 m/s", "29.4 m/s"], ans: 3, exp: "v = gt = 9.8 × 3 = 29.4 m/s" },
      { q: "How far does a dropped object fall in 2 seconds? (g = 9.8 m/s²)", opts: ["9.8 m", "19.6 m", "4.9 m", "39.2 m"], ans: 1, exp: "h = ½gt² = ½(9.8)(4) = 19.6 m" },
      { q: "A ball is dropped from 20 m. How long does it take to hit the ground?", opts: ["1.01 s", "2.02 s", "4.08 s", "0.49 s"], ans: 1, exp: "t = √(2h/g) = √(40/9.8) = √4.08 ≈ 2.02 s" },
      { q: "What is the velocity of a coin just before hitting the ground after falling 20 m?", opts: ["9.8 m/s", "14 m/s", "19.6 m/s", "19.8 m/s"], ans: 3, exp: "v = gt = 9.8 × 2.02 ≈ 19.8 m/s. Or use v² = 2gh = 2(9.8)(20) = 392 → v ≈ 19.8 m/s" },
      { q: "In free fall, which of these is TRUE?", opts: ["Heavier objects fall faster", "All objects fall at the same rate (ignoring air resistance)", "Velocity is constant", "Acceleration decreases over time"], ans: 1, exp: "All objects experience the same g = 9.8 m/s² regardless of mass. Galileo proved this." },
      { q: "The formula h = ½gt² is derived from which kinematic equation?", opts: ["v₂ = v₁ + at", "s = v₁t + ½at²", "2as = v₂² - v₁²", "a = (v₂-v₁)/t"], ans: 1, exp: "s = v₁t + ½at², with v₁ = 0 and a = g, simplifies to h = ½gt²." },
      { q: "An object is dropped. After 1 second its velocity is 9.8 m/s. After 2 seconds it is:", opts: ["9.8 m/s", "14.7 m/s", "19.6 m/s", "29.4 m/s"], ans: 2, exp: "v = gt = 9.8 × 2 = 19.6 m/s. Velocity increases linearly — 9.8 added every second." },
      { q: "Distance fallen in the 1st second vs the 2nd second — which is larger?", opts: ["1st second", "2nd second", "They are equal", "Depends on mass"], ans: 1, exp: "h at t=1: ½(9.8)(1) = 4.9 m. h at t=2: ½(9.8)(4) = 19.6 m. Distance in 2nd second = 19.6 - 4.9 = 14.7 m > 4.9 m." },
      { q: "Free fall is a special case of:", opts: ["Projectile motion", "Uniformly Accelerated Motion with a = g", "Uniform velocity", "Vector addition"], ans: 1, exp: "Free fall is just UAM with a fixed acceleration of g = 9.8 m/s² downward and v₁ = 0." }
    ]
  },

  projectile: {
    title: 'Projectile Motion', icon: '⌒', color: 'var(--orange)',
    questions: [
      { q: "What shape is the path of a projectile?", opts: ["Straight line", "Circle", "Parabola", "Hyperbola"], ans: 2, exp: "The combination of constant horizontal velocity and accelerating vertical motion traces a parabola." },
      { q: "In projectile motion, horizontal velocity is:", opts: ["Zero", "Increasing", "Constant", "Decreasing"], ans: 2, exp: "Horizontal velocity stays constant — no horizontal force acts on the projectile (air resistance ignored)." },
      { q: "A ball rolls off a table at 5 m/s (horizontal). Table height = 1.25 m. Time to hit the ground?", opts: ["0.25 s", "0.505 s", "1.01 s", "0.127 s"], ans: 1, exp: "t = √(2y/g) = √(2 × 1.25 / 9.8) = √0.255 ≈ 0.505 s" },
      { q: "Using the previous problem (v₀ = 5 m/s, t = 0.505 s), how far from the table base does it land?", opts: ["1.25 m", "2.02 m", "2.52 m", "5.05 m"], ans: 2, exp: "x = v₀t = 5 × 0.505 ≈ 2.52 m" },
      { q: "A ball is launched at v₀ = 20 m/s, θ = 30°. What is v₀y?", opts: ["17.32 m/s", "10 m/s", "20 m/s", "5 m/s"], ans: 1, exp: "v₀y = v₀ sinθ = 20 sin30° = 20 × 0.5 = 10 m/s" },
      { q: "At the peak of a projectile's path, which is TRUE?", opts: ["Both vx and vy are zero", "vx is zero, vy is maximum", "vy is zero, vx remains constant", "The object stops permanently"], ans: 2, exp: "At the peak, vertical velocity vy = 0. Horizontal velocity vx = v₀cosθ continues unchanged — it's the slowest point." },
      { q: "For max horizontal range, what launch angle should you use?", opts: ["30°", "45°", "60°", "90°"], ans: 1, exp: "R = v₀²sin2θ/g is maximized when sin2θ = 1, which means 2θ = 90°, so θ = 45°." },
      { q: "A projectile launched at 30° and one at 60° with the same speed — their ranges are:", opts: ["Different", "The same", "30° has longer range", "60° has longer range"], ans: 1, exp: "Complementary angles (add to 90°) give the same range. 30° + 60° = 90° ✓" },
      { q: "Total time of flight formula for angled launch is:", opts: ["T = v₀y / g", "T = 2v₀y / g", "T = v₀ / g", "T = g / v₀y"], ans: 1, exp: "T = 2v₀y / g. Time up = v₀y/g. Total = 2× that." },
      { q: "Horizontal launch is a special case of angled launch with θ =", opts: ["90°", "45°", "0°", "180°"], ans: 2, exp: "θ = 0° → cosθ = 1 → v₀x = v₀, sinθ = 0 → v₀y = 0. That's exactly horizontal launch." }
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
  currentQuiz = quizData[id];
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quiz-home').style.display = 'none';
  document.getElementById('quiz-detail').style.display = 'block';
  const keys = Object.keys(quizData);
  const num = String(keys.indexOf(id) + 1).padStart(2, '0');
  document.getElementById('quiz-header').innerHTML = `
    <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:8px;">TOPIC ${num}</div>
    <h2 style="font-family:var(--serif);font-size:28px;font-weight:700;letter-spacing:-0.03em;">${currentQuiz.icon} ${currentQuiz.title}</h2>
  `;
  renderQuestion();
  window.scrollTo(0, 0);
}

function closeQuiz() {
  document.getElementById('quiz-detail').style.display = 'none';
  document.getElementById('quiz-home').style.display = 'block';
  document.getElementById('quiz-results').style.display = 'none';
  document.getElementById('quiz-question-wrap').innerHTML = '';
  window.scrollTo(0, 0);
}

function updateProgress() {
  const total = currentQuiz.questions.length;
  document.getElementById('quiz-progress-label').textContent = `QUESTION ${currentQ + 1} / ${total}`;
  document.getElementById('quiz-score-label').textContent = `SCORE: ${score}`;
  document.getElementById('quiz-progress-bar').style.width = (currentQ / total * 100) + '%';
}

function renderQuestion() {
  const q = currentQuiz.questions[currentQ];
  answered = false;
  updateProgress();
  const letters = ['A','B','C','D'];
  document.getElementById('quiz-question-wrap').innerHTML = `
    <div class="quiz-question-card">
      <div class="q-num">QUESTION ${currentQ + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((o,i) => `<button class="q-option" onclick="selectAnswer(${i})"><span class="opt-letter">${letters[i]}</span>${o}</button>`).join('')}
      </div>
      <div class="q-feedback" id="feedback"></div>
      <button class="q-next-btn" id="next-btn" onclick="nextQuestion()">${currentQ < currentQuiz.questions.length - 1 ? 'Next Question →' : 'See Results →'}</button>
    </div>
  `;
}

function selectAnswer(idx) {
  if (answered) return;
  answered = true;
  const q = currentQuiz.questions[currentQ];
  const opts = document.querySelectorAll('.q-option');
  opts.forEach(o => o.disabled = true);
  if (idx === q.ans) {
    score++;
    opts[idx].classList.add('correct');
    const fb = document.getElementById('feedback');
    fb.className = 'q-feedback correct-fb show';
    fb.textContent = '✓ Correct! ' + q.exp;
  } else {
    opts[idx].classList.add('wrong');
    opts[q.ans].classList.add('reveal-correct');
    const fb = document.getElementById('feedback');
    fb.className = 'q-feedback wrong-fb show';
    fb.textContent = '✗ Wrong. ' + q.exp;
  }
  document.getElementById('quiz-score-label').textContent = `SCORE: ${score}`;
  document.getElementById('next-btn').classList.add('show');
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= currentQuiz.questions.length) showResults();
  else renderQuestion();
}

function showResults() {
  const total = currentQuiz.questions.length;
  const pct = Math.round((score / total) * 100);
  document.getElementById('quiz-progress-bar').style.width = '100%';
  document.getElementById('quiz-progress-label').textContent = 'COMPLETE';
  document.getElementById('quiz-score-label').textContent = `${score} / ${total}`;
  document.getElementById('quiz-question-wrap').innerHTML = '';
  let msg, color;
  if (pct >= 90) { msg = "Excellent. You know this cold."; color = 'var(--green)'; }
  else if (pct >= 70) { msg = "Solid. A few gaps — review the ones you missed."; color = 'var(--yellow)'; }
  else if (pct >= 50) { msg = "Halfway there. Go back and re-read the topic."; color = 'var(--orange)'; }
  else { msg = "Rough one. Hit the topics page before trying again."; color = 'var(--pink)'; }
  const results = document.getElementById('quiz-results');
  results.style.display = 'block';
  results.innerHTML = `
    <div class="quiz-results-card">
      <div class="result-score" style="color:${color}">${pct}%</div>
      <div class="result-label">${score} / ${total} CORRECT</div>
      <div class="result-message">${msg}</div>
      <button class="retry-btn" style="border-color:${color};color:${color}" onclick="retryQuiz()">Retry Quiz</button>
    </div>
  `;
}

function retryQuiz() {
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quiz-results').style.display = 'none';
  renderQuestion();
}
