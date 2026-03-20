// ─── CPH101L Quiz Engine ───────────────────────────────────────────────────────

const QUIZZES = {

  'pc-history': [
    {
      q: 'Which year did IBM release its first PC?',
      options: ['1976', '1979', '1981', '1984'],
      answer: 2,
      explanation: 'IBM\'s first PC was released in 1981, marking the start of the IBM PC standard that became the industry baseline.'
    },
    {
      q: 'The Apple I was released in which year?',
      options: ['1972', '1974', '1976', '1977'],
      answer: 2,
      explanation: 'The Apple I was released in 1976. The Apple II followed in 1977.'
    },
    {
      q: 'What does "Micral" refer to in the PC timeline?',
      options: ['A type of processor', 'One of the first microcomputers (1973)', 'IBM\'s first budget PC', 'Apple\'s first portable computer'],
      answer: 1,
      explanation: 'Micral (1973) is listed as one of the earliest microcomputers in the PC development timeline.'
    },
    {
      q: 'The Macintosh was released in which year?',
      options: ['1981', '1983', '1984', '1986'],
      answer: 2,
      explanation: 'The Macintosh was released in 1984. Apple Lisa came out in 1983.'
    },
    {
      q: 'Which architecture milestone happened in 2006?',
      options: ['Pentium 4 release', 'First 1GHz processor', 'P6 & NetBurst / Core Architecture', 'Penryn Microarchitecture'],
      answer: 2,
      explanation: '2006 saw the P6 & NetBurst / Core Architecture. Penryn came in 2008.'
    },
    {
      q: 'The EISA bus standard was introduced in which year?',
      options: ['1986', '1987', '1988', '1989'],
      answer: 2,
      explanation: 'EISA (Extended Industry Standard Architecture) bus was introduced in 1988.'
    },
    {
      q: 'AMD Duron processors hitting 1GHz occurred in which year?',
      options: ['1999', '2000', '2001', '2002'],
      answer: 1,
      explanation: 'The year 2000 saw 1GHz processors, including the AMD Duron.'
    },
    {
      q: 'The DeskPro 386 was released in which year?',
      options: ['1984', '1985', '1986', '1987'],
      answer: 2,
      explanation: 'The DeskPro 386 was released in 1986.'
    },
    {
      q: 'Pentium III processors were released in which year?',
      options: ['1997', '1998', '1999', '2000'],
      answer: 2,
      explanation: 'The Pentium III was released in 1999. Pentium II came in 1997.'
    },
    {
      q: 'The Penryn Microarchitecture was introduced in which year?',
      options: ['2006', '2007', '2008', '2009'],
      answer: 2,
      explanation: 'The Penryn Microarchitecture was introduced in 2008, following the Core Architecture of 2006.'
    }
  ],

  'system-components': [
    {
      q: 'Which component is described as the "core of the system which controls all devices"?',
      options: ['CPU', 'Motherboard', 'Power Supply', 'Memory'],
      answer: 1,
      explanation: 'The motherboard is the core of the system. All components connect to it and it controls all devices.'
    },
    {
      q: 'What does a port do?',
      options: ['Stores data permanently', 'Provides electrical power', 'Allows peripheral cables to connect to the computer', 'Controls display output'],
      answer: 2,
      explanation: 'A port is a physical connector that allows a cable from a peripheral device to be attached to the computer.'
    },
    {
      q: 'Which component contains data that the processor is currently using?',
      options: ['Hard Disk Drive', 'Power Supply', 'Memory (RAM)', 'Video Card'],
      answer: 2,
      explanation: 'Memory (RAM) contains data which the processor is using at a given time. It is temporary and volatile.'
    },
    {
      q: 'What is the primary role of the CPU?',
      options: ['Store large amounts of data', 'Display output on the monitor', 'Perform all processing tasks', 'Convert AC to DC power'],
      answer: 2,
      explanation: 'The CPU is central to all processing — it reads/writes data, performs calculations, and handles all data processing tasks.'
    },
    {
      q: 'What does the Power Supply Unit convert?',
      options: ['DC to AC', 'Digital to Analog', 'AC to DC', 'Data to instructions'],
      answer: 2,
      explanation: 'The PSU converts AC (alternating current) from the wall outlet to DC (direct current) for internal components.'
    },
    {
      q: 'Which component controls the information displayed on the monitor?',
      options: ['CPU', 'Motherboard', 'Memory', 'Video Card'],
      answer: 3,
      explanation: 'The video card controls the information displayed on the monitor — it handles graphics rendering.'
    },
    {
      q: 'Hard Disk Drives are classified as what type of storage?',
      options: ['Primary storage', 'Secondary storage', 'Cache storage', 'Volatile storage'],
      answer: 1,
      explanation: 'HDDs are secondary storage — used when large amounts of data must be stored. Primary storage is RAM.'
    },
    {
      q: 'The Power Supply is designed to generate:',
      options: ['Maximum heat for efficiency', 'Minimum heat', 'Variable AC output', 'High DC voltage only'],
      answer: 1,
      explanation: 'The PSU is designed for efficiency and should generate a minimum amount of heat.'
    },
    {
      q: 'Which component is described as the "brain or engine" of the PC?',
      options: ['Motherboard', 'Memory', 'Processor', 'Power Supply'],
      answer: 2,
      explanation: 'The processor (CPU) serves as the brain or engine of the PC — it handles all computation.'
    },
    {
      q: 'A monitor is categorized as:',
      options: ['An input device', 'A storage device', 'A video display device', 'A power device'],
      answer: 2,
      explanation: 'A monitor is a video display which shows information — it is an output device.'
    }
  ],

  'pc-case': [
    {
      q: 'What does "form factor" refer to?',
      options: ['The weight of a component', 'The shape and general physical layout of a component', 'The power consumption rating', 'The number of expansion slots'],
      answer: 1,
      explanation: 'Form factor refers to the shape and general physical layout of a component.'
    },
    {
      q: 'What does ATX stand for?',
      options: ['Advanced Technology Exchange', 'Advanced Technology Extended', 'Automatic Transfer Extension', 'Applied Technology Extended'],
      answer: 1,
      explanation: 'ATX stands for Advanced Technology Extended.'
    },
    {
      q: 'An ATX case can house which motherboard types?',
      options: ['ATX only', 'ATX and mATX only', 'ATX, mATX, and ITX', 'eATX only'],
      answer: 2,
      explanation: 'An ATX case can house ATX, micro-ATX, and ITX motherboards.'
    },
    {
      q: 'Which is the smallest PC case form factor currently in use?',
      options: ['micro-ATX', 'Baby-AT', 'ITX', 'LPX'],
      answer: 2,
      explanation: 'ITX cases are the smallest PC case form factor and can only support ITX motherboards.'
    },
    {
      q: 'Which case function protects components from static electric discharges?',
      options: ['Housing', 'Ventilation', 'EMF Elimination and Grounding', 'Expansion bay support'],
      answer: 2,
      explanation: 'EMF Elimination and Grounding provides immunity to static electric discharges and reduces EMF generation.'
    },
    {
      q: 'What is the maximum number of 120mm fans typically supported by a micro-ATX case?',
      options: ['3', '5', '7', '10'],
      answer: 2,
      explanation: 'A micro-ATX case can usually fit only up to 7 × 120mm fans, compared to 7+ for full ATX.'
    },
    {
      q: 'Which obsolete form factor was introduced in 1984 and used a DIN plug hole at the back?',
      options: ['Baby-AT', 'LPX', 'AT', 'PS/2'],
      answer: 2,
      explanation: 'The AT form factor (1984) had a round hole at the back used for inserting the DIN plug of old keyboards.'
    },
    {
      q: 'Which case type is commonly used in enthusiast-level water-cooled workstations?',
      options: ['ITX', 'micro-ATX', 'extended-ATX', 'Baby-AT'],
      answer: 2,
      explanation: 'Extended-ATX (eATX) cases are commonly used for enthusiast-level workstations including water-cooled systems.'
    },
    {
      q: 'LPX stands for:',
      options: ['Large Profile Extension', 'Low Profile Extension', 'Linear Power Extension', 'Logic Port Expansion'],
      answer: 1,
      explanation: 'LPX stands for Low Profile Extension — it was a slim desktop form factor, now obsolete.'
    },
    {
      q: 'Which function of the PC case involves keeping cooling fans?',
      options: ['Housing', 'EMF Elimination', 'Ventilation', 'Grounding'],
      answer: 2,
      explanation: 'The ventilation function requires the case to be well-ventilated and it can be equipped with cooling fans.'
    }
  ],

  'motherboard': [
    {
      q: 'What is the motherboard?',
      options: [
        'The main power supply of the PC',
        'The main printed circuit board inside the PC where all components connect',
        'A secondary storage device',
        'The graphics controller of the PC'
      ],
      answer: 1,
      explanation: 'The motherboard is the main PCB inside the PC, equipped with sockets for the processor, memory, plug-in cards, and peripheral devices.'
    },
    {
      q: 'What are the dimensions of the ATX motherboard?',
      options: ['9.6" × 9.6"', '6.7" × 6.7"', '12" length × 6.7"–9.6" width', '9.6" × 8"'],
      answer: 2,
      explanation: 'ATX motherboards are 12 inches in length with width varying from 6.7 to 9.6 inches.'
    },
    {
      q: 'Who originally developed the ATX specification and in what year?',
      options: ['AMD, 1990', 'Intel, 1995', 'IBM, 1981', 'Microsoft, 1998'],
      answer: 1,
      explanation: 'The ATX specification was originally developed by Intel in 1995 as an open, non-proprietary industry standard.'
    },
    {
      q: 'What is the size of the Mini-ITX motherboard?',
      options: ['9.6" × 9.6"', '12" × 9.6"', '6.7" × 6.7"', '9.6" × 8"'],
      answer: 2,
      explanation: 'Mini-ITX motherboards are 6.7" × 6.7" (17cm × 17cm) — the smallest form factor in the list.'
    },
    {
      q: 'What advantage did the ATX built-in I/O panel provide?',
      options: [
        'It allowed multiple PSUs to be connected',
        'It eliminated the need for cables running from the motherboard to the rear of the case',
        'It added more expansion slots',
        'It doubled the memory bandwidth'
      ],
      answer: 1,
      explanation: 'The built-in I/O panel eliminated the need for cables running from the motherboard to the rear of the case.'
    },
    {
      q: 'Which motherboard form factor was developed by AMD in 2007?',
      options: ['Mini-ITX', 'Micro-ATX', 'Mini-DTX', 'Extended-ATX'],
      answer: 2,
      explanation: 'Mini-DTX was developed by AMD in 2007. Its standard size is 9.6" × 8".'
    },
    {
      q: 'Which of these is NOT an obsolete motherboard form factor?',
      options: ['Full-size AT', 'Baby-AT', 'LPX', 'Micro-ATX'],
      answer: 3,
      explanation: 'Micro-ATX is still in use today. PC/XT, Full-size AT, Baby-AT, and LPX are all obsolete.'
    },
    {
      q: 'In ATX design, where are the CPU and memory relocated to improve cooling?',
      options: ['Near the front panel', 'Next to the power supply', 'Below the expansion slots', 'Above the I/O panel'],
      answer: 1,
      explanation: 'In ATX, the CPU and memory are relocated next to the power supply so they do not interfere with bus extension cards and to improve cooling.'
    },
    {
      q: 'The ATX motherboard became the most common type starting from which year?',
      options: ['1990', '1993', '1996', '2000'],
      answer: 2,
      explanation: 'ATX became the most common type from 1996 through the present, supporting standard tower and desktop systems.'
    },
    {
      q: 'What is the size of the Micro-ATX motherboard?',
      options: ['12" × 9.6"', '6.7" × 6.7"', '9.6" × 9.6" or 9.6" × 9.1"', '9.6" × 8"'],
      answer: 2,
      explanation: 'Micro-ATX motherboards measure 9.6" × 9.6" or 9.6" × 9.1" — smaller than ATX but larger than Mini-ITX.'
    }
  ],

  'chipsets-and-buses': [
    {
      q: 'What does a chipset do?',
      options: [
        'Stores the operating system',
        'Controls the flow of data and instructions to and from the CPU',
        'Converts AC to DC power',
        'Displays graphics on the monitor'
      ],
      answer: 1,
      explanation: 'A chipset is a group of microchips that controls data flow to/from the CPU. It also manages memory cache, power management, external buses, and peripherals.'
    },
    {
      q: 'What is a bus in a computer?',
      options: [
        'A type of processor',
        'A storage device',
        'An electrical channel that transfers bits between devices',
        'A power regulation circuit'
      ],
      answer: 2,
      explanation: 'A bus is an electrical channel that transfers bits internally within the computer, allowing all devices to communicate with each other.'
    },
    {
      q: 'Which bus type is responsible for preventing data collisions?',
      options: ['Data bus', 'Address bus', 'Control bus', 'System bus'],
      answer: 2,
      explanation: 'The control bus coordinates activity between devices to prevent data collision.'
    },
    {
      q: 'Which bus tells devices WHERE data should go?',
      options: ['Data bus', 'Address bus', 'Control bus', 'Memory bus'],
      answer: 1,
      explanation: 'The address bus communicates memory addresses and I/O device locations, telling devices where data flowing on the data bus should travel.'
    },
    {
      q: 'Which AMD chipsets are listed as modern in the course material?',
      options: ['Z890, B860, H810', 'X570, B550, A520', 'X870, B850, A620', 'X399, B450, A320'],
      answer: 2,
      explanation: 'Modern AMD chipsets listed are X870, B850, and A620.'
    },
    {
      q: 'Which Intel chipsets are listed as modern in the course material?',
      options: ['Z690, B660, H610', 'Z890, B860, H810', 'X299, Z590, H510', 'Z370, B365, H310'],
      answer: 1,
      explanation: 'Modern Intel chipsets listed are Z890, B860, and H810.'
    },
    {
      q: 'What does the data bus do?',
      options: [
        'Directs data to specific addresses',
        'Coordinates timing between devices',
        'Allows data to flow back and forth between devices',
        'Provides electrical power to components'
      ],
      answer: 2,
      explanation: 'The data bus is a group of lines that allow data to flow back and forth between devices on the system bus.'
    },
    {
      q: 'The system bus operates synchronously with:',
      options: ['The hard drive', 'The GPU', 'The CPU and system clock', 'The power supply'],
      answer: 2,
      explanation: 'The system bus is a local bus that works synchronously with the CPU and the system clock.'
    },
    {
      q: 'Which of the following is NOT carried by a bus?',
      options: ['Electrical power', 'Control signals', 'Memory addresses', 'Processed images'],
      answer: 3,
      explanation: 'A bus carries electrical power, control signals, memory addresses, and data — not processed images directly.'
    },
    {
      q: 'One signal path on a bus can carry how many bits at a time?',
      options: ['4 bits', '8 bits', '16 bits', '1 bit'],
      answer: 3,
      explanation: 'One signal path can carry one bit of information at a time.'
    }
  ],

  'bios': [
    {
      q: 'What does BIOS stand for?',
      options: ['Basic Integrated Operating System', 'Basic Input/Output System', 'Binary Instruction Output System', 'Boot Input/Output Software'],
      answer: 1,
      explanation: 'BIOS stands for Basic Input/Output System — low-level software that links hardware to the operating system.'
    },
    {
      q: 'What is the function of POST?',
      options: [
        'Load the operating system',
        'Test PC components like processor, memory, and keyboard at startup',
        'Configure date and time',
        'Store BIOS setup information'
      ],
      answer: 1,
      explanation: 'POST (Power-On Self Test) tests PC components such as the processor, memory, and keyboard during startup.'
    },
    {
      q: 'Which ROM chip type can be erased using UV light?',
      options: ['ROM', 'PROM', 'EPROM', 'EEPROM'],
      answer: 2,
      explanation: 'EPROM (Erasable PROM) can be erased using ultraviolet (UV) light. EEPROM uses electrical erasing.'
    },
    {
      q: 'Which key enters the setup on AMI BIOS?',
      options: ['F1', 'F2', 'Esc', 'Delete'],
      answer: 3,
      explanation: 'AMI BIOS uses the Delete key to enter the setup during POST.'
    },
    {
      q: 'Which key enters the setup on Phoenix BIOS (FirstBIOS Pro)?',
      options: ['Delete', 'F1', 'F2', 'Esc'],
      answer: 2,
      explanation: 'Phoenix BIOS (FirstBIOS Pro) uses the F2 key to enter setup.'
    },
    {
      q: 'What does the Bootstrap Loader do?',
      options: [
        'Tests hardware at startup',
        'Configures passwords',
        'Reads disk drives and looks for the master boot record',
        'Manages power settings'
      ],
      answer: 2,
      explanation: 'The Bootstrap Loader reads the disk drives and looks for a master boot record to begin loading the operating system.'
    },
    {
      q: 'Adapter card ROM is most commonly found on which component?',
      options: ['RAM modules', 'Hard drives', 'Video cards', 'Power supplies'],
      answer: 2,
      explanation: 'Adapter card ROM is most commonly found on video cards since they must be active during boot time.'
    },
    {
      q: 'Which BIOS setup menu screen handles boot-drive sequence configuration?',
      options: ['Main', 'Advanced', 'Security', 'Boot'],
      answer: 3,
      explanation: 'The Boot menu specifies boot options and power supply controls, including boot-drive sequence.'
    },
    {
      q: 'CMOS RAM is used to store:',
      options: ['The OS files', 'BIOS setup information and clock data', 'Graphics data', 'Program instructions'],
      answer: 1,
      explanation: 'CMOS RAM stores BIOS setup information. A portion is dedicated to the clock function (RTC).'
    },
    {
      q: 'Which ROM type cannot be changed after manufacture?',
      options: ['PROM', 'EPROM', 'EEPROM', 'ROM'],
      answer: 3,
      explanation: 'ROM (Read-Only Memory) is written once during manufacture and cannot be changed afterward.'
    }
  ],

  'cpu-basics': [
    {
      q: 'What is the Control Unit (CU) responsible for?',
      options: [
        'Performing arithmetic calculations',
        'Managing data transfer between CPU and RAM',
        'Managing all activities inside the CPU and directing program instructions',
        'Storing frequently used data'
      ],
      answer: 2,
      explanation: 'The CU manages all activities inside the CPU, directs program instructions, and communicates with both the ALU and MU.'
    },
    {
      q: 'Which CPU component executes arithmetic and logical operations?',
      options: ['Control Unit', 'Memory Unit', 'Arithmetic and Logic Unit', 'Cache'],
      answer: 2,
      explanation: 'The ALU (Arithmetic and Logic Unit) executes all arithmetic and logical operations.'
    },
    {
      q: 'What does the Memory Unit (MU) manage?',
      options: [
        'Power distribution to the CPU',
        'Data and instruction transfer between CPU and main memory',
        'All arithmetic operations',
        'Clock synchronization'
      ],
      answer: 1,
      explanation: 'The MU manages data and instruction transfer between the CPU and main memory (RAM).'
    },
    {
      q: 'How many basic components make up a microprocessor?',
      options: ['2', '3', '4', '5'],
      answer: 1,
      explanation: 'A microprocessor has three basic components: the Control Unit (CU), the Arithmetic and Logic Unit (ALU), and the Memory Unit (MU).'
    },
    {
      q: 'What type of operations does the ALU NOT perform?',
      options: ['Addition', 'Subtraction', 'Logical comparisons', 'Data transfer to RAM'],
      answer: 3,
      explanation: 'Data transfer to RAM is handled by the Memory Unit. The ALU handles arithmetic (add, subtract) and logical (AND, OR, compare) operations.'
    },
    {
      q: 'The CPU reads data received from which type of devices?',
      options: ['Output devices', 'Storage devices only', 'Input devices', 'Cooling devices'],
      answer: 2,
      explanation: 'The CPU reads data received by input devices (keyboard, mouse, etc.) and writes output to output devices.'
    },
    {
      q: 'Which component communicates with BOTH the ALU and the Memory Unit?',
      options: ['The motherboard chipset', 'The system bus', 'The Control Unit', 'The BIOS'],
      answer: 2,
      explanation: 'The Control Unit communicates with both the ALU and the MU — it directs all activity within the CPU.'
    },
    {
      q: 'Writing output is the responsibility of:',
      options: ['The BIOS', 'The CPU writing to output devices', 'The RAM', 'The PSU'],
      answer: 1,
      explanation: 'Output is written to output devices by the CPU after processing.'
    },
    {
      q: 'What does the CPU do with data from storage devices?',
      options: ['Displays it directly on the monitor', 'Reads and writes data and instructions to and from them', 'Converts it to analog signals', 'Sends it to the PSU'],
      answer: 1,
      explanation: 'The CPU reads and writes data and instructions to and from storage devices as part of its processing role.'
    },
    {
      q: 'The MU manages transfers between the CPU and:',
      options: ['The power supply', 'The video card', 'Main memory (RAM)', 'The hard disk only'],
      answer: 2,
      explanation: 'The Memory Unit manages data and instruction transfer between the CPU and main memory (RAM).'
    }
  ],

  'cpu-characteristics': [
    {
      q: 'What unit is used to measure modern processor speed?',
      options: ['MHz', 'GHz', 'KB/s', 'GT/s'],
      answer: 1,
      explanation: 'Current processor speeds are measured in GHz (Gigahertz) — billions of cycles per second.'
    },
    {
      q: 'What does CISC stand for?',
      options: ['Central Instruction Set Computers', 'Complex Instruction Set Computers', 'Common Integrated System Core', 'Compiled Instruction Sequential Code'],
      answer: 1,
      explanation: 'CISC stands for Complex Instruction Set Computers — featuring larger instruction sets with more complex commands.'
    },
    {
      q: 'Which instruction set type has fewer, simpler instructions that run faster?',
      options: ['CISC', 'RISC', 'SIMD', 'SSE'],
      answer: 1,
      explanation: 'RISC (Reduced Instruction Set Computers) has fewer and simpler instructions that each run more quickly, but requires more instructions for complex operations.'
    },
    {
      q: 'Where is Level 1 (L1) cache located?',
      options: ['On the motherboard', 'Inside the CPU chip', 'On the RAM module', 'Inside the hard drive'],
      answer: 1,
      explanation: 'L1 cache is located inside the CPU chip — it is the fastest and smallest cache level.'
    },
    {
      q: 'What is the word size range for modern CPUs?',
      options: ['4-bit to 32-bit', '8-bit to 32-bit', '16-bit to 64-bit', '32-bit to 128-bit'],
      answer: 2,
      explanation: 'Word size ranges from 16-bit to 64-bit depending on the processor generation.'
    },
    {
      q: 'What is the purpose of memory cache?',
      options: [
        'To permanently store user data',
        'To hold copies of frequently used portions of slower main memory for fast access',
        'To convert data between formats',
        'To manage bus traffic'
      ],
      answer: 1,
      explanation: 'Memory cache is a small set of high-speed memory that holds copies of portions of the larger but slower main memory to speed up CPU access.'
    },
    {
      q: 'What is multiprocessing also known as?',
      options: ['Hyper-threading', 'Parallel processing', 'Pipeline processing', 'Cache leveling'],
      answer: 1,
      explanation: 'Multiprocessing is also known as parallel processing — multiple CPUs work together on the same motherboard.'
    },
    {
      q: 'What is the ideal operating temperature range for a CPU cooling fan to maintain?',
      options: ['0°C to 20°C', '32°C to 43°C', '50°C to 70°C', '80°C to 100°C'],
      answer: 1,
      explanation: 'The cooling fan keeps temperatures between 32°C and 43°C for safe CPU operation.'
    },
    {
      q: 'L3 cache is mainly intended for:',
      options: ['Consumer laptops', 'Budget desktop PCs', 'Server systems', 'Mobile phones'],
      answer: 2,
      explanation: 'L3 (Level 3) cache is additional cache memory intended primarily for server systems.'
    },
    {
      q: 'What does the heat sink do?',
      options: ['Generates heat for the CPU', 'Absorbs heat from the CPU while the fan blows it away', 'Provides power to the fan', 'Regulates CPU voltage'],
      answer: 1,
      explanation: 'The heat sink absorbs heat from the CPU surface while the cooling fan blows that heat away from the system.'
    }
  ],

  'processor-types': [
    {
      q: 'Which company\'s processors are described as "most widely used in personal computers"?',
      options: ['AMD', 'VIA', 'Intel', 'Cyrix'],
      answer: 2,
      explanation: 'Intel processors are described as the most widely used CPU in personal computers.'
    },
    {
      q: 'What does SIMD stand for in the context of Pentium III\'s SSE?',
      options: ['Single Input Multiple Data', 'Single Instruction Multiple Data', 'Serial Instruction Memory Design', 'Streaming Instruction Mode Data'],
      answer: 1,
      explanation: 'SIMD stands for Single Instruction, Multiple Data — a performance enhancement introduced with SSE on the Pentium III for better multimedia processing.'
    },
    {
      q: 'What is the L3 cache size of the Intel Core i5 listed in the spec table?',
      options: ['3MB', '6MB', '8MB', '12MB'],
      answer: 2,
      explanation: 'The Core i5 has 8MB of L3 cache according to the spec table.'
    },
    {
      q: 'Which Intel processor targeted the low-end PC multimedia and home market?',
      options: ['Pentium III', 'Core i3', 'Celeron', 'Pentium 4'],
      answer: 2,
      explanation: 'The Celeron is a Pentium-class processor targeting the low-end PC multimedia and home market segments.'
    },
    {
      q: 'The AMD Ryzen family is based on which microarchitecture?',
      options: ['Piledriver', 'Bulldozer', 'Zen', 'Excavator'],
      answer: 2,
      explanation: 'The Ryzen family is based on the Zen microarchitecture and is classified as x86-64.'
    },
    {
      q: 'The Pentium 4 uses which system bus speeds?',
      options: ['100, 133, or 200 MHz', '400, 533, or 800 MHz', '1066, 1333, or 1600 MHz', '266, 333, or 400 MHz'],
      answer: 1,
      explanation: 'The Pentium 4 uses 400, 533, or 800 MHz system bus speeds.'
    },
    {
      q: 'What is the max speed of the AMD Opteron listed in the spec table?',
      options: ['2.2GHz', '2.5GHz', '3.0GHz', '3.2GHz'],
      answer: 3,
      explanation: 'The AMD Opteron runs at 3.2GHz with a 1GHz system bus — the fastest AMD chip in the provided table.'
    },
    {
      q: 'AMD and VIA processors are described as popular in which market?',
      options: ['Server and enterprise', 'Game and hobbyist markets', 'Industrial computing', 'Mainframe systems'],
      answer: 1,
      explanation: 'AMD and VIA processors are described as popular in the game and hobbyist markets.'
    },
    {
      q: 'The Intel Core 2 Duo 64-bit models were introduced in mid-:',
      options: ['2004', '2005', '2006', '2007'],
      answer: 2,
      explanation: 'Intel introduced 64-bit Core 2 Duo models in mid-2006, for both desktops and laptops.'
    },
    {
      q: 'What is the maximum number of cores in the AMD Ryzen Threadripper according to the module?',
      options: ['32', '64', '96', '128'],
      answer: 2,
      explanation: 'The Ryzen Threadripper has up to 96 cores according to Module 03.'
    }
  ]
};

