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
        <p><strong>Vector sum ≠ Algebraic sum.</strong> Two forces of 3 N and 4 N don't always give 7 N. Depending on the angle, the result can be anywhere from 1 N (opposite) to 7 N (same direction).</p>
      </div>

      <h3 class="section-title">Methods of Vector Addition</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">A. Parallelogram Method</div>
          <div class="op-desc">Graphical. Used for exactly <strong>2 vectors</strong>. Draw both from same point, complete the parallelogram — the diagonal is the resultant. Limitation: only 2 vectors at a time; relies on drawing accuracy.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">B. Polygon / Head-to-Tail</div>
          <div class="op-desc">Graphical. Works for <strong>2 or more vectors</strong>. Draw each vector tip-to-tail. The resultant goes from the tail of the first to the tip of the last. Order doesn't affect the result.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">C. Component Method</div>
          <div class="op-desc">Analytical. Works for any number of vectors. <strong>Most accurate</strong> — no drawing needed. Break each vector into x and y components, sum them, use Pythagorean theorem.</div>
        </div>
      </div>

      <h3 class="section-title">Component Method Formulas</h3>
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
          <div class="op-desc">Velocity of one object as observed from another moving object.<br><br>Example: Two cars same direction, 60 km/h and 40 km/h. Relative velocity = 60 − 40 = 20 km/h.</div>
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
        <p>Both v = gt and h = ½gt² are directly derived from the five kinematic equations by setting v&#8321; = 0 and a = g. Free fall is just UAM applied to gravity.</p>
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
      <div class="formula-block" style="--accent-color:var(--orange)">
        v&#8320;&#x2093; = v&#8320; cos&theta; &nbsp;&nbsp;&nbsp; v&#8320;&#x1D67; = v&#8320; sin&theta;<br><br>
        Horizontal: &nbsp; x = v&#8320;&#x2093; &times; t<br>
        Vertical: &nbsp;&nbsp;&nbsp; y = v&#8320;&#x1D67;t &minus; &frac12;gt&sup2; &nbsp;&nbsp;&nbsp; v&#x1D67; = v&#8320;&#x1D67; &minus; gt<br><br>
        Time to peak: &nbsp; t&#x1D64F&#x1D64F; = v&#8320;&#x1D67; / g<br>
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
