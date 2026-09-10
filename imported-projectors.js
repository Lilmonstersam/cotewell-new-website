(function () {
  var UP = 'https://cotewell.com.au/wp-content/uploads/';
  var header = document.querySelector('[data-header]');
  var hero = document.querySelector('.product-hero');
  var stickyCta = document.querySelector('[data-sticky-cta]');
  var stickyLabel = document.querySelector('[data-sticky-label]');
  var stickyAdd = document.querySelector('[data-sticky-add]');
  var quantity = document.querySelector('[data-quantity]');
  var quantityDown = document.querySelector('[data-quantity-down]');
  var quantityUp = document.querySelector('[data-quantity-up]');
  var addToCart = document.querySelector('[data-add-to-cart]');
  var cartCount = document.querySelector('[data-cart-count]');
  var cartLink = document.querySelector('[data-cart-link]');
  var confirmation = document.querySelector('[data-cart-confirmation]');
  var views = Array.prototype.slice.call(document.querySelectorAll('[data-view]'));
  var contextLink = document.querySelector('[data-context-link]');
  var headerCta = document.querySelector('[data-header-cta]');
  var footerLabel = document.querySelector('[data-footer-label]');
  var description = document.querySelector('meta[name="description"]');
  var canonical = document.querySelector('link[rel="canonical"]');
  var ogTitle = document.querySelector('meta[property="og:title"]');
  var ogDescription = document.querySelector('meta[property="og:description"]');
  var ogUrl = document.querySelector('meta[property="og:url"]');
  var ogImage = document.querySelector('meta[property="og:image"]');
  var productMedia = document.querySelector('[data-product-media]');
  var productImage = document.querySelector('[data-product-image]');
  var productTitle = document.querySelector('[data-product-title]');
  var featureGrid = document.querySelector('[data-feature-grid]');
  var installationNotes = document.querySelector('[data-installation-notes]');
  var applications = document.querySelector('[data-applications]');
  var relatedGrid = document.querySelector('[data-related-grid]');
  var activeView = 'category';
  var activeProduct = null;
  var lastY = 0;
  var ticking = false;

  var categoryData = {
    title: 'Line Marking & Safety Sign Projectors | Cotewell',
    description: 'Bright, long-lasting projected line marking and safety signs for busy, dirty and rough-surfaced industrial floors. Nothing on the floor to wear, chip or fade.',
    canonical: 'https://cotewell.com.au/product-category/line-marking-projector/',
    image: 'assets/imported/projectors/img/delta-fieldlas-projector.png',
    contextHref: '#projector-products',
    contextText: 'All products',
    ctaHref: '#projector-products',
    ctaText: 'View projectors',
    footerText: 'Line marking & safety sign projectors mock-up'
  };

  var productData = {
    'delta-fieldlas': {
      brochure: 'assets/imported/projectors/brochures/delta-fieldlas-projector-brochure-2026.pdf',
      brochureLabel: 'Delta FieldLAS',
      brochureMeta: 'PDF · 163 KB · features, specifications and limitations',
      badge: 'Laser line · IP67',
      cardType: 'Bright laser floor lines',
      cardCopy: 'Crisp, adjustable laser lines for walkways and traffic separation, built for dusty, dirty or wet floors where markings deteriorate quickly.',
      priceFrom: 2400,
      shortName: 'Delta FieldLAS',
      breadcrumb: 'Delta FieldLAS',
      title: 'Delta FieldLAS Laser Line Marking Projector | Cotewell',
      descriptionMeta: 'Delta FieldLAS projects bright, adjustable laser floor lines for dusty, dirty and wet industrial environments where painted and taped markings deteriorate quickly.',
      canonical: 'https://cotewell.com.au/product/delta-fieldlas-line-marking-projector-2/',
      eyebrow: 'Industrial line marking projector',
      titleHtml: 'Delta FieldLAS<br><em>Laser Line Marking</em><br>Projector',
      longTitle: false,
      description: 'The Delta FieldLAS is a high-performance industrial laser system that creates bright, highly visible floor lines without the ongoing maintenance of traditional paint or floor tape. Featuring the latest diode laser technology, it projects crisp, adjustable lines over long distances.',
      descriptionSecondary: 'Built for dusty, dirty or wet environments where typical floor markings quickly deteriorate. With an IP67-rated enclosure, 360° adjustable mounting and intelligent heating control, it is made to keep performing where the floor itself is the problem.',
      heroSpecs: [
        ['Protection', 'IP67'],
        ['Mounting', '360° adjustable'],
        ['Use', 'Laser line marking']
      ],
      image: 'assets/imported/projectors/img/delta-fieldlas-projector.png',
      imageAlt: 'Delta FieldLAS laser line marking projector',
      imageWidth: 1174,
      imageHeight: 1110,
      imageTag: 'IP67 industrial enclosure',
      mediaClass: '',
      purchaseLabel: 'Unit price',
      purchaseValue: '$2,400.00',
      purchaseSuffix: '+ GST',
      purchaseNote: 'Every application must be customised to suit the environment. Call <a href="tel:1300590505">1300 590 505</a> to discuss the options and arrange a free onsite demo before you order.',
      stickyText: 'Delta FieldLAS · $2,400.00 + GST',
      featuresTitle: 'A line that never<br>touches the floor.',
      featuresIntro: 'Nothing is applied to the concrete, so nothing wears, chips or fades. Every application is customised to suit the environment, so contact us before purchase to plan the projector, line position and installation.',
      features: [
        ['Latest diode laser technology', 'Brighter, sharper and more consistent line projection.'],
        ['Adjustable projection', 'Update the line length and thickness to suit changing site requirements.'],
        ['Long-lasting laser source', 'A durable diode source designed for improved reliability.'],
        ['IP67-rated enclosure', 'Built for dusty, dirty and wet industrial environments.'],
        ['Quick installation', 'Minimal downtime during installation, with no curing time.'],
        ['360° adjustable mounting', 'Reposition the projected line with precision as the layout evolves.']
      ],
      notes: [
        'Not suitable for applications in full sunlight',
        'Hard wiring must be completed by a qualified electrician',
        'Technical data sheet available on request'
      ],
      applications: [
        'Pedestrian walkways and forklift traffic separation',
        'Dusty, dirty or wet environments',
        'Cold storage and freezer facilities',
        'High-risk industrial work areas'
      ],
      related: ['signum-75w', 'signum-50w', 'mightyline']
    },
    'signum-75w': {
      brochure: 'assets/imported/projectors/brochures/signum-projected-safety-marking-brochure-2026.pdf',
      brochureLabel: 'Signum',
      brochureMeta: 'PDF · 1.5 MB · features, specifications and case studies',
      photos: [
        { src: UP + '2023/04/Projected-Line-Example.jpg', alt: 'Bright projected safety line running down a warehouse aisle' },
        { src: UP + '2022/08/20190802_174231.jpg', alt: 'Projected warning signs at the Toll warehouse' },
        { src: UP + '2023/04/gobo-projekce-projection247-signage-znacky-e1757482151830.jpg', alt: 'Projected stop sign on a warehouse floor' },
        { src: UP + '2023/04/safety-signage_projection_idvum_signium.jpg', alt: 'Projected safety signage across several industrial settings' },
        { src: UP + '2023/04/proiezione.jpg', alt: 'Signum projection beside racking in a production area' },
      ],
      badge: '75W · GOBO required',
      cardType: 'Projected safety marking',
      cardCopy: 'The brightest of the range. Projects safety lines, warning signs and customised symbols that will not wear away under forklift traffic.',
      priceFrom: 3200,
      shortName: 'Signum 75W',
      breadcrumb: 'Signum 75W',
      title: 'Signum 75W Safety Sign Projector | Cotewell',
      descriptionMeta: 'Signum 75W projects bright safety lines, warning signs and customised symbols that stay visible on dirty and worn industrial floors. IP65, 50,000 hour LED, 2 year warranty.',
      canonical: 'https://cotewell.com.au/product/signum-projected-safety-marking-75w/',
      eyebrow: 'Projected safety marking · 75W',
      titleHtml: 'Signum<br><em>Projected Safety</em><br>Marking – 75W',
      longTitle: true,
      description: 'The Italian-made Signum 75W is a smart alternative to traditional floor markings, projecting bright, highly visible safety lines and warning signs without the ongoing maintenance. It eliminates the need for constant remarking by displaying permanent visual guidance that will not wear away under forklift traffic, pallets or daily operations.',
      descriptionSecondary: 'It projects onto any surface and will not wear out, so rough, worn and dirty floors stop being the limiting factor. IP65 rated for harsh industrial environments, suitable for high and low temperature applications, and easy to reposition or update as layouts change.',
      heroSpecs: [
        ['LED lifespan', '50,000 hrs'],
        ['Protection', 'IP65'],
        ['Warranty', '2 years']
      ],
      image: 'assets/imported/projectors/img/signum-safety-projector.png',
      imageAlt: 'Signum Projected Safety Marking 75W projector',
      imageWidth: 1118,
      imageHeight: 728,
      imageTag: '75W · IP65 protection',
      mediaClass: 'product-media--signum',
      purchaseLabel: 'Unit price',
      purchaseValue: '$3,200.00',
      purchaseSuffix: '+ GST',
      purchaseNote: 'Each projector requires a GOBO. Call <a href="tel:1300590505">1300 590 505</a> before purchase to discuss GOBO options and arrange a free onsite demo.',
      stickyText: 'Signum 75W · $3,200.00 + GST',
      featuresTitle: 'Bright on floors<br>that ruin markings.',
      featuresIntro: 'Projected markings stay visible regardless of floor cleanliness. We customise every projection system for the workplace layout and application, so contact us before purchase to plan the sign, mounting position and installation.',
      features: [
        ['Easy to reposition or update', 'Move or update the projection when your site layout changes.'],
        ['Customised signs and symbols', 'Choose safety content designed around your workplace requirements.'],
        ['Projects onto any surface', 'Visible guidance that will not wear under daily operations.'],
        ['50,000-hour LED lifespan', 'Long service life, with reduced output beyond the rated period.'],
        ['IP65 protection', 'Designed for harsh industrial environments and temperature extremes.'],
        ['Two-year warranty', 'Long-term support for the projector system.']
      ],
      notes: [
        'Not suitable for applications in full sunlight',
        'Hard wiring must be completed by a qualified electrician',
        'Every projection system is customised for the workplace',
        'Technical data sheet available on request'
      ],
      applications: [
        'Sites where layouts may change over time',
        'Warehouses with heavy forklift traffic',
        'Dusty, dirty or high-wear environments',
        'High-risk areas with forklift and pedestrian traffic'
      ],
      related: ['signum-50w', 'delta-fieldlas', 'mightyline']
    },
    'signum-50w': {
      brochure: 'assets/imported/projectors/brochures/signum-projected-safety-marking-brochure-2026.pdf',
      brochureLabel: 'Signum',
      brochureMeta: 'PDF · 1.5 MB · features, specifications and case studies',
      photos: [
        { src: UP + '2023/04/gobo-projekce-projection247-signage-znacky-e1757482151830.jpg', alt: 'Projected stop sign on a warehouse floor' },
        { src: UP + '2023/04/Projected-Line-Example.jpg', alt: 'Bright projected safety line running down a warehouse aisle' },
        { src: UP + '2022/08/20190802_174231.jpg', alt: 'Projected pedestrian crossing marked onto an outdoor surface' },
        { src: UP + '2023/04/safety-signage_projection_idvum_signium.jpg', alt: 'Projected safety signage across several industrial settings' },
        { src: UP + '2023/04/proiezione.jpg', alt: 'Signum projection beside racking in a production area' },
      ],
      badge: '50W · GOBO required',
      cardType: 'Projected safety marking',
      cardCopy: 'Projects safety lines and warning signs onto any surface, and can be repositioned as layouts change without touching the concrete.',
      priceFrom: 2250,
      shortName: 'Signum 50W',
      breadcrumb: 'Signum 50W',
      title: 'Signum 50W Safety Sign Projector | Cotewell',
      descriptionMeta: 'Signum 50W projects bright safety lines, warning signs and customised symbols that stay visible on dirty and worn industrial floors. IP65, 50,000 hour LED, 2 year warranty.',
      canonical: 'https://cotewell.com.au/product/signum-projected-safety-marking-50w/',
      eyebrow: 'Projected safety marking · 50W',
      titleHtml: 'Signum<br><em>Projected Safety</em><br>Marking – 50W',
      longTitle: true,
      description: 'The Italian-made Signum 50W is a smart alternative to traditional floor markings, projecting bright, highly visible safety lines and warning signs without the ongoing maintenance. It eliminates the need for constant remarking by displaying permanent visual guidance that will not wear away under forklift traffic, pallets or daily operations.',
      descriptionSecondary: 'It projects onto any surface and will not wear out, so rough, worn and dirty floors stop being the limiting factor. IP65 rated for harsh industrial environments, suitable for high and low temperature applications, and easy to reposition or update as layouts change.',
      heroSpecs: [
        ['LED lifespan', '50,000 hrs'],
        ['Protection', 'IP65'],
        ['Warranty', '2 years']
      ],
      image: 'assets/imported/projectors/img/signum-50w.png',
      imageAlt: 'Signum Projected Safety Marking 50W projector',
      imageWidth: 610,
      imageHeight: 500,
      imageTag: '50W · IP65 protection',
      mediaClass: 'product-media--signum',
      purchaseLabel: 'Unit price',
      purchaseValue: '$2,250.00',
      purchaseSuffix: '+ GST',
      purchaseNote: 'Each projector requires a GOBO. Call <a href="tel:1300590505">1300 590 505</a> before purchase to discuss GOBO options and arrange a free onsite demo.',
      stickyText: 'Signum 50W · $2,250.00 + GST',
      featuresTitle: 'Bright on floors<br>that ruin markings.',
      featuresIntro: 'Projected markings stay visible regardless of floor cleanliness. We customise every projection system for the workplace layout and application, so contact us before purchase to plan the sign, mounting position and installation.',
      features: [
        ['Easy to reposition or update', 'Move or update the projection when your site layout changes.'],
        ['Customised signs and symbols', 'Choose safety content designed around your workplace requirements.'],
        ['Projects onto any surface', 'Visible guidance that will not wear under daily operations.'],
        ['50,000-hour LED lifespan', 'Long service life, with reduced output beyond the rated period.'],
        ['IP65 protection', 'Designed for harsh industrial environments and temperature extremes.'],
        ['Two-year warranty', 'Long-term support for the projector system.']
      ],
      notes: [
        'Not suitable for applications in full sunlight',
        'Hard wiring must be completed by a qualified electrician',
        'Every projection system is customised for the workplace',
        'Technical data sheet available on request'
      ],
      applications: [
        'Sites where layouts may change over time',
        'Warehouses with heavy forklift traffic',
        'Dusty, dirty or high-wear environments',
        'High-risk areas with forklift and pedestrian traffic'
      ],
      related: ['signum-75w', 'delta-fieldlas', 'mightyline']
    }
  };

  var relatedCatalogue = {
    'delta-fieldlas': {
      href: '#delta-fieldlas',
      route: 'delta-fieldlas',
      image: 'assets/imported/projectors/img/delta-fieldlas-projector.png',
      alt: 'Delta FieldLAS laser line marking projector',
      type: 'Internal laser line marking',
      title: 'Delta FieldLAS Laser Line Marking Projector',
      description: 'Creates adjustable internal floor lines for walkways, traffic separation and high-risk areas.'
    },
    'signum-75w': {
      href: '#signum-75w',
      route: 'signum-75w',
      image: 'assets/imported/projectors/img/signum-safety-projector.png',
      alt: 'Signum 75W projected safety marking system',
      type: 'Projected safety marking',
      title: 'Signum Projected Safety Marking – 75W',
      description: 'Projects safety lines, warning signs and customised symbols for industrial sites.'
    },
    'signum-50w': {
      href: '#signum-50w',
      route: 'signum-50w',
      image: 'assets/imported/projectors/img/signum-50w.png',
      alt: 'Signum 50W projected safety marking system',
      type: 'Projected safety marking',
      title: 'Signum Projected Safety Marking – 50W',
      description: 'Flexible safety guidance that can be repositioned as workplace layouts change.'
    },
    mightyline: {
      href: 'https://cotewell.com.au/product/mighty-line-marking-tape/',
      image: 'assets/imported/projectors/img/mightyline-marking-tape.jpg',
      alt: 'MightyLine marking tape',
      type: 'Heavy-duty floor tape',
      title: 'MightyLine Marking Tape',
      description: 'A durable, low-maintenance alternative to painted lines in busy industrial workplaces.'
    }
  };


  /* ---------------------------------------------------------------- category data
     Every figure below is stated on the live product page or on a live Cotewell
     article, referenced in SEO-CRO-NOTES.md. */
  var ORDER = ['signum-75w', 'signum-50w', 'delta-fieldlas'];

  var COMPARE_ROWS = [
    { key: 'signum-75w',     projects: 'Safety lines, warning signs, custom symbols', ip: 'IP65', life: '50,000 hr LED', warranty: '2 years', gobo: 'Required' },
    { key: 'signum-50w',     projects: 'Safety lines, warning signs, custom symbols', ip: 'IP65', life: '50,000 hr LED', warranty: '2 years', gobo: 'Required' },
    { key: 'delta-fieldlas', projects: 'Adjustable laser floor lines',                ip: 'IP67', life: 'Diode laser',   warranty: '2 years', gobo: 'Not used' }
  ];

  var ACTION_CARDS = [
    {
      img: UP + '2023/04/Projected-Line-Example.jpg',
      alt: 'Bright projected safety line running down a warehouse aisle',
      tag: 'Projected line marking',
      title: 'Signum Projected Safety Marking – 50W',
      copy: 'There is nothing on the floor to wear away, so the line stays as bright on day one thousand as it was on day one.',
      href: '#signum-50w',
      link: 'View the Product'
    },
    {
      img: 'assets/imported/projectors/img/unknown-project-pics-toll-3.jpg',
      alt: 'Projected pedestrian crossing marked onto an outdoor surface',
      tag: 'Pedestrian crossings',
      title: 'Projected warning signs at Toll',
      copy: '52 sensor-activated Signum STOP signs at Toll’s Kemps Creek warehouse.',
      href: 'https://cotewell.com.au/case-study-projected-warning-signs-at-a-toll-warehouse/',
      link: 'Read the customer story'
    },
    {
      img: UP + '2023/04/gobo-projekce-projection247-signage-znacky-e1757482151830.jpg',
      alt: 'Projected stop sign on a warehouse floor',
      tag: 'Activated projection',
      title: 'Activated Projectors: Improving Warehouse Safety with Real-Time Visual Warnings',
      copy: 'Sensors detect an approaching forklift or pedestrian and the warning appears on the ground, then clears once the area is empty.',
      href: 'https://cotewell.com.au/activated-projectors-improving-warehouse-safety-with-real-time-visual-warnings/',
      link: 'How activated projectors work'
    },
    {
      img: UP + '2023/04/safety-signage_projection_idvum_signium.jpg',
      alt: 'Projected safety signage across several industrial settings',
      tag: 'Customised GOBO designs',
      title: 'Pro’s & Con’s of our Laser Line Marking & Safety Signage Projectors',
      copy: 'Customised safety signs and symbols are available to suit the workplace, from exclusion zones to directional arrows and warning messages.',
      href: 'https://cotewell.com.au/pros-cons-of-our-laser-line-marking-safety-signage-projectors/',
      link: 'Pros and cons of projectors'
    }
  ];

  /* Video library, split so the pros/cons pair reads as a pair and the two
     shorts sit alongside them. Orientation drives the thumbnail aspect. */
  var VIDEOS = [
    { id: 'BtRwiznpibk', href: 'https://www.youtube.com/watch?v=BtRwiznpibk',
      tag: 'The case for', format: 'Video',
      title: "Pro's of Our Laser Line Marking & Safety Signage Projectors",
      copy: 'Where projection outperforms paint and tape, and the sites that get the most out of it.' },
    { id: 'AguKdMXljAg', href: 'https://www.youtube.com/watch?v=AguKdMXljAg',
      tag: 'The case against', format: 'Video',
      title: "Con's of Our Laser Line Marking & Safety Signage Projectors",
      copy: 'The honest limitations: sunlight, projection range, electrical work and where a projector is the wrong call.' },
    { id: '42TXkCO9rMs', href: 'https://youtube.com/shorts/42TXkCO9rMs',
      tag: 'Activated projection', format: 'Short', portrait: true,
      title: 'Activated Projector Markings | For Busy Warehouses',
      copy: 'The marking appears the moment a forklift or pedestrian is detected, then clears once the area is empty.' },
    { id: 'n4VH_JL10y4', href: 'https://youtube.com/shorts/n4VH_JL10y4',
      tag: 'Motion sensor', format: 'Short', portrait: true,
      title: 'Signum Warning Sign Projector | Motion Sensor',
      copy: 'A Signum warning sign triggered by motion, so the message only lands when there is something to warn about.' }
  ];

  var FAQS = [
    { q: 'How long do projected line markings last?',
      a: 'The projector is rated for a 50,000 hour LED life-span, which works out at roughly six years running 24/7, or close to twelve years if it is only on twelve hours a day. It will keep running beyond that, at reduced output. Because nothing is applied to the floor, the marking itself never wears, chips or fades.' },
    { q: 'Will they stay visible on a dirty or worn floor?',
      a: 'Yes, and that is the main reason sites move to them. In facilities where dust, dirt, moisture or debris collect on the floor, painted and taped markings quickly become hard to see. Projected lines and signs remain visible regardless of floor cleanliness, so the marking holds up in exactly the conditions that defeat surface markings.' },
    { q: 'Our concrete is rough and patched. Is that a problem?',
      a: 'No. Tape is not recommended for rough, damaged or uneven concrete, and paint breaks up on it, but a projector never touches the surface. It will project onto any surface and will not wear out, so surface condition stops being the limiting factor.' },
    { q: 'What happens when our layout changes?',
      a: 'The projection is easily changed or moved for future layout changes, and the unit can be relocated with no impact to the concrete surface and reinstalled elsewhere in the facility. There is no line to grind off and no surface repair afterwards.' },
    { q: 'Can they handle a harsh industrial environment?',
      a: 'The Signum units are IP65 protection rated for harsh industrial environments and are suitable for high and low temperature applications. The Delta FieldLAS carries an IP67-rated enclosure and integrated heating control. Both are built for dusty, dirty and wet conditions.' },
    { q: 'What are the limitations we should know about?',
      a: 'They are not suitable for applications in full sunlight. Each unit has a defined projection range, so larger or more complex sites may need multiple units. Hard wiring must be completed by a qualified electrician, and additional electrical infrastructure may be required. Every projection system is customised to suit the workplace, so there is no one size fits all.' },
    { q: 'How much downtime does installation cause?',
      a: 'There is minimal downtime during installation. There is no curing time to wait out, so operations continue much as normal. Signum units also need minimal ongoing maintenance, which is why we describe them as fit and forget.' },
    { q: 'Do I need a GOBO?',
      a: 'Each Signum projector needs to be purchased with a GOBO, which is the customised element that forms the projected image. Call 1300 590 505 before ordering so we can discuss GOBO options and arrange a free onsite demo. The Delta FieldLAS projects a laser line and does not use one.' }
  ];

  var productKeys = Object.keys(productData);
  var sectionNames = ['buy', 'features', 'projects', 'related-products', 'in-action'];


  /* ---------------------------------------------------------------- category render */
  function money(n) { return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  function renderCategory() {
    var grid = document.querySelector('[data-category-grid]');
    if (grid && !grid.dataset.rendered) {
      grid.innerHTML = ORDER.map(function (key) {
        var p = productData[key];
        return '<a class="tape-card" href="#' + key + '" data-product-route="' + key + '">' +
          '<div class="tape-card__media">' +
            '<span class="product-badge">' + p.badge + '</span>' +
            '<img src="' + p.image + '" alt="' + p.imageAlt + '" loading="lazy">' +
          '</div>' +
          '<div class="tape-card__copy">' +
            '<p class="mono">' + p.cardType + '</p>' +
            '<h3>' + p.shortName + '</h3>' +
            '<p>' + p.cardCopy + '</p>' +
            '<div class="tape-card__footer"><strong>' + money(p.priceFrom) + ' <small>+ GST</small></strong>' +
            '<span>View the Product <b>&rarr;</b></span></div>' +
          '</div>' +
        '</a>';
      }).join('');
      grid.dataset.rendered = '1';
    }

    var body = document.querySelector('[data-compare-body]');
    if (body && !body.dataset.rendered) {
      body.innerHTML = COMPARE_ROWS.map(function (r) {
        var p = productData[r.key];
        return '<tr><th scope="row"><a href="#' + r.key + '" data-product-route="' + r.key + '">' + p.shortName + '</a></th>' +
          '<td>' + r.projects + '</td><td>' + r.ip + '</td><td>' + r.life + '</td><td>' + r.warranty + '</td><td>' + r.gobo + '</td>' +
          '<td class="num">' + money(p.priceFrom) + '<small>+ GST</small></td>' +
          '<td class="go"><a href="#' + r.key + '" data-product-route="' + r.key + '" aria-label="View ' + p.shortName + '">View <span aria-hidden="true">&rarr;</span></a></td></tr>';
      }).join('');
      body.dataset.rendered = '1';
    }

    var action = document.querySelector('[data-action-grid]');
    if (action && !action.dataset.rendered) {
      action.innerHTML = ACTION_CARDS.map(function (c) {
        return '<a class="action-card reveal" href="' + c.href + '">' +
          '<div class="action-card__media"><img src="' + c.img + '" alt="' + c.alt + '" loading="lazy"></div>' +
          '<div class="action-card__copy"><p class="mono">' + c.tag + '</p><h3>' + c.title + '</h3>' +
          '<p>' + c.copy + '</p><span class="text-link text-link--dark">' + c.link + '</span></div>' +
        '</a>';
      }).join('');
      action.dataset.rendered = '1';
    }

    var videos = document.querySelector('[data-video-grid]');
    if (videos && !videos.dataset.rendered) {
      videos.innerHTML = VIDEOS.map(function (v) {
        return '<a class="video-card reveal' + (v.portrait ? ' video-card--short' : '') + '" href="' + v.href + '" target="_blank" rel="noopener">' +
          '<span class="video-card__media">' +
            '<img src="https://i.ytimg.com/vi/' + v.id + '/hqdefault.jpg" alt="" loading="lazy">' +
            '<span class="video-card__shade" aria-hidden="true"></span>' +
            '<span class="video-card__play" aria-hidden="true">&#9654;</span>' +
            '<span class="video-card__format mono">' + v.format + '</span>' +
          '</span>' +
          '<span class="video-card__copy">' +
            '<span class="mono">' + v.tag + '</span>' +
            '<b>' + v.title + '</b>' +
            '<span class="video-card__blurb">' + v.copy + '</span>' +
            '<span class="text-link text-link--dark">Watch on YouTube &#8599;</span>' +
          '</span></a>';
      }).join('');
      videos.dataset.rendered = '1';
    }

    var faq = document.querySelector('[data-faq-list]');
    if (faq && !faq.dataset.rendered) {
      faq.innerHTML = FAQS.map(function (f, i) {
        return '<details class="faq-item reveal"' + (i === 0 ? ' open' : '') + '><summary><span>' + f.q + '</span></summary><p>' + f.a + '</p></details>';
      }).join('');
      faq.dataset.rendered = '1';
    }
  }

  function routeFromHash() {
    var hash = window.location.hash.replace(/^#/, '');
    var matchedProduct = null;
    var matchedSection = null;

    productKeys.some(function (key) {
      if (hash === key) {
        matchedProduct = key;
        return true;
      }

      var prefix = key + '-';
      if (hash.indexOf(prefix) === 0) {
        var possibleSection = hash.slice(prefix.length);
        if (sectionNames.indexOf(possibleSection) !== -1) {
          matchedProduct = key;
          matchedSection = possibleSection;
          return true;
        }
      }
      return false;
    });

    return matchedProduct
      ? { view: 'product', product: matchedProduct, section: matchedSection }
      : { view: 'category', product: null, section: null };
  }

  function setText(selector, value) {
    var element = document.querySelector(selector);
    if (element) element.textContent = value;
  }

  function setMeta(element, value) {
    if (element) element.setAttribute('content', value);
  }

  function renderList(target, items) {
    if (!target) return;
    target.innerHTML = items.map(function (item) { return '<li>' + item + '</li>'; }).join('');
  }

  function renderFeatures(items) {
    if (!featureGrid) return;
    featureGrid.innerHTML = items.map(function (item, index) {
      return '<article class="feature"><span>' + String(index + 1).padStart(2, '0') + '</span><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>';
    }).join('');
  }

  function renderRelated(items) {
    if (!relatedGrid) return;
    relatedGrid.innerHTML = items.map(function (key) {
      var item = relatedCatalogue[key];
      var routeAttribute = item.route ? ' data-product-route="' + item.route + '"' : '';
      return '<a class="related-product" href="' + item.href + '"' + routeAttribute + '>' +
        '<div class="related-product__media"><img src="' + item.image + '" alt="' + item.alt + '" loading="lazy"></div>' +
        '<div class="related-product__copy"><p class="mono">' + item.type + '</p><h3>' + item.title + '</h3><p>' + item.description + '</p><span class="text-link text-link--dark">View product</span></div>' +
      '</a>';
    }).join('');
  }


  /* Photographs of the projection in service, from the live product gallery. */
  var productPhotos = document.querySelector('[data-product-photos]');
  var specStrip = document.querySelector('[data-spec-strip]');
  var brochureCta = document.querySelector('[data-brochure]');
  var heroImageDefault = null;

  function renderPhotos(product) {
    if (!productPhotos) return;
    var list = product.photos || [];
    if (!list.length) { productPhotos.hidden = true; productPhotos.innerHTML = ''; return; }
    productPhotos.hidden = false;
    productPhotos.innerHTML =
      '<span class="gallery-label mono">On site <b>' + list.length + '</b></span>' +
      '<div class="gallery-row gallery-row--photos">' +
        '<button type="button" class="product-photo is-active" data-photo="-1" aria-pressed="true" title="' + product.imageAlt + '" aria-label="' + product.imageAlt + '">' +
          '<img src="' + product.image + '" alt="" loading="lazy"></button>' +
        list.map(function (ph, i) {
          return '<button type="button" class="product-photo" data-photo="' + i + '" aria-pressed="false" ' +
            'title="' + ph.alt + '" aria-label="' + ph.alt + '">' +
            '<img src="' + ph.src + '" alt="" loading="lazy"></button>';
        }).join('') +
      '</div>';
  }

  function renderBrochure(product) {
    if (!brochureCta) return;
    if (!product.brochure) { brochureCta.hidden = true; return; }
    brochureCta.hidden = false;
    brochureCta.href = product.brochure;
    /* The file ships with the mock-up, so save it rather than opening a viewer tab. */
    brochureCta.setAttribute('download', '');
    var t = brochureCta.querySelector('[data-brochure-title]');
    var m = brochureCta.querySelector('[data-brochure-meta]');
    if (t) t.textContent = 'Download the ' + product.brochureLabel + ' brochure';
    if (m) m.textContent = product.brochureMeta || 'PDF';
  }

  function renderHeroSpecs(product) {
    if (!specStrip) return;
    var specs = product.heroSpecs || [];
    specStrip.hidden = true;
    specStrip.innerHTML = specs.map(function (spec) {
      return '<span><b>' + spec[1] + '</b>' + spec[0] + '</span>';
    }).join('');
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.product-photo') : null;
    if (!btn || !activeProduct) return;
    var product = productData[activeProduct];
    var idx = Number(btn.getAttribute('data-photo'));
    var isProduct = idx < 0;
    var photo = isProduct ? null : (product.photos || [])[idx];
    if (productImage) {
      productImage.src = isProduct ? product.image : photo.src;
      productImage.alt = isProduct ? product.imageAlt : photo.alt;
    }
    if (productMedia) productMedia.classList.toggle('product-media--photo', !isProduct);
    Array.prototype.forEach.call(document.querySelectorAll('.product-photo'), function (b) {
      var on = b === btn;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });
  });

  function applyProduct(key) {
    var product = productData[key];
    if (!product) return;

    renderPhotos(product);
    renderBrochure(product);
    renderHeroSpecs(product);
    if (productMedia) productMedia.classList.remove('product-media--photo');

    setText('[data-product-breadcrumb]', product.breadcrumb);
    setText('[data-product-eyebrow]', product.eyebrow);
    setText('[data-product-tag]', product.imageTag);
    setText('[data-product-description]', product.description);
    setText('[data-product-description-secondary]', product.descriptionSecondary);
    setText('[data-purchase-label]', product.purchaseLabel);
    setText('[data-purchase-value]', product.purchaseValue);
    setText('[data-features-intro]', product.featuresIntro);

    if (productTitle) {
      productTitle.innerHTML = product.titleHtml;
      productTitle.classList.toggle('is-long', product.longTitle);
    }
    if (productImage) {
      productImage.src = product.image;
      productImage.alt = product.imageAlt;
      productImage.width = product.imageWidth;
      productImage.height = product.imageHeight;
    }
    if (productMedia) {
      productMedia.classList.remove('product-media--signum');
      if (product.mediaClass) productMedia.classList.add(product.mediaClass);
    }

    var suffix = document.querySelector('[data-purchase-suffix]');
    if (suffix) {
      suffix.textContent = product.purchaseSuffix;
      suffix.hidden = !product.purchaseSuffix;
    }

    var purchaseNote = document.querySelector('[data-purchase-note]');
    if (purchaseNote) purchaseNote.innerHTML = product.purchaseNote;

    var featuresTitle = document.querySelector('[data-features-title]');
    if (featuresTitle) featuresTitle.innerHTML = product.featuresTitle;

    renderFeatures(product.features);
    renderList(installationNotes, product.notes);
    renderList(applications, product.applications);
    renderRelated(product.related);

    if (confirmation) confirmation.hidden = true;
    if (quantity) quantity.value = '1';
    if (stickyLabel) stickyLabel.textContent = product.stickyText;
    if (stickyCta) stickyCta.setAttribute('aria-label', product.shortName + ' quick purchase');
    if (stickyAdd) stickyAdd.href = '#' + key + '-buy';
  }

  function renderRoute() {
    var route = routeFromHash();
    var routeChanged = route.view !== activeView || route.product !== activeProduct;
    var page = route.view === 'product' ? productData[route.product] : categoryData;

    activeView = route.view;
    activeProduct = route.product;

    views.forEach(function (view) {
      view.hidden = view.getAttribute('data-view') !== route.view;
    });

    if (route.view === 'product') applyProduct(route.product);
    else renderCategory();

    document.title = page.title;
    if (description) description.setAttribute('content', page.descriptionMeta || page.description);
    if (canonical) canonical.setAttribute('href', page.canonical);
    setMeta(ogTitle, page.title);
    setMeta(ogDescription, page.descriptionMeta || page.description);
    setMeta(ogUrl, page.canonical);
    setMeta(ogImage, page.image || categoryData.image);

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

    if (route.section) {
      requestAnimationFrame(function () {
        var section = document.getElementById(route.section);
        if (section) section.scrollIntoView({ behavior: routeChanged ? 'auto' : 'smooth' });
      });
    } else if (routeChanged) {
      requestAnimationFrame(function () { window.scrollTo({ top: 0, behavior: 'auto' }); });
    }

    requestAnimationFrame(updatePageUi);
  }

  function normaliseQuantity(value) {
    var parsed = parseInt(value, 10);
    if (!Number.isFinite(parsed)) parsed = 1;
    return Math.max(1, Math.min(99, parsed));
  }

  function changeQuantity(change) {
    if (!quantity) return;
    quantity.value = normaliseQuantity(Number(quantity.value) + change);
  }

  if (quantityDown) quantityDown.addEventListener('click', function () { changeQuantity(-1); });
  if (quantityUp) quantityUp.addEventListener('click', function () { changeQuantity(1); });
  if (quantity) quantity.addEventListener('change', function () { quantity.value = normaliseQuantity(quantity.value); });

  if (addToCart) {
    addToCart.addEventListener('click', function () {
      var added = normaliseQuantity(quantity ? quantity.value : 1);
      var existing = parseInt(cartCount ? cartCount.textContent : '0', 10) || 0;
      var total = existing + added;
      var productName = activeProduct && productData[activeProduct] ? productData[activeProduct].shortName : 'Projector';

      if (cartCount) cartCount.textContent = String(total);
      if (cartLink) cartLink.setAttribute('aria-label', 'Cart, ' + total + (total === 1 ? ' item' : ' items'));
      if (confirmation) {
        confirmation.hidden = false;
        confirmation.textContent = added + ' × ' + productName + ' added to the mock-up cart.';
      }
    });
  }

  function updatePageUi() {
    ticking = false;
    var y = window.scrollY || 0;

    if (header) header.classList.toggle('is-hidden', y > lastY && y > 180);

    if (hero && stickyCta) {
      var show = activeView === 'product' && hero.getBoundingClientRect().bottom <= 0;
      stickyCta.classList.toggle('is-visible', show);
      stickyCta.setAttribute('aria-hidden', String(!show));
    }

    lastY = y;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updatePageUi);
    }
  }, { passive: true });

  window.addEventListener('hashchange', renderRoute);

  Array.prototype.slice.call(document.querySelectorAll('[data-category-link]')).forEach(function (link) {
    link.addEventListener('click', function () {
      if (activeView === 'category' && window.location.hash === '#category') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  renderRoute();

  var revealItems = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }
})();
