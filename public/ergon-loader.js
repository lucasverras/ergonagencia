/*! ERGON intro loader · vanilla JS, sem dependências
 *  ErgonLoader.play({ once, speed, glow, holdUntil, content, target, fixed, reducedMotion, onDone })
 */
(function (w, d) {
  'use strict';
  var P = {"on":"M280.72 31.07L284.00 30.57L290.00 30.36L294.00 30.34L298.00 30.63L303.98 31.71L307.77 32.85L312.68 34.91L315.84 36.63L318.83 38.62L324.13 43.33L326.91 46.65L329.35 50.17L331.44 54.05L332.21 56.05L331.82 57.22L329.05 61.61L321.42 74.87L315.00 84.20L314.70 83.85L314.62 83.00L315.29 79.00L315.34 75.00L314.25 67.09L313.26 64.14L310.93 59.63L308.58 56.93L305.84 54.65L303.36 53.08L300.79 51.81L297.80 50.86L293.00 50.07L288.00 50.08L284.00 50.68L280.21 51.81L277.63 53.07L275.15 54.62L272.43 56.94L270.11 59.68L268.74 62.17L267.82 64.21L266.66 68.00L265.96 73.21L265.92 78.00L266.61 84.00L267.73 87.89L270.02 92.47L272.13 95.35L274.17 97.40L277.14 99.37L281.11 101.27L285.00 102.26L287.00 102.45L291.00 102.58L295.00 102.41L296.84 102.15L299.93 101.28L302.78 100.17L305.86 98.40L311.52 94.00L314.42 90.85L321.91 80.34L332.67 62.17L339.02 52.54L342.57 48.12L346.97 43.47L350.19 40.65L353.63 38.07L356.09 36.55L362.08 33.62L367.08 31.69L372.00 30.60L381.00 30.05L389.00 30.56L394.92 31.73L399.84 33.71L406.82 37.67L409.54 39.97L412.99 43.51L414.41 45.16L416.43 48.13L419.29 54.13L421.30 61.00L422.00 68.50L422.01 119.75L421.75 120.17L420.00 120.67L403.00 120.67L401.13 120.47L400.65 119.90L400.51 69.00L400.40 65.00L400.07 63.26L399.09 60.29L398.46 59.09L396.85 56.69L394.24 54.20L389.88 51.69L386.00 50.57L381.00 50.08L375.00 50.57L371.14 51.72L368.48 53.00L366.14 54.57L361.22 58.71L355.54 65.07L352.54 69.11L337.41 93.86L334.94 97.40L331.41 101.84L326.54 107.03L322.36 110.90L318.37 113.93L313.56 117.03L308.82 119.23L302.00 121.29L296.00 122.09L290.00 122.33L280.00 121.40L276.00 120.44L270.11 118.32L264.13 115.39L258.01 110.50L254.12 106.33L251.65 102.84L247.66 94.90L245.79 88.88L244.59 81.00L244.62 71.00L245.72 64.02L247.79 57.20L249.63 53.12L253.06 47.61L257.37 42.90L261.16 39.60L267.20 35.76L275.00 32.61ZM362.49 61.97L362.96 61.81L363.17 62.00L361.71 66.00L361.47 70.00L361.32 119.89L360.86 120.44L360.00 120.64L341.00 120.54L340.22 120.24L339.91 119.79L339.87 119.00L339.86 98.00L340.04 96.64L340.66 95.16L355.73 70.20L359.01 65.53Z","reg":"M424.37 20.94L427.00 20.37L429.00 20.36L430.98 20.65L433.51 22.01L435.33 24.16L436.41 27.00L436.49 29.00L436.24 30.86L435.36 32.87L434.54 34.01L433.54 35.02L431.74 36.12L428.76 37.01L426.00 36.73L424.35 36.07L422.51 34.98L420.74 32.81L419.72 30.00L419.60 28.00L419.90 26.24L420.78 24.21L421.60 23.13L422.54 22.07ZM425.22 22.83L423.02 24.51L421.74 27.08L421.73 29.95L422.52 31.94L423.36 33.10L424.47 34.01L426.00 34.62L428.00 34.88L430.00 34.57L431.58 34.04L433.12 32.69L434.22 30.83L434.50 28.00L433.90 25.69L432.57 23.96L430.81 22.77L428.00 22.34ZM424.63 25.13L425.13 24.63L426.00 24.50L429.00 24.59L430.39 25.06L431.52 26.12L431.86 27.00L431.81 28.00L430.74 30.09L431.37 31.88L430.93 32.37L430.12 32.36L429.48 31.98L427.90 30.55L427.12 30.53L425.87 32.36L425.13 32.37L424.63 31.87ZM427.12 26.50L426.60 27.08L426.60 27.87L427.12 28.37L428.93 28.36L429.56 27.87L429.57 27.09L428.94 26.52L428.00 26.35Z","erg":"M35.73 31.07L39.00 30.60L45.00 30.37L51.00 30.51L54.84 30.88L61.82 32.81L66.84 34.74L69.46 36.02L74.90 39.55L78.76 42.78L82.99 47.51L85.34 51.14L87.02 54.44L88.22 57.19L90.18 63.15L91.27 69.00L91.60 75.00L91.43 82.00L91.25 82.81L90.81 83.21L24.00 83.34L22.18 83.64L21.86 84.08L22.80 87.81L24.71 91.82L28.68 96.81L30.27 98.14L33.28 100.10L36.12 101.28L41.00 102.47L45.00 102.63L49.00 102.46L54.83 101.22L57.59 100.04L61.81 97.32L63.86 95.34L65.21 93.67L66.67 93.00L87.75 93.00L88.15 93.25L88.38 94.00L88.33 94.94L85.90 100.31L82.37 105.83L78.54 110.02L72.43 114.96L69.92 116.47L66.79 118.19L61.00 120.37L57.00 121.32L50.00 122.27L42.00 122.12L35.00 121.37L31.00 120.42L27.21 119.16L23.05 117.41L19.13 115.38L15.17 112.40L12.49 110.00L9.58 106.88L7.04 103.43L5.60 100.90L2.68 94.90L1.67 91.97L0.63 88.00L-0.29 82.00L-0.49 76.00L-0.35 71.00L0.55 65.00L1.55 61.00L2.81 57.20L4.64 53.13L7.66 48.18L8.98 46.46L12.37 42.90L16.16 39.61L19.12 37.58L24.21 34.82L30.00 32.63ZM131.36 30.96L134.00 30.56L141.00 30.15L141.86 30.37L142.32 31.04L142.32 48.86L141.86 49.35L137.05 49.78L133.07 50.70L129.08 52.50L126.12 54.56L124.06 56.57L122.02 59.54L120.78 62.17L119.78 66.05L119.53 69.00L119.39 119.92L118.88 120.50L118.00 120.67L100.00 120.67L99.05 120.50L98.39 119.92L98.19 119.00L98.22 70.00L98.67 62.00L99.73 57.07L100.69 54.06L102.80 49.22L105.09 45.63L107.92 42.42L111.60 39.07L116.34 35.92L121.05 33.65L127.04 31.74ZM181.39 30.96L183.00 30.61L192.00 30.05L201.98 30.73L205.90 31.76L211.80 33.80L215.86 35.64L218.32 37.10L221.89 39.55L225.65 42.87L228.95 46.57L230.99 49.52L233.11 53.27L235.21 58.17L237.38 66.00L238.21 72.00L238.39 76.00L238.40 117.00L238.22 121.00L237.45 126.00L236.15 130.78L234.41 134.93L231.93 139.37L228.91 143.39L225.35 146.88L221.35 149.91L216.90 152.36L212.81 154.21L209.86 155.21L205.00 156.43L198.00 157.36L188.00 157.36L181.01 156.29L174.19 154.20L169.28 152.11L163.15 148.40L158.58 144.93L155.50 142.00L152.72 138.81L152.62 138.09L153.47 136.98L168.16 126.62L169.00 126.33L169.88 126.48L174.60 130.92L178.63 133.92L183.16 136.22L186.15 137.17L190.00 137.65L197.00 137.62L200.88 137.19L204.66 136.07L207.90 134.41L210.25 132.75L213.94 128.37L215.27 125.84L216.22 122.87L216.54 121.00L216.87 115.00L216.65 114.00L215.98 113.51L215.28 113.77L211.85 116.39L208.00 118.48L203.78 120.15L199.00 121.36L191.00 122.26L187.00 122.11L180.01 121.27L176.12 120.27L173.19 119.21L169.18 117.26L164.78 114.75L158.87 109.64L155.53 105.92L153.07 102.36L149.75 95.83L147.73 89.96L146.84 85.87L146.38 81.00L146.21 75.00L146.70 67.00L147.74 62.07L149.74 56.16L150.98 53.45L153.10 49.68L155.57 46.15L158.51 43.02L161.71 40.16L165.16 37.65L170.18 34.77L175.17 32.79ZM189.07 49.81L184.18 50.82L181.29 51.90L178.14 53.61L175.30 55.81L171.57 60.13L169.90 63.28L168.79 66.15L167.88 70.18L167.51 76.00L167.84 81.90L168.74 85.92L169.74 88.85L170.71 90.83L173.13 94.35L176.19 97.33L180.53 99.99L184.00 101.37L188.00 102.16L191.00 102.43L196.85 102.11L201.54 101.01L204.24 99.86L207.42 97.95L211.49 93.97L213.92 90.35L215.32 86.95L216.49 82.00L216.82 76.00L216.42 70.00L215.25 65.14L213.41 61.10L211.43 58.12L207.84 54.61L204.84 52.69L202.86 51.72L199.95 50.72L195.00 49.73ZM39.03 50.75L35.22 51.84L33.19 52.76L29.60 55.07L27.03 57.52L25.72 59.20L23.92 62.32L23.77 62.94L24.14 63.47L26.00 63.66L66.00 63.66L66.89 63.50L67.33 62.91L67.24 62.19L65.43 59.14L62.52 55.99L59.71 53.87L55.78 51.84L51.00 50.56L46.00 50.09Z","tag":"M20.75 140.18L21.12 140.00L24.17 141.01L23.84 141.22L21.00 141.03L20.04 141.31L19.34 142.03L19.29 142.97L19.79 143.69L21.04 144.38L23.31 145.10L24.37 146.12L24.41 147.97L23.68 149.08L20.00 149.43L19.10 149.34L18.71 148.98L19.10 148.64L22.00 148.81L22.88 148.48L23.43 147.87L23.52 147.00L23.26 146.10L22.79 145.57L20.17 145.24L19.01 144.56L18.07 143.31L18.01 142.38L18.65 141.19ZM44.77 140.25L45.00 140.00L46.08 141.32L49.20 148.20L49.29 148.89L49.00 149.28L47.83 147.79L46.00 147.34L43.00 147.47L42.16 147.76L40.99 149.28L40.70 148.89L40.78 148.18L43.91 141.30ZM71.62 140.19L71.94 140.00L74.25 141.00L73.88 141.23L71.00 141.08L70.12 141.40L69.59 142.08L69.58 142.92L70.50 144.01L72.85 144.77L74.02 145.46L74.98 146.49L75.10 147.77L74.42 148.85L73.84 149.27L70.00 149.43L69.18 149.26L68.85 148.94L69.18 148.62L72.00 148.85L72.95 148.58L73.64 148.04L74.23 147.05L72.84 145.60L70.25 145.12L69.14 144.47L68.66 143.86L68.60 142.04L68.93 141.32L69.38 140.95ZM78.99 140.25L79.25 140.00L80.00 140.00L83.81 140.00L84.19 140.25L84.19 140.75L83.05 141.25L82.39 142.00L82.18 143.00L82.14 148.81L81.91 149.12L81.59 148.81L81.45 148.00L81.34 142.17L80.86 141.60L79.25 141.00L78.99 140.75ZM102.74 140.06L104.76 140.00L107.90 140.66L108.54 141.00L109.98 142.48L110.46 144.00L110.31 146.88L109.56 148.02L108.38 148.94L107.00 149.42L103.00 149.53L102.15 149.39L101.71 148.88L101.71 141.06L102.15 140.36ZM124.74 140.12L126.06 140.23L128.31 141.14L129.29 142.17L130.22 144.11L130.21 145.85L129.25 147.81L128.30 148.84L127.00 149.41L123.10 149.35L121.96 148.57L120.69 146.87L120.53 144.00L121.00 142.44L122.47 141.02ZM0.58 141.15L0.92 140.80L1.28 141.15L3.62 146.87L4.13 147.32L4.87 147.28L5.39 146.83L7.71 141.14L8.05 140.77L8.36 141.14L8.33 141.94L7.64 143.19L7.14 144.77L5.31 148.86L4.84 149.34L4.14 149.37L3.65 148.88L0.91 142.74ZM12.64 141.01L13.01 140.52L13.38 141.01L13.50 142.00L13.50 148.00L13.38 148.91L13.01 149.32L12.64 148.91L12.52 148.00ZM28.91 141.19L29.10 140.89L29.39 141.19L29.64 144.99L30.69 147.82L31.19 148.28L33.00 148.70L34.69 148.10L35.45 146.97L35.74 145.00L35.82 141.13L36.06 140.76L36.36 141.13L36.48 142.00L36.43 147.00L36.25 147.82L35.43 148.90L34.84 149.28L32.00 149.40L31.11 149.32L30.00 148.55L29.64 147.90L28.91 144.99ZM53.62 141.02L53.99 140.54L54.34 141.02L54.59 147.92L55.11 148.50L58.87 148.75L59.24 149.04L58.87 149.38L55.00 149.54L54.11 149.46L53.60 148.92ZM88.77 141.10L89.05 140.69L89.39 141.10L89.64 145.95L90.20 147.20L91.16 148.34L93.00 148.68L94.61 148.05L95.39 146.93L95.72 141.06L96.03 140.62L96.37 141.06L96.49 142.00L96.48 146.00L96.13 147.76L95.36 148.81L94.81 149.23L94.00 149.38L92.00 149.41L91.08 149.34L89.95 148.60L88.81 145.98ZM114.97 141.23L115.13 140.97L115.42 141.23L115.56 142.00L115.56 148.00L115.42 148.76L115.13 149.02L114.97 148.76ZM45.00 141.84L43.95 143.44L43.34 145.00L43.40 145.87L44.03 146.37L45.00 146.50L45.95 146.37L46.56 145.87L46.63 145.00L46.38 144.11ZM103.13 141.37L102.63 142.06L102.50 143.00L102.63 147.88L103.13 148.42L104.00 148.63L107.79 148.34L109.33 146.82L109.53 146.00L109.58 144.00L109.00 142.50L107.88 141.60L107.00 141.35L105.00 141.04L104.00 141.06ZM123.10 141.51L122.46 141.97L121.59 143.11L121.34 145.00L121.62 146.84L122.58 147.94L124.00 148.59L126.00 148.67L127.62 148.06L129.02 146.41L129.49 145.00L129.38 144.11L128.34 142.09L127.82 141.53L126.00 141.12L125.00 141.07Z"};
  var MAIN = 'M316 80 L322.6 60.8 A36 36 0 1 0 315.5 101.5 C321 96 338 74 346 61 C356 46 366 40 380 40 C398 40 411 52 411 70 L411 121';
  var STEM = 'M360 65 L352.5 90 Q350.5 96 350.5 104 L350.5 121';
  var KEY = 'ergon:intro-seen';
  var Y = '#EAFF00';
  // Timeline (s): logo in 0–.38 · energy path .30–1.00 · settle 1.00–1.30 · reveal 1.30–1.60
  var T = { inEnd: .38, pathA: .30, pathB: 1.0, settle: 1.30, end: 1.60 };
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var seg = function (t, a, b) { return clamp((t - a) / (b - a)); };
  var M = {
    enter: function (x) { return 1 - Math.pow(1 - x, 3); },
    draw: function (x) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; },
    soft: function (x) { return -(Math.cos(Math.PI * x) - 1) / 2; }
  };
  var uidN = 0;

  function markup(u) {
    var fr = 'filterUnits="userSpaceOnUse" x="150" y="-50" width="360" height="250"';
    var st = 'fill="none" stroke-linecap="round" stroke-linejoin="round" pathLength="1"';
    return '<svg viewBox="-4 14 462 148" role="img" aria-label="ERGON" style="display:block;width:100%;height:auto;overflow:visible">' +
      '<defs>' +
        '<clipPath id="' + u + 'c"><path clip-rule="evenodd" d="' + P.on + '"/></clipPath>' +
        '<filter id="' + u + 'g" ' + fr + '><feGaussianBlur stdDeviation="9"/></filter>' +
        '<filter id="' + u + 'h" ' + fr + '><feGaussianBlur stdDeviation="2.6"/></filter>' +
        '<filter id="' + u + 's" ' + fr + '><feGaussianBlur stdDeviation="1.4"/></filter>' +
        '<mask id="' + u + 'm" maskUnits="userSpaceOnUse" x="150" y="-50" width="360" height="250"><g filter="url(#' + u + 's)">' +
          '<path data-r="tm" d="' + MAIN + '" ' + st + ' stroke="#fff" stroke-width="25" stroke-dasharray="1 2" stroke-dashoffset="1"/>' +
          '<path data-r="ts" d="' + STEM + '" ' + st + ' stroke="#fff" stroke-width="23" stroke-dasharray="1 2" stroke-dashoffset="1"/>' +
        '</g></mask>' +
      '</defs>' +
      '<g data-r="erg"><path fill="#fff" fill-rule="evenodd" d="' + P.erg + '"/><path fill="#fff" fill-rule="evenodd" d="' + P.tag + '"/></g>' +
      '<g filter="url(#' + u + 'g)">' +
        '<path data-r="gm" d="' + MAIN + '" ' + st + ' stroke="' + Y + '" stroke-width="20" stroke-dasharray="1 2" stroke-dashoffset="1"/>' +
        '<path data-r="gs" d="' + STEM + '" ' + st + ' stroke="' + Y + '" stroke-width="18" stroke-dasharray="1 2" stroke-dashoffset="1"/>' +
        '<path data-r="am" d="' + MAIN + '" ' + st + ' stroke="' + Y + '" stroke-width="30" stroke-dasharray=".09 2" opacity="0"/>' +
        '<path data-r="as" d="' + STEM + '" ' + st + ' stroke="' + Y + '" stroke-width="26" stroke-dasharray=".35 2" opacity="0"/>' +
      '</g>' +
      '<path data-r="base" fill="' + Y + '" fill-rule="evenodd" opacity=".26" d="' + P.on + '"/>' +
      '<path fill="' + Y + '" fill-rule="evenodd" mask="url(#' + u + 'm)" d="' + P.on + '"/>' +
      '<g clip-path="url(#' + u + 'c)"><g filter="url(#' + u + 'h)">' +
        '<path data-r="hm" d="' + MAIN + '" ' + st + ' stroke="#F6FFB4" stroke-width="30" stroke-dasharray=".05 2" opacity="0"/>' +
        '<path data-r="hs" d="' + STEM + '" ' + st + ' stroke="#F6FFB4" stroke-width="26" stroke-dasharray=".25 2" opacity="0"/>' +
      '</g></g>' +
      '<path data-r="reg" fill="' + Y + '" fill-rule="evenodd" opacity=".26" d="' + P.reg + '"/>' +
    '</svg>';
  }

  function play(opts) {
    opts = opts || {};
    var once = opts.once !== false;
    var speed = opts.speed || 1, glow = opts.glow == null ? 1 : opts.glow;
    var content = typeof opts.content === 'string' ? d.querySelector(opts.content) : opts.content;
    var done = function () { if (opts.onDone) opts.onDone(); };
    try { if (once && w.sessionStorage.getItem(KEY)) { done(); return null; } } catch (e) {}
    var reduced = opts.reducedMotion == null
      ? !!(w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches)
      : !!opts.reducedMotion;

    var u = 'ergl' + (++uidN) + '-';
    var ov = d.createElement('div');
    ov.setAttribute('role', 'status');
    ov.setAttribute('aria-label', opts.label || 'Carregando');
    ov.style.cssText = 'position:' + (opts.fixed === false ? 'absolute' : 'fixed') +
      ';inset:0;z-index:2147483000;background:' + (opts.background || '#030303') +
      ';display:flex;align-items:center;justify-content:center;will-change:opacity';
    var box = d.createElement('div');
    box.style.cssText = 'width:' + (opts.width || 'clamp(200px, 30vw, 400px)') + ';will-change:transform,opacity;opacity:0';
    box.innerHTML = markup(u);
    ov.appendChild(box);
    (opts.target || d.body || d.documentElement).appendChild(ov);

    var r = {};
    box.querySelectorAll('[data-r]').forEach(function (n) { r[n.getAttribute('data-r')] = n; });

    // where the main path passes the n's left stem → stem lights from there
    var len = r.tm.getTotalLength(), best = 1e9, J = .62;
    for (var i = 0; i <= 200; i++) {
      var p = r.tm.getPointAtLength(len * i / 200), dd = Math.hypot(p.x - 358, p.y - 66);
      if (dd < best) { best = dd; J = i / 200; }
    }
    var lo = 0, hi = 1;
    for (var k = 0; k < 24; k++) { var mid = (lo + hi) / 2; if (M.draw(mid) < J) lo = mid; else hi = mid; }
    var tJ = T.pathA + lo * (T.pathB - T.pathA), tJe = tJ + .2;

    var set = function (n, a, v) { n.setAttribute(a, v); };
    var ready = !opts.holdUntil, raf = 0, last = 0, el = 0, paused = false, finished = false;
    if (opts.holdUntil && opts.holdUntil.then) opts.holdUntil.then(function () { ready = true; });

    function render(t) {
      var a = M.enter(seg(t, 0, T.inEnd));
      var o = M.soft(seg(t, T.settle, T.end));
      box.style.opacity = (a * (1 - o * .9)).toFixed(4);
      box.style.transform = 'scale(' + (0.985 + 0.015 * a + 0.02 * o).toFixed(4) + ')';
      set(r.erg, 'transform', 'translate(0 ' + ((1 - a) * 3).toFixed(3) + ')');
      ov.style.opacity = (1 - o).toFixed(4);
      ov.style.pointerEvents = o > 0 ? 'none' : 'auto';
      if (content) {
        content.style.opacity = o.toFixed(4);
        content.style.transform = o < 1 ? 'translateY(' + ((1 - M.enter(o)) * 14).toFixed(2) + 'px)' : '';
      }

      var pp = M.draw(seg(t, T.pathA, T.pathB));
      var ps = M.draw(seg(t, tJ, tJe));
      set(r.tm, 'stroke-dashoffset', 1 - pp); set(r.gm, 'stroke-dashoffset', 1 - pp);
      set(r.ts, 'stroke-dashoffset', 1 - ps); set(r.gs, 'stroke-dashoffset', 1 - ps);
      set(r.hm, 'stroke-dashoffset', .05 - pp); set(r.am, 'stroke-dashoffset', .09 - pp);
      set(r.hs, 'stroke-dashoffset', .25 - ps); set(r.as, 'stroke-dashoffset', .35 - ps);

      var hI = seg(t, T.pathA, T.pathA + .07) * (1 - seg(t, T.pathB - .02, T.pathB + .12));
      var sI = seg(t, tJ, tJ + .04) * (1 - seg(t, tJe - .04, tJe + .1));
      set(r.hm, 'opacity', hI * .9); set(r.am, 'opacity', hI * .6 * glow);
      set(r.hs, 'opacity', sI * .85); set(r.as, 'opacity', sI * .5 * glow);

      var gl = t < T.pathB ? .42
        : t < T.pathB + .12 ? .42 + .3 * M.enter(seg(t, T.pathB, T.pathB + .12))
        : .72 - .4 * M.soft(seg(t, T.pathB + .12, T.settle));
      set(r.gm, 'opacity', (gl * glow).toFixed(4)); set(r.gs, 'opacity', (gl * glow).toFixed(4));
      var lit = .26 + .74 * M.enter(seg(t, T.pathB - .04, T.pathB + .1));
      set(r.base, 'opacity', lit.toFixed(4));
      set(r.reg, 'opacity', (.26 + .74 * M.enter(seg(t, T.pathB, T.pathB + .16))).toFixed(4));
    }

    function finish() {
      if (finished) return; finished = true;
      cancelAnimationFrame(raf);
      try { if (once) w.sessionStorage.setItem(KEY, '1'); } catch (e) {}
      if (content) { content.style.opacity = ''; content.style.transform = ''; }
      if (ov.parentNode) ov.parentNode.removeChild(ov);
      done();
    }

    function tick(now) {
      var dt = last ? (now - last) / 1000 : 0; last = now;
      if (!paused) {
        el += dt * speed;
        if (!ready && el > T.settle) el = T.settle; // hold lit until the page is ready
      }
      if (reduced) {
        // no path animation: logo already lit, short hold, then a plain fade
        var rt = el / speed;
        render(rt < .45 || !ready ? T.settle : T.settle + Math.min(1, (rt - .45) / .3) * (T.end - T.settle));
        if (ready && rt >= .75) return finish();
      } else {
        render(el);
        if (el >= T.end) return finish();
      }
      raf = requestAnimationFrame(tick);
    }

    render(reduced ? T.settle : 0);
    if (reduced) box.style.opacity = 1;
    raf = requestAnimationFrame(tick);

    return {
      duration: T.end,
      seek: function (t) { paused = true; el = t; if (finished) return; render(t); },
      resume: function () { paused = false; last = 0; },
      destroy: function () { cancelAnimationFrame(raf); finished = true; if (content) { content.style.opacity = ''; content.style.transform = ''; } if (ov.parentNode) ov.parentNode.removeChild(ov); }
    };
  }

  w.ErgonLoader = { play: play, reset: function () { try { w.sessionStorage.removeItem(KEY); } catch (e) {} } };
})(window, document);
