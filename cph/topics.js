// ─── CPH101L Topics ───────────────────────────────────────────────────────────

function renderTopic(topic) {
  return `
    <h2>${topic.title}</h2>
    <div class="topic-module-label">${topic.module}</div>
    ${topic.content}
  `;
}

const TOPICS = [

  // ─── MODULE 01: Introduction ────────────────────────────────────────────────
  {
    slug: 'pc-history',
    module: 'Module 01 — Introduction',
    title: 'PC Development Timeline',
    description: 'Key milestones in the history of the personal computer from 1972 to the Core Architecture era.',
    content: `
      <div class="section-block">
        <h3>What Is the PC?</h3>
        <div class="definition-box">
          <strong>Personal Computer (PC)</strong>
          A general-purpose computing machine designed for individual use. It processes data through a combination of hardware components controlled by software.
        </div>
        <p>The PC did not emerge overnight — it evolved through decades of hardware innovations, processor advancements, and industry standardization efforts.</p>
      </div>

      <div class="section-block">
        <h3>Key Milestones (1972–1984)</h3>
        <table class="content-table">
          <tr><th>Year</th><th>PC / Event</th></tr>
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
        </table>
      </div>

      <div class="section-block">
        <h3>Key Milestones (1987–2008)</h3>
        <table class="content-table">
          <tr><th>Year</th><th>PC / Event</th></tr>
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
        </table>
      </div>

      <div class="section-block">
        <h3>Why This Timeline Matters</h3>
        <p>Each generation introduced faster processors, wider data buses, and better power efficiency. Understanding the timeline helps you trace <span class="term">why</span> modern hardware is designed the way it is — every design choice today is a response to a problem from a previous generation.</p>
      </div>
    `
  },

  {
    slug: 'system-components',
    module: 'Module 01 — Introduction',
    title: 'System Components',
    description: 'The core hardware parts of a PC: CPU, motherboard, memory, storage, video, and power supply.',
    content: `
      <div class="section-block">
        <h3>Overview</h3>
        <p>A PC is made up of several hardware components. Each has a specific role — removing any one of them makes the system non-functional.</p>
      </div>

      <div class="section-block">
        <h3>Microprocessor (CPU)</h3>
        <div class="definition-box">
          <strong>Central Processing Unit</strong>
          Central to all processing. Reads and writes data to/from storage devices, performs calculations, and handles all data processing tasks.
        </div>
        <p>It is the <span class="highlight">brain</span> of the PC — every instruction the computer runs passes through it.</p>
      </div>

      <div class="section-block">
        <h3>Motherboard</h3>
        <div class="definition-box">
          <strong>Motherboard</strong>
          The core of the system. Controls all devices. All other components plug into or connect through the motherboard.
        </div>
      </div>

      <div class="section-block">
        <h3>Memory (RAM)</h3>
        <div class="definition-box">
          <strong>Memory</strong>
          Contains data that the processor is actively using at a given time. It is temporary — data is lost when power is cut.
        </div>
      </div>

      <div class="section-block">
        <h3>Hard Disk Drive (HDD)</h3>
        <div class="definition-box">
          <strong>Hard Disk Drive</strong>
          Secondary storage used when large amounts of data must be stored permanently. Unlike RAM, it retains data without power.
        </div>
      </div>

      <div class="section-block">
        <h3>Video Card (GPU)</h3>
        <div class="definition-box">
          <strong>Video Card</strong>
          Controls the information displayed on the monitor. Handles graphics rendering independently of the CPU.
        </div>
      </div>

      <div class="section-block">
        <h3>Monitor</h3>
        <div class="definition-box">
          <strong>Monitor</strong>
          A video display that shows information output from the computer.
        </div>
      </div>

      <div class="section-block">
        <h3>Power Supply Unit (PSU)</h3>
        <div class="definition-box">
          <strong>Power Supply</strong>
          The source of electrical power for every part of the PC. Converts AC power from the wall outlet to DC power that components use.
        </div>
        <ul>
          <li>Provides all the different voltages the computer needs</li>
          <li>Converts AC to DC</li>
          <li>Designed to be efficient and generate minimum heat</li>
        </ul>
      </div>

      <div class="section-block">
        <h3>Port</h3>
        <div class="definition-box">
          <strong>Port</strong>
          A physical connector that allows a cable from a peripheral device to be attached to the computer.
        </div>
      </div>

      <div class="section-block">
        <h3>Case</h3>
        <div class="definition-box">
          <strong>Case</strong>
          The frame that houses the system unit — all the internal components live inside it.
        </div>
      </div>
    `
  },

  {
    slug: 'pc-case',
    module: 'Module 01 — Introduction',
    title: 'PC Case Functions & Form Factors',
    description: 'What a PC case does, the different size standards (ATX, mATX, ITX), and obsolete formats.',
    content: `
      <div class="section-block">
        <h3>Functions of the PC Case</h3>
        <p>A PC case is not just a box. It serves three critical functions:</p>

        <div class="definition-box">
          <strong>Housing</strong>
          Makes room for the PSU, expansion slots/bays, and I/O ports connected to the motherboard.
        </div>

        <div class="definition-box">
          <strong>Ventilation</strong>
          The case should be well-ventilated and can be equipped with cooling fans to prevent overheating.
        </div>

        <div class="definition-box">
          <strong>EMF Elimination & Grounding</strong>
          Keeps internal components from generating excessive electromagnetic fields (EMF). Also provides grounding, giving immunity to static electric discharges.
        </div>
      </div>

      <div class="section-block">
        <h3>Form Factors</h3>
        <div class="definition-box">
          <strong>Form Factor</strong>
          Refers to the shape and general physical layout of a component.
        </div>

        <table class="content-table">
          <tr><th>Form Factor</th><th>Full Name</th><th>Supported Boards</th><th>Max Fans</th><th>Notes</th></tr>
          <tr>
            <td><span class="term">ATX</span></td>
            <td>Advanced Technology Extended</td>
            <td>ATX, mATX, ITX</td>
            <td>7+ × 120mm</td>
            <td>Most common full-size case</td>
          </tr>
          <tr>
            <td><span class="term">micro-ATX</span></td>
            <td>Micro Advanced Technology Extended</td>
            <td>mATX, ITX</td>
            <td>Up to 7 × 120mm</td>
            <td>Smaller, mid-range builds</td>
          </tr>
          <tr>
            <td><span class="term">extended-ATX</span></td>
            <td>Extended ATX</td>
            <td>ATX, eATX, mATX, ITX</td>
            <td>7+ × 120mm</td>
            <td>Enthusiast / workstation / water-cooled</td>
          </tr>
          <tr>
            <td><span class="term">ITX</span></td>
            <td>Information Technology Extended</td>
            <td>ITX only</td>
            <td>Very limited</td>
            <td>Smallest form factor; very limited ventilation</td>
          </tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Obsolete Form Factors</h3>
        <table class="content-table">
          <tr><th>Form Factor</th><th>Details</th></tr>
          <tr><td><span class="term">AT</span></td><td>1984 standard; had a round DIN plug hole at the back for old keyboards.</td></tr>
          <tr><td><span class="term">Baby-AT</span></td><td>Scaled-down version of the AT form factor.</td></tr>
          <tr><td><span class="term">LPX</span></td><td>Low Profile Extension — designed for slim desktop cases.</td></tr>
        </table>
      </div>
    `
  },

  // ─── MODULE 02: The Motherboard ─────────────────────────────────────────────
  {
    slug: 'motherboard',
    module: 'Module 02 — The Motherboard',
    title: 'The Motherboard',
    description: 'What the motherboard is, its form factors, and how it connects all system components.',
    content: `
      <div class="section-block">
        <h3>What Is the Motherboard?</h3>
        <div class="definition-box">
          <strong>Motherboard</strong>
          The main printed circuit board (PCB) that resides inside the PC. It is equipped with sockets where the processor, memory, plug-in cards, daughterboards, and peripheral devices are connected.
        </div>
        <p>It is the <span class="highlight">core of the system</span> — every component either plugs directly into it or communicates through it.</p>
      </div>

      <div class="section-block">
        <h3>Motherboard Form Factors</h3>
        <table class="content-table">
          <tr><th>Form Factor</th><th>Dimensions</th><th>Use Case</th></tr>
          <tr>
            <td><span class="term">ATX</span></td>
            <td>12" length × 6.7"–9.6" width</td>
            <td>Standard tower and desktop; most common since 1996; supports high-end systems</td>
          </tr>
          <tr>
            <td><span class="term">Micro-ATX</span></td>
            <td>9.6" × 9.6" or 9.6" × 9.1"</td>
            <td>Mid-range systems; fits microATX or ATX chassis</td>
          </tr>
          <tr>
            <td><span class="term">Mini-ITX</span></td>
            <td>6.7" × 6.7" (17cm × 17cm)</td>
            <td>Small form factor (SFF) computers; one expansion slot; home theater PCs</td>
          </tr>
          <tr>
            <td><span class="term">Mini-DTX</span></td>
            <td>9.6" × 8" (24.4cm × 20.3cm)</td>
            <td>Developed by AMD in 2007; compact PCs; slightly larger than ITX</td>
          </tr>
        </table>
      </div>

      <div class="section-block">
        <h3>ATX Motherboard Advantages</h3>
        <p>The ATX specification (originally developed by Intel in 1995) was a major step forward:</p>
        <ul>
          <li>Open, non-proprietary industry specification</li>
          <li>Built-in I/O external connector panel — eliminated extra cables from board to case rear</li>
          <li>Single main power connector — easy to plug, cannot be installed incorrectly</li>
          <li>CPU and memory relocated next to the PSU — no interference with bus extension cards</li>
          <li>Internal I/O connectors for drives relocated near drive bays — shorter cables</li>
          <li>Improved overall system cooling design</li>
          <li>Cheaper to manufacture due to fewer cables</li>
        </ul>
      </div>

      <div class="section-block">
        <h3>Obsolete Motherboard Form Factors</h3>
        <ul>
          <li><span class="term">PC/XT</span></li>
          <li><span class="term">Full-size AT</span></li>
          <li><span class="term">Baby-AT</span></li>
          <li><span class="term">LPX</span></li>
        </ul>
      </div>
    `
  },

  {
    slug: 'chipsets-and-buses',
    module: 'Module 02 — The Motherboard',
    title: 'Chipsets & Buses',
    description: 'How chipsets control data flow and how buses carry data, addresses, and control signals.',
    content: `
      <div class="section-block">
        <h3>Chipsets</h3>
        <div class="definition-box">
          <strong>Chipset</strong>
          A group of microchips on the motherboard that controls the flow of data and instructions to and from the CPU. It manages the memory cache, power management, external buses, and some peripherals.
        </div>
        <p>Think of the chipset as the <span class="highlight">traffic controller</span> of the motherboard.</p>

        <table class="content-table">
          <tr><th>Manufacturer</th><th>Modern Chipsets</th></tr>
          <tr><td>Intel</td><td>Z890, B860, H810</td></tr>
          <tr><td>AMD</td><td>X870, B850, A620</td></tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Buses</h3>
        <div class="definition-box">
          <strong>Bus</strong>
          An electrical channel that transfers bits internally within the circuitry of a computer, allowing all devices to communicate with each other. A common pathway across which data can travel.
        </div>

        <p>A bus carries four types of signals:</p>
        <ul>
          <li>Electrical power</li>
          <li>Control signals</li>
          <li>Memory addresses</li>
          <li>Data</li>
        </ul>
      </div>

      <div class="section-block">
        <h3>System Bus</h3>
        <div class="definition-box">
          <strong>System Bus</strong>
          A local bus that works synchronously with the CPU and the system clock. Connected directly to the CPU and synchronized with it.
        </div>
      </div>

      <div class="section-block">
        <h3>Types of System Bus</h3>

        <div class="definition-box">
          <strong>Data Bus</strong>
          A group of lines on the system bus that allows data to flow back and forth between devices.
        </div>

        <div class="definition-box">
          <strong>Address Bus</strong>
          Communicates memory addresses and I/O device locations to tell devices where data flowing on the data bus should travel.
        </div>

        <div class="definition-box">
          <strong>Control Bus</strong>
          Coordinates activity between various devices to prevent data collision.
        </div>

        <table class="content-table">
          <tr><th>Bus Type</th><th>Function</th></tr>
          <tr><td><span class="term">Data Bus</span></td><td>Moves data back and forth between devices</td></tr>
          <tr><td><span class="term">Address Bus</span></td><td>Tells devices where data should go</td></tr>
          <tr><td><span class="term">Control Bus</span></td><td>Prevents data collisions; coordinates timing</td></tr>
        </table>
      </div>
    `
  },

  {
    slug: 'bios',
    module: 'Module 02 — The Motherboard',
    title: 'BIOS',
    description: 'What BIOS is, its four functions, ROM chip types, and the BIOS setup menu.',
    content: `
      <div class="section-block">
        <h3>What Is BIOS?</h3>
        <div class="definition-box">
          <strong>BIOS — Basic Input/Output System</strong>
          Low-level software that controls system hardware. It acts as the link between the hardware and the operating system. Also referred to as <em>device drivers</em> or simply <em>drivers</em>.
        </div>
      </div>

      <div class="section-block">
        <h3>Three Sources of BIOS in a PC</h3>

        <div class="definition-box">
          <strong>Motherboard ROM</strong>
          Contains the initial software drivers to run the system. The primary BIOS source.
        </div>

        <div class="definition-box">
          <strong>Adapter Card ROM</strong>
          Commonly used for devices that must be active during boot time — most often found on video cards.
        </div>

        <div class="definition-box">
          <strong>Loaded into RAM from Disk</strong>
          Used for devices that do not need to be active during boot time.
        </div>
      </div>

      <div class="section-block">
        <h3>RTC/NVRAM & CMOS</h3>
        <p><span class="term">RTC/NVRAM (Real-Time Clock / Non-Volatile Memory)</span> and <span class="term">CMOS RAM</span> are two separate chips found on the motherboard.</p>
        <ul>
          <li>A portion of their memory is dedicated to the clock function</li>
          <li>The rest stores BIOS setup information</li>
        </ul>
      </div>

      <div class="section-block">
        <h3>Four Main Functions of BIOS</h3>
        <table class="content-table">
          <tr><th>Function</th><th>What It Does</th></tr>
          <tr>
            <td><span class="term">POST</span></td>
            <td>Power-On Self Test. Tests PC components: processor, memory, keyboard, etc. at startup.</td>
          </tr>
          <tr>
            <td><span class="term">Setup</span></td>
            <td>Accessed by pressing a special key during POST. Configures date/time, passwords, power management, boot sequence.</td>
          </tr>
          <tr>
            <td><span class="term">Bootstrap Loader</span></td>
            <td>Reads disk drives and looks for a master boot record to load the OS.</td>
          </tr>
          <tr>
            <td><span class="term">BIOS (Drivers)</span></td>
            <td>Actual collection of drivers that serve as the interface between hardware and OS after boot-up.</td>
          </tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Four Types of ROM Chips</h3>
        <table class="content-table">
          <tr><th>Type</th><th>Full Name</th><th>Notes</th></tr>
          <tr><td><span class="term">ROM</span></td><td>Read-Only Memory</td><td>Cannot be changed after manufacture</td></tr>
          <tr><td><span class="term">PROM</span></td><td>Programmable ROM</td><td>Can be written once by user</td></tr>
          <tr><td><span class="term">EPROM</span></td><td>Erasable PROM</td><td>Erasable using UV light</td></tr>
          <tr><td><span class="term">EEPROM</span></td><td>Electrically Erasable PROM</td><td>Erasable electrically — used in modern BIOS chips</td></tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Popular BIOS Manufacturers & Setup Keys</h3>
        <table class="content-table">
          <tr><th>Manufacturer</th><th>Key to Enter Setup</th></tr>
          <tr><td>AMI BIOS (American Megatrends)</td><td><span class="highlight">Delete</span></td></tr>
          <tr><td>Phoenix BIOS (FirstBIOS Pro)</td><td><span class="highlight">F2</span></td></tr>
          <tr><td>Award BIOS (FirstBIOS)</td><td><span class="highlight">Delete</span> or <span class="highlight">Ctrl+Alt+Esc</span></td></tr>
          <tr><td>Microaid Research (MR) BIOS</td><td><span class="highlight">Esc</span></td></tr>
        </table>
      </div>

      <div class="section-block">
        <h3>BIOS Setup Menu Screens</h3>
        <table class="content-table">
          <tr><th>Menu</th><th>Function</th></tr>
          <tr><td><span class="term">Maintenance</span></td><td>Sets processor speed; clears passwords. Available only in CONFIGURE MODE via a jumper.</td></tr>
          <tr><td><span class="term">Main</span></td><td>Allocates resources for hardware components.</td></tr>
          <tr><td><span class="term">Advanced</span></td><td>Specifies advanced chipset features.</td></tr>
          <tr><td><span class="term">Security</span></td><td>Sets passwords and security features.</td></tr>
          <tr><td><span class="term">Power</span></td><td>Configures power management features.</td></tr>
          <tr><td><span class="term">Boot</span></td><td>Sets boot options and power supply controls.</td></tr>
          <tr><td><span class="term">Exit</span></td><td>Saves or discards changes.</td></tr>
        </table>
      </div>
    `
  },

  // ─── MODULE 03: The Microprocessor ──────────────────────────────────────────
  {
    slug: 'cpu-basics',
    module: 'Module 03 — The Microprocessor',
    title: 'CPU Basics & Components',
    description: 'What the CPU does, and its three core parts: the Control Unit, ALU, and Memory Unit.',
    content: `
      <div class="section-block">
        <h3>What Does the CPU Do?</h3>
        <div class="definition-box">
          <strong>Central Processing Unit (CPU) / Microprocessor</strong>
          Responsible for all processing tasks. Reads and writes data/instructions to and from storage devices, performs calculations, reads input, and writes to output devices.
        </div>
        <p>Every instruction the computer executes — from opening a file to loading a game — goes through the CPU.</p>
      </div>

      <div class="section-block">
        <h3>Three Basic Components of a Microprocessor</h3>

        <div class="definition-box">
          <strong>Control Unit (CU)</strong>
          Manages all activities inside the CPU. Directs the entire computer system to carry out program instructions. Communicates with both the ALU and MU.
        </div>

        <div class="definition-box">
          <strong>Arithmetic and Logic Unit (ALU)</strong>
          Executes all arithmetic operations (addition, subtraction, etc.) and logical operations (comparisons, AND/OR/NOT).
        </div>

        <div class="definition-box">
          <strong>Memory Unit (MU)</strong>
          Manages data and instruction transfer between the CPU and main memory.
        </div>

        <table class="content-table">
          <tr><th>Component</th><th>Role</th></tr>
          <tr><td><span class="term">CU</span></td><td>Directs and controls all CPU activity</td></tr>
          <tr><td><span class="term">ALU</span></td><td>Performs all math and logic computations</td></tr>
          <tr><td><span class="term">MU</span></td><td>Transfers data between CPU and RAM</td></tr>
        </table>
      </div>
    `
  },

  {
    slug: 'cpu-characteristics',
    module: 'Module 03 — The Microprocessor',
    title: 'CPU Characteristics',
    description: 'Processor speed, bus speed, word size, instruction sets (CISC vs RISC), memory cache, and multiprocessing.',
    content: `
      <div class="section-block">
        <h3>Processor Speed</h3>
        <div class="definition-box">
          <strong>Processor Speed</strong>
          The speed at which the CPU operates internally. Measured in <span class="highlight">GHz (Gigahertz)</span> — billions of cycles per second. Driven by an internal clock that synchronizes operations. Average speed for a new CPU is around 3GHz.
        </div>
      </div>

      <div class="section-block">
        <h3>Bus Speed</h3>
        <div class="definition-box">
          <strong>Bus Speed</strong>
          The frequency at which data moves on a bus. The system clock synchronizes data transfer into and out of the CPU. One signal path carries one bit at a time.
        </div>

        <p>Modern system bus speeds:</p>
        <ul>
          <li>555 MHz, 667 MHz, 800 MHz, 1066 MHz, 1333 MHz, 1600 MHz</li>
        </ul>
        <p>Older system bus speeds:</p>
        <ul>
          <li>100 MHz, 133 MHz, 200 MHz</li>
        </ul>
      </div>

      <div class="section-block">
        <h3>Word Size & Data Path Size</h3>
        <div class="definition-box">
          <strong>Word Size</strong>
          The largest number of bits that can be carried on the internal data bus and that the CPU can process in one operation. Ranges from 16-bit to 64-bit.
        </div>
        <div class="definition-box">
          <strong>Data Path Size</strong>
          The largest number of bits that can be transported to and from the CPU on the system bus. Some CPUs can receive more bits than they can process at once.
        </div>
        <p class="highlight">Word size ≠ Data path size necessarily.</p>
      </div>

      <div class="section-block">
        <h3>Instruction Sets</h3>
        <div class="definition-box">
          <strong>Instruction Set</strong>
          The set of commands permanently built into the CPU chip for performing fundamental operations like comparing or adding two numbers.
        </div>

        <table class="content-table">
          <tr><th>Type</th><th>Full Name</th><th>Instructions</th><th>Speed per Instruction</th><th>Notes</th></tr>
          <tr>
            <td><span class="term">CISC</span></td>
            <td>Complex Instruction Set Computers</td>
            <td>Larger, more complex</td>
            <td>Slower</td>
            <td>Each instruction can do more work</td>
          </tr>
          <tr>
            <td><span class="term">RISC</span></td>
            <td>Reduced Instruction Set Computers</td>
            <td>Fewer and simpler</td>
            <td>Faster per instruction</td>
            <td>Needs more instructions for complex tasks</td>
          </tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Memory Cache</h3>
        <div class="definition-box">
          <strong>Memory Cache</strong>
          A small set of high-speed memory used to hold copies of portions of the larger but slower main memory. Reduces how often the CPU has to access slower RAM.
        </div>

        <table class="content-table">
          <tr><th>Cache Level</th><th>Location</th></tr>
          <tr><td><span class="term">L1 (Level 1)</span></td><td>Located inside the CPU chip — fastest</td></tr>
          <tr><td><span class="term">L2 (Level 2)</span></td><td>Located on the motherboard (or near CPU)</td></tr>
          <tr><td><span class="term">L3 (Level 3)</span></td><td>Additional cache, mainly for server systems</td></tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Multiprocessing</h3>
        <div class="definition-box">
          <strong>Multiprocessing (Parallel Processing)</strong>
          Multiple CPUs installed on the same motherboard work in cooperation to do more than one thing at a time. Makes programs run faster because more CPUs share the workload.
        </div>
      </div>

      <div class="section-block">
        <h3>CPU Cooling</h3>
        <div class="definition-box">
          <strong>Cooling Fan</strong>
          Keeps CPU temperatures between 32°C and 43°C. Gets power via a connector on the motherboard or from the PSU.
        </div>
        <div class="definition-box">
          <strong>Heat Sink</strong>
          Absorbs heat from the CPU surface while the fan blows it away. Always used together with the fan.
        </div>
      </div>
    `
  },

  {
    slug: 'processor-types',
    module: 'Module 03 — The Microprocessor',
    title: 'Types of Processors',
    description: 'Intel and AMD processor lineups — from the early Celeron to modern Core i7 and Ryzen families.',
    content: `
      <div class="section-block">
        <h3>Intel Processors</h3>
        <p>The most widely used CPUs in personal computers. Early Intel CPUs were identified by model numbers: <span class="highlight">8088, 8086, 80286, 80386, 80486</span>.</p>

        <table class="content-table">
          <tr><th>Processor</th><th>Speed</th><th>L1 Cache</th><th>L2 Cache</th><th>L3 Cache</th><th>System Bus</th></tr>
          <tr><td><span class="term">Celeron</span></td><td>2.8GHz</td><td>32KB</td><td>256KB</td><td>None</td><td>400MHz</td></tr>
          <tr><td><span class="term">Pentium III</span></td><td>1.33GHz</td><td>32KB</td><td>2MB</td><td>None</td><td>133MHz</td></tr>
          <tr><td><span class="term">Pentium IV</span></td><td>3.2GHz</td><td>1MB</td><td>2MB</td><td>None</td><td>133MHz</td></tr>
          <tr><td><span class="term">Dual Core / Core 2 Duo</span></td><td>2.6GHz</td><td>2MB</td><td>2MB</td><td>None</td><td>1.33GHz</td></tr>
          <tr><td><span class="term">Core i3</span></td><td>3.2GHz</td><td>—</td><td>2×256KB</td><td>3MB</td><td>2.5GT/s</td></tr>
          <tr><td><span class="term">Core i5</span></td><td>3.46GHz</td><td>—</td><td>4×256KB</td><td>8MB</td><td>2.5GT/s</td></tr>
          <tr><td><span class="term">Core i7</span></td><td>3.6GHz</td><td>—</td><td>4×256KB</td><td>8MB</td><td>2.5GT/s</td></tr>
        </table>
      </div>

      <div class="section-block">
        <h3>Intel Processor Notes</h3>

        <div class="definition-box">
          <strong>Celeron</strong>
          Pentium-class processor targeting low-end PC multimedia and home markets. Uses advanced transfer cache for L2.
        </div>

        <div class="definition-box">
          <strong>Pentium III</strong>
          100MHz or 133MHz system bus. Introduced Intel's SSE (Streaming SIMD Extensions) — Single Instruction, Multiple Data — for better multimedia processing.
        </div>

        <div class="definition-box">
          <strong>Pentium 4</strong>
          Up to 3.2GHz. Uses 400, 533, or 800MHz system bus. Better for digital video, web, and graphics tasks.
        </div>

        <div class="definition-box">
          <strong>Core (32-bit dual-core)</strong>
          Derived from Pentium M. More power-efficient than Pentium models.
        </div>

        <div class="definition-box">
          <strong>Core 2 Duo (64-bit, 2006)</strong>
          Available for desktops, laptops, and high-end workstations.
        </div>
      </div>

      <div class="section-block">
        <h3>AMD & VIA Processors</h3>
        <p>Popular in gaming and hobbyist markets. Generally less expensive than comparable Intel processors. VIA processors designed mainly for notebooks.</p>

        <table class="content-table">
          <tr><th>Processor</th><th>Speed</th><th>System Bus</th></tr>
          <tr><td><span class="term">AMD K6</span></td><td>450MHz</td><td>100MHz</td></tr>
          <tr><td><span class="term">Duron</span></td><td>1.3GHz</td><td>200MHz</td></tr>
          <tr><td><span class="term">Athlon</span></td><td>1.9GHz</td><td>200MHz</td></tr>
          <tr><td><span class="term">Athlon Model 4</span></td><td>1.4GHz</td><td>266MHz</td></tr>
          <tr><td><span class="term">Athlon MP</span></td><td>2.1GHz</td><td>400MHz</td></tr>
          <tr><td><span class="term">Athlon XP</span></td><td>2.2GHz</td><td>400MHz</td></tr>
          <tr><td><span class="term">Sempron</span></td><td>2.2GHz</td><td>200MHz</td></tr>
          <tr><td><span class="term">Opteron</span></td><td>3.2GHz</td><td>1GHz</td></tr>
          <tr><td><span class="term">Turion 64</span></td><td>2.2GHz</td><td>800MHz</td></tr>
        </table>

        <table class="content-table">
          <tr><th>VIA Processor</th><th>Speed</th><th>System Bus</th></tr>
          <tr><td><span class="term">Cyrix III</span></td><td>533MHz</td><td>133MHz</td></tr>
          <tr><td><span class="term">C3</span></td><td>1.4GHz</td><td>133MHz</td></tr>
          <tr><td><span class="term">C7</span></td><td>2.0GHz</td><td>533MHz</td></tr>
        </table>
      </div>

      <div class="section-block">
        <h3>AMD Ryzen</h3>
        <div class="definition-box">
          <strong>Ryzen</strong>
          An x86-64 microprocessor family from AMD based on the Zen microarchitecture. Lineup includes Ryzen 3, Ryzen 5, Ryzen 7, Ryzen 9, and Ryzen Threadripper with up to 96 cores.
        </div>
      </div>
    `
  }
];
