// ════════════════════════════════════════
//  PHYSICS TOPIC CONTENT
// ════════════════════════════════════════
const topicPanels = {

  measurements: `
    <div id="topic-measurements" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">📏</span>
        <div>
          <div class="detail-num">TOPIC 01</div>
          <h2 class="detail-title" style="color:var(--cyan)">Measurements &amp; Instruments</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--cyan)">Definition</div>
        <p><strong>Measurement</strong> is the process of comparing a physical quantity to a standard unit. All of science and engineering relies on accurate, reproducible measurements — from building bridges to calibrating medical equipment.</p>
      </div>

      <h3 class="section-title first">Metric vs. English System</h3>
      <div class="two-col">
        <div class="def-block">
          <div class="blk-label" style="color:var(--cyan)">Metric System</div>
          <p>Base-10 system. Conversions only require moving the decimal point. Universally used in science and engineering.</p>
        </div>
        <div class="def-block">
          <div class="blk-label" style="color:var(--muted)">English System</div>
          <p>Uses arbitrary conversion factors (12 in = 1 ft, 3 ft = 1 yd, 5280 ft = 1 mi). More prone to computational error.</p>
        </div>
      </div>
      <div class="def-block">
        <p><strong>Why Metric wins:</strong> Every unit is a power of 10 apart — conversion is just moving a decimal. English system's uneven factors make math harder and mistakes more likely.</p>
      </div>

      <h3 class="section-title">Measurement Errors</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">Zero Error</div>
          <div class="op-desc">Instrument doesn't read zero when fully closed. All readings must be corrected by adding or subtracting the zero error value.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Parallax Error</div>
          <div class="op-desc">Reading a scale from an angle instead of straight on. Causes an inaccurate reading because your eye is not aligned with the measurement mark.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--orange)">Human Error</div>
          <div class="op-desc">Misreading a scale, poor technique, or inconsistent placement of the instrument.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--purple)">Worn Jaws</div>
          <div class="op-desc">Old or damaged jaws on a caliper that don't close evenly — causes systematic error in every reading.</div>
        </div>
      </div>

      <h3 class="section-title">Least Count (LC)</h3>
      <div class="def-block">
        <p>The <strong>smallest value</strong> an instrument can reliably measure. Lower least count = more precise instrument.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Instrument</th><th>Least Count</th><th>Measures</th></tr></thead>
          <tbody>
            <tr><td>Meterstick / Ruler</td><td class="tv">1 mm</td><td>Length</td></tr>
            <tr><td>Vernier Caliper</td><td class="tv">0.05 mm</td><td>Length, diameter, depth</td></tr>
            <tr><td>Micrometer Caliper</td><td class="tv">0.01 mm</td><td>Very small dimensions</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Vernier Caliper Formulas</h3>
      <div class="formula-block">
        LC = 1 main scale division &divide; number of vernier divisions<br><br>
        Reading = Main scale reading + (n &times; LC)<br>
        <span style="color:var(--muted);font-size:11px">n = coinciding vernier division &nbsp;|&nbsp; LC = least count</span>
      </div>
      <div class="example-block" style="background:rgba(0,212,255,0.06);border-color:rgba(0,212,255,0.2)">
        <div class="ex-label" style="color:var(--cyan)">Example</div>
        <p>Main scale reading = 3 cm &nbsp;|&nbsp; Coinciding division = 3rd &nbsp;|&nbsp; LC = 0.2 cm<br>
        Reading = 3 + (3 &times; 0.2) = <strong>3.6 cm</strong></p>
      </div>

      <h3 class="section-title">Micrometer Caliper Formulas</h3>
      <div class="formula-block">
        P = 1 linear scale division &divide; number of revolutions<br>
        LC = P &divide; N<br>
        Reading = Sleeve reading + (thimble division &times; LC)<br>
        <span style="color:var(--muted);font-size:11px">P = pitch &nbsp;|&nbsp; N = number of circular scale divisions</span>
      </div>
      <div class="example-block" style="background:rgba(0,212,255,0.06);border-color:rgba(0,212,255,0.2)">
        <div class="ex-label" style="color:var(--cyan)">Example</div>
        <p>Linear div = 1 mm &nbsp;|&nbsp; Revolutions = 2 &nbsp;|&nbsp; N = 50 &nbsp;|&nbsp; Thimble div = 42 &nbsp;|&nbsp; Sleeve = 5 mm<br>
        P = 1/2 = 0.5 mm &nbsp;&nbsp; LC = 0.5/50 = 0.01 mm<br>
        Reading = 5 + (42 &times; 0.01) = <strong>5.42 mm</strong></p>
      </div>

      <h3 class="section-title">Notes</h3>
      <div class="def-block">
        <p><strong>Before using a Vernier Caliper:</strong> Close jaws completely. Check if vernier 0 aligns with main scale 0. If not, record the zero error and apply it to all readings.</p>
      </div>
      <div class="def-block">
        <p><strong>Why you can't just make finer divisions infinitely:</strong> The human eye has a physical limit to how small a gap it can distinguish. Divisions made too small become unreadable — more mistakes, not more precision. That's why Vernier and micrometer calipers use mechanical methods instead.</p>
      </div>
    </div>`,

  conversion: `
    <div id="topic-conversion" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">⇄</span>
        <div>
          <div class="detail-num">TOPIC 02</div>
          <h2 class="detail-title" style="color:var(--green)">Unit Conversion</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--green)">Definition</div>
        <p><strong>Unit conversion</strong> is expressing a measurement in a different unit while keeping the same physical value. Errors in conversion can cause real-world failures — used in physics, chemistry, construction, aviation, and medicine.</p>
      </div>

      <h3 class="section-title first">Conversion Factor Method</h3>
      <div class="def-block">
        <p>Write the conversion factor as a fraction so the unwanted unit cancels. The unit you want to <em>eliminate</em> goes on the <strong>bottom</strong>. The unit you want to <em>keep</em> goes on the <strong>top</strong>.</p>
      </div>
      <div class="formula-block" style="--accent-color:var(--green)">
        value &times; (new unit / old unit) = result
      </div>

      <h3 class="section-title">Chain Conversion</h3>
      <div class="def-block">
        <p>Stack multiple conversion fractions in one equation so each unwanted unit cancels with the next. Only the target unit remains.</p>
      </div>
      <div class="example-block" style="background:rgba(77,255,158,0.06);border-color:rgba(77,255,158,0.2)">
        <div class="ex-label" style="color:var(--green)">Example &mdash; 3 miles to cm</div>
        <p>3 mi &times; (5280 ft/1 mi) &times; (12 in/1 ft) &times; (2.54 cm/1 in) = <strong>482,803.2 cm</strong><br>
        <span style="color:var(--muted)">mi &rarr; ft &rarr; in &rarr; cm &nbsp;&checkmark;</span></p>
      </div>
      <div class="example-block" style="background:rgba(77,255,158,0.06);border-color:rgba(77,255,158,0.2)">
        <div class="ex-label" style="color:var(--green)">Example &mdash; 60 km/h to m/s</div>
        <p>60 km/h &times; (1000 m/1 km) &times; (1 h/3600 s) = <strong>16.67 m/s</strong></p>
      </div>

      <h3 class="section-title">Cubic Unit Conversion</h3>
      <div class="def-block">
        <p>When converting cubic units (e.g., in&sup3; to cm&sup3;), the conversion factor must also be <strong>cubed</strong>.</p>
      </div>
      <div class="formula-block" style="--accent-color:var(--green)">
        1 in&sup3; = (2.54 cm)&sup3; = (2.54)&sup3; = 16.39 cm&sup3;
      </div>

      <h3 class="section-title">Common Conversion Factors</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>From</th><th>To</th><th>Factor</th></tr></thead>
          <tbody>
            <tr><td>1 inch</td><td>cm</td><td class="tv">2.54 cm</td></tr>
            <tr><td>1 foot</td><td>cm</td><td class="tv">30.48 cm</td></tr>
            <tr><td>1 mile</td><td>km</td><td class="tv">1.609 km</td></tr>
            <tr><td>1 pound (lb)</td><td>g</td><td class="tv">453.6 g</td></tr>
            <tr><td>1 kg</td><td>lb</td><td class="tv">2.205 lb</td></tr>
            <tr><td>1 liter</td><td>cm&sup3;</td><td class="tv">1000 cm&sup3;</td></tr>
            <tr><td>1 gallon (US)</td><td>L</td><td class="tv">3.785 L</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Metric Prefixes</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Prefix</th><th>Symbol</th><th>Multiplier</th></tr></thead>
          <tbody>
            <tr><td>kilo</td><td>k</td><td class="tv">&times; 10&sup3;</td></tr>
            <tr><td>centi</td><td>c</td><td class="tv">&times; 10&#8315;&sup2;</td></tr>
            <tr><td>milli</td><td>m</td><td class="tv">&times; 10&#8315;&sup3;</td></tr>
            <tr><td>micro</td><td>&micro;</td><td class="tv">&times; 10&#8315;&sup6;</td></tr>
            <tr><td>nano</td><td>n</td><td class="tv">&times; 10&#8315;&sup9;</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,

  vectors: `
    <div id="topic-vectors" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">→</span>
        <div>
          <div class="detail-num">TOPIC 03</div>
          <h2 class="detail-title" style="color:var(--yellow)">Vectors &amp; Vector Addition</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">Definition</div>
        <p>A <strong>vector</strong> is a quantity that has both <em>magnitude</em> (size) and <em>direction</em>. Many physical quantities — force, velocity, displacement, acceleration — cannot be fully described without direction.</p>
      </div>

      <h3 class="section-title first">Scalar vs. Vector</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Type</th><th>Description</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td>Scalar</td><td>Magnitude only</td><td class="tv">Speed, mass, temperature, time</td></tr>
            <tr><td>Vector</td><td>Magnitude + direction</td><td class="rv">Force, velocity, displacement, acceleration</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Resultant &amp; Equilibrant</h3>
      <div class="two-col">
        <div class="def-block">
          <div class="blk-label" style="color:var(--yellow)">Resultant Force</div>
          <p>The single force representing the combined effect of all forces. Produces the same effect as all forces acting together.</p>
        </div>
        <div class="def-block">
          <div class="blk-label" style="color:var(--pink)">Equilibrant Force</div>
          <p>Equal in magnitude to the resultant but acts in the <strong>opposite direction</strong>. Completely balances the resultant.</p>
        </div>
      </div>
      <div class="def-block">
        <p><strong>Vector sum &ne; Algebraic sum.</strong> Two forces of 3 N and 4 N don't always give 7 N. Depending on the angle, the result can be anywhere from 1 N (opposite) to 7 N (same direction).</p>
      </div>

      <h3 class="section-title">Method A &mdash; Parallelogram Method</h3>
      <div class="def-block">
        <p>Graphical method for exactly <strong>2 vectors</strong>. Both vectors are drawn from the <em>same starting point</em>. Lines parallel to each vector are drawn from the tip of the other, forming a parallelogram. The diagonal from the origin is the resultant <strong>R</strong>.</p>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Sketch &mdash; A = 40 N at 0°, B = 30 N at 90°</div>
        <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="arr-a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#00d4ff"/>
            </marker>
            <marker id="arr-b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#4dff9e"/>
            </marker>
            <marker id="arr-r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#f5c842"/>
            </marker>
            <marker id="arr-dash" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#25253a"/>
            </marker>
          </defs>
          <!-- Origin dot -->
          <circle cx="60" cy="190" r="4" fill="#6666a0"/>
          <!-- Vector A: horizontal, 40N → 160px -->
          <line x1="60" y1="190" x2="218" y2="190" stroke="#00d4ff" stroke-width="2.5" marker-end="url(#arr-a)"/>
          <text x="130" y="208" fill="#00d4ff" font-family="IBM Plex Mono,monospace" font-size="12">A = 40 N</text>
          <!-- Vector B: vertical, 30N → 120px up -->
          <line x1="60" y1="190" x2="60" y2="72" stroke="#4dff9e" stroke-width="2.5" marker-end="url(#arr-b)"/>
          <text x="4" y="135" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="12">B = 30 N</text>
          <!-- Dashed lines to complete parallelogram -->
          <line x1="220" y1="190" x2="220" y2="72" stroke="#25253a" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#arr-dash)"/>
          <line x1="60" y1="70" x2="218" y2="70" stroke="#25253a" stroke-width="1.5" stroke-dasharray="5,4" marker-end="url(#arr-dash)"/>
          <!-- Resultant diagonal -->
          <line x1="60" y1="190" x2="214" y2="76" stroke="#f5c842" stroke-width="2.5" stroke-dasharray="0" marker-end="url(#arr-r)"/>
          <text x="148" y="118" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="12">R = 50 N</text>
          <!-- Angle arc -->
          <path d="M 100,190 A 40,40 0 0,0 72,158" stroke="#f5c842" stroke-width="1.5" fill="none"/>
          <text x="106" y="168" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="11">36.87°</text>
          <!-- Origin label -->
          <text x="38" y="210" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">O</text>
          <!-- Corner labels -->
          <text x="224" y="208" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">C</text>
          <text x="224" y="68" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">D</text>
          <text x="38" y="68" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">B</text>
        </svg>
        <div style="margin-top:16px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--cyan)">&#9644; A</span> and <span style="color:var(--green)">&#9644; B</span> drawn from origin O &nbsp;&nbsp;
          <span style="color:#25253a;text-decoration:underline;text-decoration-style:dashed;">- - -</span> dashed = ghost sides of parallelogram &nbsp;&nbsp;
          <span style="color:var(--yellow)">&#9644; R</span> = diagonal = resultant
        </div>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--cyan)">Steps</div>
        <p>
          1. Draw A and B from the same point O, to scale, at the correct angle.<br>
          2. From the tip of A, draw a line parallel to B.<br>
          3. From the tip of B, draw a line parallel to A.<br>
          4. Where those lines meet = point D. Draw diagonal from O to D.<br>
          5. Measure the diagonal length (apply scale) and its angle = <strong>R</strong>.
        </p>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Limitations</div>
        <p>Only adds <strong>2 vectors at a time</strong>. Accuracy depends entirely on how precisely you draw — small errors in the sketch = wrong result.</p>
      </div>

      <h3 class="section-title">Method B &mdash; Polygon / Head-to-Tail Method</h3>
      <div class="def-block">
        <p>Graphical method for <strong>2 or more vectors</strong>. Each vector is drawn starting from the tip (head) of the previous one. The resultant goes from the tail of the first vector to the head of the last. Order does not affect the resultant.</p>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Sketch &mdash; F1 = 40 N East, F2 = 30 N North, F3 = 20 N West</div>
        <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="p-arr-1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#00d4ff"/>
            </marker>
            <marker id="p-arr-2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#4dff9e"/>
            </marker>
            <marker id="p-arr-3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#ff4d8d"/>
            </marker>
            <marker id="p-arr-r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#f5c842"/>
            </marker>
          </defs>
          <!-- Start dot -->
          <circle cx="80" cy="210" r="4" fill="#6666a0"/>
          <text x="60" y="228" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">Start</text>
          <!-- F1: East 40N = 140px right -->
          <line x1="80" y1="210" x2="216" y2="210" stroke="#00d4ff" stroke-width="2.5" marker-end="url(#p-arr-1)"/>
          <text x="130" y="228" fill="#00d4ff" font-family="IBM Plex Mono,monospace" font-size="11">F1 40N →</text>
          <!-- F2: North 30N = 105px up, from tip of F1 -->
          <line x1="220" y1="210" x2="220" y2="107" stroke="#4dff9e" stroke-width="2.5" marker-end="url(#p-arr-2)"/>
          <text x="228" y="162" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="11">F2 30N ↑</text>
          <!-- F3: West 20N = 70px left, from tip of F2 -->
          <line x1="220" y1="105" x2="152" y2="105" stroke="#ff4d8d" stroke-width="2.5" marker-end="url(#p-arr-3)"/>
          <text x="162" y="94" fill="#ff4d8d" font-family="IBM Plex Mono,monospace" font-size="11">F3 20N ←</text>
          <!-- End dot -->
          <circle cx="150" cy="105" r="4" fill="#6666a0"/>
          <text x="100" y="94" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">End</text>
          <!-- Resultant: Start to End -->
          <line x1="80" y1="210" x2="144" y2="111" stroke="#f5c842" stroke-width="2.5" stroke-dasharray="6,3" marker-end="url(#p-arr-r)"/>
          <text x="68" y="158" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="12">R</text>
          <!-- Angle hint -->
          <path d="M 112,210 A 32,32 0 0,0 96,180" stroke="#f5c842" stroke-width="1.2" fill="none"/>
          <text x="116" y="194" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="10">&theta;</text>
        </svg>
        <div style="margin-top:16px;font-size:11px;color:var(--muted);line-height:1.8;">
          Each vector starts at the <em>head</em> of the previous one &nbsp;&nbsp;
          <span style="color:var(--yellow)">- - - R</span> = drawn from the very first tail to the very last head
        </div>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--green)">Steps</div>
        <p>
          1. Draw F1 to scale from the starting point.<br>
          2. Draw F2 starting exactly from the tip of F1.<br>
          3. Draw F3 starting exactly from the tip of F2.<br>
          4. Draw R from the tail of F1 to the tip of F3.<br>
          5. Measure R's length and angle.
        </p>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Note</div>
        <p>You can arrange the vectors in any order (F1, F3, F2 etc.) — the resultant R will be the same. The polygon method's weakness is still drawing accuracy.</p>
      </div>

      <h3 class="section-title">Method C &mdash; Component Method (Analytical)</h3>
      <div class="def-block">
        <p>No drawing required. Works for any number of vectors. Break each vector into x and y components, sum them separately, then compute R using the Pythagorean theorem. Most precise method.</p>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Sketch &mdash; Breaking a vector into components</div>
        <svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;display:block;margin:0 auto;">
          <defs>
            <marker id="c-arr-v" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa"/>
            </marker>
            <marker id="c-arr-x" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#00d4ff"/>
            </marker>
            <marker id="c-arr-y" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#4dff9e"/>
            </marker>
          </defs>
          <!-- Axes -->
          <line x1="60" y1="190" x2="320" y2="190" stroke="#25253a" stroke-width="1.5"/>
          <line x1="60" y1="190" x2="60" y2="30" stroke="#25253a" stroke-width="1.5"/>
          <text x="322" y="194" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">x</text>
          <text x="54" y="26" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">y</text>
          <!-- Origin -->
          <circle cx="60" cy="190" r="3" fill="#6666a0"/>
          <text x="42" y="208" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="11">O</text>
          <!-- Vector V at ~53° -->
          <line x1="60" y1="190" x2="234" y2="76" stroke="#a78bfa" stroke-width="2.5" marker-end="url(#c-arr-v)"/>
          <text x="155" y="118" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="13">V</text>
          <!-- Vx: horizontal component -->
          <line x1="60" y1="190" x2="232" y2="190" stroke="#00d4ff" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#c-arr-x)"/>
          <text x="126" y="208" fill="#00d4ff" font-family="IBM Plex Mono,monospace" font-size="12">Vx = V cos&theta;</text>
          <!-- Vy: vertical component -->
          <line x1="235" y1="190" x2="235" y2="78" stroke="#4dff9e" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#c-arr-y)"/>
          <text x="242" y="138" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="12">Vy = V sin&theta;</text>
          <!-- Right angle box -->
          <rect x="222" y="177" width="13" height="13" fill="none" stroke="#6666a0" stroke-width="1"/>
          <!-- Angle arc -->
          <path d="M 104,190 A 44,44 0 0,0 80,152" stroke="#a78bfa" stroke-width="1.5" fill="none"/>
          <text x="108" y="172" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="12">&theta;</text>
        </svg>
        <div style="margin-top:16px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--purple)">&#9644; V</span> = original vector &nbsp;&nbsp;
          <span style="color:var(--cyan)">- - Vx</span> = horizontal component &nbsp;&nbsp;
          <span style="color:var(--green)">- - Vy</span> = vertical component &nbsp;&nbsp;
          &#9633; = right angle
        </div>
      </div>

      <div class="formula-block" style="--accent-color:var(--yellow)">
        V&#x2093; = V cos&theta; &nbsp;&nbsp;&nbsp; V&#x1D67; = V sin&theta;<br><br>
        &Sigma;V&#x2093; = V&#8321;&#x2093; + V&#8322;&#x2093; + V&#8323;&#x2093; + &hellip;<br>
        &Sigma;V&#x1D67; = V&#8321;&#x1D67; + V&#8322;&#x1D67; + V&#8323;&#x1D67; + &hellip;<br><br>
        R = &radic;((&Sigma;V&#x2093;)&sup2; + (&Sigma;V&#x1D67;)&sup2;)<br><br>
        &theta; = arctan(|&Sigma;V&#x1D67;| / |&Sigma;V&#x2093;|)
      </div>

      <h3 class="section-title">Direction / Quadrant Rule</h3>
      <div class="def-block">
        <p>Signs of &Sigma;V&#x2093; and &Sigma;V&#x1D67; determine the quadrant. <strong>&Sigma;V&#x1D67; is stated first</strong> in the final direction — e.g., South of West, not West of South.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>&Sigma;V&#x2093;</th><th>&Sigma;V&#x1D67;</th><th>Quadrant</th><th>Direction</th></tr></thead>
          <tbody>
            <tr><td class="tv">+</td><td class="tv">+</td><td>I</td><td class="tv">North of East</td></tr>
            <tr><td class="fv">&minus;</td><td class="tv">+</td><td>II</td><td class="rv">North of West</td></tr>
            <tr><td class="fv">&minus;</td><td class="fv">&minus;</td><td>III</td><td class="fv">South of West</td></tr>
            <tr><td class="tv">+</td><td class="fv">&minus;</td><td>IV</td><td class="rf">South of East</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Example &mdash; Component Method</h3>
      <div class="example-block" style="background:rgba(245,200,66,0.06);border-color:rgba(245,200,66,0.2)">
        <div class="ex-label" style="color:var(--yellow)">F1 = 30 N at 0°, F2 = 40 N at 90°</div>
        <p>
          F&#8321;&#x2093; = 30 cos0° = 30 N &nbsp;&nbsp; F&#8321;&#x1D67; = 30 sin0° = 0 N<br>
          F&#8322;&#x2093; = 40 cos90° = 0 N &nbsp;&nbsp; F&#8322;&#x1D67; = 40 sin90° = 40 N<br><br>
          &Sigma;V&#x2093; = 30 N &nbsp;&nbsp; &Sigma;V&#x1D67; = 40 N<br>
          R = &radic;(30&sup2; + 40&sup2;) = &radic;2500 = <strong>50 N</strong><br>
          &theta; = arctan(40/30) = <strong>53.13°</strong><br>
          Both + &rarr; Quadrant I &rarr; <strong>53.13° North of East</strong>
        </p>
      </div>

      <h3 class="section-title">When to Use Each Method</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Method</th><th>Best For</th><th>Weakness</th></tr></thead>
          <tbody>
            <tr><td class="tv">Parallelogram</td><td>Quick graphical, 2 vectors</td><td class="fv">Only 2 at a time; drawing errors</td></tr>
            <tr><td class="rv">Polygon</td><td>Multiple vectors, graphical</td><td class="fv">Still relies on drawing accuracy</td></tr>
            <tr><td style="color:var(--yellow)">Component</td><td>Any number; maximum precision</td><td class="fv">More calculation steps</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,

  uam: `
    <div id="topic-uam" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">⚡</span>
        <div>
          <div class="detail-num">TOPIC 04</div>
          <h2 class="detail-title" style="color:var(--pink)">Uniformly Accelerated Motion</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Definition</div>
        <p><strong>Uniformly Accelerated Motion (UAM)</strong> is motion where acceleration remains <em>constant</em> over time — velocity changes by the same amount every second. Covers most intro physics problems: gravity, inclined planes, vehicles.</p>
      </div>

      <h3 class="section-title first">Speed vs. Velocity</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th></th><th>Speed</th><th>Velocity</th></tr></thead>
          <tbody>
            <tr><td>Type</td><td>Scalar</td><td class="tv">Vector</td></tr>
            <tr><td>Description</td><td>Magnitude only</td><td class="tv">Magnitude + direction</td></tr>
            <tr><td>Example</td><td>60 km/h</td><td class="tv">60 km/h heading north</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Key Concepts</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">Average Velocity</div>
          <div class="op-desc">Total displacement divided by total time. Only considers start and end positions — not the path taken.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Relative Velocity</div>
          <div class="op-desc">Velocity of one object as observed from another moving object.<br><br>Example: Two cars same direction, 60 km/h and 40 km/h. Relative velocity = 60 &minus; 40 = 20 km/h.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Instantaneous Acceleration</div>
          <div class="op-desc">Acceleration at a specific moment in time. Example: an F1 car exactly at the moment the race starts.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Uniform Acceleration</div>
          <div class="op-desc">Constant throughout the entire motion. Example: a steel ball rolling down an inclined plane gains speed at a steady rate.</div>
        </div>
      </div>

      <h3 class="section-title">Velocity vs. Time Graph</h3>
      <div class="def-block">
        <p>Under constant acceleration, velocity increases linearly with time. The slope of the line = acceleration. The area under the line = displacement.</p>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">v-t Graph &mdash; Uniform Acceleration (v&#8321; = 0, a = constant)</div>
        <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="uam-ax" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#6666a0"/>
            </marker>
            <marker id="uam-ay" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#6666a0"/>
            </marker>
          </defs>
          <!-- Axes -->
          <line x1="60" y1="200" x2="380" y2="200" stroke="#6666a0" stroke-width="1.5" marker-end="url(#uam-ax)"/>
          <line x1="60" y1="200" x2="60" y2="20" stroke="#6666a0" stroke-width="1.5" marker-end="url(#uam-ay)"/>
          <text x="384" y="204" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="12">t</text>
          <text x="50" y="16" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="12">v</text>
          <!-- Time tick marks -->
          <line x1="130" y1="196" x2="130" y2="204" stroke="#6666a0" stroke-width="1"/>
          <line x1="200" y1="196" x2="200" y2="204" stroke="#6666a0" stroke-width="1"/>
          <line x1="270" y1="196" x2="270" y2="204" stroke="#6666a0" stroke-width="1"/>
          <line x1="340" y1="196" x2="340" y2="204" stroke="#6666a0" stroke-width="1"/>
          <text x="126" y="216" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">1s</text>
          <text x="196" y="216" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">2s</text>
          <text x="266" y="216" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">3s</text>
          <text x="336" y="216" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">4s</text>
          <!-- Velocity tick marks (every 9.8 m/s, mapped to pixels) -->
          <line x1="56" y1="165" x2="64" y2="165" stroke="#6666a0" stroke-width="1"/>
          <line x1="56" y1="130" x2="64" y2="130" stroke="#6666a0" stroke-width="1"/>
          <line x1="56" y1="95" x2="64" y2="95" stroke="#6666a0" stroke-width="1"/>
          <line x1="56" y1="60" x2="64" y2="60" stroke="#6666a0" stroke-width="1"/>
          <text x="28" y="169" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">9.8</text>
          <text x="22" y="134" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">19.6</text>
          <text x="22" y="99" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">29.4</text>
          <text x="22" y="64" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">39.2</text>
          <!-- Shaded area under line (displacement) -->
          <polygon points="60,200 340,200 340,60 60,200" fill="rgba(255,77,141,0.08)"/>
          <!-- The v-t line -->
          <line x1="60" y1="200" x2="340" y2="60" stroke="#ff4d8d" stroke-width="2.5"/>
          <!-- Slope annotation -->
          <line x1="200" y1="130" x2="270" y2="130" stroke="#f5c842" stroke-width="1.2" stroke-dasharray="4,3"/>
          <line x1="270" y1="130" x2="270" y2="95" stroke="#f5c842" stroke-width="1.2" stroke-dasharray="4,3"/>
          <text x="218" y="148" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="11">&Delta;t</text>
          <text x="274" y="116" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="11">&Delta;v</text>
          <text x="290" y="148" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="11">slope = a</text>
          <!-- Area label -->
          <text x="100" y="185" fill="#ff4d8d" font-family="IBM Plex Mono,monospace" font-size="11">area = s</text>
          <!-- Origin label -->
          <text x="42" y="216" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">0</text>
        </svg>
        <div style="margin-top:12px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--pink)">&#9644;</span> straight line = constant acceleration &nbsp;&nbsp;
          <span style="color:var(--yellow)">&#9644;</span> slope = &Delta;v/&Delta;t = acceleration &nbsp;&nbsp;
          <span style="color:rgba(255,77,141,0.5)">&#9646;</span> shaded area = displacement
        </div>
      </div>

      <h3 class="section-title">Inclined Plane Diagram</h3>
      <div class="def-block">
        <p>On an inclined plane, the ball only accelerates along the slope — a <em>component</em> of g. The steeper the angle, the closer the acceleration gets to 9.8 m/s².</p>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Inclined Plane &mdash; acceleration as component of g</div>
        <svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="inc-g" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa"/>
            </marker>
            <marker id="inc-a" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#ff4d8d"/>
            </marker>
            <marker id="inc-n" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#4dff9e"/>
            </marker>
          </defs>
          <!-- Ground -->
          <line x1="30" y1="190" x2="390" y2="190" stroke="#25253a" stroke-width="2"/>
          <!-- Inclined surface -->
          <polygon points="30,190 350,190 350,70" fill="rgba(37,37,58,0.6)" stroke="#32324a" stroke-width="1.5"/>
          <!-- Angle arc and label -->
          <path d="M 80,190 A 50,50 0 0,1 68,147" stroke="#6666a0" stroke-width="1.2" fill="none"/>
          <text x="86" y="178" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="12">&theta;</text>
          <!-- Ball on slope -->
          <circle cx="195" cy="136" r="12" fill="#13131a" stroke="#ff4d8d" stroke-width="2"/>
          <text x="190" y="140" fill="#ff4d8d" font-family="IBM Plex Mono,monospace" font-size="10">m</text>
          <!-- g arrow (straight down) -->
          <line x1="195" y1="148" x2="195" y2="192" stroke="#a78bfa" stroke-width="2" marker-end="url(#inc-g)"/>
          <text x="200" y="178" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="12">g</text>
          <!-- a arrow (along slope, downward) -->
          <line x1="183" y1="144" x2="130" y2="170" stroke="#ff4d8d" stroke-width="2" marker-end="url(#inc-a)"/>
          <text x="130" y="158" fill="#ff4d8d" font-family="IBM Plex Mono,monospace" font-size="12">a = g sin&theta;</text>
          <!-- Normal force arrow (perpendicular to slope) -->
          <line x1="200" y1="126" x2="226" y2="80" stroke="#4dff9e" stroke-width="2" marker-end="url(#inc-n)"/>
          <text x="228" y="90" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="12">N</text>
          <!-- Note -->
          <text x="30" y="210" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">steeper &theta; &rarr; a approaches g = 9.8 m/s²</text>
        </svg>
        <div style="margin-top:12px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--purple)">&#9644; g</span> = full gravity downward &nbsp;&nbsp;
          <span style="color:var(--pink)">&#9644; a</span> = acceleration along slope = g sin&theta; &nbsp;&nbsp;
          <span style="color:var(--green)">&#9644; N</span> = normal force (perpendicular to surface)
        </div>
      </div>

      <h3 class="section-title">The 5 Kinematic Equations</h3>
      <div class="def-block">
        <p>Variables: <strong>v&#8321;</strong> = initial velocity &nbsp;|&nbsp; <strong>v&#8322;</strong> = final velocity &nbsp;|&nbsp; <strong>a</strong> = acceleration &nbsp;|&nbsp; <strong>t</strong> = time &nbsp;|&nbsp; <strong>s</strong> = displacement</p>
      </div>
      <div class="equiv-group">
        <div class="equiv-list">
          <div class="equiv-row"><span class="eq-name">Equation 1</span><span class="eq-formula">a = (v&#8322; &minus; v&#8321;) / t</span></div>
          <div class="equiv-row"><span class="eq-name">Equation 2</span><span class="eq-formula">v&#8322; = v&#8321; + at</span></div>
          <div class="equiv-row"><span class="eq-name">Equation 3</span><span class="eq-formula">s = ((v&#8321; + v&#8322;) / 2) &times; t</span></div>
          <div class="equiv-row"><span class="eq-name">Equation 4</span><span class="eq-formula">s = v&#8321;t + &frac12;at&sup2;</span></div>
          <div class="equiv-row"><span class="eq-name">Equation 5</span><span class="eq-formula">2as = v&#8322;&sup2; &minus; v&#8321;&sup2;</span></div>
        </div>
      </div>

      <h3 class="section-title">UAM vs. Acceleration Due to Gravity</h3>
      <div class="def-block">
        <p><strong>Similarity:</strong> Both are constant — velocity changes at a fixed rate.<br><br>
        <strong>Difference:</strong> g = 9.8 m/s² is a specific constant acting vertically downward on all objects. UAM is a general term — any direction, any constant value. On an inclined plane, the ball's acceleration is only a <em>component</em> of g — always less than 9.8 m/s². The steeper the incline, the closer to 9.8 m/s².</p>
      </div>
    </div>`,

  freefall: `
    <div id="topic-freefall" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">↓</span>
        <div>
          <div class="detail-num">TOPIC 05</div>
          <h2 class="detail-title" style="color:var(--purple)">Free Falling Bodies</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--purple)">Definition</div>
        <p><strong>Free fall</strong> is the motion of an object under the influence of gravity alone — no air resistance. It's the purest form of uniformly accelerated motion and is foundational to understanding gravity. Used in ballistics, aerospace, and structural engineering.</p>
      </div>

      <h3 class="section-title first">Core Rules</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--purple)">Starting from rest</div>
          <div class="op-desc">Initial velocity v&#8321; = 0. Object dropped — not thrown.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Constant acceleration</div>
          <div class="op-desc">a = g = 9.8 m/s² downward. Applies to all objects regardless of mass.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Velocity grows linearly</div>
          <div class="op-desc">v increases by 9.8 m/s every second: 0, 9.8, 19.6, 29.4 …</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Distance grows as t²</div>
          <div class="op-desc">h = ½gt². Larger gaps covered in each successive second.</div>
        </div>
      </div>

      <h3 class="section-title">Free Fall Diagram</h3>
      <div class="def-block">
        <p>A dropped object covers increasingly larger distances in each equal time interval — because velocity is growing. The gaps between positions are not equal.</p>
      </div>
      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Free Fall &mdash; positions at t = 0, 1, 2, 3 seconds</div>
        <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="ff-g" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa"/>
            </marker>
          </defs>
          <!-- Building / drop point -->
          <rect x="30" y="20" width="50" height="16" fill="#1a1a24" stroke="#32324a" stroke-width="1"/>
          <text x="36" y="32" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10">drop point</text>
          <!-- Vertical axis line -->
          <line x1="100" y1="28" x2="100" y2="280" stroke="#25253a" stroke-width="1.5" stroke-dasharray="4,3"/>
          <!-- t=0 ball -->
          <circle cx="100" cy="28" r="9" fill="#13131a" stroke="#a78bfa" stroke-width="2"/>
          <text x="116" y="32" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="11">t = 0 &nbsp; v = 0</text>
          <!-- t=1: h = ½(9.8)(1) = 4.9m → scale: 4.9×9 ≈ 44px -->
          <circle cx="100" cy="72" r="9" fill="#13131a" stroke="#a78bfa" stroke-width="2"/>
          <text x="116" y="76" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="11">t = 1s &nbsp; h = 4.9 m &nbsp; v = 9.8 m/s</text>
          <!-- Distance marker 0→1 -->
          <line x1="78" y1="28" x2="78" y2="72" stroke="#4dff9e" stroke-width="1.2"/>
          <line x1="73" y1="28" x2="83" y2="28" stroke="#4dff9e" stroke-width="1"/>
          <line x1="73" y1="72" x2="83" y2="72" stroke="#4dff9e" stroke-width="1"/>
          <text x="44" y="54" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="10">4.9 m</text>
          <!-- t=2: h = ½(9.8)(4) = 19.6m → 19.6×4.5 ≈ 88px from t=1 -->
          <circle cx="100" cy="160" r="9" fill="#13131a" stroke="#a78bfa" stroke-width="2"/>
          <text x="116" y="164" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="11">t = 2s &nbsp; h = 19.6 m &nbsp; v = 19.6 m/s</text>
          <!-- Distance marker 1→2 -->
          <line x1="78" y1="72" x2="78" y2="160" stroke="#4dff9e" stroke-width="1.2"/>
          <line x1="73" y1="72" x2="83" y2="72" stroke="#4dff9e" stroke-width="1"/>
          <line x1="73" y1="160" x2="83" y2="160" stroke="#4dff9e" stroke-width="1"/>
          <text x="40" y="120" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="10">14.7 m</text>
          <!-- t=3: h = ½(9.8)(9) = 44.1m → 44.1-19.6=24.5m more → 24.5×4.5≈110px -->
          <circle cx="100" cy="270" r="9" fill="#13131a" stroke="#a78bfa" stroke-width="2"/>
          <text x="116" y="274" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="11">t = 3s &nbsp; h = 44.1 m &nbsp; v = 29.4 m/s</text>
          <!-- Distance marker 2→3 -->
          <line x1="78" y1="160" x2="78" y2="270" stroke="#4dff9e" stroke-width="1.2"/>
          <line x1="73" y1="160" x2="83" y2="160" stroke="#4dff9e" stroke-width="1"/>
          <line x1="73" y1="270" x2="83" y2="270" stroke="#4dff9e" stroke-width="1"/>
          <text x="40" y="220" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="10">24.5 m</text>
          <!-- g arrow -->
          <line x1="380" y1="60" x2="380" y2="120" stroke="#a78bfa" stroke-width="2" marker-end="url(#ff-g)"/>
          <text x="366" y="56" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="12">g</text>
        </svg>
        <div style="margin-top:12px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--purple)">&#9679;</span> ball position each second &nbsp;&nbsp;
          <span style="color:var(--green)">&#9644;</span> gap between positions — grows each second &nbsp;&nbsp;
          <span style="color:var(--purple)">&#9644; g</span> = 9.8 m/s² downward
        </div>
      </div>

      <h3 class="section-title">Formulas (dropped from rest)</h3>
      <div class="equiv-group">
        <div class="equiv-list">
          <div class="equiv-row"><span class="eq-name">Velocity at time t</span><span class="eq-formula">v = gt</span></div>
          <div class="equiv-row"><span class="eq-name">Distance fallen</span><span class="eq-formula">h = &frac12;gt&sup2;</span></div>
          <div class="equiv-row"><span class="eq-name">Time to fall height h</span><span class="eq-formula">t = &radic;(2h / g)</span></div>
          <div class="equiv-row"><span class="eq-name">Velocity from height</span><span class="eq-formula">v&sup2; = 2gh</span></div>
        </div>
      </div>

      <h3 class="section-title">Example &mdash; Coin Dropped from Building</h3>
      <div class="example-block" style="background:rgba(167,139,250,0.06);border-color:rgba(167,139,250,0.2)">
        <div class="ex-label" style="color:var(--purple)">h = 20 m, g = 9.8 m/s²</div>
        <p>
          <strong>Time to hit ground:</strong><br>
          t = &radic;(2 &times; 20 / 9.8) = &radic;4.08 &approx; <strong>2.02 s</strong><br><br>
          <strong>Velocity on impact:</strong><br>
          v = gt = 9.8 &times; 2.02 &approx; <strong>19.8 m/s</strong>
        </p>
      </div>

      <h3 class="section-title">Notes</h3>
      <div class="def-block">
        <p>Both v = gt and h = &frac12;gt&sup2; are directly derived from the five kinematic equations by setting v&#8321; = 0 and a = g. Free fall is just UAM applied to gravity.</p>
      </div>
    </div>`,

  projectile: `
    <div id="topic-projectile" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">⌒</span>
        <div>
          <div class="detail-num">TOPIC 06</div>
          <h2 class="detail-title" style="color:var(--orange)">Projectile Motion</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--orange)">Definition</div>
        <p><strong>Projectile motion</strong> is the motion of an object launched into the air, subject only to gravity after launch. The path traced is a <strong>parabola</strong>. Used in ballistics, sports, engineering (water jets, bridge arcs), and military applications.</p>
      </div>

      <h3 class="section-title first">Core Rule: Independent Motions</h3>
      <div class="two-col">
        <div class="def-block">
          <div class="blk-label" style="color:var(--cyan)">Horizontal</div>
          <p><strong>Constant velocity.</strong> No acceleration. Air resistance ignored. x = v&#8320;t — moves the same distance every second.</p>
        </div>
        <div class="def-block">
          <div class="blk-label" style="color:var(--orange)">Vertical</div>
          <p><strong>Uniformly accelerated.</strong> Gravity acts downward at g = 9.8 m/s². Identical to free fall.</p>
        </div>
      </div>

      <h3 class="section-title">Case 1: Horizontal Launch</h3>
      <div class="def-block">
        <p>Object launched horizontally — e.g., a ball rolling off a table. Initial vertical velocity = 0.</p>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Horizontal Launch &mdash; v&#8320; = 5 m/s, table height = 1.25 m</div>
        <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="hl-vx" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#00d4ff"/>
            </marker>
            <marker id="hl-vy" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#ff4d8d"/>
            </marker>
            <marker id="hl-g" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#a78bfa"/>
            </marker>
          </defs>
          <!-- Ground -->
          <line x1="20" y1="210" x2="400" y2="210" stroke="#32324a" stroke-width="2"/>
          <!-- Table -->
          <rect x="20" y="120" width="14" height="90" fill="#1a1a24" stroke="#32324a" stroke-width="1"/>
          <rect x="10" y="115" width="40" height="8" fill="#1a1a24" stroke="#32324a" stroke-width="1"/>
          <!-- Table height label -->
          <line x1="8" y1="123" x2="8" y2="210" stroke="#6666a0" stroke-width="1"/>
          <line x1="4" y1="123" x2="12" y2="123" stroke="#6666a0" stroke-width="1"/>
          <line x1="4" y1="210" x2="12" y2="210" stroke="#6666a0" stroke-width="1"/>
          <text x="0" y="172" fill="#6666a0" font-family="IBM Plex Mono,monospace" font-size="10" transform="rotate(-90,0,172)">1.25 m</text>
          <!-- Parabolic path (quadratic bezier) -->
          <path d="M 50,115 Q 200,115 340,210" stroke="#ff8c42" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
          <!-- Ball at launch -->
          <circle cx="50" cy="115" r="8" fill="#13131a" stroke="#ff8c42" stroke-width="2"/>
          <!-- vx arrow at launch -->
          <line x1="58" y1="115" x2="100" y2="115" stroke="#00d4ff" stroke-width="2" marker-end="url(#hl-vx)"/>
          <text x="104" y="112" fill="#00d4ff" font-family="IBM Plex Mono,monospace" font-size="11">v&#8320; = 5 m/s</text>
          <!-- Ball mid-flight -->
          <circle cx="195" cy="152" r="7" fill="#13131a" stroke="#ff8c42" stroke-width="1.5"/>
          <!-- vx arrow mid -->
          <line x1="203" y1="152" x2="238" y2="152" stroke="#00d4ff" stroke-width="1.5" marker-end="url(#hl-vx)"/>
          <!-- vy arrow mid -->
          <line x1="195" y1="160" x2="195" y2="186" stroke="#ff4d8d" stroke-width="1.5" marker-end="url(#hl-vy)"/>
          <text x="200" y="182" fill="#ff4d8d" font-family="IBM Plex Mono,monospace" font-size="10">vy = gt</text>
          <!-- Landing point -->
          <circle cx="340" cy="210" r="5" fill="#ff8c42"/>
          <!-- x distance label -->
          <line x1="50" y1="225" x2="340" y2="225" stroke="#ff8c42" stroke-width="1"/>
          <line x1="50" y1="220" x2="50" y2="230" stroke="#ff8c42" stroke-width="1"/>
          <line x1="340" y1="220" x2="340" y2="230" stroke="#ff8c42" stroke-width="1"/>
          <text x="158" y="238" fill="#ff8c42" font-family="IBM Plex Mono,monospace" font-size="11">x = 2.52 m</text>
          <!-- g arrow -->
          <line x1="388" y1="130" x2="388" y2="175" stroke="#a78bfa" stroke-width="1.8" marker-end="url(#hl-g)"/>
          <text x="374" y="126" fill="#a78bfa" font-family="IBM Plex Mono,monospace" font-size="11">g</text>
        </svg>
        <div style="margin-top:12px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--cyan)">&#9644; vx</span> = constant horizontal &nbsp;&nbsp;
          <span style="color:var(--pink)">&#9644; vy</span> = grows downward each second &nbsp;&nbsp;
          <span style="color:var(--orange)">- - -</span> parabolic path
        </div>
      </div>

      <div class="formula-block" style="--accent-color:var(--orange)">
        Horizontal: &nbsp; x = v&#8320;t<br>
        Vertical: &nbsp;&nbsp;&nbsp; y = &frac12;gt&sup2; &nbsp;&nbsp;&nbsp; v&#x1D67; = gt<br>
        Time of flight: &nbsp; t = &radic;(2y / g)
      </div>
      <div class="example-block" style="background:rgba(255,140,66,0.06);border-color:rgba(255,140,66,0.2)">
        <div class="ex-label" style="color:var(--orange)">Example &mdash; Ball off a table</div>
        <p>v&#8320; = 5 m/s horizontal &nbsp;|&nbsp; table height = 1.25 m<br><br>
        t = &radic;(2 &times; 1.25 / 9.8) = &radic;0.255 &approx; 0.505 s<br>
        x = 5 &times; 0.505 &approx; <strong>2.52 m</strong> from the base of the table</p>
      </div>

      <h3 class="section-title">Case 2: Angled Launch</h3>
      <div class="def-block">
        <p>Object launched at angle &theta; above horizontal. Has both horizontal and vertical initial velocity components.</p>
      </div>

      <div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:24px;margin-bottom:20px;">
        <div style="font-size:10px;color:var(--muted);letter-spacing:0.2em;text-transform:uppercase;margin-bottom:16px;">Angled Launch &mdash; v&#8320; = 20 m/s at &theta; = 30°</div>
        <svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:0 auto;">
          <defs>
            <marker id="al-v0" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#ff8c42"/>
            </marker>
            <marker id="al-vx" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#00d4ff"/>
            </marker>
            <marker id="al-vy" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#4dff9e"/>
            </marker>
          </defs>
          <!-- Ground -->
          <line x1="20" y1="200" x2="400" y2="200" stroke="#32324a" stroke-width="2"/>
          <!-- Parabolic arc (cubic bezier) -->
          <path d="M 50,200 C 120,40 280,40 370,200" stroke="#ff8c42" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
          <!-- Launch ball -->
          <circle cx="50" cy="200" r="8" fill="#13131a" stroke="#ff8c42" stroke-width="2"/>
          <!-- v0 vector at angle -->
          <line x1="50" y1="200" x2="100" y2="160" stroke="#ff8c42" stroke-width="2.2" marker-end="url(#al-v0)"/>
          <text x="106" y="158" fill="#ff8c42" font-family="IBM Plex Mono,monospace" font-size="11">v&#8320;</text>
          <!-- vx component -->
          <line x1="50" y1="200" x2="94" y2="200" stroke="#00d4ff" stroke-width="1.8" stroke-dasharray="4,2" marker-end="url(#al-vx)"/>
          <text x="58" y="216" fill="#00d4ff" font-family="IBM Plex Mono,monospace" font-size="10">v&#8320;x = v&#8320;cos&theta;</text>
          <!-- vy component -->
          <line x1="96" y1="200" x2="96" y2="162" stroke="#4dff9e" stroke-width="1.8" stroke-dasharray="4,2" marker-end="url(#al-vy)"/>
          <text x="100" y="184" fill="#4dff9e" font-family="IBM Plex Mono,monospace" font-size="10">v&#8320;y = v&#8320;sin&theta;</text>
          <!-- Angle arc -->
          <path d="M 80,200 A 30,30 0 0,1 68,176" stroke="#f5c842" stroke-width="1.2" fill="none"/>
          <text x="82" y="192" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="11">&theta;</text>
          <!-- Peak point -->
          <circle cx="210" cy="57" r="6" fill="#13131a" stroke="#f5c842" stroke-width="1.8"/>
          <!-- Peak labels -->
          <line x1="210" y1="51" x2="210" y2="20" stroke="#f5c842" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="168" y="16" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="10">peak: vy = 0</text>
          <!-- H height arrow -->
          <line x1="386" y1="57" x2="386" y2="200" stroke="#f5c842" stroke-width="1"/>
          <line x1="381" y1="57" x2="391" y2="57" stroke="#f5c842" stroke-width="1"/>
          <line x1="381" y1="200" x2="391" y2="200" stroke="#f5c842" stroke-width="1"/>
          <text x="394" y="132" fill="#f5c842" font-family="IBM Plex Mono,monospace" font-size="11" transform="rotate(90,394,132)">H = 5.1 m</text>
          <!-- Landing dot -->
          <circle cx="370" cy="200" r="5" fill="#ff8c42"/>
          <!-- Range label -->
          <line x1="50" y1="218" x2="370" y2="218" stroke="#ff8c42" stroke-width="1"/>
          <line x1="50" y1="213" x2="50" y2="223" stroke="#ff8c42" stroke-width="1"/>
          <line x1="370" y1="213" x2="370" y2="223" stroke="#ff8c42" stroke-width="1"/>
          <text x="168" y="230" fill="#ff8c42" font-family="IBM Plex Mono,monospace" font-size="11">R = 35.3 m</text>
        </svg>
        <div style="margin-top:12px;font-size:11px;color:var(--muted);line-height:1.8;">
          <span style="color:var(--orange)">&#9644; v&#8320;</span> = launch vector &nbsp;&nbsp;
          <span style="color:var(--cyan)">- - v&#8320;x</span> = horizontal component &nbsp;&nbsp;
          <span style="color:var(--green)">- - v&#8320;y</span> = vertical component &nbsp;&nbsp;
          <span style="color:var(--yellow)">&#9679;</span> peak = vy is zero
        </div>
      </div>

      <div class="formula-block" style="--accent-color:var(--orange)">
        v&#8320;&#x2093; = v&#8320; cos&theta; &nbsp;&nbsp;&nbsp; v&#8320;&#x1D67; = v&#8320; sin&theta;<br><br>
        Horizontal: &nbsp; x = v&#8320;&#x2093; &times; t<br>
        Vertical: &nbsp;&nbsp;&nbsp; y = v&#8320;&#x1D67;t &minus; &frac12;gt&sup2; &nbsp;&nbsp;&nbsp; v&#x1D67; = v&#8320;&#x1D67; &minus; gt<br><br>
        Time to peak: &nbsp; t&#8336;&#8346; = v&#8320;&#x1D67; / g<br>
        Max height: &nbsp;&nbsp; H = v&#8320;&#x1D67;&sup2; / (2g)<br>
        Total flight: &nbsp; T = 2v&#8320;&#x1D67; / g<br>
        Range: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; R = v&#8320;&#x2093; &times; T = v&#8320;&sup2; sin2&theta; / g
      </div>
      <div class="example-block" style="background:rgba(255,140,66,0.06);border-color:rgba(255,140,66,0.2)">
        <div class="ex-label" style="color:var(--orange)">Example &mdash; v&#8320; = 20 m/s at &theta; = 30°</div>
        <p>
          v&#8320;&#x2093; = 20 cos30° = 17.32 m/s &nbsp;&nbsp; v&#8320;&#x1D67; = 20 sin30° = 10 m/s<br><br>
          H = 10&sup2; / (2 &times; 9.8) = 100/19.6 &approx; <strong>5.1 m</strong><br>
          T = 2 &times; 10 / 9.8 &approx; <strong>2.04 s</strong><br>
          R = 17.32 &times; 2.04 &approx; <strong>35.3 m</strong>
        </p>
      </div>

      <h3 class="section-title">Special Cases</h3>
      <div class="equiv-group">
        <div class="equiv-list">
          <div class="equiv-row"><span class="eq-name">At the peak</span><span class="eq-formula">v&#x1D67; = 0 &nbsp;|&nbsp; only v&#x2093; = v&#8320;cos&theta; remains &mdash; slowest point</span></div>
          <div class="equiv-row"><span class="eq-name">Max range</span><span class="eq-formula">&theta; = 45° gives the greatest horizontal distance for any speed</span></div>
          <div class="equiv-row"><span class="eq-name">Complementary angles</span><span class="eq-formula">30° and 60° give the same range but different heights &amp; times</span></div>
          <div class="equiv-row"><span class="eq-name">Horizontal launch</span><span class="eq-formula">Special case of angled launch with &theta; = 0° &rarr; v&#8320;&#x2093; = v&#8320;, v&#8320;&#x1D67; = 0</span></div>
        </div>
      </div>
    </div>`
};

// ════════════════════════════════════════
//  NAVIGATION LOGIC
// ════════════════════════════════════════

function init() {
  const container = document.getElementById('topic-panels');
  container.innerHTML = Object.values(topicPanels).join('');
}

function goHome() {
  closeTopic();
  switchMain('topics', document.querySelector('.main-tab'));
}

function switchMain(tab, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.main-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('view-' + tab).classList.add('active');
  if (btn) btn.classList.add('active');
  closeTopic();
}

function openTopic(id) {
  document.getElementById('topics-home').style.display = 'none';
  document.querySelectorAll('.topic-detail').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('topic-' + id);
  if (panel) panel.classList.add('active');
  window.scrollTo(0, 0);
}

function closeTopic() {
  document.querySelectorAll('.topic-detail').forEach(p => p.classList.remove('active'));
  const home = document.getElementById('topics-home');
  if (home) home.style.display = '';
  window.scrollTo(0, 0);
}

init();