// ─── Quiz Renderer ────────────────────────────────────────────────────────────

function renderQuiz(topic) {
  const container = document.getElementById('quiz-container');
  const questions = QUIZZES[topic.slug];

  if (!questions) {
    container.innerHTML = '<p style="color:var(--muted)">No quiz available for this topic yet.</p>';
    return;
  }

  let answered = 0;
  let score = 0;
  const total = questions.length;

  let html = `
    <div class="quiz-header">
      <h2>${topic.title} — Quiz</h2>
      <p>${total} questions · Select the best answer for each.</p>
    </div>
  `;

  questions.forEach((item, idx) => {
    html += `
      <div class="quiz-question" id="q-${idx}">
        <div class="q-number">Question ${idx + 1} of ${total}</div>
        <div class="q-text">${item.q}</div>
        <div class="q-options">
          ${item.options.map((opt, oi) => `
            <button class="q-option" data-q="${idx}" data-o="${oi}">${opt}</button>
          `).join('')}
        </div>
        <div class="q-explanation" id="exp-${idx}">${item.explanation}</div>
      </div>
    `;
  });

  html += `<button class="btn-submit" id="submit-quiz">Submit Quiz</button>`;
  container.innerHTML = html;

  // Option click handler
  container.querySelectorAll('.q-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = parseInt(btn.dataset.q);
      const oi = parseInt(btn.dataset.o);
      const block = document.getElementById(`q-${qi}`);

      // Already answered
      if (block.dataset.answered) return;
      block.dataset.answered = '1';
      answered++;

      const correct = QUIZZES[topic.slug][qi].answer;
      const allOpts = block.querySelectorAll('.q-option');

      allOpts.forEach(o => o.disabled = true);

      if (oi === correct) {
        btn.classList.add('correct');
        score++;
      } else {
        btn.classList.add('wrong');
        allOpts[correct].classList.add('reveal');
      }

      document.getElementById(`exp-${qi}`).classList.add('visible');
    });
  });

  // Submit handler
  document.getElementById('submit-quiz').addEventListener('click', () => {
    // Auto-answer unanswered
    questions.forEach((item, idx) => {
      const block = document.getElementById(`q-${idx}`);
      if (!block.dataset.answered) {
        block.dataset.answered = '1';
        const allOpts = block.querySelectorAll('.q-option');
        allOpts.forEach(o => o.disabled = true);
        allOpts[item.answer].classList.add('reveal');
        document.getElementById(`exp-${idx}`).classList.add('visible');
      }
    });

    const pct = Math.round((score / total) * 100);
    let msg = '';
    if (pct === 100) msg = 'Perfect score. You actually know this.';
    else if (pct >= 80) msg = 'Solid. Review the ones you missed.';
    else if (pct >= 60) msg = 'Passing, but some gaps. Go back to the topic.';
    else msg = 'Rough. Re-read the material before retrying.';

    const scoreCard = document.createElement('div');
    scoreCard.className = 'score-card';
    scoreCard.innerHTML = `
      <div class="score-num">${score}/${total}</div>
      <div class="score-label">${pct}%</div>
      <div class="score-msg">${msg}</div>
      <button class="btn-retry" id="retry-btn">Retry Quiz</button>
    `;
    container.appendChild(scoreCard);
    scoreCard.scrollIntoView({ behavior: 'smooth' });

    document.getElementById('retry-btn').addEventListener('click', () => {
      renderQuiz(topic);
      window.scrollTo(0, 0);
    });

    document.getElementById('submit-quiz').remove();
  });
}
