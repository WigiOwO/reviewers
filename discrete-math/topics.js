// ════════════════════════════════════════
//  TOPIC CONTENT
// ════════════════════════════════════════
const topicPanels = {

  operators: `
    <div id="topic-operators" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">&#8743;</span>
        <div>
          <div class="detail-num">TOPIC 01</div>
          <h2 class="detail-title" style="color:var(--cyan)">Logical Operators</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--cyan)">Definition</div>
        <p><strong>Logical operators</strong> (also called connectives) are symbols that connect or modify propositions to build compound statements. They are the fundamental building blocks of all logic &mdash; every circuit, every conditional in code, every proof starts here.</p>
      </div>
      <h3 class="section-title first">The 6 Operators</h3>
      <div class="op-grid">
        <div class="op-card">
          <span class="op-symbol" style="color:var(--pink)">&#172;</span>
          <div class="op-name">Negation &mdash; NOT</div>
          <div class="op-desc">Flips the truth value. If p is true, &not;p is false. Simple inversion.</div>
          <span class="op-tag" style="background:rgba(255,77,141,0.12);color:var(--pink)">"NOT p"</span>
          <div class="formula-block" style="--accent-color:var(--pink)">&#172;T = F &nbsp;|&nbsp; &#172;F = T</div>
          <div class="example-block" style="background:rgba(255,77,141,0.06);border-color:rgba(255,77,141,0.2)">
            <div class="ex-label" style="color:var(--pink)">Example</div>
            <p>p = "It is raining."<br>&not;p = "It is <strong>not</strong> raining."</p>
          </div>
        </div>
        <div class="op-card">
          <span class="op-symbol" style="color:var(--cyan)">&#8743;</span>
          <div class="op-name">Conjunction &mdash; AND</div>
          <div class="op-desc">True ONLY when BOTH inputs are true. One false = whole thing false.</div>
          <span class="op-tag" style="background:rgba(0,212,255,0.12);color:var(--cyan)">"p AND q"</span>
          <div class="formula-block">T &#8743; T = T &nbsp;|&nbsp; T &#8743; F = F</div>
          <div class="example-block" style="background:rgba(0,212,255,0.06);border-color:rgba(0,212,255,0.2)">
            <div class="ex-label" style="color:var(--cyan)">Example</div>
            <p>p = "I studied." &nbsp; q = "I slept."<br>p &#8743; q = True only if BOTH happened.</p>
          </div>
        </div>
        <div class="op-card">
          <span class="op-symbol" style="color:var(--green)">&#8744;</span>
          <div class="op-name">Disjunction &mdash; OR</div>
          <div class="op-desc">True when AT LEAST ONE is true. Inclusive OR &mdash; both true is still true.</div>
          <span class="op-tag" style="background:rgba(77,255,158,0.12);color:var(--green)">"p OR q"</span>
          <div class="formula-block" style="--accent-color:var(--green)">F &#8744; F = F &nbsp;|&nbsp; T &#8744; F = T</div>
          <div class="example-block" style="background:rgba(77,255,158,0.06);border-color:rgba(77,255,158,0.2)">
            <div class="ex-label" style="color:var(--green)">Example</div>
            <p>p = "Rice." &nbsp; q = "Bread."<br>p &#8744; q = "Rice or bread (or both)."</p>
          </div>
        </div>
        <div class="op-card">
          <span class="op-symbol" style="color:var(--yellow)">&#8853;</span>
          <div class="op-name">Exclusive OR &mdash; XOR</div>
          <div class="op-desc">True when exactly ONE is true. Both true = false. Heavy in circuits and crypto.</div>
          <span class="op-tag" style="background:rgba(245,200,66,0.12);color:var(--yellow)">"p XOR q"</span>
          <div class="formula-block" style="--accent-color:var(--yellow)">T &#8853; T = F &nbsp;|&nbsp; T &#8853; F = T</div>
          <div class="example-block" style="background:rgba(245,200,66,0.06);border-color:rgba(245,200,66,0.2)">
            <div class="ex-label" style="color:var(--yellow)">Example</div>
            <p>Door opens in XOR out &mdash; can only do one, never both.</p>
          </div>
        </div>
        <div class="op-card">
          <span class="op-symbol" style="color:var(--purple)">&#8594;</span>
          <div class="op-name">Implication &mdash; IF-THEN</div>
          <div class="op-desc">False ONLY when p is true and q is false. A false premise makes it vacuously true.</div>
          <span class="op-tag" style="background:rgba(167,139,250,0.12);color:var(--purple)">"if p then q"</span>
          <div class="formula-block" style="--accent-color:var(--purple)">F &#8594; anything = T<br>T &#8594; F = F</div>
          <div class="example-block" style="background:rgba(167,139,250,0.06);border-color:rgba(167,139,250,0.2)">
            <div class="ex-label" style="color:var(--purple)">Example</div>
            <p>p = "I pass." &nbsp; q = "I celebrate."<br>Only false if I pass but DON'T celebrate.</p>
          </div>
        </div>
        <div class="op-card">
          <span class="op-symbol" style="color:var(--orange)">&#8596;</span>
          <div class="op-name">Biconditional &mdash; IFF</div>
          <div class="op-desc">True when BOTH have the same truth value. Both true OR both false = true.</div>
          <span class="op-tag" style="background:rgba(255,140,66,0.12);color:var(--orange)">"p if and only if q"</span>
          <div class="formula-block" style="--accent-color:var(--orange)">T &#8596; T = T &nbsp;|&nbsp; T &#8596; F = F</div>
          <div class="example-block" style="background:rgba(255,140,66,0.06);border-color:rgba(255,140,66,0.2)">
            <div class="ex-label" style="color:var(--orange)">Example</div>
            <p>True if both study+pass, or both not-study+not-pass.</p>
          </div>
        </div>
      </div>
      <h3 class="section-title">Operator Precedence</h3>
      <div class="def-block"><p>Evaluate in this order when no parentheses are given (like PEMDAS):</p></div>
      <div class="prec-row"><span class="prec-rank">1st (highest)</span><span class="prec-sym" style="color:var(--pink)">&#172;</span><span class="prec-name">Negation</span></div>
      <div class="prec-row"><span class="prec-rank">2nd</span><span class="prec-sym" style="color:var(--cyan)">&#8743;</span><span class="prec-name">Conjunction (AND)</span></div>
      <div class="prec-row"><span class="prec-rank">3rd</span><span class="prec-sym" style="color:var(--green)">&#8744;</span><span class="prec-name">Disjunction (OR)</span></div>
      <div class="prec-row"><span class="prec-rank">4th</span><span class="prec-sym" style="color:var(--purple)">&#8594;</span><span class="prec-name">Implication</span></div>
      <div class="prec-row"><span class="prec-rank">5th (lowest)</span><span class="prec-sym" style="color:var(--orange)">&#8596;</span><span class="prec-name">Biconditional</span></div>
      <div class="formula-block" style="margin-top:16px;">&#172; &gt; &#8743; &gt; &#8744; &gt; &#8594; &gt; &#8596;</div>
    </div>`,

  equivalences: `
    <div id="topic-equivalences" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">&#8801;</span>
        <div>
          <div class="detail-num">TOPIC 02</div>
          <h2 class="detail-title" style="color:var(--pink)">Logical Equivalences</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Definition</div>
        <p>Two propositions are <strong>logically equivalent</strong> (p &#8801; q) if they have the exact same truth value in every possible case. Equivalences let you simplify and transform logical expressions without changing their meaning.</p>
      </div>
      <div class="example-block" style="background:rgba(255,77,141,0.06);border-color:rgba(255,77,141,0.2);margin-bottom:24px;">
        <div class="ex-label" style="color:var(--pink)">Key Symbol</div>
        <p>p &#8801; q &mdash; "p and q are always equal in truth value."<br>Different from &#8596; (biconditional is a connective; &#8801; is a <strong>relation</strong> between formulas).</p>
      </div>
      <div class="equiv-group"><div class="equiv-group-title">Identity Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">AND Identity</span><span class="eq-formula">p &#8743; T &#8801; p</span></div>
        <div class="equiv-row"><span class="eq-name">OR Identity</span><span class="eq-formula">p &#8744; F &#8801; p</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Domination Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">OR Domination</span><span class="eq-formula">p &#8744; T &#8801; T</span></div>
        <div class="equiv-row"><span class="eq-name">AND Domination</span><span class="eq-formula">p &#8743; F &#8801; F</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Idempotent Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">OR Idempotent</span><span class="eq-formula">p &#8744; p &#8801; p</span></div>
        <div class="equiv-row"><span class="eq-name">AND Idempotent</span><span class="eq-formula">p &#8743; p &#8801; p</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Double Negation</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">Double Negation</span><span class="eq-formula">&#172;(&#172;p) &#8801; p</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">De Morgan's Laws &#9733;</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">De Morgan 1</span><span class="eq-formula">&#172;(p &#8743; q) &#8801; &#172;p &#8744; &#172;q</span></div>
        <div class="equiv-row"><span class="eq-name">De Morgan 2</span><span class="eq-formula">&#172;(p &#8744; q) &#8801; &#172;p &#8743; &#172;q</span></div>
      </div></div>
      <div class="example-block" style="background:rgba(255,77,141,0.06);border-color:rgba(255,77,141,0.2);margin-bottom:24px;">
        <div class="ex-label" style="color:var(--pink)">De Morgan's Example</div>
        <p>"NOT (hungry AND tired)" &#8801; "NOT hungry OR NOT tired"<br>&#172;(H &#8743; T) &#8801; &#172;H &#8744; &#172;T</p>
      </div>
      <div class="equiv-group"><div class="equiv-group-title">Commutative Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">OR Comm.</span><span class="eq-formula">p &#8744; q &#8801; q &#8744; p</span></div>
        <div class="equiv-row"><span class="eq-name">AND Comm.</span><span class="eq-formula">p &#8743; q &#8801; q &#8743; p</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Associative Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">OR Assoc.</span><span class="eq-formula">(p &#8744; q) &#8744; r &#8801; p &#8744; (q &#8744; r)</span></div>
        <div class="equiv-row"><span class="eq-name">AND Assoc.</span><span class="eq-formula">(p &#8743; q) &#8743; r &#8801; p &#8743; (q &#8743; r)</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Distributive Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">AND over OR</span><span class="eq-formula">p &#8743; (q &#8744; r) &#8801; (p &#8743; q) &#8744; (p &#8743; r)</span></div>
        <div class="equiv-row"><span class="eq-name">OR over AND</span><span class="eq-formula">p &#8744; (q &#8743; r) &#8801; (p &#8744; q) &#8743; (p &#8744; r)</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Absorption Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">OR Absorption</span><span class="eq-formula">p &#8744; (p &#8743; q) &#8801; p</span></div>
        <div class="equiv-row"><span class="eq-name">AND Absorption</span><span class="eq-formula">p &#8743; (p &#8744; q) &#8801; p</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Negation Laws</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">OR Negation</span><span class="eq-formula">p &#8744; &#172;p &#8801; T &nbsp;(Tautology)</span></div>
        <div class="equiv-row"><span class="eq-name">AND Negation</span><span class="eq-formula">p &#8743; &#172;p &#8801; F &nbsp;(Contradiction)</span></div>
      </div></div>
      <div class="equiv-group"><div class="equiv-group-title">Implication Equivalences</div><div class="equiv-list">
        <div class="equiv-row"><span class="eq-name">Implication</span><span class="eq-formula">p &#8594; q &#8801; &#172;p &#8744; q</span></div>
        <div class="equiv-row"><span class="eq-name">Contrapositive</span><span class="eq-formula">p &#8594; q &#8801; &#172;q &#8594; &#172;p</span></div>
        <div class="equiv-row"><span class="eq-name">Biconditional</span><span class="eq-formula">p &#8596; q &#8801; (p &#8594; q) &#8743; (q &#8594; p)</span></div>
      </div></div>
    </div>`,

  bitops: `
    <div id="topic-bitops" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">&#8853;</span>
        <div>
          <div class="detail-num">TOPIC 03</div>
          <h2 class="detail-title" style="color:var(--green)">Logic &amp; Bit Operations</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--green)">Definition</div>
        <p>Bit operations apply logical operators directly to binary digits: <strong>0 = False, 1 = True</strong>. Computers use these for everything &mdash; memory, networking, encryption, graphics. Every value in RAM is bits; operating on them is just logic.</p>
      </div>
      <h3 class="section-title first">The 4 Bitwise Operators</h3>
      <div class="bit-grid">
        <div class="bit-card">
          <div class="bit-op" style="color:var(--yellow)">AND &nbsp;( &amp; )</div>
          <div class="bit-desc">Both bits must be 1. Used to <strong>mask</strong> bits &mdash; isolate specific positions.</div>
          <div class="formula-block" style="--accent-color:var(--yellow)">  1010<br>&amp; 1100<br>&#8212;&#8212;<br>  1000</div>
        </div>
        <div class="bit-card">
          <div class="bit-op" style="color:var(--cyan)">OR &nbsp;( | )</div>
          <div class="bit-desc">At least one bit must be 1. Used to <strong>set</strong> specific bits.</div>
          <div class="formula-block">  1010<br>| 1100<br>&#8212;&#8212;<br>  1110</div>
        </div>
        <div class="bit-card">
          <div class="bit-op" style="color:var(--green)">XOR &nbsp;( ^ )</div>
          <div class="bit-desc">Exactly one bit is 1. Used to <strong>toggle</strong> bits and simple encryption.</div>
          <div class="formula-block" style="--accent-color:var(--green)">  1010<br>^ 1100<br>&#8212;&#8212;<br>  0110</div>
        </div>
        <div class="bit-card">
          <div class="bit-op" style="color:var(--purple)">NOT &nbsp;( ~ )</div>
          <div class="bit-desc">Flips every bit. 0&#8594;1, 1&#8594;0. Also called bitwise complement.</div>
          <div class="formula-block" style="--accent-color:var(--purple)">~ 1010<br>&#8212;&#8212;<br>  0101</div>
        </div>
      </div>
      <h3 class="section-title">Bit Strings</h3>
      <div class="def-block">
        <p>A <strong>bit string</strong> is a sequence of bits. Operations are applied <strong>bitwise</strong> &mdash; position by position, left to right.</p>
      </div>
      <div class="example-block" style="background:rgba(77,255,158,0.06);border-color:rgba(77,255,158,0.2);">
        <div class="ex-label" style="color:var(--green)">Bit String Example</div>
        <p>A = 0110 1010 &nbsp; B = 1011 0101<br><br>
        A AND B = 0010 0000<br>
        A OR B &nbsp;= 1111 1111<br>
        A XOR B = 1101 1111<br>
        NOT A &nbsp;&nbsp;= 1001 0101</p>
      </div>
      <h3 class="section-title">Real-World Use</h3>
      <div class="def-block">
        <p style="margin-bottom:8px;"><strong>Masking:</strong> n &amp; 0xFF extracts the lowest 8 bits &mdash; used in networking and image processing.</p>
        <p style="margin-bottom:8px;"><strong>Toggle a flag:</strong> n ^ (1 &lt;&lt; k) flips the k-th bit without touching others.</p>
        <p style="margin-bottom:8px;"><strong>Check if even:</strong> n &amp; 1 == 0 (if last bit is 0, it's even).</p>
        <p><strong>Logic gates:</strong> AND gate = &#8743; &nbsp;|&nbsp; OR gate = &#8744; &nbsp;|&nbsp; NOT gate = &#172; &nbsp;|&nbsp; XOR gate = &#8853;</p>
      </div>
    </div>`,

  proplogic: `
    <div id="topic-proplogic" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">&#8594;</span>
        <div>
          <div class="detail-num">TOPIC 04</div>
          <h2 class="detail-title" style="color:var(--yellow)">Propositional Logic</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">Definition</div>
        <p>Propositional logic is a formal system for reasoning using <strong>propositions</strong> &mdash; declarative statements that are either true or false, never both, never neither. It's the foundation of all mathematical proofs, circuit design, and conditional logic in programming.</p>
      </div>
      <h3 class="section-title first">Propositions</h3>
      <div class="two-col">
        <div class="example-block" style="background:rgba(77,255,158,0.06);border-color:rgba(77,255,158,0.2);">
          <div class="ex-label" style="color:var(--green)">Valid Propositions &#10003;</div>
          <p>"Manila is in the Philippines." &#8594; T<br>"2 + 2 = 5" &#8594; F<br>"The sky is green." &#8594; F</p>
        </div>
        <div class="example-block" style="background:rgba(255,77,141,0.06);border-color:rgba(255,77,141,0.2);">
          <div class="ex-label" style="color:var(--pink)">Not Propositions &#10007;</div>
          <p>"What time is it?" (question)<br>"Close the door." (command)<br>"This statement is false." (paradox)</p>
        </div>
      </div>
      <h3 class="section-title">Types of Compound Propositions</h3>
      <div class="bit-grid">
        <div class="bit-card">
          <div class="bit-op" style="color:var(--green)">Tautology</div>
          <div class="bit-desc">Always TRUE regardless of variable values.</div>
          <div class="formula-block" style="--accent-color:var(--green)">p &#8744; &#172;p &#8801; T</div>
        </div>
        <div class="bit-card">
          <div class="bit-op" style="color:var(--pink)">Contradiction</div>
          <div class="bit-desc">Always FALSE regardless of variable values.</div>
          <div class="formula-block" style="--accent-color:var(--pink)">p &#8743; &#172;p &#8801; F</div>
        </div>
        <div class="bit-card">
          <div class="bit-op" style="color:var(--yellow)">Contingency</div>
          <div class="bit-desc">Sometimes true, sometimes false &mdash; depends on the values.</div>
          <div class="formula-block" style="--accent-color:var(--yellow)">p &#8743; q (depends)</div>
        </div>
      </div>
      <h3 class="section-title">Implication Variants &#9733;</h3>
      <div class="def-block"><p style="margin-bottom:14px;">Given: <strong>p &#8594; q</strong> ("If p, then q")</p></div>
      <div class="equiv-list" style="margin-bottom:16px;">
        <div class="equiv-row"><span class="eq-name">Original</span><span class="eq-formula">p &#8594; q</span></div>
        <div class="equiv-row"><span class="eq-name">Converse</span><span class="eq-formula">q &#8594; p &nbsp;<span style="color:var(--muted);font-size:11px;">(swap)</span></span></div>
        <div class="equiv-row"><span class="eq-name">Inverse</span><span class="eq-formula">&#172;p &#8594; &#172;q &nbsp;<span style="color:var(--muted);font-size:11px;">(negate both)</span></span></div>
        <div class="equiv-row"><span class="eq-name">Contrapositive</span><span class="eq-formula">&#172;q &#8594; &#172;p &nbsp;<span style="color:var(--muted);font-size:11px;">(swap + negate)</span></span></div>
      </div>
      <div class="example-block" style="background:rgba(245,200,66,0.06);border-color:rgba(245,200,66,0.2);margin-bottom:16px;">
        <div class="ex-label" style="color:var(--yellow)">Example</div>
        <p>Original: "If I study, I pass."<br>Converse: "If I pass, I studied."<br>Inverse: "If I don't study, I don't pass."<br>Contrapositive: "If I don't pass, I didn't study."<br><br>
        <strong>Key:</strong> Original &#8801; Contrapositive &nbsp;|&nbsp; Converse &#8801; Inverse</p>
      </div>
      <h3 class="section-title">Arguments &amp; Validity</h3>
      <div class="def-block">
        <p>An <strong>argument</strong> is premises &#8594; conclusion. It's <strong>valid</strong> if the conclusion MUST be true whenever all premises are true.</p>
      </div>
      <div class="formula-block" style="--accent-color:var(--yellow)">Modus Ponens: &nbsp; p, &nbsp; p &#8594; q &nbsp; &#8756; q<br>Modus Tollens: &nbsp; &#172;q, &nbsp; p &#8594; q &nbsp; &#8756; &#172;p</div>
      <div class="example-block" style="background:rgba(245,200,66,0.06);border-color:rgba(245,200,66,0.2);">
        <div class="ex-label" style="color:var(--yellow)">Modus Ponens Example</div>
        <p>P1: "It is raining." (p = T)<br>P2: "If it rains, I stay home." (p &#8594; q)<br>&#8756; "I stay home." (q) &#10003;</p>
      </div>
    </div>`,

  truthtable: `
    <div id="topic-truthtable" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">T/F</span>
        <div>
          <div class="detail-num">TOPIC 05</div>
          <h2 class="detail-title" style="color:var(--purple)">Truth Tables</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--purple)">Definition</div>
        <p>A truth table is a systematic list of ALL possible combinations of truth values for every variable in a proposition, showing the resulting truth value of the whole expression. With <strong>n variables &#8594; 2&#8319; rows</strong>.</p>
      </div>
      <h3 class="section-title first">All Basic Tables</h3>
      <div class="two-col">
        <div>
          <p style="font-size:11px;color:var(--purple);letter-spacing:0.1em;margin-bottom:8px;">&#172;p (NOT)</p>
          <div class="tt-wrap"><table>
            <thead><tr><th>p</th><th>&#172;p</th></tr></thead>
            <tbody><tr><td class="tv">T</td><td class="rf">F</td></tr><tr><td class="fv">F</td><td class="rv">T</td></tr></tbody>
          </table></div>
        </div>
        <div>
          <p style="font-size:11px;color:var(--purple);letter-spacing:0.1em;margin-bottom:8px;">p &#8743; q (AND)</p>
          <div class="tt-wrap"><table>
            <thead><tr><th>p</th><th>q</th><th>p &#8743; q</th></tr></thead>
            <tbody>
              <tr><td class="tv">T</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="tv">T</td><td class="fv">F</td><td class="rf">F</td></tr>
              <tr><td class="fv">F</td><td class="tv">T</td><td class="rf">F</td></tr>
              <tr><td class="fv">F</td><td class="fv">F</td><td class="rf">F</td></tr>
            </tbody>
          </table></div>
        </div>
        <div>
          <p style="font-size:11px;color:var(--purple);letter-spacing:0.1em;margin-bottom:8px;">p &#8744; q (OR)</p>
          <div class="tt-wrap"><table>
            <thead><tr><th>p</th><th>q</th><th>p &#8744; q</th></tr></thead>
            <tbody>
              <tr><td class="tv">T</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="tv">T</td><td class="fv">F</td><td class="rv">T</td></tr>
              <tr><td class="fv">F</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="fv">F</td><td class="fv">F</td><td class="rf">F</td></tr>
            </tbody>
          </table></div>
        </div>
        <div>
          <p style="font-size:11px;color:var(--purple);letter-spacing:0.1em;margin-bottom:8px;">p &#8853; q (XOR)</p>
          <div class="tt-wrap"><table>
            <thead><tr><th>p</th><th>q</th><th>p &#8853; q</th></tr></thead>
            <tbody>
              <tr><td class="tv">T</td><td class="tv">T</td><td class="rf">F</td></tr>
              <tr><td class="tv">T</td><td class="fv">F</td><td class="rv">T</td></tr>
              <tr><td class="fv">F</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="fv">F</td><td class="fv">F</td><td class="rf">F</td></tr>
            </tbody>
          </table></div>
        </div>
        <div>
          <p style="font-size:11px;color:var(--purple);letter-spacing:0.1em;margin-bottom:8px;">p &#8594; q (Implication)</p>
          <div class="tt-wrap"><table>
            <thead><tr><th>p</th><th>q</th><th>p &#8594; q</th></tr></thead>
            <tbody>
              <tr><td class="tv">T</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="tv">T</td><td class="fv">F</td><td class="rf">F</td></tr>
              <tr><td class="fv">F</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="fv">F</td><td class="fv">F</td><td class="rv">T</td></tr>
            </tbody>
          </table></div>
        </div>
        <div>
          <p style="font-size:11px;color:var(--purple);letter-spacing:0.1em;margin-bottom:8px;">p &#8596; q (Biconditional)</p>
          <div class="tt-wrap"><table>
            <thead><tr><th>p</th><th>q</th><th>p &#8596; q</th></tr></thead>
            <tbody>
              <tr><td class="tv">T</td><td class="tv">T</td><td class="rv">T</td></tr>
              <tr><td class="tv">T</td><td class="fv">F</td><td class="rf">F</td></tr>
              <tr><td class="fv">F</td><td class="tv">T</td><td class="rf">F</td></tr>
              <tr><td class="fv">F</td><td class="fv">F</td><td class="rv">T</td></tr>
            </tbody>
          </table></div>
        </div>
      </div>
      <h3 class="section-title">3-Variable Example: (p &#8743; q) &#8594; &#172;r</h3>
      <div class="def-block">
        <p style="margin-bottom:8px;"><strong>Step 1:</strong> List all combos (2&#179; = 8 rows)</p>
        <p style="margin-bottom:8px;"><strong>Step 2:</strong> Compute sub-expressions: p &#8743; q, then &#172;r</p>
        <p><strong>Step 3:</strong> Combine: (p &#8743; q) &#8594; &#172;r</p>
      </div>
      <div class="tt-wrap"><table>
        <thead><tr><th>p</th><th>q</th><th>r</th><th>p &#8743; q</th><th>&#172;r</th><th>(p &#8743; q) &#8594; &#172;r</th></tr></thead>
        <tbody>
          <tr><td class="tv">T</td><td class="tv">T</td><td class="tv">T</td><td class="tv">T</td><td class="fv">F</td><td class="rf">F</td></tr>
          <tr><td class="tv">T</td><td class="tv">T</td><td class="fv">F</td><td class="tv">T</td><td class="tv">T</td><td class="rv">T</td></tr>
          <tr><td class="tv">T</td><td class="fv">F</td><td class="tv">T</td><td class="fv">F</td><td class="fv">F</td><td class="rv">T</td></tr>
          <tr><td class="tv">T</td><td class="fv">F</td><td class="fv">F</td><td class="fv">F</td><td class="tv">T</td><td class="rv">T</td></tr>
          <tr><td class="fv">F</td><td class="tv">T</td><td class="tv">T</td><td class="fv">F</td><td class="fv">F</td><td class="rv">T</td></tr>
          <tr><td class="fv">F</td><td class="tv">T</td><td class="fv">F</td><td class="fv">F</td><td class="tv">T</td><td class="rv">T</td></tr>
          <tr><td class="fv">F</td><td class="fv">F</td><td class="tv">T</td><td class="fv">F</td><td class="fv">F</td><td class="rv">T</td></tr>
          <tr><td class="fv">F</td><td class="fv">F</td><td class="fv">F</td><td class="fv">F</td><td class="tv">T</td><td class="rv">T</td></tr>
        </tbody>
      </table></div>
      <div class="def-block" style="margin-top:16px;">
        <div class="blk-label" style="color:var(--purple)">Exam Tips</div>
        <p style="margin-bottom:8px;">&#8226; n variables = <strong>2&#8319; rows</strong>. Always.</p>
        <p style="margin-bottom:8px;">&#8226; Fill pattern: last column alternates T/F every 1 row; second-to-last every 2 rows; and so on.</p>
        <p style="margin-bottom:8px;">&#8226; Implication is the trickiest &mdash; only False when hypothesis is T and conclusion is F.</p>
        <p>&#8226; To prove equivalence: build both columns &mdash; if identical, they're equivalent.</p>
      </div>
    </div>`
};

