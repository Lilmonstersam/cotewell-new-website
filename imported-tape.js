/* Cotewell: line marking tape & floor marking mock-up
   Category view + 13 product views, routed from the URL hash. */
(function () {
  'use strict';

  var UP = 'https://cotewell.com.au/wp-content/uploads/';

  /* ------------------------------------------------------------------ colours */
  var COLOURS = {
    yellow:                 { label: 'Yellow',                 hex: '#f2c200' },
    black:                  { label: 'Black',                  hex: '#17191b' },
    white:                  { label: 'White',                  hex: '#f1f0ec' },
    blue:                   { label: 'Blue',                   hex: '#0a5aa8' },
    green:                  { label: 'Green',                  hex: '#12874a' },
    red:                    { label: 'Red',                    hex: '#c8102e' },
    orange:                 { label: 'Orange',                 hex: '#ee7203' },
    gray:                   { label: 'Grey',                   hex: '#8b9095' },
    purple:                 { label: 'Purple',                 hex: '#6a3f9e' },
    brown:                  { label: 'Brown',                  hex: '#6a4526' },
    clear:                  { label: 'Clear',                  hex: '#d8dade', clear: true },
    'diagonal-black-yellow':{ label: 'Diagonal Black/Yellow',  hex: '#f2c200', hex2: '#17191b' },
    'diagonal-black-white': { label: 'Diagonal Black/White',   hex: '#f1f0ec', hex2: '#17191b' },
    'diagonal-red-white':   { label: 'Diagonal Red/White',     hex: '#f1f0ec', hex2: '#c8102e' },
    'diagonal-green-white': { label: 'Diagonal Green/White',   hex: '#f1f0ec', hex2: '#12874a' },
    'diagonal-orange-black':{ label: 'Diagonal Orange/Black',  hex: '#ee7203', hex2: '#17191b' }
  };

  var TAPE_COLOURS = ['yellow','white','red','blue','green','orange','black','gray','purple','brown','clear','diagonal-black-yellow','diagonal-black-white','diagonal-red-white'];
  var LEAN_COLOURS = ['yellow','white','red','blue','green','orange','black','diagonal-black-yellow','diagonal-black-white','diagonal-red-white','diagonal-green-white','diagonal-orange-black'];
  var SHAPE_COLOURS = ['yellow','blue','green','orange','red','black','white'];

  var APPLICATION_LIST = ['Product manufacturing facilities','Commercial warehouses','Commercial workshops','Food and beverage production facilities','Poultry and meat processing plants','Self storage facilities','Aircraft hangars','Theme parks','Large retail centres'];

  /* ------------------------------------------------------------------ category */
  var categoryData = {
    title: 'Line Marking Tape & Floor Marking Products | Cotewell',
    descriptionMeta: 'Industrial line marking tape, 5S floor shapes and safety floor signs for Australian warehouses. Peel-and-stick floor marking with no production downtime.',
    canonical: 'https://cotewell.com.au/product-category/tape/',
    image: 'assets/imported/tape/img/mightyline-marking-tape.jpg',
    contextHref: '#tape-products',
    contextText: 'All products',
    ctaHref: '#tape-products',
    ctaText: 'View products',
    footerText: 'Line marking tape & floor marking mock-up'
  };

  var GROUPS = {
    tape:   { label: 'Line marking tape',        heading: 'Line marking tape',        blurb: 'Rolls for walkways, forklift routes, aisle edges and exclusion zones. Choose by thickness and the traffic the line has to survive.' },
    shapes: { label: '5S shapes & footprints',   heading: '5S shapes and footprints', blurb: 'Pre-cut markers for pallet bays, storage locations and pedestrian routes. Faster than taping full boxes and they use far less material.' },
    signs:  { label: 'Safety floor signs',       heading: 'Safety floor signs',       blurb: 'Large-format floor stickers that carry a message people read from a distance. Other designs are available on request.' }
  };

  /* ------------------------------------------------------------------ products */
  var productData = {

    /* ---------------------------------------------------------- TAPE */
    'mightyline-tape': {
      keyMetrics: [['Thickness','1.3mm'],['Traffic rating','Heavy forklift'],['Warranty','3 years']],
      group: 'tape',
      slug: 'mighty-line-marking-tape',
      canonical: 'https://cotewell.com.au/product/mighty-line-marking-tape/',
      shortName: 'MightyLine Marking Tape',
      breadcrumb: 'MightyLine Marking Tape',
      title: 'MightyLine Marking Tape | 1.3mm Industrial Floor Tape | Cotewell',
      descriptionMeta: 'MightyLine floor marking tape is 1.3mm thick and built for constant forklift traffic. 14 colours, 50mm and 100mm widths, 3-year adhesion warranty.',
      eyebrow: 'Heavy-duty line marking tape',
      titleHtml: 'MightyLine<br><em>Marking</em><br>Tape',
      cardType: 'Heavy traffic · 1.3mm',
      cardCopy: 'The thickest tape in the range, built to take constant forklift and wheeled traffic without lifting.',
      badge: '1.3mm · 3 yr warranty',
      tag: '1.3mm bevelled-edge roll',
      description: 'MightyLine Standard Floor Tape is a premium floor marking solution for busy industrial workplaces where durability matters. At 1.3mm thick, up to seven times thicker than many standard floor tapes, it is built to withstand heavy forklift and industrial wheeled traffic while keeping a clean, professional appearance.',
      descriptionSecondary: 'Unlike painted lines it installs quickly with no production downtime, needs minimal ongoing maintenance and can be removed or reconfigured as your workplace evolves. Backed by a 3-year limited adhesion warranty.',
      colours: TAPE_COLOURS,
      widths: ['50mm', '100mm'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/tape-yellow-both.png",
        white: 'assets/imported/tape/img/tape-white-both.png',
        red: "assets/img/tape-red-both.png",
        blue: "assets/img/tape-blue-both.png",
        green: "assets/img/tape-green-both.png",
        orange: "assets/img/tape-orange-both.png",
        black: "assets/img/tape-black-both.png",
        gray: UP + '2026/05/4-gray-solid-color-tape-100-roll-safety-floor-product-512_1024x1024-removebg-preview.png',
        purple: UP + '2026/05/4-purple-solid-color-tape-100-roll-safety-floor-product-335_1024x1024-removebg-preview.png',
        brown: UP + '2026/05/4-brown-solid-color-tape-100-roll-safety-floor-product-638_1024x1024-removebg-preview-1.png',
        clear: UP + '2026/05/4-clear-floor-tape-100-roll-product-182_1024x1024-removebg-preview.png',
        'diagonal-black-yellow': "assets/img/tape-striped-both.png",
        'diagonal-black-white': UP + '2026/05/4-white-tape-with-black-chevrons-100-roll-safety-floor-product-570_1024x1024-removebg-preview.png',
        'diagonal-red-white': UP + '2022/12/4-white-tape-with-red-chevrons-100-roll-safety-floor-product-750_1024x1024-removebg-preview.png'
      },
      photos: [
        { src: "assets/img/Factory-Line-Marking-QLD-1.jpg", thumb: UP + '2022/04/Factory-Line-Marking-QLD-1-300x200.jpg', alt: 'MightyLine tape marking aisles in a Queensland factory' },
        { src: "assets/img/shared-image-17-1.jpg", thumb: UP + '2025/10/shared-image-17-1-768x1024.jpg', alt: 'MightyLine tape on a working warehouse floor' },
      ],
      prices: { 'default|50mm': 269, 'default|100mm': 314, 'diagonal-black-yellow|50mm': 326, 'diagonal-black-yellow|100mm': 365, 'diagonal-black-white|50mm': 326, 'diagonal-black-white|100mm': 365, 'diagonal-red-white|50mm': 326, 'diagonal-red-white|100mm': 365 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Confirm the floor is clean, dry and oil free. Call <a href="tel:1300590505">1300 590 505</a> if you are unsure whether your surface suits tape.',
      featuresTitle: 'Seven times thicker<br>than standard tape.',
      featuresIntro: 'MightyLine is the tape to specify when forklifts run the line every day. It costs more per roll and it stops the re-taping cycle.',
      features: [
        ['1.3mm thick', 'Up to 7x thicker than many standard floor marking tapes.'],
        ['Built for forklift traffic', 'Designed for heavy industrial forklift and wheeled traffic.'],
        ['Bevelled edges', 'Helps minimise lifting and gives a smooth transition underfoot.'],
        ['No production downtime', 'Fast peel-and-stick DIY installation with nothing to cure.'],
        ['Clean removal', 'Easy to remove with minimal sticky residue at end of lease.'],
        ['Up to 60% less maintenance', 'Compared with the ongoing cost of painted line marking.'],
        ['Food and pharma safe', 'No contamination during installation in production environments.'],
        ['3-year adhesion warranty', 'Limited adhesion warranty on the standard range.'],
        ['Repairable in sections', 'Damaged runs can be replaced without redoing the whole line.']
      ],
      notes: [
        'Ensure the surface is clean, dry and oil free before installation',
        'Do not apply tape lengthways along floor joints',
        'Not suitable for external use',
        'Do not apply over existing paint or tape',
        'Warranty does not cover damage',
        'Continuous pallet dragging or wheel spinning may reduce lifespan',
        'Not recommended for rough, damaged or uneven concrete'
      ],
      applications: ['Pedestrian walkways','Forklift routes','Pallet storage bays','Equipment parking areas','Material storage zones','Workstations','Production lines','Keep-clear zones','Safety and exclusion zones','Industrial facilities'],
      specs: [['Thickness','1.3mm'],['Widths','50mm and 100mm'],['Colours','14, including three diagonal hazard patterns'],['Warranty','3-year limited adhesion warranty'],['Traffic rating','Heavy forklift and wheeled traffic'],['Environment','Internal only'],['Edges','Bevelled'],['Installation','Peel and stick, no curing time']],
      extra: 'Customised shapes, barcodes and symbols are available. Send our team the artwork or the message and they will quote it.',
      related: ['freezer-tape', 'lean-line-960', 'angle-shape']
    },

    'freezer-tape': {
      keyMetrics: [['Thickness','1.3mm'],['Traffic rating','Industrial wheeled'],['Warranty','2 years']],
      group: 'tape',
      slug: 'mighty-line-x-treme-freezer-tape',
      canonical: 'https://cotewell.com.au/product/mighty-line-x-treme-freezer-tape/',
      shortName: 'X-Treme Freezer Tape',
      breadcrumb: 'X-Treme Freezer Tape',
      title: 'MightyLine X-Treme Freezer Tape | Cold Store Floor Tape | Cotewell',
      descriptionMeta: 'Floor marking tape proven to -29°C for cold rooms, freezers and chilled storage. Peel-and-stick install, 2-year limited warranty, 50mm and 100mm widths.',
      eyebrow: 'Cold store line marking tape',
      titleHtml: 'X-Treme<br><em>Freezer</em><br>Tape',
      cardType: 'Sub-zero · proven to -29°C',
      cardCopy: 'The tape to use where standard floor markings peel, crack or lift in cold storage.',
      badge: 'Proven to -29°C',
      tag: 'Freezer-rated adhesive',
      description: 'MightyLine X-Treme Freezer Tape is built to withstand the extreme temperatures found in cold, freezer storage and warehouse environments. It is proven at temperatures as low as -29&deg;C, where standard floor marking adhesives commonly fail.',
      descriptionSecondary: 'It is designed to take a beating from industrial wheel traffic, which is what gives us the confidence to offer a 2-year limited warranty on it.',
      colours: ['yellow', 'white', 'red'],
      widths: ['50mm', '100mm'],
      defaultColour: 'white',
      images: {
        yellow: "assets/img/tape-yellow-both.png",
        white: 'assets/imported/tape/img/tape-white-both.png',
        red: "assets/img/tape-red-both.png"
      },
      photos: [
        { src: "assets/img/Food-Processing-Line-Marking-VIC.jpg", thumb: UP + '2022/04/Food-Processing-Line-Marking-VIC-300x200.jpg', alt: 'X-Treme Freezer tape in a Victorian food processing facility' },
      ],
      prices: { 'default|50mm': 417, 'default|100mm': 417 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Cold-store floors need to be dry and frost free at the point of installation. Call <a href="tel:1300590505">1300 590 505</a> and we will talk through the install window.',
      featuresTitle: 'Marking that holds<br>at -29&deg;C.',
      featuresIntro: 'Cold storage is the environment where most floor marking fails first. This is the product built for it.',
      features: [
        ['Proven to -29&deg;C', 'Tested and used in freezer and cold storage environments.'],
        ['Industrial wheel traffic', 'Designed to take a beating from wheeled traffic in cold aisles.'],
        ['2-year limited warranty', 'Backed for the environment it is specified for.'],
        ['Peel and stick', 'No curing time and no production downtime during install.'],
        ['Two widths', 'Available in 50mm and 100mm to suit aisle and boundary marking.'],
        ['High-visibility colours', 'Yellow, white and red for cold, low-contrast environments.']
      ],
      notes: [
        'Intended for cold room, freezer and chilled storage applications',
        'Surface must be clean, dry and frost free before installation',
        'Do not apply over existing paint or tape',
        'Warranty does not cover damage'
      ],
      applications: APPLICATION_LIST,
      specs: [['Temperature rating','Proven to -29&deg;C'],['Widths','50mm and 100mm'],['Colours','Yellow, white and red'],['Warranty','2-year limited warranty'],['Traffic rating','Industrial wheeled traffic'],['Environment','Cold rooms, freezers and chilled storage'],['Installation','Peel and stick, no curing time']],
      related: ['freezer-footprints', 'mightyline-tape', 'lean-line-960']
    },

    'lean-line-960': {
      keyMetrics: [['Thickness','0.9mm'],['Traffic rating','Medium'],['Warranty','2 years']],
      group: 'tape',
      slug: 'lean-line-960-floor-marking-tape-50mm-x-30m-roll',
      canonical: 'https://cotewell.com.au/product/lean-line-960-floor-marking-tape-50mm-x-30m-roll/',
      shortName: 'Lean Line 960',
      breadcrumb: 'Lean Line 960',
      title: 'Lean Line 960 Floor Marking Tape | 50mm x 30m | Cotewell',
      descriptionMeta: 'Lean Line 960 is a 0.9mm mid-range floor marking tape for medium foot and light wheeled traffic. 12 colours, 50mm x 30m rolls, 2-year warranty.',
      eyebrow: 'Mid-range floor marking tape',
      titleHtml: 'Lean Line 960<br><em>Floor Marking</em><br>Tape',
      longTitle: true,
      cardType: 'Medium traffic · 0.9mm',
      cardCopy: 'A 0.9mm roll for walkways, storage areas and workstation boundaries in medium-traffic environments.',
      badge: '0.9mm · 50mm x 30m',
      tag: '0.9mm · 50mm x 30m roll',
      description: 'The Lean Line 960 Floor Tape is designed for workplaces that need a durable yet flexible floor marking solution. Ideal for medium traffic environments, it gives clear visual boundaries for walkways, storage areas and workstations while allowing layouts to be updated as operations evolve.',
      descriptionSecondary: 'With quick installation and no curing time, it is a practical alternative to painted floor markings at roughly a third the cost of the heavy-duty range.',
      colours: LEAN_COLOURS,
      widths: ['50mm'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/Lean-Line-960-No-BG-Yellow.png",
        white: "assets/img/Lean-Line-960-No-BG-White.png",
        red: "assets/img/Lean-Line-960-No-BG-Red-.png",
        blue: "assets/img/Lean-Line-960-No-BG-Blue.png",
        green: "assets/img/Lean-Line-960-No-BG-Green.png",
        orange: "assets/img/Lean-Line-960-No-BG-Orange.png",
        black: "assets/img/Lean-Line-960-No-BG-Black.png",
        'diagonal-black-yellow': "assets/img/Lean-Line-570-No-BG-Yellow-Black.png",
        'diagonal-black-white': "assets/img/Lean-Line-960-No-BG-Black-White.png",
        'diagonal-red-white': "assets/img/Lean-Line-960-No-BG-Red-White.png",
        'diagonal-green-white': "assets/img/Lean-Line-960-No-BG-Green-White.png",
        'diagonal-orange-black': "assets/img/Lean-Line-960-No-BG-Black-Orange.png"
      },
      prices: { 'default|50mm': 169 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Specify Lean Line 960 for medium foot traffic and light wheeled traffic only. For forklift routes, use MightyLine instead. Call <a href="tel:1300590505">1300 590 505</a> to check.',
      featuresTitle: 'The middle ground<br>between paint and MightyLine.',
      featuresIntro: 'A practical, lower-cost roll for the areas of a site that do not see forklift wheels every day.',
      features: [
        ['0.9mm thick', 'Sized for medium traffic applications rather than forklift routes.'],
        ['Peel-and-stick install', 'Quick installation with no production downtime required.'],
        ['2-year warranty', 'Backed for the traffic level it is specified for.'],
        ['Square-cut edges', 'Gives a clean, professional finish on straight runs.'],
        ['Easy-to-clean surface', 'Smooth face that does not trap dirt in busy aisles.'],
        ['Food and pharma safe', 'No contamination concerns in production environments.']
      ],
      notes: [
        'Not suitable for external use',
        'Best applied to clean, dry and oil-free surfaces',
        'Do not apply over existing paint or floor tape',
        'Avoid applying the tape lengthways across floor joints',
        'Heavy forklift traffic or constant pallet dragging may reduce lifespan',
        'Warranty does not cover damage'
      ],
      applications: ['Walkways','Storage locations','Workstation boundaries','Equipment storage areas','Medium foot traffic and light wheeled traffic environments'],
      specs: [['Thickness','0.9mm'],['Roll size','50mm x 30m'],['Colours','12, including five diagonal hazard patterns'],['Warranty','2 years'],['Traffic rating','Medium foot traffic, light wheeled traffic'],['Environment','Internal only'],['Edges','Square cut'],['Installation','Peel and stick, no curing time']],
      related: ['lean-line-570', 'mightyline-tape', 'external-tape']
    },

    'lean-line-570': {
      keyMetrics: [['Thickness','0.5mm'],['Traffic rating','Low'],['Warranty','1 year']],
      group: 'tape',
      slug: 'lean-line-570-floor-marking-tape-50mm-x-30m-roll',
      canonical: 'https://cotewell.com.au/product/lean-line-570-floor-marking-tape-50mm-x-30m-roll/',
      shortName: 'Lean Line 570',
      breadcrumb: 'Lean Line 570',
      title: 'Lean Line 570 Floor Marking Tape | 50mm x 30m | Cotewell',
      descriptionMeta: 'Lean Line 570 is a 0.5mm low-traffic floor marking tape for indoor walkways, pallet bays and workstations. 12 colours, 50mm x 30m rolls, from $79 + GST.',
      eyebrow: 'Entry-level floor marking tape',
      titleHtml: 'Lean Line 570<br><em>Floor Marking</em><br>Tape',
      longTitle: true,
      cardType: 'Low traffic · 0.5mm',
      cardCopy: 'An easy-to-install-yourself tape for low traffic areas, walkways, storage locations and workstations.',
      badge: '0.5mm · from $79',
      tag: '0.5mm · 50mm x 30m roll',
      description: 'The Lean Line 570 Floor Tape is a fast and effective way to create clear visual boundaries throughout your facility, though it is only recommended for low traffic applications. It helps define work areas, walkways, storage locations and equipment zones without the downtime or mess of painted lines.',
      descriptionSecondary: 'A fast, flexible option for facilities that want clear visual management without the downtime or mess of painted lines.',
      colours: LEAN_COLOURS,
      widths: ['50mm'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/Lean-Line-570-No-BG-Yellow.png",
        white: "assets/img/Lean-Line-570-No-BG-White.png",
        red: "assets/img/Lean-Line-570-No-BG-Red-.png",
        blue: "assets/img/Lean-Line-570-No-BG-Blue.png",
        green: "assets/img/Lean-Line-570-No-BG-Green-.png",
        orange: "assets/img/Lean-Line-570-No-BG-Orange.png",
        black: "assets/img/Lean-Line-570-No-BG-Black.png",
        'diagonal-black-yellow': "assets/img/Lean-Line-570-No-BG-Yellow-Black.png",
        'diagonal-black-white': "assets/img/Lean-Line-960-No-BG-Black-White.png",
        'diagonal-red-white': "assets/img/Lean-Line-570-No-BG-Red-White.png",
        'diagonal-green-white': "assets/img/Lean-Line-960-No-BG-Green-White.png",
        'diagonal-orange-black': "assets/img/Lean-Line-960-No-BG-Black-Orange.png"
      },
      prices: { 'default|50mm': 79 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Low traffic only. If forklifts cross the line, specify Lean Line 960 or MightyLine instead. Call <a href="tel:1300590505">1300 590 505</a> if you are unsure.',
      featuresTitle: 'Lay out the plan<br>before you commit.',
      featuresIntro: 'A fast, flexible option for organising a workplace through clear visual management in low traffic areas.',
      features: [
        ['0.5mm thick', 'Low-range marking tape for indoor, low traffic use.'],
        ['Peel-and-stick install', 'Quick installation with no production downtime.'],
        ['1-year warranty', 'Matched to the low-traffic applications it suits.'],
        ['Square-cut edges', 'Clean, professional finish on straight runs.'],
        ['Bright colours', 'Twelve colours and patterns for maximum visibility.'],
        ['Easily replaced', 'Removes cleanly when the layout changes.']
      ],
      notes: [
        'Not recommended for rough, damaged or porous concrete',
        'Heavy forklift turning or dragging pallets across the tape may reduce lifespan',
        'Ensure the surface is clean, dry and oil free before installation',
        'Do not apply tape lengthways along floor joints',
        'Not suitable for external use',
        'Do not apply over existing paint or tape',
        'Can be cut to any length to suit your facility layout'
      ],
      applications: ['Walkways','Storage locations','Pallet bays','Equipment parking areas','Production lines','Workstations'],
      specs: [['Thickness','0.5mm'],['Roll size','50mm x 30m'],['Colours','12, including five diagonal hazard patterns'],['Warranty','1 year'],['Traffic rating','Low traffic, foot traffic'],['Environment','Internal only'],['Edges','Square cut'],['Installation','Peel and stick, no curing time']],
      related: ['lean-line-960', 'mightyline-tape', 'arrow']
    },

    'external-tape': {
      keyMetrics: [['Thickness','1.3mm'],['Traffic rating','Vehicle + pedestrian'],['Warranty','3 years']],
      group: 'tape',
      slug: 'cotewell-external-line-marking-tape',
      canonical: 'https://cotewell.com.au/product/cotewell-external-line-marking-tape/',
      shortName: 'External Line Marking Tape',
      breadcrumb: 'External Line Marking Tape',
      title: 'External Line Marking Tape | Outdoor Floor Tape | Cotewell',
      descriptionMeta: 'Outdoor line marking tape for asphalt and concrete. 1.3mm thick, P5 slip rated, reflective and UV resistant, with a 3-year warranty. Five colours.',
      eyebrow: 'Outdoor line marking tape',
      titleHtml: 'Cotewell<br><em>External Line</em><br>Marking Tape',
      longTitle: true,
      cardType: 'Outdoor · P5 slip rated',
      cardCopy: 'A 1.3mm reflective, UV-resistant tape for car parks, vehicle lanes and outdoor walkways on asphalt or concrete.',
      badge: 'Outdoor · reflective',
      tag: 'P5 slip rated · reflective',
      description: 'The Cotewell External Floor Tape is engineered to withstand the conditions outdoor environments throw at it. From rain and UV exposure to heavy pedestrian traffic, it gives a durable, highly visible alternative to painted lines on asphalt and concrete surfaces.',
      descriptionSecondary: 'One of the thickest quality external tapes on the market at 1.3mm, with a P5 slip rating and a reflective face for low-light and night-time visibility.',
      colours: ['yellow', 'white', 'red', 'blue', 'green'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/Cotewell-External-Tape-Yellow.png",
        white: "assets/img/Cotewell-External-Tape-Yellow.png",
        red: "assets/img/Cotewell-External-Tape-Yellow.png",
        blue: "assets/img/Cotewell-External-Tape-Yellow.png",
        green: "assets/img/Cotewell-External-Tape-Yellow.png"
      },
      photos: [
        { src: UP + '2022/07/External-Tape-1024x768.jpg', thumb: UP + '2022/07/External-Tape-300x225.jpg', alt: 'Cotewell external line marking tape on an outdoor asphalt surface' },
        { src: UP + '2022/07/External-Tape-Crossing-1024x768.jpg', thumb: UP + '2022/07/External-Tape-Crossing-300x225.jpg', alt: 'External line marking tape marking a pedestrian crossing' },
        { src: UP + '2022/07/External-Green-Red-1024x768.jpg', thumb: UP + '2022/07/External-Green-Red-300x225.jpg', alt: 'Green and red external line marking tape on concrete' },
      ],
      prices: { 'default|-': 259 },
      priceLabel: 'Price per roll',
      purchaseNote: 'Surface preparation drives the result outdoors. Call <a href="tel:1300590505">1300 590 505</a> before ordering so we can check the surface is suitable.',
      featuresTitle: 'Marking that survives<br>the weather.',
      featuresIntro: 'The only tape in the range specified for outdoor asphalt and concrete. Everything else on this page is internal only.',
      features: [
        ['Built for outdoors', 'Designed specifically for external asphalt and concrete surfaces.'],
        ['1.3mm thick', 'Up to 7 times thicker than standard tapes and paint.'],
        ['P5 slip rating', 'Slip-rated surface for pedestrian safety in the wet.'],
        ['Reflective face', 'Improves visibility in low-light and night-time conditions.'],
        ['Weather and UV resistant', 'Holds colour and adhesion through rain and sun exposure.'],
        ['3-year warranty', 'Backed for outdoor service life.'],
        ['No downtime', 'Peel-and-stick install with no curing or line closure.'],
        ['Cut to any shape', 'Can be cut to length or shape to suit the site layout.']
      ],
      notes: [
        'Not for internal use',
        'Surface preparation is essential for maximum adhesion and lifespan',
        'Do not apply over existing paint, tape or contaminated surfaces',
        'Not suitable for loose, damaged or heavily textured surfaces',
        'Continuous heavy turning, wheel spinning or dragging over the tape may reduce lifespan'
      ],
      applications: ['Hazard identification','Exclusion zones','Keep-clear areas','Emergency access routes','Forklift routes','One-way traffic systems','Vehicle lanes','Shared traffic zones','Fire equipment boundaries','Pedestrian walkways','Pallet storage bays','Equipment parking areas','Material storage zones','Loading and unloading areas'],
      specs: [['Thickness','1.3mm'],['Slip rating','P5'],['Colours','Yellow, white, red, blue and green'],['Warranty','3 years'],['Visibility','Reflective face for low light'],['Environment','External asphalt and concrete only'],['Resistance','Weather and UV resistant'],['Installation','Peel and stick, no curing time']],
      related: ['mightyline-tape', 'lean-line-960', 'stop-sign']
    },

    /* ---------------------------------------------------------- SHAPES */
    'angle-shape': {
      keyMetrics: [['Size','152 x 50 / 75mm'],['Colours','7'],['Sold as','Individual']],
      group: 'shapes',
      slug: 'mightyline-5s-angle-shape',
      canonical: 'https://cotewell.com.au/product/mightyline-5s-angle-shape/',
      shortName: 'MightyLine 5S Angle Shape',
      breadcrumb: '5S Angle Shape',
      title: 'MightyLine 5S Angle Shape | Pallet Bay Corner Markers | Cotewell',
      descriptionMeta: 'L-shaped 5S floor markers that define pallet bays and storage locations using far less material than taped boxes. Seven colours, 50mm and 75mm widths.',
      eyebrow: '5S floor marking shape',
      titleHtml: 'MightyLine<br><em>5S Angle</em><br>Shape',
      cardType: 'Pallet bays · corner markers',
      cardCopy: 'L-shaped corner markers that define pallet bays with a fraction of the material a taped box needs.',
      badge: 'From $8.50 + GST',
      tag: '152 x 50mm and 152 x 75mm',
      description: 'MightyLine 5S Angle Shapes are a simple way to clearly define pallet locations, storage areas and designated equipment zones throughout your facility. Rather than marking out complete boxes with tape, these durable L-shaped markers identify the corners of each pallet bay, giving clear visual guidance while using less material.',
      descriptionSecondary: 'Ideal for implementing or maintaining a 5S workplace: they improve organisation, reduce clutter and make it easier for staff to return pallets and equipment to the right location.',
      colours: SHAPE_COLOURS,
      widths: ['50mm', '75mm'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/angle-shape-yellow.png",
        blue: "assets/img/angle-shape-blue.png",
        green: "assets/img/angle-shape-green.png",
        orange: "assets/img/angle-shape-orange.png",
        red: "assets/img/angle-shape-red.png",
        black: "assets/img/angle-shape-black.png",
        white: "assets/img/angle-shape-white.png"
      },
      prices: { 'default|50mm': 8.5, 'default|75mm': 12.5 },
      priceLabel: 'Price each',
      purchaseNote: 'Four angles mark one pallet bay. Call <a href="tel:1300590505">1300 590 505</a> and we will help you work out quantities from your rack layout.',
      featuresTitle: 'Mark the corners,<br>not the whole box.',
      featuresIntro: 'The fastest way to lay out a 5S floor: four corner markers per bay instead of a full taped rectangle.',
      features: [
        ['Defines pallet bays', 'Creates clearly defined pallet and storage locations.'],
        ['Supports 5S and Lean', 'Purpose-built for workplace organisation programmes.'],
        ['Faster than taped boxes', 'Quicker and easier to install than taping full rectangles.'],
        ['Uses less material', 'Excellent visibility from a fraction of the tape.'],
        ['Industrial-grade build', 'Durable construction for busy industrial environments.'],
        ['3-year warranty', 'Removable if your layout changes.']
      ],
      notes: [
        'Internal use only, on clean, dry, smooth floor surfaces',
        'Not for outdoor environments or areas exposed to prolonged moisture',
        'May wear early where pallets are dragged or steel pallet feet scrape',
        'Adhesion and longevity depend on correct surface preparation',
        'Removable and replaceable, though some adhesive residue may need cleaning',
        'Available in 2 sizes: 152 x 50mm and 152 x 75mm',
        'Colours: yellow, blue, green, orange, red, black and white',
        'Combines with T-Shapes, Arrows and Footprints for a complete system'
      ],
      applications: ['Pallet storage bays','Equipment parking locations','Workstations','Staging areas','Material storage zones','Warehouse and manufacturing facilities'],
      specs: [['Sizes','152 x 50mm and 152 x 75mm'],['Colours','Yellow, blue, green, orange, red, black, white'],['Warranty','3 years'],['Sold as','Individual markers'],['Environment','Internal only, clean and dry floors'],['Installation','Peel and stick']],
      related: ['t-shape', 'arrow', 'mightyline-tape']
    },

    't-shape': {
      keyMetrics: [['Size','152 x 152mm'],['Colours','7'],['Sold as','Individual']],
      group: 'shapes',
      slug: 'mightyline-5s-t-shape',
      canonical: 'https://cotewell.com.au/product/mightyline-5s-t-shape/',
      shortName: 'MightyLine 5S T Shape',
      breadcrumb: '5S T Shape',
      title: 'MightyLine 5S T Shape | Floor Marking T Markers | Cotewell',
      descriptionMeta: 'MightyLine 5S T shapes for pallet and item marking in 5S environments. 152 x 152mm in 50mm and 75mm widths, seven colours, 3-year limited warranty.',
      eyebrow: '5S floor marking shape',
      titleHtml: 'MightyLine<br><em>5S T</em><br>Shape',
      cardType: 'Shared corners · 5S layouts',
      cardCopy: 'T markers for where two bays meet, so a run of pallet locations reads as one continuous grid.',
      badge: 'From $8.50 + GST',
      tag: '50mm and 75mm widths',
      description: 'MightyLine 5S T-Shapes make it easy to create clearly defined pallet bays, storage locations and work areas without marking complete boxes on the floor. Available in blue, yellow, green, orange, red, black and white, in 50mm and 75mm widths.',
      descriptionSecondary: 'Built from durable Mighty Line material, they are ideal for creating multiple adjoining pallet or storage bays and help maintain consistent layouts in busy industrial workplaces.',
      colours: SHAPE_COLOURS,
      widths: ['50mm', '75mm'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/t-shape-yellow.png",
        blue: "assets/img/t-shape-blue.png",
        green: "assets/img/t-shape-green.png",
        orange: "assets/img/t-shape-orange.png",
        red: "assets/img/t-shape-red.png",
        black: "assets/img/t-shape-black.png",
        white: "assets/img/t-shape-white.png"
      },
      prices: { 'default|50mm': 8.5, 'default|75mm': 12.5 },
      priceLabel: 'Price each',
      purchaseNote: 'Most sites order T shapes and angle shapes together. Call <a href="tel:1300590505">1300 590 505</a> and we will work out the split from your layout.',
      featuresTitle: 'For where two<br>bays meet.',
      featuresIntro: 'Angles mark the ends of a run. T shapes mark every division in between.',
      features: [
        ['Built for 5S environments', 'Designed for pallet and item marking in Lean workplaces.'],
        ['152 x 152mm footprint', 'Available in 50mm and 75mm stroke widths.'],
        ['Seven colours', 'Matches the rest of the MightyLine shape range.'],
        ['3-year limited warranty', 'Same warranty as the MightyLine tape range.'],
        ['Peel and stick', 'No downtime and no curing required.'],
        ['Removable', 'Lifts cleanly when the layout changes.']
      ],
      notes: [
        'Internal use only, on clean, dry, smooth floor surfaces',
        'Adhesion and longevity depend on correct surface preparation',
        'May wear early where pallets are dragged across the marker',
        'Available in 50mm and 75mm widths'
      ],
      applications: APPLICATION_LIST,
      specs: [['Widths','50mm and 75mm'],['Colours','Yellow, blue, green, orange, red, black, white'],['Best for','Adjoining pallet or storage bays'],['Sold as','Individual markers'],['Environment','Internal only'],['Installation','Peel and stick']],
      related: ['angle-shape', 'arrow', 'footprints']
    },

    'arrow': {
      keyMetrics: [['Size','254 x 152mm'],['Colours','5'],['Sold as','Individual']],
      group: 'shapes',
      slug: 'mightyline-5s-arrow',
      canonical: 'https://cotewell.com.au/product/mightyline-5s-arrow/',
      shortName: 'MightyLine 5S Arrow',
      breadcrumb: '5S Arrow',
      title: 'MightyLine 5S Arrow | Floor Marking Arrows | Cotewell',
      descriptionMeta: 'Patented MightyLine floor marking arrows, 254mm long and 152mm at the widest point. Direct traffic flow and point to emergency exits. Five colours.',
      eyebrow: '5S floor marking shape',
      titleHtml: 'MightyLine<br><em>5S</em><br>Arrow',
      cardType: 'Direction · egress routes',
      cardCopy: 'Peel-and-stick arrows that direct pedestrian and vehicle movement along designated routes.',
      badge: '$12.50 + GST each',
      tag: '254mm long · 152mm wide',
      description: 'MightyLine 5S Arrows are a simple, highly visible way to direct pedestrian and vehicle movement through busy industrial workplaces. Available in yellow, green, red, blue and orange, each arrow is 254mm long and 152mm wide.',
      descriptionSecondary: 'Built with Mighty Line heavy-duty construction, they help create clear traffic flow, reinforce designated routes and support a safer, more organised 5S workplace.',
      colours: ['yellow', 'green', 'red', 'blue', 'orange'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/arrow-shape-yellow.png",
        green: "assets/img/arrow-shape-green.png",
        red: "assets/img/arrow-shape-red.png",
        blue: "assets/img/arrow-shape-blue.png",
        orange: "assets/img/arrow-shape-orange.png"
      },
      prices: { 'default|-': 12.5 },
      priceLabel: 'Price each',
      purchaseNote: 'Available in five colours so arrows can be matched to your existing visual management system. Call <a href="tel:1300590505">1300 590 505</a> if you want the colour scheme checked.',
      featuresTitle: 'Point people<br>the right way.',
      featuresIntro: 'Reinforces designated routes and one-way systems so forklift and pedestrian flow stays predictable.',
      features: [
        ['254mm long', '152mm wide at the widest point for visibility down an aisle.'],
        ['Emergency egress', 'Points pedestrians towards safety in emergency situations.'],
        ['Traffic flow', 'Marks one-way routes and directional aisles.'],
        ['Five colours', 'Yellow, green, red, blue and orange.'],
        ['Patented MightyLine build', 'Same durable construction as the tape range.'],
        ['Peel and stick', 'Install in seconds with no downtime.']
      ],
      notes: [
        'Internal use only, on clean, dry, smooth floor surfaces',
        'Ensure the surface is free from dust, grease and contaminants before installation',
        'May wear early where pallets are dragged across the marker'
      ],
      applications: APPLICATION_LIST,
      specs: [['Length','254mm'],['Width','152mm at the widest point'],['Colours','Yellow, green, red, blue, orange'],['Sold as','Individual markers'],['Environment','Internal only'],['Installation','Peel and stick']],
      related: ['footprints', 'angle-shape', 'stop-sign']
    },

    'footprints': {
      keyMetrics: [['Size','241 x 89mm'],['Colours','5'],['Sold as','Pair']],
      group: 'shapes',
      slug: 'small-footprints-pair',
      canonical: 'https://cotewell.com.au/product/small-footprints-pair/',
      shortName: 'Small Footprints (Pair)',
      breadcrumb: 'Small Footprints',
      title: 'Mighty Line Small Footprints (Pair) | Walkway Markers | Cotewell',
      descriptionMeta: 'Patented Mighty Line footprint floor stickers, 241mm long and 89mm wide. Show pedestrians the safe walkway. Five colours.',
      eyebrow: 'Pedestrian walkway marker',
      titleHtml: 'Mighty Line<br><em>Small Footprints</em><br>(Pair)',
      longTitle: true,
      cardType: 'Walkways · sold in pairs',
      cardCopy: 'Footprint decals laid in the direction of travel to show pedestrians where the safe aisle runs.',
      badge: '$14.70 + GST per pair',
      tag: '241mm long · 89mm wide',
      description: 'Patented Mighty Line floor marking footprint stickers in yellow, red, green, blue and orange, supplied in pairs. Each footprint is 241mm long and 89mm wide.',
      descriptionSecondary: 'Peel and stick them in the direction of the safety aisle-way to reinforce designated pedestrian walkways and improve guidance, safety and workplace organisation.',
      colours: ['yellow', 'green', 'red', 'blue', 'orange'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/footprint-shape-yellow.png",
        green: "assets/img/footprint-shape-green.png",
        red: "assets/img/footprint-shape-red.png",
        blue: "assets/img/footprint-shape-blue.png",
        orange: "assets/img/footprint-shape-orange.png"
      },
      prices: { 'default|-': 14.7 },
      priceLabel: 'Price per pair',
      purchaseNote: 'Sold as a pair. Call <a href="tel:1300590505">1300 590 505</a> and we will help you work out spacing along the walkway.',
      featuresTitle: 'The walkway,<br>read at a glance.',
      featuresIntro: 'A line tells people where the aisle is. Footprints tell them which way to walk down it.',
      features: [
        ['241 x 89mm', 'Sized to read clearly without dominating the aisle.'],
        ['Supplied in pairs', 'Laid in the direction of travel down the walkway.'],
        ['Marks safe walkways', 'Shows pedestrians the designated route through the site.'],
        ['Five colours', 'Yellow, green, red, blue and orange.'],
        ['Patented MightyLine build', 'Same durable construction as the tape range.'],
        ['Peel and stick', 'Install in seconds with no downtime.']
      ],
      notes: [
        'Internal use only, on clean, dry, smooth floor surfaces',
        'Surface must be free from dust, grease and contaminants before installation',
        'Heavy dragging of pallets or equipment over the footprints may reduce lifespan',
        '241mm long and 89mm wide'
      ],
      applications: APPLICATION_LIST,
      specs: [['Length','241mm'],['Width','89mm'],['Sold as','Pair'],['Colours','Yellow, green, red, blue, orange'],['Environment','Internal only'],['Installation','Peel and stick']],
      related: ['freezer-footprints', 'arrow', 'lean-line-570']
    },

    'freezer-footprints': {
      keyMetrics: [['Size','241 x 89mm'],['Colours','3'],['Sold as','Pair']],
      group: 'shapes',
      slug: 'mighty-line-x-treme-freezer-small-footprints-pair',
      canonical: 'https://cotewell.com.au/product/mighty-line-x-treme-freezer-small-footprints-pair/',
      shortName: 'X-Treme Freezer Footprints (Pair)',
      breadcrumb: 'Freezer Footprints',
      title: 'X-Treme Freezer Footprints (Pair) | Cold Room Markers | Cotewell',
      descriptionMeta: 'Freezer-rated footprint floor stickers for cold rooms and sub-zero storage, where standard markings fail. 241 x 89mm, supplied in pairs, three colours.',
      eyebrow: 'Cold store walkway marker',
      titleHtml: 'X-Treme Freezer<br><em>Small Footprints</em><br>(Pair)',
      longTitle: true,
      cardType: 'Sub-zero · sold in pairs',
      cardCopy: 'Footprint markers with adhesive built for freezers and cold rooms, where standard decals lift.',
      badge: '$20.00 + GST per pair',
      tag: 'Sub-zero adhesive',
      description: 'The Mighty Line X-Treme Freezer Footprints give a simple, highly visible way to guide pedestrian traffic through cold rooms and freezer facilities. They are designed specifically for sub-zero environments, where they hold adhesion in conditions that cause standard floor markings to fail.',
      descriptionSecondary: 'Peel and stick them in the direction of the safety aisle-way, exactly as you would the standard footprints, and the route stays readable through the cold chain.',
      colours: ['yellow', 'white', 'red'],
      defaultColour: 'yellow',
      images: {
        yellow: "assets/img/footprint-shape-yellow.png",
        white: "assets/img/footprint-shape-white.png",
        red: "assets/img/footprint-shape-red.png"
      },
      prices: { 'default|-': 20 },
      priceLabel: 'Price per pair',
      purchaseNote: 'Install onto dry, frost-free floors. Call <a href="tel:1300590505">1300 590 505</a> to plan the install window around your cold chain.',
      featuresTitle: 'Adhesion where<br>standard decals lift.',
      featuresIntro: 'Same footprint, different adhesive. This is the version to specify anywhere below freezing.',
      features: [
        ['Sub-zero adhesion', 'Holds in freezer and cold room conditions.'],
        ['Freezer and cold room use', 'Designed specifically for chilled and frozen environments.'],
        ['Highly visible', 'Clear footprint design for low-contrast cold stores.'],
        ['Peel and stick', 'Quick installation with no curing time.'],
        ['Reinforces walkways', 'Marks the designated pedestrian route through the cold chain.'],
        ['Easy to replace', 'Removes cleanly when the layout changes.']
      ],
      notes: [
        'Designed for indoor freezer and cold room applications only',
        'Surface must be clean, dry and free from contaminants before installation',
        'Heavy dragging of pallets or equipment over the footprints may reduce lifespan',
        '241mm long and 89mm wide'
      ],
      applications: ['Cold rooms','Freezer facilities','Food processing plants','Distribution centres','Warehouse walkways','Pedestrian routes','Pick and pack areas','Chilled storage facilities'],
      specs: [['Length','241mm'],['Width','89mm'],['Sold as','Pair'],['Colours','Yellow, white and red'],['Environment','Freezer and cold room, internal'],['Installation','Peel and stick']],
      related: ['freezer-tape', 'footprints', 'arrow']
    },

    /* ---------------------------------------------------------- SIGNS */
    'stop-sign': {
      keyMetrics: [['Size','910mm wide'],['Message','STOP'],['Finish','Laminated']],
      group: 'signs',
      slug: 'mightyline-floor-sticker-stop-sign',
      canonical: 'https://cotewell.com.au/product/mightyline-floor-sticker-stop-sign/',
      shortName: 'Stop Sign Floor Sticker',
      breadcrumb: 'Stop Sign Floor Sticker',
      title: 'Stop Sign Floor Sticker | 910mm Safety Floor Sign | Cotewell',
      descriptionMeta: 'A 910mm laminated stop sign floor sticker for warehouse intersections and forklift crossings. Durable peel-and-stick install for indoor industrial floors.',
      eyebrow: 'Safety floor sign',
      titleHtml: 'MightyLine<br><em>Stop Sign</em><br>Floor Sticker',
      longTitle: true,
      cardType: 'Intersections · 910mm',
      cardCopy: 'A 910mm stop sign on the floor, for intersections and forklift crossings where a wall sign is missed.',
      badge: '910mm wide',
      tag: '910mm wide · laminated',
      description: 'The MightyLine Stop Sign Floor Sticker gives a bold visual reminder for pedestrians and vehicle operators to stop and assess their surroundings before proceeding. It suits warehouse intersections, forklift crossings and other high-risk areas.',
      descriptionSecondary: 'It reinforces workplace safety procedures while reducing the need for constant verbal reminders, and it sits in the one place people are already looking: the floor ahead of them.',
      colours: [],
      defaultColour: null,
      images: { _default: UP + '2026/04/Stop-Sign-Sticker.png' },
      prices: { 'default|-': 304 },
      priceLabel: 'Price each',
      purchaseNote: 'Other designs and custom messages are available on request. Call <a href="tel:1300590505">1300 590 505</a> to discuss artwork.',
      featuresTitle: 'The sign people<br>actually look at.',
      featuresIntro: 'Wall-mounted signage gets missed. A 910mm floor sign sits in the operator line of sight at an intersection.',
      features: [
        ['910mm wide', 'Large enough to read from an approaching forklift.'],
        ['Highly visible design', 'Standard stop sign format needs no explanation.'],
        ['Laminated finish', 'Durable laminate for long-lasting performance underfoot.'],
        ['Reinforces procedure', 'Backs up your traffic management plan at the point of risk.'],
        ['Peel and stick', 'Quick installation with no production downtime.'],
        ['Indoor industrial use', 'Suits a wide range of internal industrial environments.']
      ],
      notes: [
        'Designed for internal use only',
        'Not recommended for rough, damaged or uneven surfaces',
        'Excessive forklift traffic or dragging heavy objects over the sticker may reduce lifespan',
        'Ensure the surface is clean and dry before installation for maximum adhesion',
        '910mm wide'
      ],
      applications: ['Intersections','Forklift crossings','Pedestrian walkways','Entrances and exits','Production areas','Loading docks','High-risk traffic zones'],
      specs: [['Width','910mm'],['Finish','Laminated'],['Message','STOP'],['Environment','Internal only'],['Custom designs','Available on request'],['Installation','Peel and stick']],
      related: ['forklift-sign', 'keep-clear', 'mightyline-tape']
    },

    'forklift-sign': {
      keyMetrics: [['Size','610mm wide'],['Message','Warning Forklift Traffic'],['Finish','Industrial strength']],
      group: 'signs',
      slug: 'mightyline-floor-sticker-warning-forklift-traffic',
      canonical: 'https://cotewell.com.au/product/mightyline-floor-sticker-warning-forklift-traffic/',
      shortName: 'Warning Forklift Traffic Sticker',
      breadcrumb: 'Warning Forklift Traffic',
      title: 'Warning Forklift Traffic Floor Sign | 610mm | Cotewell',
      descriptionMeta: 'A 610mm industrial-strength Warning Forklift Traffic floor sign for 5S facilities, lean operations and warehouse safety. Other designs on request.',
      eyebrow: 'Safety floor sign',
      titleHtml: 'MightyLine<br><em>Warning Forklift</em><br>Traffic Sticker',
      longTitle: true,
      cardType: 'Shared aisles · 610mm',
      cardCopy: 'A 610mm warning sign for the point where pedestrians walk into a forklift route.',
      badge: '610mm wide',
      tag: '610mm wide · industrial strength',
      description: 'Warning Forklift Traffic, MightyLine floor sign, industrial strength, 610mm wide. MightyLine safety floor signs are a strong floor marking tool for 5S facilities, lean operations and general warehouse safety.',
      descriptionSecondary: 'Place it where a pedestrian route enters a shared aisle, so the warning is in front of people before they step into the traffic lane. Other designs are available on request.',
      colours: [],
      defaultColour: null,
      images: { _default: "assets/img/warning-forklift-sticker.png" },
      prices: { 'default|-': 195 },
      priceLabel: 'Price each',
      purchaseNote: 'Other designs and custom messages are available on request. Call <a href="tel:1300590505">1300 590 505</a> to discuss artwork.',
      featuresTitle: 'Warn people before<br>they step in.',
      featuresIntro: 'The highest-value place for this sign is the threshold, not the middle of the aisle.',
      features: [
        ['610mm wide', 'Reads clearly from walking pace on approach.'],
        ['Industrial strength', 'Built for the traffic of a working warehouse floor.'],
        ['5S and lean ready', 'Fits straight into an existing visual management system.'],
        ['Peel and stick', 'Quick install with no production downtime.'],
        ['Other designs available', 'Custom messages produced on request.'],
        ['Internal industrial use', 'Suits warehouses, workshops and production facilities.']
      ],
      notes: [
        'Designed for internal use only',
        'Not recommended for rough, damaged or uneven surfaces',
        'Excessive forklift traffic or dragging heavy objects over the sticker may reduce lifespan',
        'Ensure the surface is clean and dry before installation for maximum adhesion',
        '610mm wide'
      ],
      applications: APPLICATION_LIST,
      specs: [['Width','610mm'],['Message','Warning Forklift Traffic'],['Finish','Industrial strength'],['Environment','Internal only'],['Custom designs','Available on request'],['Installation','Peel and stick']],
      related: ['stop-sign', 'keep-clear', 'footprints']
    },

    'keep-clear': {
      keyMetrics: [['Size','610mm wide'],['Message','Keep Clear, Do Not Block'],['Finish','Laminated']],
      group: 'signs',
      slug: 'mightyline-floor-sticker-keep-clear-do-not-block',
      canonical: 'https://cotewell.com.au/product/mightyline-floor-sticker-keep-clear-do-not-block/',
      shortName: 'Keep Clear Do Not Block Sticker',
      breadcrumb: 'Keep Clear Do Not Block',
      title: 'Keep Clear Do Not Block Floor Sticker | 610mm | Cotewell',
      descriptionMeta: 'A 610mm Keep Clear Do Not Block floor sticker for emergency exits, switchboards and fire equipment. Durable laminated finish, other designs on request.',
      eyebrow: 'Safety floor sign',
      titleHtml: 'MightyLine<br><em>Keep Clear</em><br>Floor Sticker',
      longTitle: true,
      cardType: 'Access points · 610mm',
      cardCopy: 'Marks the floor in front of exits, switchboards and fire equipment so nothing gets stored there.',
      badge: '610mm wide',
      tag: '610mm wide · laminated',
      description: 'The Keep Clear, Do Not Block Floor Sticker is industrial strength and holds up to a medium amount of traffic. It gives an instant visual reminder to keep important access points free from obstruction.',
      descriptionSecondary: 'It suits emergency exits, electrical switchboards, fire equipment and access zones, clearly communicating where items should never be stored. Other designs are available on request.',
      colours: [],
      defaultColour: null,
      images: { _default: "assets/img/Keep-Clear-Sticker.png" },
      prices: { 'default|-': 195 },
      priceLabel: 'Price each',
      purchaseNote: 'Other designs and custom messages are available on request. Call <a href="tel:1300590505">1300 590 505</a> to discuss artwork.',
      featuresTitle: 'Stops the floor<br>becoming storage.',
      featuresIntro: 'Most blocked switchboards and exits are not deliberate. A marked floor removes the ambiguity.',
      features: [
        ['610mm wide', 'Large enough to define the zone that must stay clear.'],
        ['Clear safety message', 'Keep Clear, Do Not Block, with no interpretation needed.'],
        ['Laminated finish', 'Durable laminate for long-lasting performance.'],
        ['Medium traffic rated', 'Industrial strength for general warehouse floors.'],
        ['Peel and stick', 'Quick install with no production downtime.'],
        ['Other designs available', 'Custom messages produced on request.']
      ],
      notes: [
        'Designed for internal use only',
        'Not recommended for rough, damaged or uneven surfaces',
        'Excessive forklift traffic or dragging heavy objects over the sticker may reduce lifespan',
        'Ensure the surface is clean and dry before installation for maximum adhesion',
        '610mm wide'
      ],
      applications: ['Emergency exits','Fire extinguishers and hose reels','Electrical switchboards','First aid stations','Safety equipment','Access panels','Walkways'],
      specs: [['Width','610mm'],['Message','Keep Clear, Do Not Block'],['Finish','Laminated'],['Traffic rating','Medium'],['Environment','Internal only'],['Custom designs','Available on request'],['Installation','Peel and stick']],
      related: ['stop-sign', 'forklift-sign', 'external-tape']
    }
  };

  // Live-checked copy reconciled before mirroring the revised mockups.
  var reviewedProductCopy = {
  "angle-shape": {
    "description": "Durable corner markers for pallet bays, storage locations and equipment zones. Create clear 5S layouts using less material than full floor outlines.",
    "descriptionSecondary": "",
    "cardCopy": "Durable corner markers for pallet bays, storage locations and equipment zones. Create clear 5S layouts using less material than full floor outlines.",
    "features": [
      [
        "",
        "Heavy-duty construction withstands industrial wheeled traffic"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Defines bay corners using less material than complete boxes"
      ],
      [
        "",
        "Easy to clean, replace or reposition as layouts change"
      ],
      [
        "",
        "3-year warranty"
      ]
    ],
    "notes": [
      "For internal use only",
      "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
      "Surface preparation is essential for maximum adhesion",
      "Wheel spinning, sharp turning and dragged equipment may cause damage",
      "Dimensions: 152 × 50mm or 152 × 75mm"
    ],
    "applications": [
      "Pallet bays",
      "Storage locations",
      "Equipment parking",
      "Workstations",
      "Pick and pack areas",
      "Production zones",
      "Manufacturing",
      "Distribution centres"
    ]
  },
  "mightyline-tape": {
    "description": "Premium 1.3mm floor tape for heavy forklift and industrial wheeled traffic. Bevelled edges, quick installation and low maintenance make it a flexible alternative to painted lines.",
    "descriptionSecondary": "",
    "cardCopy": "Premium 1.3mm floor tape for heavy forklift and industrial wheeled traffic. Bevelled edges, quick installation and low maintenance make it a flexible alternative to painted lines.",
    "features": [
      [
        "",
        "1.3mm thick, up to seven times thicker than many standard floor tapes"
      ],
      [
        "",
        "Withstands heavy industrial forklift and wheeled traffic"
      ],
      [
        "",
        "Bevelled edges minimise lifting and provide a smooth transition"
      ],
      [
        "",
        "DIY peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Removes with minimal residue; damaged sections are easy to repair"
      ],
      [
        "",
        "Up to 60% lower ongoing maintenance than painted line marking"
      ],
      [
        "",
        "Smooth, easy-to-clean surface"
      ],
      [
        "",
        "Suitable for pharmaceutical and food production environments, with no contamination during installation"
      ],
      [
        "",
        "3-year limited adhesion warranty"
      ],
      [
        "",
        "Custom shapes, barcodes and symbols available on request"
      ]
    ],
    "notes": [
      "For internal applications above 10°C only",
      "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
      "Do not apply lengthways over floor joints",
      "Not recommended for rough, damaged or uneven concrete",
      "Continuous pallet dragging and heavy wheel spinning may reduce lifespan",
      "Warranty does not cover damage",
      "30m rolls; 50mm and 100mm widths"
    ],
    "applications": [
      "Pedestrian walkways",
      "Forklift routes",
      "Pallet bays",
      "Equipment parking",
      "Material storage",
      "Workstations",
      "Production lines",
      "Keep-clear areas",
      "Safety and exclusion zones"
    ]
  },
  "footprints": {
    "description": "Highly visible footprints guide pedestrians along designated routes and separate pedestrian movement from operational areas. Supplied as a pair, each footprint is 241 × 89mm.",
    "descriptionSecondary": "",
    "cardCopy": "Highly visible footprints guide pedestrians along designated routes and separate pedestrian movement from operational areas. Supplied as a pair, each footprint is 241 × 89mm.",
    "features": [
      [
        "",
        "Durable industrial construction with a highly visible footprint design"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Clearly identifies pedestrian routes"
      ],
      [
        "",
        "Easy to clean, replace or reposition"
      ],
      [
        "",
        "Supports Lean and 5S visual management"
      ]
    ],
    "notes": [
      "For internal use only",
      "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
      "Surface preparation is essential for maximum adhesion",
      "Heavy wheel spinning, sharp turning or dragged equipment may cause damage"
    ],
    "applications": [
      "Pedestrian walkways",
      "Warehouse aisles",
      "Safe routes",
      "Production areas",
      "Pick and pack zones",
      "Manufacturing",
      "Distribution centres"
    ]
  },
  "external-tape": {
    "description": "Weather-resistant floor tape for outdoor asphalt and concrete. Built for rain, UV exposure and heavy pedestrian traffic, it creates visible, flexible layouts without painted lines.",
    "descriptionSecondary": "",
    "cardCopy": "Weather-resistant floor tape for outdoor asphalt and concrete. Built for rain, UV exposure and heavy pedestrian traffic, it creates visible, flexible layouts without painted lines.",
    "features": [
      [
        "",
        "Designed for outdoor asphalt and concrete"
      ],
      [
        "",
        "1.3mm thick, up to seven times thicker than standard tapes and paint"
      ],
      [
        "",
        "P5 slip-rated surface"
      ],
      [
        "",
        "Highly reflective for low-light and night-time visibility"
      ],
      [
        "",
        "Weather and UV resistant"
      ],
      [
        "",
        "Peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Easy to remove, replace or cut to custom lengths and shapes"
      ],
      [
        "",
        "3-year warranty"
      ]
    ],
    "notes": [
      "For external use only",
      "Surface preparation is essential for adhesion and lifespan",
      "Do not apply over paint, tape or contaminated surfaces",
      "Not suitable for loose, damaged or heavily textured surfaces",
      "Heavy turning, wheel spinning and dragged equipment may reduce lifespan",
      "25m roll; confirm width when ordering"
    ],
    "applications": [
      "Hazards and exclusion zones",
      "Keep-clear areas",
      "Emergency access",
      "Forklift routes",
      "Vehicle lanes",
      "Shared traffic zones",
      "Fire equipment boundaries",
      "Walkways",
      "Storage bays",
      "Loading areas"
    ]
  },
  "freezer-footprints": {
    "description": "Freezer-grade footprints guide pedestrians through cold rooms and freezer facilities. Designed for sub-zero environments where standard floor markings can fail.",
    "descriptionSecondary": "",
    "cardCopy": "Freezer-grade footprints guide pedestrians through cold rooms and freezer facilities. Designed for sub-zero environments where standard floor markings can fail.",
    "features": [
      [
        "",
        "Designed for freezer and cold room environments"
      ],
      [
        "",
        "Highly visible footprint design"
      ],
      [
        "",
        "Excellent adhesion in sub-zero temperatures"
      ],
      [
        "",
        "Quick peel-and-stick installation"
      ],
      [
        "",
        "Reinforces designated walkways; easy to replace when layouts change"
      ]
    ],
    "notes": [
      "For indoor freezer and cold room applications only",
      "Surface must be clean, dry and free from contaminants",
      "Dragging pallets or equipment over the footprints may reduce lifespan",
      "Each footprint is 241mm long and 89mm wide"
    ],
    "applications": [
      "Cold rooms",
      "Freezer facilities",
      "Food processing",
      "Distribution centres",
      "Warehouse walkways",
      "Pedestrian routes",
      "Pick and pack areas",
      "Chilled storage"
    ]
  },
  "arrow": {
    "description": "Heavy-duty directional arrows create clear routes for pedestrians and vehicles. Reinforce traffic flow and support a safer, more organised 5S workplace.",
    "descriptionSecondary": "",
    "cardCopy": "Heavy-duty directional arrows create clear routes for pedestrians and vehicles. Reinforce traffic flow and support a safer, more organised 5S workplace.",
    "features": [
      [
        "",
        "Highly visible directional arrow"
      ],
      [
        "",
        "Heavy-duty construction withstands industrial wheeled traffic"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Durable, easy-to-clean surface"
      ],
      [
        "",
        "Reinforces traffic flow and visual management"
      ],
      [
        "",
        "Easy to replace or reposition"
      ]
    ],
    "notes": [
      "For internal use only",
      "Apply to a clean, dry, oil-free surface, not over paint or tape",
      "Surface preparation is essential for maximum adhesion",
      "Wheel spinning, sharp turning or dragged equipment may cause damage",
      "254mm long and 152mm wide"
    ],
    "applications": [
      "Forklift routes",
      "Pedestrian walkways",
      "Warehouse aisles",
      "One-way systems",
      "Loading and dispatch",
      "Manufacturing",
      "Distribution centres"
    ]
  },
  "forklift-sign": {
    "description": "A bold floor-level warning that alerts pedestrians to forklift activity ahead. Reinforce safe behaviour and improve awareness in shared warehouse traffic areas.",
    "descriptionSecondary": "",
    "cardCopy": "A bold floor-level warning that alerts pedestrians to forklift activity ahead. Reinforce safe behaviour and improve awareness in shared warehouse traffic areas.",
    "features": [
      [
        "",
        "Highly visible forklift warning alerts approaching pedestrians"
      ],
      [
        "",
        "Durable industrial construction"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Easy-to-clean surface"
      ]
    ],
    "notes": [
      "For internal use on smooth, sound floors",
      "Apply to a clean, dry, oil-free surface",
      "Heavy wheel turning, pallet dragging or scraping may cause damage",
      "Do not apply over existing tape or damaged coatings",
      "Position clearly for approaching pedestrians",
      "Confirm dimensions with Cotewell before ordering"
    ],
    "applications": [
      "Forklift crossings",
      "Pedestrian and forklift intersections",
      "Warehouse aisles",
      "Loading and dispatch",
      "Manufacturing",
      "High-traffic warehouse areas"
    ]
  },
  "freezer-tape": {
    "description": "Freezer-grade adhesive and durable 1.3mm construction provide reliable floor markings in cold rooms and freezer warehouses, performing at temperatures as low as −29°C.",
    "descriptionSecondary": "",
    "cardCopy": "Freezer-grade adhesive and durable 1.3mm construction provide reliable floor markings in cold rooms and freezer warehouses, performing at temperatures as low as −29°C.",
    "features": [
      [
        "",
        "Designed for temperatures as low as −29°C"
      ],
      [
        "",
        "1.3mm thick, up to seven times thicker than many standard floor tapes"
      ],
      [
        "",
        "Freezer-grade adhesive withstands heavy industrial wheeled traffic"
      ],
      [
        "",
        "Bevelled edges provide a smooth transition"
      ],
      [
        "",
        "Peel-and-stick installation with no special equipment or production downtime"
      ],
      [
        "",
        "Easy to remove with minimal residue; cut to any length"
      ],
      [
        "",
        "Smooth, easy-to-clean surface"
      ],
      [
        "",
        "Suitable for pharmaceutical and food processing environments"
      ],
      [
        "",
        "2-year limited warranty"
      ]
    ],
    "notes": [
      "Install at ambient temperatures between −29°C and +10°C",
      "Surface must be clean, dry, oil-free and free from contaminants",
      "Do not apply over paint, tape or lengthways over floor joints",
      "Heavy wheel spinning, pallet dragging and abrasion may reduce lifespan",
      "Warranty does not cover misuse or incorrect installation",
      "30m rolls; 50mm and 100mm widths"
    ],
    "applications": [
      "Cold rooms",
      "Freezer warehouses",
      "Food processing",
      "Chilled storage",
      "Distribution centres",
      "Walkways",
      "Forklift lanes",
      "Storage locations",
      "Pick and pack areas"
    ]
  },
  "lean-line-570": {
    "description": "A fast, flexible floor tape for low-traffic indoor visual management. Define work areas, walkways, storage locations and equipment zones without the mess or downtime of painted lines.",
    "descriptionSecondary": "",
    "cardCopy": "A fast, flexible floor tape for low-traffic indoor visual management. Define work areas, walkways, storage locations and equipment zones without the mess or downtime of painted lines.",
    "features": [
      [
        "",
        "0.5mm thick with square-cut edges"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "1-year warranty"
      ],
      [
        "",
        "Suitable for pharmaceutical and food production environments without installation contamination"
      ],
      [
        "",
        "Easy-to-clean surface and bright colours"
      ],
      [
        "",
        "Easy to replace as layouts change"
      ]
    ],
    "notes": [
      "For indoor applications above 10°C",
      "Apply to a clean, dry, oil-free surface",
      "Not recommended for rough, damaged or porous concrete",
      "Do not apply over paint, tape or lengthways over floor joints",
      "Heavy forklift turning and pallet dragging may reduce lifespan",
      "Warranty does not cover damage",
      "Cut to any length; 50mm × 30m rolls",
      "Confirm suitability for your site's traffic before ordering"
    ],
    "applications": [
      "Walkways",
      "Storage locations",
      "Pallet bays",
      "Equipment parking",
      "Production lines",
      "Workstations"
    ]
  },
  "t-shape": {
    "description": "Durable T-shaped markers define adjoining pallet bays, storage locations and work areas without complete floor outlines. Maintain clear, consistent layouts across busy industrial workplaces.",
    "descriptionSecondary": "",
    "cardCopy": "Durable T-shaped markers define adjoining pallet bays, storage locations and work areas without complete floor outlines. Maintain clear, consistent layouts across busy industrial workplaces.",
    "features": [
      [
        "",
        "Heavy-duty construction withstands industrial wheeled traffic"
      ],
      [
        "",
        "Creates multiple adjoining pallet or storage bays"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Highly visible, easy-to-clean surface"
      ],
      [
        "",
        "Easy to replace or reposition as layouts change"
      ],
      [
        "",
        "Supports Lean Manufacturing and 5S organisation"
      ]
    ],
    "notes": [
      "For internal use only",
      "Apply to a clean, dry, oil-free surface, not over existing paint or tape",
      "Surface preparation is essential for maximum adhesion",
      "Wheel spinning, sharp turning and dragged equipment may cause damage",
      "Ideal for adjoining bays with a shared boundary point",
      "50mm and 75mm widths"
    ],
    "applications": [
      "Pallet bays",
      "Storage locations",
      "Equipment parking",
      "Workstations",
      "Pick and pack areas",
      "Production zones",
      "Warehouses",
      "Manufacturing",
      "Lean and 5S workplaces"
    ]
  },
  "keep-clear": {
    "description": "An industrial-strength floor sticker for medium traffic. Keep emergency exits, electrical switchboards, fire equipment and access areas clear with an immediate, easy-to-read reminder.",
    "descriptionSecondary": "",
    "cardCopy": "An industrial-strength floor sticker for medium traffic. Keep emergency exits, electrical switchboards, fire equipment and access areas clear with an immediate, easy-to-read reminder.",
    "features": [
      [
        "",
        "Highly visible Keep Clear / Do Not Block message"
      ],
      [
        "",
        "Quick peel-and-stick installation"
      ],
      [
        "",
        "Durable laminated finish"
      ],
      [
        "",
        "Reinforces safety procedures and reduces repeated verbal reminders"
      ],
      [
        "",
        "Professional, easy-to-read design for indoor industrial environments"
      ]
    ],
    "notes": [
      "For internal use only",
      "Not recommended for rough, damaged or uneven surfaces",
      "Excessive forklift traffic and dragged objects may reduce lifespan",
      "Apply to a clean, dry surface for maximum adhesion",
      "610mm wide"
    ],
    "applications": [
      "Emergency exits",
      "Fire extinguishers and hose reels",
      "Electrical switchboards",
      "First aid stations",
      "Safety equipment",
      "Access panels",
      "Walkways"
    ]
  },
  "lean-line-960": {
    "description": "Durable, flexible floor tape for medium-traffic workplaces. Mark walkways, storage areas and workstations with no curing time, and update layouts as operations change.",
    "descriptionSecondary": "",
    "cardCopy": "Durable, flexible floor tape for medium-traffic workplaces. Mark walkways, storage areas and workstations with no curing time, and update layouts as operations change.",
    "features": [
      [
        "",
        "0.9mm thick for medium-traffic applications"
      ],
      [
        "",
        "Quick peel-and-stick installation with no production downtime"
      ],
      [
        "",
        "Easy to remove or replace as layouts change"
      ],
      [
        "",
        "2-year warranty"
      ],
      [
        "",
        "Smooth, easy-to-clean surface"
      ],
      [
        "",
        "Suitable for pharmaceutical and food production environments"
      ],
      [
        "",
        "Square-cut edges"
      ]
    ],
    "notes": [
      "For internal use above 10°C",
      "Apply to clean, dry, oil-free surfaces",
      "Do not apply over paint, tape or lengthways across floor joints",
      "Heavy forklift traffic and constant pallet dragging may reduce lifespan",
      "Warranty does not cover damage",
      "50mm × 30m rolls"
    ],
    "applications": [
      "Walkways",
      "Storage locations",
      "Workstation boundaries",
      "Equipment storage",
      "Medium foot traffic and light wheeled traffic"
    ]
  }
};
  Object.keys(reviewedProductCopy).forEach(function (key) {
    Object.assign(productData[key], reviewedProductCopy[key]);
  });

  var ORDER = ['mightyline-tape','freezer-tape','lean-line-960','lean-line-570','external-tape','angle-shape','t-shape','arrow','footprints','freezer-footprints','stop-sign','forklift-sign','keep-clear'];

  var COMPARE_ROWS = [
    { key: 'mightyline-tape', thickness: '1.3mm', traffic: 'Heavy forklift', warranty: '3 years', env: 'Internal' },
    { key: 'external-tape',   thickness: '1.3mm', traffic: 'Vehicle + pedestrian', warranty: '3 years', env: 'External' },
    { key: 'freezer-tape',    thickness: 'Freezer grade', traffic: 'Industrial wheeled', warranty: '2 years', env: 'To -29°C' },
    { key: 'lean-line-960',   thickness: '0.9mm', traffic: 'Medium', warranty: '2 years', env: 'Internal' },
    { key: 'lean-line-570',   thickness: '0.5mm', traffic: 'Low', warranty: '1 year', env: 'Internal' }
  ];

  /* Learning-centre articles that answer the questions the FAQ cannot cover in a
     paragraph. Placed under the FAQ so the next click stays on Cotewell. */
  var ARTICLES = [
    { href: 'https://cotewell.com.au/sick-of-repainting-your-lines-every-6-months-so-was-this-customer/',
      img: UP + '2026/08/Customer-Story-CAP-Line-Marking-for-Blog-1024x576.jpg',
      cat: 'Customer story',
      title: 'Sick of repainting your lines every 6 months? So was this customer',
      blurb: 'A concrete plant repainting every six months moved to Cold Applied Plastic. Eighteen months on, the lines are still doing the job.' },
    { href: 'https://cotewell.com.au/why-line-marking-tape-fails-and-how-to-make-it-last/',
      img: UP + '2025/11/shared-image-18-225x300.jpg',
      cat: 'Tape guide',
      title: 'Why line marking tape fails and how to make it last',
      blurb: 'Most tape failures are not the tape. They are surface preparation, environment or maintenance. Here is what to get right first.' },
    { href: 'https://cotewell.com.au/why-line-marking-fails-in-cold-facilities-the-product-you-need/',
      img: UP + '2025/10/shared-image-17-1-2-225x300.jpg',
      cat: 'Cold storage',
      title: 'Why line marking fails in cold facilities',
      blurb: 'Cold storage breaks standard adhesives. What peeling, cracking markings are telling you, and the product specified for it.' },
    { href: 'https://cotewell.com.au/what-colours-should-i-use-for-line-marking/',
      img: UP + '2022/01/Extinguisher-and-Walkway-300x203.jpg',
      cat: 'Colour standards',
      title: 'What colours should I use for line marking?',
      blurb: 'Which colour belongs on walkways, forklift routes, storage bays and fire equipment, with photographs from live sites.' }
  ];

  var FAQS = [
    { q: 'How long does line marking tape last?',
      a: 'It depends on the tape and the traffic. Lean Line 570 at 0.5mm carries a 1-year warranty and suits foot traffic. Lean Line 960 at 0.9mm carries 2 years for medium traffic. MightyLine at 1.3mm carries a 3-year limited adhesion warranty and is the one built to withstand heavy industrial forklift and wheeled traffic. Putting a light tape on a forklift route is the single most common reason tape fails early.' },
    { q: 'Is floor marking tape better than painted lines?',
      a: 'For most internal industrial floors, yes. Tape installs in hours with no curing time and no production downtime, and MightyLine saves up to 60% in ongoing maintenance compared with painted line marking. Paint still has a place on very rough or heavily contaminated surfaces where tape will not bond.' },
    { q: 'Can I use line marking tape outdoors?',
      a: 'Only the Cotewell External Line Marking Tape. Everything else on this page is specified for internal use only. The external tape is 1.3mm, P5 slip rated, reflective and UV resistant, and it is designed for asphalt and concrete.' },
    { q: 'How do I prepare the floor before installing tape?',
      a: 'The surface must be clean, dry and free from dust, grease and oil. Do not apply over existing paint or tape, and avoid running tape lengthways along floor joints. Adhesion and lifespan depend far more on preparation than on the product, so it is worth doing properly.' },
    { q: 'What width should I use for walkways?',
      a: 'Most internal walkway and aisle boundaries are marked at 50mm. Step up to 100mm where the line needs to read from a distance, for forklift routes, or where the site standard calls for a wider boundary. MightyLine and X-Treme Freezer Tape are both available in 50mm and 100mm.' },
    { q: 'Can I get a sample before ordering?',
      a: 'Yes. We will send a physical sample of the tape you are considering so you can test adhesion and visibility on your own floor before committing to a full site. Request one through the free samples link or call 1300 590 505.' }
  ];

  /* ------------------------------------------------------------------ helpers */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function money(n) {
    return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function colourStyle(key) {
    var c = COLOURS[key];
    if (!c) return '';
    if (c.hex2) return 'background:repeating-linear-gradient(135deg,' + c.hex + ' 0 6px,' + c.hex2 + ' 6px 12px)';
    if (c.clear) return 'background:repeating-linear-gradient(135deg,#e9eaec 0 5px,#c9ccd1 5px 10px)';
    return 'background:' + c.hex;
  }

  function priceFor(product, colour, width) {
    var p = product.prices || {};
    var w = width || '-';
    var k1 = (colour || 'default') + '|' + w;
    if (p[k1] != null) return p[k1];
    var k2 = 'default|' + w;
    if (p[k2] != null) return p[k2];
    var vals = [];
    for (var k in p) vals.push(p[k]);
    return vals.length ? Math.min.apply(null, vals) : 0;
  }

  function priceFrom(product) {
    var vals = [];
    for (var k in (product.prices || {})) vals.push(product.prices[k]);
    return vals.length ? Math.min.apply(null, vals) : 0;
  }

  function productImage(product, colour) {
    var i = product.images || {};
    if (colour && i[colour]) return i[colour];
    if (product.defaultColour && i[product.defaultColour]) return i[product.defaultColour];
    return i._default || '';
  }

  /* ------------------------------------------------------------------ elements */
  var header = $('[data-header]');
  var stickyCta = $('[data-sticky-cta]');
  var stickyLabel = $('[data-sticky-label]');
  var quantity = $('[data-quantity]');
  var cartCount = $('[data-cart-count]');
  var cartLink = $('[data-cart-link]');
  var confirmation = $('[data-cart-confirmation]');
  var views = $$('[data-view]');
  var contextLink = $('[data-context-link]');
  var headerCta = $('[data-header-cta]');
  var footerLabel = $('[data-footer-label]');
  var metaDescription = $('meta[name="description"]');
  var canonical = $('link[rel="canonical"]');
  var ogTitle = $('meta[property="og:title"]');
  var ogDescription = $('meta[property="og:description"]');
  var ogUrl = $('meta[property="og:url"]');
  var ogImage = $('meta[property="og:image"]');
  var productMedia = $('[data-product-media]');
  var productThumbs = $('[data-product-thumbs]');
  var productPhotos = $('[data-product-photos]');
  var productImg = $('[data-product-image]');
  var productTitle = $('[data-product-title]');
  var featureGrid = $('[data-feature-grid]');

  var activeView = 'category';
  var activeProduct = null;
  var selection = { colour: null, width: null, photo: null };
  var lastY = 0;
  var ticking = false;

  /* ------------------------------------------------------------------ category render */
  function cardMarkup(key) {
    var p = productData[key];
    var colour = p.defaultColour;
    var img = productImage(p, colour);
    return '<a class="tape-card" href="#' + key + '" data-group="' + p.group + '" data-product-route="' + key + '">' +
      '<div class="tape-card__media">' +
        '<span class="product-badge">' + p.badge + '</span>' +
        (img ? '<img src="' + img + '" alt="' + p.shortName + '" loading="lazy">' : '') +
      '</div>' +
      '<div class="tape-card__copy">' +
        '<p class="mono">' + p.cardType + '</p>' +
        '<h3>' + p.shortName + '</h3>' +
        '<p>' + p.cardCopy + '</p>' +
        (p.colours.length ? '<div class="mini-swatches" aria-hidden="true">' + p.colours.slice(0, 8).map(function (c) {
          return '<i style="' + colourStyle(c) + '"></i>';
        }).join('') + (p.colours.length > 8 ? '<em>+' + (p.colours.length - 8) + '</em>' : '') + '</div>' : '') +
        '<div class="tape-card__footer"><strong>' + (p.colours.length > 1 || p.widths ? 'From ' : '') + money(priceFrom(p)) + ' <small>+ GST</small></strong><span>View mock-up <b>&rarr;</b></span></div>' +
      '</div>' +
    '</a>';
  }

  function renderCategory() {
    var grid = $('[data-category-grid]');
    if (grid && !grid.dataset.rendered) {
      var html = '';
      ['tape', 'shapes', 'signs'].forEach(function (g) {
        var keys = ORDER.filter(function (k) { return productData[k].group === g; });
        html += '<div class="group-block" data-group-block="' + g + '">' +
          '<div class="group-head reveal"><h3>' + GROUPS[g].heading + ' <em>' + keys.length + '</em></h3><p>' + GROUPS[g].blurb + '</p></div>' +
          '<div class="group-grid">' + keys.map(cardMarkup).join('') + '</div>' +
        '</div>';
      });
      grid.innerHTML = html;
      grid.dataset.rendered = '1';
    }

    var body = $('[data-compare-body]');
    if (body && !body.dataset.rendered) {
      body.innerHTML = COMPARE_ROWS.map(function (r) {
        var p = productData[r.key];
        return '<tr><th scope="row"><a href="#' + r.key + '" data-product-route="' + r.key + '">' + p.shortName + '</a></th>' +
          '<td>' + r.thickness + '</td><td>' + r.traffic + '</td><td>' + r.warranty + '</td><td>' + r.env + '</td>' +
          '<td class="num">' + money(priceFrom(p)) + '<small>+ GST</small></td>' +
          '<td class="go"><a href="#' + r.key + '" data-product-route="' + r.key + '" aria-label="View ' + p.shortName + '">View <span aria-hidden="true">&rarr;</span></a></td></tr>';
      }).join('');
      body.dataset.rendered = '1';
    }

    var faq = $('[data-faq-list]');
    if (faq && !faq.dataset.rendered) {
      faq.innerHTML = FAQS.map(function (f, i) {
        return '<details class="faq-item reveal"' + (i === 0 ? ' open' : '') + '><summary><span>' + f.q + '</span></summary><p>' + f.a + '</p></details>';
      }).join('');
      faq.dataset.rendered = '1';
    }

    var articles = $('[data-article-grid]');
    if (articles && !articles.dataset.rendered) {
      articles.innerHTML = ARTICLES.map(function (a) {
        return '<a class="article-card reveal" href="' + a.href + '">' +
          '<div class="article-card__media"><img src="' + a.img + '" alt="' + a.title + '" loading="lazy"></div>' +
          '<div class="article-card__copy">' +
            '<p class="mono">' + a.cat + '</p>' +
            '<h3>' + a.title + '</h3>' +
            '<p>' + a.blurb + '</p>' +
            '<span class="text-link">Read the article <b>&rarr;</b></span>' +
          '</div></a>';
      }).join('');
      articles.dataset.rendered = '1';
    }
  }

  function applyFilter(group) {
    $$('.filter-chip').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-filter') === group);
      b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === group));
    });
    $$('[data-group-block]').forEach(function (block) {
      block.hidden = !(group === 'all' || block.getAttribute('data-group-block') === group);
    });
  }

  /* ------------------------------------------------------------------ product render */
  /* Colour thumbnails. Several products point every variant at one photograph
     (the live external tape does exactly this), so collapse duplicates and drop
     the rail entirely when there is only one distinct image left to show. */
  function renderThumbs(product) {
    if (!productThumbs) return;
    var imgs = product.images || {};
    var seen = {};
    var keys = (product.colours || []).filter(function (c) {
      if (!imgs[c] || seen[imgs[c]]) return false;
      seen[imgs[c]] = 1;
      return true;
    });
    if (keys.length < 2) { productThumbs.hidden = true; productThumbs.innerHTML = ''; return; }
    productThumbs.hidden = false;
    productThumbs.innerHTML =
      '<span class="gallery-label mono">Colours</span>' +
      '<div class="gallery-row">' + keys.map(function (c) {
        return '<button type="button" class="product-thumb" data-colour="' + c + '" aria-pressed="false" ' +
          'title="' + COLOURS[c].label + '" aria-label="' + product.shortName + ' in ' + COLOURS[c].label + '">' +
          '<img src="' + imgs[c] + '" alt="" loading="lazy"></button>';
      }).join('') + '</div>';
  }

  /* Photographs of the product installed on a real floor, taken from the live
     product gallery on cotewell.com.au. */
  function renderPhotos(product) {
    if (!productPhotos) return;
    var list = product.photos || [];
    if (!list.length) { productPhotos.hidden = true; productPhotos.innerHTML = ''; return; }
    productPhotos.hidden = false;
    productPhotos.innerHTML =
      '<span class="gallery-label mono">On site <b>' + list.length + '</b></span>' +
      '<div class="gallery-row gallery-row--photos">' + list.map(function (ph, i) {
        return '<button type="button" class="product-photo" data-photo="' + i + '" aria-pressed="false" ' +
          'title="' + ph.alt + '" aria-label="' + ph.alt + '">' +
          '<img src="' + (ph.thumb || ph.src) + '" alt="" loading="lazy"></button>';
      }).join('') + '</div>';
  }

  function renderVariants(product) {
    var colourBlock = $('[data-colour-block]');
    var widthBlock = $('[data-width-block]');
    var swatchRow = $('[data-swatch-row]');
    var widthRow = $('[data-width-row]');

    if (product.colours && product.colours.length) {
      colourBlock.hidden = false;
      swatchRow.innerHTML = product.colours.map(function (c) {
        return '<button type="button" class="swatch" role="radio" aria-checked="false" data-colour="' + c + '" title="' + COLOURS[c].label + '" aria-label="' + COLOURS[c].label + '"><i style="' + colourStyle(c) + '"></i></button>';
      }).join('');
    } else {
      colourBlock.hidden = true;
      swatchRow.innerHTML = '';
    }

    if (product.widths && product.widths.length > 1) {
      widthBlock.hidden = false;
      widthRow.innerHTML = product.widths.map(function (w) {
        return '<button type="button" class="pill" role="radio" aria-checked="false" data-width="' + w + '">' + w + '</button>';
      }).join('');
    } else {
      widthBlock.hidden = true;
      widthRow.innerHTML = '';
    }
  }

  function syncVariantUi(product) {
    var swatchLabel = $('[data-swatch-label]');
    var selected = $('[data-colour-selected]');

    $$('[data-swatch-row] .swatch').forEach(function (b) {
      var on = b.getAttribute('data-colour') === selection.colour;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', String(on));
    });
    $$('[data-width-row] .pill').forEach(function (b) {
      var on = b.getAttribute('data-width') === selection.width;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-checked', String(on));
    });

    if (selected) selected.textContent = selection.colour ? COLOURS[selection.colour].label : '';
    if (swatchLabel) {
      var showingPhoto = selection.photo != null && product.photos && product.photos[selection.photo];
      swatchLabel.hidden = !selection.colour && !showingPhoto;
      swatchLabel.textContent = showingPhoto ? 'On site'
        : (selection.colour ? COLOURS[selection.colour].label + (selection.width ? ' · ' + selection.width : '') : '');
    }

    var photo = selection.photo != null && product.photos ? product.photos[selection.photo] : null;
    var src = photo ? photo.src : productImage(product, selection.colour);
    if (productImg && src) {
      productImg.src = src;
      productImg.alt = photo ? photo.alt
        : product.shortName + (selection.colour ? ' in ' + COLOURS[selection.colour].label : '');
    }
    if (productMedia) productMedia.classList.toggle('product-media--photo', !!photo);

    $$('[data-product-thumbs] .product-thumb').forEach(function (t) {
      var on = !photo && t.getAttribute('data-colour') === selection.colour;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-pressed', String(on));
    });
    $$('[data-product-photos] .product-photo').forEach(function (t) {
      var on = !!photo && Number(t.getAttribute('data-photo')) === selection.photo;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-pressed', String(on));
    });

    var zip = $('[data-zip-line]');
    if (zip) zip.hidden = false;

    var value = priceFor(product, selection.colour, selection.width);
    var valueEl = $('[data-purchase-value]');
    if (valueEl) valueEl.textContent = money(value);
    if (stickyLabel) stickyLabel.textContent = product.shortName + ' · ' + money(value) + ' + GST';
  }

  function applyProduct(key) {
    var p = productData[key];
    if (!p) return;

    $('[data-product-breadcrumb]').textContent = p.breadcrumb;
    $('[data-product-eyebrow]').textContent = p.eyebrow;
    $('[data-product-tag]').textContent = p.tag;
    $('[data-product-description]').innerHTML = p.description;
    $('[data-product-description-secondary]').innerHTML = p.descriptionSecondary;
    $('[data-purchase-label]').textContent = p.priceLabel;
    $('[data-features-intro]').textContent = p.featuresIntro;
    $('[data-features-title]').innerHTML = p.featuresTitle;
    $('[data-purchase-note]').innerHTML = p.purchaseNote;

    productTitle.innerHTML = p.titleHtml;
    productTitle.classList.toggle('is-long', !!p.longTitle);
    if (productMedia) productMedia.className = 'product-media';

    /* Three aligned key metrics, using the same three labels for every product in a
       group so like-for-like comparison across sibling products actually works. */
    $('[data-spec-strip]').hidden = true;
    $('[data-spec-strip]').innerHTML = (p.keyMetrics || p.specs.slice(0, 3)).map(function (s) {
      return '<span><b>' + s[1] + '</b>' + s[0] + '</span>';
    }).join('');

    featureGrid.innerHTML = p.features.map(function (f, i) {
      return '<article class="feature"><span>' + ('0' + (i + 1)).slice(-2) + '</span>' + (f[0] ? '<h3>' + f[0] + '</h3>' : '') + '<p>' + f[1] + '</p></article>';
    }).join('');

    $('[data-installation-notes]').innerHTML = p.notes.map(function (n) { return '<li>' + n + '</li>'; }).join('');
    $('[data-applications]').innerHTML = p.applications.map(function (a) { return '<li>' + a + '</li>'; }).join('');

    $('[data-spec-table]').innerHTML = p.specs.map(function (s) {
      return '<div class="spec-row"><span class="mono">' + s[0] + '</span><strong>' + s[1] + '</strong></div>';
    }).join('') + (p.extra ? '<p class="spec-extra">' + p.extra + '</p>' : '');

    $('[data-related-grid]').innerHTML = p.related.map(function (k) {
      var r = productData[k];
      var img = productImage(r, r.defaultColour);
      return '<a class="related-product" href="#' + k + '" data-product-route="' + k + '">' +
        '<div class="related-product__media">' +
          (img ? '<img src="' + img + '" alt="' + r.shortName + '" loading="lazy">' : '') +
        '</div>' +
        '<div class="related-product__copy"><p class="mono">' + r.cardType + '</p><h3>' + r.shortName + '</h3><p>' + r.cardCopy + '</p>' +
        '<span class="text-link">From ' + money(priceFrom(r)) + ' + GST</span></div></a>';
    }).join('');

    renderVariants(p);
    renderThumbs(p);
    renderPhotos(p);
    selection.colour = p.defaultColour || null;
    selection.width = p.widths && p.widths.length ? p.widths[0] : null;
    selection.photo = null;
    syncVariantUi(p);

    if (confirmation) confirmation.hidden = true;
    if (quantity) quantity.value = '1';
    if (stickyCta) stickyCta.setAttribute('aria-label', p.shortName + ' quick purchase');
  }

  /* ------------------------------------------------------------------ schema */
  function setSchema(sel, obj) {
    var el = $(sel);
    if (!el) return;
    el.textContent = obj ? JSON.stringify(obj, null, 2) : '';
  }

  function strip(s) { return String(s).replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').trim(); }

  function writeSchema(route) {
    var base = 'https://cotewell.com.au/product-category/tape/';
    if (route.view === 'category') {
      setSchema('[data-schema-collection]', {
        '@context': 'https://schema.org', '@type': 'CollectionPage',
        '@id': base + '#collection',
        name: 'Line Marking Tape & Floor Marking Products',
        description: categoryData.descriptionMeta,
        url: base,
        isPartOf: { '@type': 'WebSite', name: 'Cotewell', url: 'https://cotewell.com.au/' }
      });
      setSchema('[data-schema-breadcrumb]', {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cotewell.com.au/' },
          { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://cotewell.com.au/shop/' },
          { '@type': 'ListItem', position: 3, name: 'Line Marking Tape & Floor Marking', item: base }
        ]
      });
      setSchema('[data-schema-itemlist]', {
        '@context': 'https://schema.org', '@type': 'ItemList',
        name: 'Line Marking Tape & Floor Marking Products',
        numberOfItems: ORDER.length,
        itemListElement: ORDER.map(function (k, i) {
          return { '@type': 'ListItem', position: i + 1, url: productData[k].canonical, name: productData[k].shortName };
        })
      });
      setSchema('[data-schema-faq]', {
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQS.map(function (f) {
          return { '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } };
        })
      });
      setSchema('[data-schema-product]', null);
      return;
    }

    var p = productData[route.product];
    var lo = priceFrom(p);
    var hi = lo;
    for (var k in (p.prices || {})) hi = Math.max(hi, p.prices[k]);

    setSchema('[data-schema-breadcrumb]', {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://cotewell.com.au/' },
        { '@type': 'ListItem', position: 2, name: 'Line Marking Tape & Floor Marking', item: base },
        { '@type': 'ListItem', position: 3, name: p.shortName, item: p.canonical }
      ]
    });
    setSchema('[data-schema-product]', {
      '@context': 'https://schema.org', '@type': 'Product',
      '@id': p.canonical + '#product',
      name: p.shortName,
      description: strip(p.description),
      sku: p.slug,
      image: productImage(p, p.defaultColour),
      brand: { '@type': 'Brand', name: p.shortName.indexOf('Lean Line') === 0 ? 'Lean Line' : (p.shortName.indexOf('Cotewell') === 0 ? 'Cotewell' : 'Mighty Line') },
      category: GROUPS[p.group].label,
      offers: lo === hi
        ? { '@type': 'Offer', url: p.canonical, price: lo.toFixed(2), priceCurrency: 'AUD', availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Cotewell' } }
        : { '@type': 'AggregateOffer', url: p.canonical, lowPrice: lo.toFixed(2), highPrice: hi.toFixed(2), priceCurrency: 'AUD', offerCount: Object.keys(p.prices).length, availability: 'https://schema.org/InStock', seller: { '@type': 'Organization', name: 'Cotewell' } }
    });
    setSchema('[data-schema-itemlist]', null);
    setSchema('[data-schema-faq]', null);
    setSchema('[data-schema-collection]', null);
  }

  /* ------------------------------------------------------------------ routing */
  var SECTIONS = ['buy', 'features', 'specs', 'projects', 'related-products'];

  function routeFromHash() {
    var hash = window.location.hash.replace(/^#/, '');
    var product = null, section = null;
    for (var i = 0; i < ORDER.length; i++) {
      var key = ORDER[i];
      if (hash === key) { product = key; break; }
      if (hash.indexOf(key + '-') === 0) {
        var s = hash.slice(key.length + 1);
        if (SECTIONS.indexOf(s) !== -1) { product = key; section = s; break; }
      }
    }
    return product ? { view: 'product', product: product, section: section } : { view: 'category', product: null, section: null };
  }

  function renderRoute() {
    var route = routeFromHash();
    var changed = route.view !== activeView || route.product !== activeProduct;
    var page = route.view === 'product' ? productData[route.product] : categoryData;

    activeView = route.view;
    activeProduct = route.product;

    views.forEach(function (v) { v.hidden = v.getAttribute('data-view') !== route.view; });

    if (route.view === 'product') applyProduct(route.product);
    else renderCategory();

    document.title = page.title;
    if (metaDescription) metaDescription.setAttribute('content', page.descriptionMeta);
    if (canonical) canonical.setAttribute('href', page.canonical);
    if (ogTitle) ogTitle.setAttribute('content', page.title);
    if (ogDescription) ogDescription.setAttribute('content', page.descriptionMeta);
    if (ogUrl) ogUrl.setAttribute('content', page.canonical);
    if (ogImage) ogImage.setAttribute('content', route.view === 'product' ? productImage(page, page.defaultColour) : categoryData.image);

    if (contextLink) {
      contextLink.href = route.view === 'product' ? '#' + route.product + '-features' : categoryData.contextHref;
      contextLink.textContent = route.view === 'product' ? 'Product details' : categoryData.contextText;
    }
    if (headerCta) {
      headerCta.href = route.view === 'product' ? '#' + route.product + '-buy' : categoryData.ctaHref;
      headerCta.textContent = route.view === 'product' ? 'Add to cart' : categoryData.ctaText;
    }
    if (footerLabel) {
      footerLabel.textContent = route.view === 'product' ? page.shortName + ' product page mock-up' : categoryData.footerText;
    }
    if (stickyCta && route.view !== 'product') {
      stickyCta.classList.remove('is-visible');
      stickyCta.setAttribute('aria-hidden', 'true');
    }

    writeSchema(route);
    observeReveals();

    if (route.section) {
      requestAnimationFrame(function () {
        var el = document.getElementById(route.section);
        if (el) el.scrollIntoView({ behavior: changed ? 'auto' : 'smooth' });
      });
    } else if (changed) {
      requestAnimationFrame(function () { window.scrollTo({ top: 0, behavior: 'auto' }); });
    }

    requestAnimationFrame(updatePageUi);
  }

  /* ------------------------------------------------------------------ interactions */
  function clampQty(v) {
    var n = parseInt(v, 10);
    if (!isFinite(n)) n = 1;
    return Math.max(1, Math.min(99, n));
  }

  document.addEventListener('click', function (e) {
    var chip = e.target.closest ? e.target.closest('.filter-chip') : null;
    if (chip) { applyFilter(chip.getAttribute('data-filter')); return; }

    var thumb = e.target.closest ? e.target.closest('.product-thumb') : null;
    if (thumb && activeProduct) {
      selection.colour = thumb.getAttribute('data-colour');
      selection.photo = null;
      syncVariantUi(productData[activeProduct]);
      return;
    }

    var photoBtn = e.target.closest ? e.target.closest('.product-photo') : null;
    if (photoBtn && activeProduct) {
      selection.photo = Number(photoBtn.getAttribute('data-photo'));
      syncVariantUi(productData[activeProduct]);
      return;
    }

    var swatch = e.target.closest ? e.target.closest('.swatch') : null;
    if (swatch && activeProduct) {
      selection.colour = swatch.getAttribute('data-colour');
      selection.photo = null;
      syncVariantUi(productData[activeProduct]);
      return;
    }

    var pill = e.target.closest ? e.target.closest('.pill') : null;
    if (pill && activeProduct) {
      selection.width = pill.getAttribute('data-width');
      syncVariantUi(productData[activeProduct]);
      return;
    }

    if (e.target.closest && e.target.closest('[data-quantity-down]')) { quantity.value = clampQty(Number(quantity.value) - 1); return; }
    if (e.target.closest && e.target.closest('[data-quantity-up]')) { quantity.value = clampQty(Number(quantity.value) + 1); return; }

    if (e.target.closest && e.target.closest('[data-add-to-cart]')) {
      var added = clampQty(quantity ? quantity.value : 1);
      var total = (parseInt(cartCount ? cartCount.textContent : '0', 10) || 0) + added;
      var p = productData[activeProduct];
      if (cartCount) cartCount.textContent = String(total);
      if (cartLink) cartLink.setAttribute('aria-label', 'Cart, ' + total + (total === 1 ? ' item' : ' items'));
      if (confirmation) {
        confirmation.hidden = false;
        confirmation.textContent = added + ' × ' + p.shortName +
          (selection.colour ? ' (' + COLOURS[selection.colour].label + (selection.width ? ', ' + selection.width : '') + ')' : '') +
          ' added to the mock-up cart.';
      }
      return;
    }

    var catLink = e.target.closest ? e.target.closest('[data-category-link]') : null;
    if (catLink && activeView === 'category' && window.location.hash === '#category') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  if (quantity) quantity.addEventListener('change', function () { quantity.value = clampQty(quantity.value); });

  /* ------------------------------------------------------------------ scroll ui */
  function updatePageUi() {
    ticking = false;
    var y = window.scrollY || 0;
    if (header) header.classList.toggle('is-hidden', y > lastY && y > 180);
    var hero = $('.product-hero');
    if (hero && stickyCta) {
      var show = activeView === 'product' && hero.getBoundingClientRect().bottom <= 0;
      stickyCta.classList.toggle('is-visible', show);
      stickyCta.setAttribute('aria-hidden', String(!show));
    }
    lastY = y;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(updatePageUi); }
  }, { passive: true });

  window.addEventListener('hashchange', renderRoute);

  /* ------------------------------------------------------------------ reveals */
  var observer = null;
  function observeReveals() {
    var items = $$('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) { items.forEach(function (i) { i.classList.add('is-visible'); }); return; }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    }
    items.forEach(function (i) { observer.observe(i); });
  }

  renderRoute();
  applyFilter('all');
})();
