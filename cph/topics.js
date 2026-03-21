// ════════════════════════════════════════
//  CPH101L TOPIC CONTENT
// ════════════════════════════════════════

const topicPanels = {

  intro: `
    <div id="topic-intro" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">🖥️</span>
        <div>
          <div class="detail-num">MODULE 01</div>
          <h2 class="detail-title" style="color:var(--cyan)">Introduction</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--cyan)">Definition</div>
        <p><strong>A Personal Computer (PC)</strong> is a general-purpose computing machine designed for individual use. It processes data through a combination of hardware components controlled by software. The PC did not emerge overnight — it evolved through decades of processor advancements and industry standardization.</p>
      </div>

      <h3 class="section-title first">PC Development Timeline (1972–1986)</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Year</th><th>PC / Event</th></tr></thead>
          <tbody>
            <tr><td>1972</td><td>8088 processor</td></tr>
            <tr><td>1973</td><td>Micral — one of the first microcomputers</td></tr>
            <tr><td>1974</td><td>8H</td></tr>
            <tr><td>1976</td><td>Apple I</td></tr>
            <tr><td>1977</td><td>Apple II</td></tr>
            <tr><td>1979</td><td>6800 processor</td></tr>
            <tr><td>1981</td><td>IBM's first PC — industry standard begins</td></tr>
            <tr><td>1983</td><td>Apple Lisa</td></tr>
            <tr><td>1984</td><td>Macintosh — GUI popularized</td></tr>
            <tr><td>1986</td><td>DeskPro 386</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">PC Development Timeline (1987–2008)</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Year</th><th>PC / Event</th></tr></thead>
          <tbody>
            <tr><td>1987</td><td>PS/2</td></tr>
            <tr><td>1988</td><td>EISA bus standard</td></tr>
            <tr><td>1989</td><td>486 processor</td></tr>
            <tr><td>1993</td><td>P5 (Pentium)</td></tr>
            <tr><td>1995</td><td>P6 architecture</td></tr>
            <tr><td>1997</td><td>Pentium II, AMD K6</td></tr>
            <tr><td>1999</td><td>Pentium III</td></tr>
            <tr><td>2000</td><td>1GHz processors — AMD Duron</td></tr>
            <tr><td>2001</td><td>Pentium 4</td></tr>
            <tr><td>2006</td><td>P6 &amp; NetBurst / Core Architecture</td></tr>
            <tr><td>2008</td><td>Penryn Microarchitecture</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">System Components</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">CPU / Microprocessor</div>
          <div class="op-desc">Central to all processing. Reads and writes data to/from storage, performs calculations, handles all data processing tasks. The brain of the PC.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">Motherboard</div>
          <div class="op-desc">Core of the system. Controls all devices. Every component connects to or through it.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Memory (RAM)</div>
          <div class="op-desc">Contains data the processor is currently using. Temporary — data is lost when power is cut.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Hard Disk Drive</div>
          <div class="op-desc">Secondary storage for large amounts of permanent data. Retains data without power.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--purple)">Video Card</div>
          <div class="op-desc">Controls the information displayed on the monitor. Handles graphics rendering independently of the CPU.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--orange)">Power Supply (PSU)</div>
          <div class="op-desc">Source of electrical power for every part of the PC. Converts AC from the wall outlet to DC. Designed to generate minimum heat.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Monitor</div>
          <div class="op-desc">A video display that shows information output from the computer.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">Port</div>
          <div class="op-desc">A physical connector that allows a cable from a peripheral device to be attached to the computer.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Case</div>
          <div class="op-desc">The frame that houses the system unit — all internal components live inside it.</div>
        </div>
      </div>

      <h3 class="section-title">PC Case Functions</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Housing</div>
          <div class="op-desc">Makes room for the PSU, expansion slots/bays, and I/O ports connected to the motherboard.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Ventilation</div>
          <div class="op-desc">The case should be well-ventilated and can be equipped with cooling fans to prevent overheating.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--orange)">EMF Elimination &amp; Grounding</div>
          <div class="op-desc">Keeps internal components from generating excessive electromagnetic fields. Also provides grounding — immunity to static electric discharges.</div>
        </div>
      </div>

      <h3 class="section-title">PC Case Form Factors</h3>
      <div class="def-block">
        <div class="blk-label" style="color:var(--cyan)">Definition</div>
        <p><strong>Form factor</strong> refers to the shape and general physical layout of a component.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Form Factor</th><th>Supported Boards</th><th>Max Fans</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td class="tv">ATX</td><td>ATX, mATX, ITX</td><td>7+ × 120mm</td><td>Most common full-size case</td></tr>
            <tr><td class="tv">micro-ATX</td><td>mATX, ITX</td><td>Up to 7 × 120mm</td><td>Mid-range builds</td></tr>
            <tr><td class="tv">extended-ATX</td><td>ATX, eATX, mATX, ITX</td><td>7+ × 120mm</td><td>Enthusiast / water-cooled workstations</td></tr>
            <tr><td class="tv">ITX</td><td>ITX only</td><td>Very limited</td><td>Smallest; very limited ventilation</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Obsolete Form Factors</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Form Factor</th><th>Details</th></tr></thead>
          <tbody>
            <tr><td class="tv">AT</td><td>1984 standard; round DIN plug hole at the back for old keyboards</td></tr>
            <tr><td class="tv">Baby-AT</td><td>Scaled-down version of AT</td></tr>
            <tr><td class="tv">LPX</td><td>Low Profile Extension — slim desktop cases</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,

  motherboard: `
    <div id="topic-motherboard" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">🔌</span>
        <div>
          <div class="detail-num">MODULE 02</div>
          <h2 class="detail-title" style="color:var(--pink)">The Motherboard</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Definition</div>
        <p>The <strong>motherboard</strong> is the main printed circuit board (PCB) that resides inside the PC. It is equipped with sockets where the processor, memory, plug-in cards, daughterboards, and peripheral devices are connected. It is the core of the system — every component either plugs directly into it or communicates through it.</p>
      </div>

      <h3 class="section-title first">Motherboard Form Factors</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Form Factor</th><th>Dimensions</th><th>Use Case</th></tr></thead>
          <tbody>
            <tr><td class="tv">ATX</td><td>12" × 6.7"–9.6"</td><td>Standard tower/desktop; most common since 1996; supports high-end systems</td></tr>
            <tr><td class="tv">Micro-ATX</td><td>9.6" × 9.6" or 9.6" × 9.1"</td><td>Mid-range; fits microATX or ATX chassis</td></tr>
            <tr><td class="tv">Mini-ITX</td><td>6.7" × 6.7" (17cm × 17cm)</td><td>Small form factor PCs; one expansion slot; home theater PCs</td></tr>
            <tr><td class="tv">Mini-DTX</td><td>9.6" × 8" (24.4cm × 20.3cm)</td><td>Developed by AMD in 2007; compact PCs; slightly larger than ITX</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">ATX Motherboard Advantages</h3>
      <div class="def-block">
        <p>The ATX specification was originally developed by <strong>Intel in 1995</strong> as an open, non-proprietary standard. Key improvements:</p>
      </div>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">Built-in I/O Panel</div>
          <div class="op-desc">Eliminated the need for cables running from the motherboard to the rear of the case.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Single Power Connector</div>
          <div class="op-desc">Easy to plug and cannot be installed incorrectly.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">CPU + Memory Placement</div>
          <div class="op-desc">Relocated next to the PSU — no interference with bus extension cards, improved cooling.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Shorter Drive Cables</div>
          <div class="op-desc">Internal I/O connectors for drives relocated near the drive bay — shorter, cleaner cable runs.</div>
        </div>
      </div>

      <h3 class="section-title">Obsolete Motherboard Form Factors</h3>
      <div class="def-block">
        <p>PC/XT &nbsp;|&nbsp; Full-size AT &nbsp;|&nbsp; Baby-AT &nbsp;|&nbsp; LPX</p>
      </div>

      <h3 class="section-title">Chipsets</h3>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Definition</div>
        <p>A <strong>chipset</strong> is a group of microchips on the motherboard that controls the flow of data and instructions to and from the CPU. It manages the memory cache, power management, external buses, and some peripherals. Think of it as the traffic controller of the motherboard.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Manufacturer</th><th>Modern Chipsets</th></tr></thead>
          <tbody>
            <tr><td>Intel</td><td class="tv">Z890, B860, H810</td></tr>
            <tr><td>AMD</td><td class="tv">X870, B850, A620</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Buses</h3>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Definition</div>
        <p>A <strong>bus</strong> is an electrical channel that transfers bits internally within the computer, allowing all devices to communicate with each other. A bus carries: electrical power, control signals, memory addresses, and data.</p>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">System Bus</div>
        <p>A local bus that works synchronously with the CPU and the system clock. Connected directly to the CPU.</p>
      </div>

      <div class="tt-wrap">
        <table>
          <thead><tr><th>Bus Type</th><th>Function</th></tr></thead>
          <tbody>
            <tr><td class="tv">Data Bus</td><td>Allows data to flow back and forth between devices</td></tr>
            <tr><td class="tv">Address Bus</td><td>Tells devices where data should go (memory addresses &amp; I/O locations)</td></tr>
            <tr><td class="tv">Control Bus</td><td>Coordinates activity between devices to prevent data collision</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">BIOS</h3>
      <div class="def-block">
        <div class="blk-label" style="color:var(--pink)">Definition</div>
        <p><strong>BIOS (Basic Input/Output System)</strong> is low-level software that controls system hardware. It acts as the link between the hardware and the operating system. Also referred to as device drivers.</p>
      </div>

      <h3 class="section-title">Three Sources of BIOS</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">Motherboard ROM</div>
          <div class="op-desc">Contains the initial software drivers to run the system. The primary BIOS source.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Adapter Card ROM</div>
          <div class="op-desc">Used for devices that must be active during boot time. Most commonly found on video cards.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Loaded into RAM from Disk</div>
          <div class="op-desc">Used for devices that do not need to be active during boot time.</div>
        </div>
      </div>

      <h3 class="section-title">Four Main Functions of BIOS</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Function</th><th>What It Does</th></tr></thead>
          <tbody>
            <tr><td class="tv">POST</td><td>Power-On Self Test. Tests CPU, memory, keyboard, etc. at startup.</td></tr>
            <tr><td class="tv">Setup</td><td>Accessed during POST. Configures date/time, passwords, power management, boot sequence.</td></tr>
            <tr><td class="tv">Bootstrap Loader</td><td>Reads disk drives and looks for the master boot record to load the OS.</td></tr>
            <tr><td class="tv">BIOS (Drivers)</td><td>Collection of drivers serving as interface between hardware and OS after boot-up.</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Four Types of ROM Chips</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Type</th><th>Full Name</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td class="tv">ROM</td><td>Read-Only Memory</td><td>Written once at manufacture; cannot be changed</td></tr>
            <tr><td class="tv">PROM</td><td>Programmable ROM</td><td>Can be written once by the user</td></tr>
            <tr><td class="tv">EPROM</td><td>Erasable PROM</td><td>Erased using UV light</td></tr>
            <tr><td class="tv">EEPROM</td><td>Electrically Erasable PROM</td><td>Erased electrically — used in modern BIOS chips</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">BIOS Setup Keys &amp; Menu Screens</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Manufacturer</th><th>Key</th></tr></thead>
          <tbody>
            <tr><td>AMI BIOS</td><td class="tv">Delete</td></tr>
            <tr><td>Phoenix BIOS (FirstBIOS Pro)</td><td class="tv">F2</td></tr>
            <tr><td>Award BIOS (FirstBIOS)</td><td class="tv">Delete or Ctrl+Alt+Esc</td></tr>
            <tr><td>Microaid Research (MR) BIOS</td><td class="tv">Esc</td></tr>
          </tbody>
        </table>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Menu</th><th>Function</th></tr></thead>
          <tbody>
            <tr><td class="tv">Maintenance</td><td>Sets processor speed; clears passwords. Configure mode only (via jumper).</td></tr>
            <tr><td class="tv">Main</td><td>Allocates resources for hardware components.</td></tr>
            <tr><td class="tv">Advanced</td><td>Specifies advanced chipset features.</td></tr>
            <tr><td class="tv">Security</td><td>Sets passwords and security features.</td></tr>
            <tr><td class="tv">Power</td><td>Configures power management features.</td></tr>
            <tr><td class="tv">Boot</td><td>Sets boot options and power supply controls.</td></tr>
            <tr><td class="tv">Exit</td><td>Saves or discards changes.</td></tr>
          </tbody>
        </table>
      </div>
    </div>`,

  microprocessor: `
    <div id="topic-microprocessor" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">⚙️</span>
        <div>
          <div class="detail-num">MODULE 03</div>
          <h2 class="detail-title" style="color:var(--orange)">The Microprocessor</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--orange)">Definition</div>
        <p>The <strong>CPU (Central Processing Unit)</strong> is responsible for all processing tasks. It reads and writes data and instructions to and from storage devices, performs calculations, reads input devices, and writes to output devices.</p>
      </div>

      <h3 class="section-title first">Three Basic Components of a Microprocessor</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--orange)">Control Unit (CU)</div>
          <div class="op-desc">Manages all activities inside the CPU. Directs the entire computer system to carry out program instructions. Communicates with both the ALU and MU.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Arithmetic and Logic Unit (ALU)</div>
          <div class="op-desc">Executes all arithmetic operations (add, subtract) and logical operations (comparisons, AND/OR/NOT).</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Memory Unit (MU)</div>
          <div class="op-desc">Manages data and instruction transfer between the CPU and main memory (RAM).</div>
        </div>
      </div>

      <h3 class="section-title">CPU Characteristics</h3>

      <div class="def-block">
        <div class="blk-label" style="color:var(--orange)">Processor Speed</div>
        <p>Speed at which the CPU operates internally. Measured in <strong>GHz (Gigahertz)</strong> — billions of cycles per second. Driven by an internal clock. Average speed for a new CPU today is around 3GHz.</p>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--orange)">Bus Speed</div>
        <p>Frequency at which data moves on a bus. The system clock synchronizes data transfer into and out of the CPU. One signal path carries one bit at a time.</p>
      </div>

      <div class="tt-wrap">
        <table>
          <thead><tr><th>Era</th><th>Common System Bus Speeds</th></tr></thead>
          <tbody>
            <tr><td>Modern</td><td class="tv">555, 667, 800, 1066, 1333, 1600 MHz</td></tr>
            <tr><td>Older CPUs</td><td class="tv">100, 133, 200 MHz</td></tr>
          </tbody>
        </table>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--orange)">Word Size vs Data Path Size</div>
        <p><strong>Word size</strong> — largest number of bits the CPU can process in one operation. Ranges from 16-bit to 64-bit.<br><br>
        <strong>Data path size</strong> — largest number of bits transported to/from the CPU on the system bus. Some CPUs can receive more bits than they can process at once. Word size ≠ data path size necessarily.</p>
      </div>

      <h3 class="section-title">Instruction Sets</h3>
      <div class="def-block">
        <p>The set of commands permanently built into the CPU chip for performing fundamental operations like comparing or adding two numbers.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Type</th><th>Full Name</th><th>Instructions</th><th>Speed per Instruction</th></tr></thead>
          <tbody>
            <tr><td class="tv">CISC</td><td>Complex Instruction Set Computers</td><td>Larger, more complex</td><td>Slower</td></tr>
            <tr><td class="tv">RISC</td><td>Reduced Instruction Set Computers</td><td>Fewer and simpler</td><td>Faster per instruction</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Memory Cache</h3>
      <div class="def-block">
        <p>A small set of high-speed memory that holds copies of portions of the larger but slower main memory. Reduces how often the CPU accesses RAM.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Level</th><th>Location</th></tr></thead>
          <tbody>
            <tr><td class="tv">L1 (Level 1)</td><td>Inside the CPU chip — fastest</td></tr>
            <tr><td class="tv">L2 (Level 2)</td><td>On the motherboard (or near CPU)</td></tr>
            <tr><td class="tv">L3 (Level 3)</td><td>Additional cache — mainly for server systems</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Multiprocessing &amp; Cooling</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--orange)">Multiprocessing</div>
          <div class="op-desc">Also known as parallel processing. Multiple CPUs on the same motherboard work together, doing more than one thing at a time. Programs run faster because more CPUs share the workload.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Cooling Fan</div>
          <div class="op-desc">Keeps CPU temperatures between 32°C and 43°C. Gets power via a connector on the motherboard or from the PSU.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Heat Sink</div>
          <div class="op-desc">Absorbs heat from the CPU surface while the fan blows it away. Always used together with the fan.</div>
        </div>
      </div>

      <h3 class="section-title">Intel Processor Lineup</h3>
      <div class="def-block">
        <p>Most widely used CPUs in personal computers. Early models identified by numbers: 8088, 8086, 80286, 80386, 80486.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Processor</th><th>Speed</th><th>L1</th><th>L2</th><th>L3</th><th>System Bus</th></tr></thead>
          <tbody>
            <tr><td class="tv">Celeron</td><td>2.8GHz</td><td>32KB</td><td>256KB</td><td>None</td><td>400MHz</td></tr>
            <tr><td class="tv">Pentium III</td><td>1.33GHz</td><td>32KB</td><td>2MB</td><td>None</td><td>133MHz</td></tr>
            <tr><td class="tv">Pentium IV</td><td>3.2GHz</td><td>1MB</td><td>2MB</td><td>None</td><td>133MHz</td></tr>
            <tr><td class="tv">Dual Core / Core 2 Duo</td><td>2.6GHz</td><td>2MB</td><td>2MB</td><td>None</td><td>1.33GHz</td></tr>
            <tr><td class="tv">Core i3</td><td>3.2GHz</td><td>—</td><td>2×256KB</td><td>3MB</td><td>2.5GT/s</td></tr>
            <tr><td class="tv">Core i5</td><td>3.46GHz</td><td>—</td><td>4×256KB</td><td>8MB</td><td>2.5GT/s</td></tr>
            <tr><td class="tv">Core i7</td><td>3.6GHz</td><td>—</td><td>4×256KB</td><td>8MB</td><td>2.5GT/s</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Notable Intel Processor Notes</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--orange)">Celeron</div>
          <div class="op-desc">Targets low-end PC multimedia and home markets. Uses advanced transfer cache for L2.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Pentium III</div>
          <div class="op-desc">100 or 133MHz system bus. Introduced SSE (Streaming SIMD Extensions) — Single Instruction, Multiple Data — for better multimedia performance.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Pentium 4</div>
          <div class="op-desc">Up to 3.2GHz. Uses 400, 533, or 800MHz system bus. Better for digital video, web, and graphics.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Core 2 Duo (2006)</div>
          <div class="op-desc">64-bit. Available for desktops, laptops, and workstations. More power-efficient than Pentium models.</div>
        </div>
      </div>

      <h3 class="section-title">AMD &amp; VIA Processor Lineup</h3>
      <div class="def-block">
        <p>Popular in gaming and hobbyist markets. Generally less expensive than comparable Intel processors. VIA designed mainly for notebooks.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Processor</th><th>Speed</th><th>System Bus</th></tr></thead>
          <tbody>
            <tr><td class="tv">AMD K6</td><td>450MHz</td><td>100MHz</td></tr>
            <tr><td class="tv">Duron</td><td>1.3GHz</td><td>200MHz</td></tr>
            <tr><td class="tv">Athlon</td><td>1.9GHz</td><td>200MHz</td></tr>
            <tr><td class="tv">Athlon Model 4</td><td>1.4GHz</td><td>266MHz</td></tr>
            <tr><td class="tv">Athlon MP</td><td>2.1GHz</td><td>400MHz</td></tr>
            <tr><td class="tv">Athlon XP</td><td>2.2GHz</td><td>400MHz</td></tr>
            <tr><td class="tv">Sempron</td><td>2.2GHz</td><td>200MHz</td></tr>
            <tr><td class="tv">Opteron</td><td>3.2GHz</td><td>1GHz</td></tr>
            <tr><td class="tv">Turion 64</td><td>2.2GHz</td><td>800MHz</td></tr>
            <tr><td class="tv">Cyrix III</td><td>533MHz</td><td>133MHz</td></tr>
            <tr><td class="tv">C3</td><td>1.4GHz</td><td>133MHz</td></tr>
            <tr><td class="tv">C7</td><td>2.0GHz</td><td>533MHz</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">AMD Ryzen</h3>
      <div class="def-block">
        <p>An x86-64 microprocessor family based on the <strong>Zen microarchitecture</strong>. Lineup: Ryzen 3, Ryzen 5, Ryzen 7, Ryzen 9, and Ryzen Threadripper — with up to <strong>96 cores</strong>.</p>
      </div>
    </div>`,

  'chipset-names': `
    <div id="topic-chipset-names" class="topic-detail">
      <button class="back-btn" onclick="closeTopic()">&#8592; Back to Topics</button>
      <div class="detail-header">
        <span class="detail-icon">🎯</span>
        <div>
          <div class="detail-num">PROF'S PICK</div>
          <h2 class="detail-title" style="color:var(--yellow)">Chipset Naming Schemes</h2>
        </div>
      </div>
      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">What is a Chipset?</div>
        <p>The <strong>chipset</strong> is a silicon controller on the motherboard that acts as the communications hub. It determines CPU compatibility, how many PCIe slots, USB ports, and SATA ports are available, and whether you can overclock your CPU or RAM.</p>
      </div>

      <h3 class="section-title first">Intel Chipset Naming — Letter + 3 Numbers (e.g. Z690)</h3>

      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">The Letter = Performance Tier</div>
        <p>The letter tells you what the board can do in terms of overclocking and connectivity.</p>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Letter</th><th>Tier</th><th>Key Features</th></tr></thead>
          <tbody>
            <tr><td class="tv">Z</td><td>Enthusiast</td><td>Only series with full CPU multiplier overclocking. Highest PCIe lane count.</td></tr>
            <tr><td class="rv">B / H</td><td>Mainstream</td><td>No CPU overclocking. Higher numbers (B660/H670) usually allow RAM overclocking.</td></tr>
            <tr><td class="tv">Q</td><td>Business</td><td>Intel vPro — remote management and extra security features.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">The Numbers = Generation + Feature Level</div>
        <p><strong>1st digit</strong> = generation. e.g. <strong>6</strong>90 = Alder Lake (12th Gen), <strong>5</strong>90 = Rocket Lake (11th Gen).<br><br>
        <strong>2nd digit</strong> = feature density within that generation.<br>
        Lower (e.g. H6<strong>1</strong>0) = entry-level: fewer PCIe lanes, fewer USB ports, no RAID, only 2 RAM slots.<br>
        Higher (e.g. B6<strong>6</strong>0) = mid-range: 4 RAM slots, RAID support, faster USB.</p>
      </div>

      <h3 class="section-title">AMD Chipset Naming — Letter + 3 Numbers (e.g. X570)</h3>

      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">The Letter = Performance Tier</div>
      </div>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Letter</th><th>Tier</th><th>Key Features</th></tr></thead>
          <tbody>
            <tr><td class="tv">X</td><td>High-End</td><td>CPU overclocking + Multi-GPU (SLI &amp; Crossfire). Maximum SATA/USB.</td></tr>
            <tr><td class="rv">B</td><td>Mainstream</td><td>CPU overclocking + Crossfire (usually no SLI). Great value.</td></tr>
            <tr><td class="fv">A</td><td>Budget</td><td>Locked — no CPU overclocking. No multi-GPU support.</td></tr>
          </tbody>
        </table>
      </div>

      <div class="def-block">
        <div class="blk-label" style="color:var(--yellow)">The Numbers = Generation + Tier Suffix</div>
        <p><strong>1st digit</strong> = CPU generation compatibility. e.g. <strong>5</strong>70 = Zen 3 (Ryzen 5000).<br><br>
        <strong>Last two digits</strong> are currently fixed to tier — they don't indicate feature differences like Intel's do:<br>
        X-series ends in <strong>70</strong> (X570) &nbsp;|&nbsp; B-series ends in <strong>50</strong> (B550) &nbsp;|&nbsp; A-series ends in <strong>20</strong> (A520)</p>
      </div>

      <h3 class="section-title">Intel vs AMD — Full Comparison</h3>
      <div class="tt-wrap">
        <table>
          <thead><tr><th>Feature</th><th>Intel Z</th><th>Intel B/H</th><th>AMD X</th><th>AMD B</th><th>AMD A</th></tr></thead>
          <tbody>
            <tr><td>CPU Overclocking</td><td class="tv">✅</td><td class="fv">❌</td><td class="tv">✅</td><td class="tv">✅</td><td class="fv">❌</td></tr>
            <tr><td>RAM Overclocking</td><td class="tv">✅</td><td class="rv">⚠️ Partial</td><td class="tv">✅</td><td class="tv">✅</td><td class="fv">❌</td></tr>
            <tr><td>Multi-GPU (SLI/CF)</td><td class="tv">✅</td><td class="fv">❌</td><td class="tv">✅</td><td class="rv">⚠️ CF Only</td><td class="fv">❌</td></tr>
            <tr><td>Typical RAM Slots</td><td class="tv">4</td><td class="rv">2 or 4</td><td class="tv">4</td><td class="tv">4</td><td class="rv">2</td></tr>
          </tbody>
        </table>
      </div>

      <h3 class="section-title">Quick Rules to Remember</h3>
      <div class="op-grid">
        <div class="op-card">
          <div class="op-name" style="color:var(--yellow)">Want to Overclock?</div>
          <div class="op-desc">Go <strong>Z</strong> for Intel or <strong>B / X</strong> for AMD. Those are the only tiers that allow CPU multiplier overclocking.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--cyan)">Budget / Office Build?</div>
          <div class="op-desc">Look for <strong>H</strong> (Intel) or <strong>A</strong> (AMD). No overclocking, fewer ports, but cheaper.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--green)">Future Proofing?</div>
          <div class="op-desc">Always check the <strong>first number</strong> to ensure it matches your CPU generation. A 500-series AMD board won't natively support Ryzen 7000.</div>
        </div>
        <div class="op-card">
          <div class="op-name" style="color:var(--pink)">BIOS Updates</div>
          <div class="op-desc">You can sometimes put a newer CPU on an older board — but only after a <strong>BIOS update</strong>. Applies to both Intel and AMD.</div>
        </div>
      </div>
    </div>`,

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