// Inject all panels on load
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('topic-panels');
  for (const key in topicPanels) {
    container.innerHTML += topicPanels[key];
  }
});

// ════════════════════════════════════════
//  NAVIGATION
// ════════════════════════════════════════
function goHome() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('view-topics').classList.add('active');
  document.querySelector('.main-tab').classList.add('active');
  document.getElementById('topics-home').style.display = 'block';
  document.querySelectorAll('.topic-detail').forEach(d => d.classList.remove('active'));
  window.scrollTo(0, 0);
}

function switchMain(tab, btn) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('view-' + tab).classList.add('active');
  btn.classList.add('active');

  if (tab === 'topics') {
    document.getElementById('topics-home').style.display = 'block';
    document.querySelectorAll('.topic-detail').forEach(d => d.classList.remove('active'));
  }

  if (tab === 'quiz') {
    document.getElementById('quiz-home').style.display = 'block';
    document.getElementById('quiz-detail').style.display = 'none';
  }

  window.scrollTo(0, 0);
}

function openTopic(id) {
  document.getElementById('topics-home').style.display = 'none';
  document.querySelectorAll('.topic-detail').forEach(d => d.classList.remove('active'));
  document.getElementById('topic-' + id).classList.add('active');
  window.scrollTo(0, 0);
}

function closeTopic() {
  document.querySelectorAll('.topic-detail').forEach(d => d.classList.remove('active'));
  document.getElementById('topics-home').style.display = 'block';
  window.scrollTo(0, 0);
}