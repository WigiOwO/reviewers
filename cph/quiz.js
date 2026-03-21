// ════════════════════════════════════════
//  CPH101L QUIZ DATA
// ════════════════════════════════════════

const quizData = {

  intro: {
    title: 'Introduction', icon: '🖥️', color: 'var(--cyan)',
    questions: [
      { q: "Which year did IBM release its first PC?", opts: ["1976", "1979", "1981", "1984"], ans: 2, exp: "IBM's first PC was released in 1981, marking the start of the IBM PC standard that became the industry baseline." },
      { q: "What does 'form factor' refer to?", opts: ["The weight of a component", "The shape and general physical layout of a component", "The power consumption rating", "The number of expansion slots"], ans: 1, exp: "Form factor refers to the shape and general physical layout of a component." },
      { q: "Which PC case form factor is the smallest?", opts: ["micro-ATX", "ATX", "ITX", "extended-ATX"], ans: 2, exp: "ITX cases are the smallest PC case form factor and can only support ITX motherboards." },
      { q: "What is the primary function of the Power Supply Unit?", opts: ["Store data permanently", "Convert AC power to DC power", "Control display output", "Process instructions"], ans: 1, exp: "The PSU converts AC from the wall outlet to DC for internal components, providing all necessary voltages." },
      { q: "Which PC case function provides immunity to static electric discharges?", opts: ["Housing", "Ventilation", "EMF Elimination and Grounding", "Expansion bay support"], ans: 2, exp: "EMF Elimination and Grounding provides immunity to static electric discharges and reduces EMF generation." },
      { q: "Which component is described as the 'core of the system which controls all devices'?", opts: ["CPU", "Motherboard", "Power Supply", "Memory"], ans: 1, exp: "The motherboard is the core of the system — all components connect to it and it controls all devices." },
      { q: "Memory (RAM) is classified as:", opts: ["Permanent storage", "Secondary storage", "Temporary storage — data lost on power cut", "Read-only storage"], ans: 2, exp: "RAM is temporary/volatile. It holds data the processor is currently using, but loses everything when power is cut." },
      { q: "The Macintosh was released in which year?", opts: ["1981", "1983", "1984", "1986"], ans: 2, exp: "The Macintosh was released in 1984. Apple Lisa came in 1983." },
      { q: "An ATX case can house which motherboard types?", opts: ["ATX only", "ATX and mATX only", "ATX, mATX, and ITX", "eATX only"], ans: 2, exp: "An ATX case can house ATX, micro-ATX, and ITX motherboards." },
      { q: "Which obsolete form factor from 1984 had a round DIN plug hole at the back?", opts: ["Baby-AT", "LPX", "AT", "PS/2"], ans: 2, exp: "The AT form factor (1984) had a round hole at the back for the DIN plug of old keyboards." }
    ]
  },

  motherboard: {
    title: 'The Motherboard', icon: '🔌', color: 'var(--pink)',
    questions: [
      { q: "What does BIOS stand for?", opts: ["Basic Integrated Operating System", "Basic Input/Output System", "Binary Instruction Output System", "Boot Input/Output Software"], ans: 1, exp: "BIOS stands for Basic Input/Output System — low-level software linking hardware to the operating system." },
      { q: "Which bus type prevents data collision between devices?", opts: ["Data bus", "Address bus", "Control bus", "System bus"], ans: 2, exp: "The control bus coordinates activity between devices to prevent data collision." },
      { q: "What does POST do?", opts: ["Load the operating system", "Test PC components like processor, memory, keyboard at startup", "Configure date and time", "Store BIOS setup information"], ans: 1, exp: "POST (Power-On Self Test) tests PC components such as the processor, memory, and keyboard during startup." },
      { q: "Which ROM chip type is erased using UV light?", opts: ["ROM", "PROM", "EPROM", "EEPROM"], ans: 2, exp: "EPROM (Erasable PROM) is erased using ultraviolet light. EEPROM uses electrical erasing." },
      { q: "Which key enters the setup on AMI BIOS?", opts: ["F1", "F2", "Esc", "Delete"], ans: 3, exp: "AMI BIOS uses the Delete key to enter setup during POST." },
      { q: "Who developed the ATX specification and in what year?", opts: ["AMD, 1990", "Intel, 1995", "IBM, 1981", "Microsoft, 1998"], ans: 1, exp: "The ATX specification was originally developed by Intel in 1995 as an open, non-proprietary standard." },
      { q: "What is the size of the Mini-ITX motherboard?", opts: ["9.6\" × 9.6\"", "12\" × 9.6\"", "6.7\" × 6.7\"", "9.6\" × 8\""], ans: 2, exp: "Mini-ITX motherboards are 6.7\" × 6.7\" (17cm × 17cm) — smallest in the list." },
      { q: "A chipset controls the flow of data between the CPU and:", opts: ["Only the hard drive", "Only the RAM", "Memory cache, power management, external buses, and peripherals", "Only the GPU"], ans: 2, exp: "A chipset manages data flow to/from the CPU, including memory cache, power management, external buses, and some peripherals." },
      { q: "Adapter card ROM is most commonly found on:", opts: ["RAM modules", "Hard drives", "Video cards", "Power supplies"], ans: 2, exp: "Adapter card ROM is most commonly found on video cards since they must be active during boot time." },
      { q: "Which BIOS setup menu handles boot-drive sequence?", opts: ["Main", "Advanced", "Security", "Boot"], ans: 3, exp: "The Boot menu specifies boot options and power supply controls, including boot-drive sequence." }
    ]
  },

  microprocessor: {
    title: 'The Microprocessor', icon: '⚙️', color: 'var(--orange)',
    questions: [
      { q: "Which component of the CPU manages all activities and directs program instructions?", opts: ["ALU", "Memory Unit", "Control Unit", "Cache"], ans: 2, exp: "The CU (Control Unit) manages all activities inside the CPU and directs the entire system to carry out program instructions." },
      { q: "What does CISC stand for?", opts: ["Central Instruction Set Computers", "Complex Instruction Set Computers", "Common Integrated System Core", "Compiled Instruction Sequential Code"], ans: 1, exp: "CISC stands for Complex Instruction Set Computers — larger instruction sets with more complex commands." },
      { q: "Where is Level 1 (L1) cache located?", opts: ["On the motherboard", "Inside the CPU chip", "On the RAM module", "Inside the hard drive"], ans: 1, exp: "L1 cache is located inside the CPU chip — it is the fastest and smallest cache level." },
      { q: "What is the AMD Ryzen family based on?", opts: ["Piledriver architecture", "Bulldozer architecture", "Zen microarchitecture", "Excavator architecture"], ans: 2, exp: "The Ryzen family is based on the Zen microarchitecture and is classified as x86-64." },
      { q: "What is the L3 cache size of the Intel Core i5?", opts: ["3MB", "6MB", "8MB", "12MB"], ans: 2, exp: "The Core i5 has 8MB of L3 cache according to the spec table." },
      { q: "Which instruction set type runs each instruction faster?", opts: ["CISC", "RISC", "Both the same", "Depends on the CPU brand"], ans: 1, exp: "RISC (Reduced Instruction Set Computers) has fewer and simpler instructions that each run more quickly, though it needs more instructions for complex operations." },
      { q: "The Pentium III introduced which performance enhancement?", opts: ["Hyper-Threading", "SSE (Streaming SIMD Extensions)", "Turbo Boost", "Multi-core processing"], ans: 1, exp: "The Pentium III introduced Intel's SSE (Streaming SIMD Extensions) — Single Instruction, Multiple Data — for better multimedia processing." },
      { q: "What is the safe operating temperature range a CPU cooling fan maintains?", opts: ["0°C to 20°C", "32°C to 43°C", "50°C to 70°C", "80°C to 100°C"], ans: 1, exp: "The cooling fan keeps CPU temperatures between 32°C and 43°C for safe operation." },
      { q: "The maximum number of cores in AMD Ryzen Threadripper according to the module is:", opts: ["32", "64", "96", "128"], ans: 2, exp: "Ryzen Threadripper has up to 96 cores according to Module 03." },
      { q: "What does the Memory Unit (MU) do?", opts: ["Performs all arithmetic operations", "Manages data and instruction transfer between CPU and main memory", "Controls all CPU activity", "Regulates CPU voltage"], ans: 1, exp: "The MU manages data and instruction transfer between the CPU and main memory (RAM)." }
    ]
  },

  'chipset-names': {
    title: 'Chipset Naming Schemes', icon: '🎯', color: 'var(--yellow)',
    questions: [
      { q: "Which Intel chipset letter is the ONLY one that supports full CPU multiplier overclocking?", opts: ["H", "B", "Z", "Q"], ans: 2, exp: "Z is the only Intel series that allows full CPU multiplier overclocking. H and B do not support it." },
      { q: "What does the first digit in an Intel chipset number indicate?", opts: ["Feature density", "CPU generation", "Number of PCIe lanes", "Price tier"], ans: 1, exp: "The first digit indicates the generation. e.g. 6xx = Alder Lake (12th Gen), 5xx = Rocket Lake (11th Gen)." },
      { q: "An Intel H610 chipset would have:", opts: ["Full overclocking and 4 RAM slots", "Entry-level features: fewer ports, no RAID, 2 RAM slots", "Business features like vPro", "The same features as Z690"], ans: 1, exp: "The '1' in H610 means entry-level — fewer PCIe lanes, fewer USB ports, no RAID support, and typically only 2 RAM slots." },
      { q: "Which Intel chipset series is designed for business use with remote management features?", opts: ["Z", "H", "B", "Q"], ans: 3, exp: "The Q series features Intel vPro technology for remote management and extra security — aimed at business PCs." },
      { q: "Which AMD chipset letter supports CPU overclocking AND Multi-GPU (SLI & Crossfire)?", opts: ["A", "B", "X", "Z"], ans: 2, exp: "AMD X is the high-end tier — supports both CPU overclocking and multi-GPU (SLI & Crossfire) with maximum SATA/USB." },
      { q: "AMD's A-series chipset (e.g. A520) supports:", opts: ["CPU and RAM overclocking", "CPU overclocking only", "RAM overclocking only", "No overclocking at all"], ans: 3, exp: "AMD A-series is budget and fully locked — no CPU overclocking, no RAM overclocking, and no multi-GPU support." },
      { q: "What does the first digit in an AMD chipset number indicate?", opts: ["Feature density", "Price tier", "CPU generation compatibility", "Number of USB ports"], ans: 2, exp: "The first digit indicates CPU generation compatibility. e.g. 5xx series is built for Zen 3 (Ryzen 5000)." },
      { q: "AMD's B550 chipset supports which multi-GPU configuration?", opts: ["SLI and Crossfire", "Crossfire only, usually no SLI", "SLI only", "No multi-GPU at all"], ans: 1, exp: "AMD B-series supports Crossfire but usually not SLI. It's the mainstream tier — good value with overclocking support." },
      { q: "You want to use a newer CPU on an older motherboard. What do you need to do first?", opts: ["Buy a new PSU", "Perform a BIOS update", "Replace the RAM", "Nothing — it works automatically"], ans: 1, exp: "A BIOS update is required to enable support for newer CPUs on older boards. This applies to both Intel and AMD platforms." },
      { q: "What is the fixed suffix for AMD's X-series chipsets?", opts: ["20", "50", "70", "90"], ans: 2, exp: "AMD X-series ends in 70 (e.g. X570, X670). B-series ends in 50, A-series ends in 20." }
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
    <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:8px;">MODULE ${num}</div>
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