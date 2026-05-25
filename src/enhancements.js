// Scripts de pós-processamento ("polish") portados VERBATIM do HTML original.
// Rodam uma vez após o React montar; usam setInterval para aguardar os elementos.
// NÃO editar a lógica — replica exatamente o comportamento do original.

/* === enhancement script 1 === */
(function applyClinicPattern() {
      var tries = 0;
      var timer = setInterval(function () {
        tries += 1;
        var section = document.querySelector('#casos') || (document.querySelector('.photo-bento') && document.querySelector('.photo-bento').closest('section'));
        if (!section && tries < 80) return;
        clearInterval(timer);
        if (!section || document.getElementById('lb-clinic-pattern-style')) return;

        section.classList.add('lb-clinic-pattern-section');

        var style = document.createElement('style');
        style.id = 'lb-clinic-pattern-style';
        style.textContent = [
          '.lb-clinic-pattern-section{',
          '  position:relative!important;',
          '  overflow:hidden!important;',
          '}',
          '.lb-clinic-pattern-section::before{',
          '  content:"";',
          '  position:absolute;',
          '  inset:2% -8% 6% -8%;',
          '  background:url("pattern-leonardo-biroqui.svg") center/980px auto repeat;',
          '  opacity:.12;',
          '  pointer-events:none;',
          '  z-index:0;',
          '  transform:rotate(-2deg);',
          '  filter:saturate(1.05);',
          '}',
          '.lb-clinic-pattern-section::after{',
          '  content:"";',
          '  position:absolute;',
          '  inset:0;',
          '  background:linear-gradient(90deg,#fff 0%,rgba(255,255,255,.86) 28%,rgba(255,255,255,.58) 52%,#fff 100%);',
          '  pointer-events:none;',
          '  z-index:0;',
          '}',
          '.lb-clinic-pattern-section>.container{',
          '  position:relative!important;',
          '  z-index:1!important;',
          '}',
          '.lb-clinic-pattern-section .photo-bento{',
          '  position:relative;',
          '}',
          '.lb-clinic-pattern-section .photo-bento::before{',
          '  content:"";',
          '  position:absolute;',
          '  inset:-34px;',
          '  background:url("pattern-leonardo-biroqui.svg") center/760px auto repeat;',
          '  opacity:.16;',
          '  border-radius:34px;',
          '  z-index:-1;',
          '}',
          '@media(max-width:760px){',
          '  .lb-clinic-pattern-section::before{background-size:720px auto;opacity:.10;inset:0 -28%;}',
          '  .lb-clinic-pattern-section .photo-bento::before{inset:-18px;opacity:.12;}',
          '}'
        ].join('');

        (document.head || document.documentElement).appendChild(style);
      }, 120);
    })();

/* === enhancement script 2 === */
(function applyFaqMobilePolish() {
      var tries = 0;
      var timer = setInterval(function () {
        tries += 1;
        var faq = document.querySelector('#faq');
        if (!faq && tries < 80) return;
        clearInterval(timer);
        if (!faq || document.getElementById('lb-faq-mobile-polish-style')) return;

        faq.classList.add('lb-faq-fixed');

        var style = document.createElement('style');
        style.id = 'lb-faq-mobile-polish-style';
        style.textContent = [
          'body{overflow-x:hidden;}',
          '#faq.lb-faq-fixed{',
          '  padding:clamp(84px,9vw,140px) 0!important;',
          '  overflow:hidden!important;',
          '}',
          '#faq.lb-faq-fixed .faq-grid{',
          '  grid-template-columns:minmax(0,.86fr) minmax(0,1.28fr)!important;',
          '  gap:clamp(36px,6vw,72px)!important;',
          '  align-items:start!important;',
          '}',
          '#faq.lb-faq-fixed .faq-sticky{',
          '  position:static!important;',
          '  top:auto!important;',
          '  align-self:start!important;',
          '  transform:none!important;',
          '}',
          '#faq.lb-faq-fixed .faq-sticky h2{',
          '  font-size:clamp(38px,5.2vw,72px)!important;',
          '  line-height:.98!important;',
          '}',
          '#faq.lb-faq-fixed .faq-sticky p{',
          '  max-width:420px!important;',
          '}',
          '#faq.lb-faq-fixed .faq-grid>div:last-child button{',
          '  min-height:64px!important;',
          '  gap:16px!important;',
          '}',
          '#faq.lb-faq-fixed .faq-grid>div:last-child button>span:first-child{',
          '  font-size:clamp(17px,2vw,19px)!important;',
          '  line-height:1.25!important;',
          '}',
          '#faq.lb-faq-fixed .faq-grid>div:last-child button>span:last-child{',
          '  flex:0 0 auto!important;',
          '  width:34px!important;',
          '  height:34px!important;',
          '}',
          '#faq.lb-faq-fixed .faq-grid>div:last-child p{',
          '  font-size:clamp(16px,2vw,18px)!important;',
          '  line-height:1.58!important;',
          '}',
          '@media(max-width:860px){',
          '  #faq.lb-faq-fixed{padding:82px 0!important;}',
          '  #faq.lb-faq-fixed .faq-grid{grid-template-columns:1fr!important;gap:34px!important;}',
          '  #faq.lb-faq-fixed .faq-sticky h2{font-size:clamp(36px,10vw,56px)!important;max-width:620px!important;}',
          '  #faq.lb-faq-fixed .faq-sticky p{max-width:560px!important;}',
          '}',
          '@media(max-width:640px){',
          '  .container{width:min(100% - 28px,var(--container,1120px))!important;}',
          '  #faq.lb-faq-fixed{padding:72px 0!important;}',
          '  #faq.lb-faq-fixed .faq-grid{gap:28px!important;}',
          '  #faq.lb-faq-fixed .eyebrow{margin-bottom:16px!important;}',
          '  #faq.lb-faq-fixed .faq-sticky h2{font-size:clamp(34px,11.2vw,48px)!important;letter-spacing:0!important;}',
          '  #faq.lb-faq-fixed .faq-sticky p{font-size:15.5px!important;line-height:1.55!important;margin-top:18px!important;}',
          '  #faq.lb-faq-fixed .faq-grid>div:last-child button{padding:22px 0!important;min-height:70px!important;}',
          '  #faq.lb-faq-fixed .faq-grid>div:last-child button>span:first-child{font-size:17px!important;}',
          '  #faq.lb-faq-fixed .faq-grid>div:last-child button>span:last-child{width:32px!important;height:32px!important;}',
          '}',
          '@media(max-width:420px){',
          '  .container{width:min(100% - 22px,var(--container,1120px))!important;}',
          '  #faq.lb-faq-fixed .faq-sticky h2{font-size:clamp(32px,11.5vw,43px)!important;}',
          '  #faq.lb-faq-fixed .faq-grid>div:last-child button{gap:12px!important;}',
          '}'
        ].join('');

        (document.head || document.documentElement).appendChild(style);
      }, 120);
    })();

/* === enhancement script 3 === */
(function applyMobileUiUxRound() {
      var tries = 0;
      var timer = setInterval(function () {
        tries += 1;
        var hasApp = document.querySelector('.hero-wrap') && document.querySelector('.photo-bento');
        if (!hasApp && tries < 90) return;
        clearInterval(timer);
        if (!hasApp || document.getElementById('lb-mobile-uiux-style')) return;

        function cleanVisibleDashes(root) {
          var NF = window.NodeFilter || {};
          var walker = document.createTreeWalker(root, NF.SHOW_TEXT || 4, {
            acceptNode: function (node) {
              var parent = node.parentElement;
              if (!parent || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(parent.tagName)) {
                return NF.FILTER_REJECT || 2;
              }
              return /[\u2013\u2014]/.test(node.nodeValue) ? (NF.FILTER_ACCEPT || 1) : (NF.FILTER_SKIP || 3);
            }
          });
          var nodes = [];
          while (walker.nextNode()) nodes.push(walker.currentNode);
          nodes.forEach(function (node) {
            node.nodeValue = node.nodeValue
              .replace(/\s*\u2014\s*/g, ', ')
              .replace(/\s*\u2013\s*/g, ' a ');
          });
        }

        function buildMobileClinicGallery() {
          var bento = document.querySelector('.photo-bento');
          if (!bento || document.querySelector('.lb-mobile-gallery')) return;
          var images = Array.prototype.slice.call(bento.querySelectorAll('img.photo-img')).map(function (img) {
            return { src: img.currentSrc || img.src, alt: img.alt || 'Foto da clínica' };
          }).filter(function (item) { return item.src; });
          if (!images.length) return;

          var gallery = document.createElement('div');
          gallery.className = 'lb-mobile-gallery';
          images.forEach(function (item, index) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'lb-mobile-photo';
            button.setAttribute('aria-label', 'Ampliar foto da clínica ' + (index + 1));
            button.innerHTML = '<img alt=""><span>Toque para ampliar</span>';
            var img = button.querySelector('img');
            img.src = item.src;
            img.alt = item.alt;
            button.addEventListener('click', function () {
              openLightbox(item.src, item.alt);
            });
            gallery.appendChild(button);
          });
          bento.parentNode.insertBefore(gallery, bento.nextSibling);
        }

        function ensureLightbox() {
          var lightbox = document.querySelector('.lb-photo-lightbox');
          if (lightbox) return lightbox;
          lightbox = document.createElement('div');
          lightbox.className = 'lb-photo-lightbox';
          lightbox.setAttribute('aria-hidden', 'true');
          lightbox.innerHTML = '<button type="button" class="lb-lightbox-close" aria-label="Fechar foto">Fechar</button><img alt="">';
          lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox || event.target.className === 'lb-lightbox-close') closeLightbox();
          });
          document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeLightbox();
          });
          document.body.appendChild(lightbox);
          return lightbox;
        }

        function openLightbox(src, alt) {
          var lightbox = ensureLightbox();
          var img = lightbox.querySelector('img');
          img.src = src;
          img.alt = alt;
          lightbox.classList.add('is-open');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.classList.add('lb-lightbox-open');
        }

        function closeLightbox() {
          var lightbox = document.querySelector('.lb-photo-lightbox');
          if (!lightbox) return;
          lightbox.classList.remove('is-open');
          lightbox.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('lb-lightbox-open');
        }

        function tuneFinalCta() {
          var headings = Array.prototype.slice.call(document.querySelectorAll('section h2.display'));
          var heading = headings.find(function (h) { return /Seu corpo está esperando/i.test(h.textContent || ''); });
          var section = heading && heading.closest('section');
          if (!section) return;
          section.classList.add('lb-final-cta');

          var buttons = Array.prototype.slice.call(section.querySelectorAll('a.btn'));
          if (buttons[0]) {
            buttons[0].classList.add('lb-final-cta-button');
            var icon = buttons[0].querySelector('svg');
            buttons[0].innerHTML = '';
            if (icon) buttons[0].appendChild(icon);
            buttons[0].appendChild(document.createTextNode(' Agendar avaliação'));
            var shine = document.createElement('span');
            shine.className = 'lb-cta-shine';
            shine.setAttribute('aria-hidden', 'true');
            buttons[0].appendChild(shine);
          }
          buttons.slice(1).forEach(function (btn) {
            btn.style.display = 'none';
            btn.setAttribute('aria-hidden', 'true');
          });
        }

        function tuneAudienceSection() {
          var eyebrow = Array.prototype.slice.call(document.querySelectorAll('.eyebrow')).find(function (el) {
            return /Para quem é/i.test(el.textContent || '');
          });
          var section = eyebrow && eyebrow.closest('section');
          if (!section || section.classList.contains('lb-audience-section')) return;

          section.classList.add('lb-audience-section');

          var heading = section.querySelector('h2.display');
          if (heading) {
            heading.innerHTML = 'Para quem quer voltar a se mover bem.<br><span class="serif" style="font-style:italic;font-weight:400;color:var(--accent)">Treinando ou não.</span>';
          }

          var intro = heading && heading.parentElement && heading.parentElement.querySelector('p');
          if (intro) {
            intro.textContent = 'A clínica tem uma leitura forte de esporte e musculação, mas o foco não é atender só atleta. É cuidar de quem sente dor, perdeu confiança no movimento ou precisa voltar com critério.';
          }

          var grids = Array.prototype.slice.call(section.querySelectorAll('.perfis-grid'));
          grids.forEach(function (grid, index) {
            grid.classList.add(index === 0 ? 'lb-audience-grid-training' : 'lb-audience-grid-pain');
            if (grid.parentElement) grid.parentElement.classList.add(index === 0 ? 'lb-audience-group-training' : 'lb-audience-group-pain');
          });

          Array.prototype.slice.call(section.querySelectorAll('div')).forEach(function (el) {
            if (/Condições\s*&\s*queixas tratadas/i.test(el.textContent || '')) {
              var block = el.parentElement;
              if (block) block.remove();
            }
          });

          var replacements = [
            ['Musculação & Academia', 'Musculação e academia'],
            ['Joelho, ombro, lombar', 'Dor no ombro, joelho, lombar ou cotovelo que aparece no treino, limita carga e volta quando você força de novo.'],
            ['Corrida & Endurance', 'Corrida e endurance'],
            ['Joelho de corredor', 'Dor no joelho, canela, tornozelo, quadril ou pé que muda seu ritmo, sua planilha e a confiança no próximo treino.'],
            ['Futebol & Esportes', 'Futebol e esportes'],
            ['Entorse, coxa, LCA', 'Entorse, lesão muscular, joelho ou retorno depois de cirurgia. A volta precisa ter critério, não só vontade.'],
            ['Lombar & Coluna', 'Coluna e dores recorrentes'],
            ['Dor que trava de manhã', 'Lombar travada, cervical, ciática ou dor que vive voltando. O objetivo é entender a origem, não só aliviar por alguns dias.'],
            ['Pós-cirúrgico', 'Pós-cirúrgico e retorno seguro'],
            ['Joelho, ombro ou quadril operado', 'Joelho, ombro ou quadril operado precisam de progressão clara. Cada etapa mostra o que já dá para fazer e o que ainda precisa esperar.'],
            ['Tendinites & Overuse', 'Tendinites e sobrecarga'],
            ['Cotovelo de tenista', 'Fascite, manguito, cotovelo, cervical e dores de repetição. Quando o corpo insiste em avisar, a avaliação precisa ser mais específica.']
          ];

          var walker = document.createTreeWalker(section, (window.NodeFilter && window.NodeFilter.SHOW_TEXT) || 4);
          var textNodes = [];
          while (walker.nextNode()) textNodes.push(walker.currentNode);
          textNodes.forEach(function (node) {
            var value = node.nodeValue;
            replacements.forEach(function (pair) {
              if (value.indexOf(pair[0]) !== -1) value = value.replace(pair[0], pair[1]);
            });
            node.nodeValue = value;
          });

          if (!section.querySelector('.lb-audience-mobile')) {
            var mobile = document.createElement('div');
            mobile.className = 'lb-audience-mobile';
            mobile.innerHTML = [
              '<div class="lb-audience-mobile-card is-primary">',
              '  <span>01</span>',
              '  <strong>Treina e quer continuar treinando</strong>',
              '  <p>Para quem sente dor na musculação, corrida ou esporte e não quer ouvir só “para tudo”. A clínica ajusta carga, movimento e retorno.</p>',
              '</div>',
              '<div class="lb-audience-mobile-row">',
              '  <span>02</span>',
              '  <div><strong>Dor que atrapalha a rotina</strong><p>Lombar, cervical, ciática, ombro, joelho ou quadril. Mesmo sem esporte, o corpo precisa ser entendido em movimento.</p></div>',
              '</div>',
              '<div class="lb-audience-mobile-row">',
              '  <span>03</span>',
              '  <div><strong>Pós-cirúrgico ou retorno ao esporte</strong><p>Reabilitação com etapas claras para voltar sem pressa artificial e sem ficar inseguro em cada avanço.</p></div>',
              '</div>',
              '<div class="lb-audience-mobile-row">',
              '  <span>04</span>',
              '  <div><strong>Já tentou tratar e não resolveu</strong><p>Quando a dor volta, geralmente faltou investigar a causa. Aqui a avaliação vem antes do protocolo.</p></div>',
              '</div>'
            ].join('');
            var header = section.querySelector('.container > div');
            if (header && header.nextSibling) {
              header.parentNode.insertBefore(mobile, header.nextSibling);
            }
          }
        }

        function animateFinalCta() {
          var btn = document.querySelector('.lb-final-cta-button');
          if (!btn || btn.dataset.lbAnimated === 'true') return;
          btn.dataset.lbAnimated = 'true';
          if (window.gsap) {
            window.gsap.to(btn, {
              y: -5,
              boxShadow: '0 18px 52px rgba(125,169,255,.34)',
              duration: 1.25,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut'
            });
            var shine = btn.querySelector('.lb-cta-shine');
            if (shine) {
              window.gsap.fromTo(shine, { xPercent: -140 }, {
                xPercent: 170,
                duration: 2.1,
                repeat: -1,
                repeatDelay: .55,
                ease: 'power2.inOut'
              });
            }
          } else {
            btn.classList.add('lb-final-cta-button-fallback');
          }
        }

        function loadGsap() {
          if (window.gsap) {
            animateFinalCta();
            return;
          }
          if (document.getElementById('lb-gsap-script')) {
            return;
          }
          var script = document.createElement('script');
          script.id = 'lb-gsap-script';
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
          script.onload = animateFinalCta;
          script.onerror = animateFinalCta;
          document.head.appendChild(script);
        }

        cleanVisibleDashes(document.body);
        buildMobileClinicGallery();
        tuneAudienceSection();
        tuneFinalCta();

        var style = document.createElement('style');
        style.id = 'lb-mobile-uiux-style';
        style.textContent = [
          '.pb-bar{display:none!important;}',
          '.ls{display:none!important;}',
          '.lb-mobile-gallery{display:none;}',
          '.lb-audience-mobile{display:none;}',
          '.lb-final-cta-button{position:relative!important;overflow:hidden!important;isolation:isolate!important;min-width:0!important;white-space:nowrap!important;}',
          '.lb-cta-shine{position:absolute;inset:-35% auto -35% 0;width:48%;background:linear-gradient(110deg,transparent,rgba(0,102,255,.18),transparent);transform:skewX(-18deg);z-index:-1;pointer-events:none;}',
          '.lb-final-cta-button-fallback{animation:lb-cta-pulse 1.6s ease-in-out infinite alternate;}',
          '@keyframes lb-cta-pulse{from{transform:translateY(0);box-shadow:0 10px 32px rgba(125,169,255,.16)}to{transform:translateY(-5px);box-shadow:0 18px 52px rgba(125,169,255,.34)}}',
          '.lb-photo-lightbox{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:22px;background:rgba(5,12,28,.88);opacity:0;pointer-events:none;transition:opacity .22s ease;}',
          '.lb-photo-lightbox.is-open{opacity:1;pointer-events:auto;}',
          '.lb-photo-lightbox img{max-width:min(94vw,980px);max-height:82vh;object-fit:contain;border-radius:18px;box-shadow:0 24px 80px rgba(0,0,0,.38);}',
          '.lb-lightbox-close{position:absolute;top:18px;right:18px;border:1px solid rgba(255,255,255,.24);background:rgba(255,255,255,.12);color:#fff;border-radius:999px;padding:10px 14px;font-size:13px;backdrop-filter:blur(10px);}',
          'body.lb-lightbox-open{overflow:hidden!important;}',
          '@media(max-width:760px){',
          '  section h2.display{font-size:clamp(38px,11vw,56px)!important;line-height:.98!important;letter-spacing:-.025em!important;}',
          '  section p{font-size:clamp(15.5px,4vw,17px)!important;line-height:1.58!important;}',
          '  .hero-h1{font-size:clamp(42px,12vw,62px)!important;}',
          '  .hero-sub{font-size:16px!important;line-height:1.58!important;}',
          '  .proc{grid-template-columns:1fr!important;gap:12px!important;}',
          '  .proc .pcard{min-height:auto!important;padding:24px!important;border-radius:18px!important;}',
          '  .tec-grid{grid-template-columns:1fr!important;gap:10px!important;}',
          '  .tec-grid .pcard{display:grid!important;grid-template-columns:44px 1fr!important;column-gap:14px!important;padding:18px!important;border-radius:16px!important;align-items:start!important;}',
          '  .tec-grid .pcard>div:first-child{grid-row:1/3!important;margin:0!important;}',
          '  .tec-grid .pcard>div:nth-child(2){margin:0 0 6px!important;font-size:17px!important;}',
          '  .tec-grid .pcard>div:nth-child(3){font-size:13.5px!important;line-height:1.5!important;}',
          '  .dep-grid{grid-template-columns:1fr!important;gap:12px!important;}',
          '  .dep-card{padding:22px!important;border-radius:16px!important;}',
          '  .dep-featured{grid-column:span 1!important;}',
          '  .dep-grid .dep-card:not(.dep-featured) .dep-text{font-size:14.5px!important;line-height:1.55!important;margin-bottom:18px!important;}',
          '  .proc::-webkit-scrollbar,.tec-grid::-webkit-scrollbar,.perfis-grid::-webkit-scrollbar,.dep-grid::-webkit-scrollbar,.lb-mobile-gallery::-webkit-scrollbar{height:4px;}',
          '  .lb-mobile-gallery::-webkit-scrollbar-thumb{background:rgba(0,102,255,.22);border-radius:999px;}',
          '  .team-grid{grid-template-columns:1fr!important;gap:18px!important;}',
          '  .lg{grid-template-columns:1fr!important;gap:36px!important;}',
          '  .lb-audience-section{padding-top:96px!important;padding-bottom:108px!important;}',
          '  .lb-audience-section .container>div:first-child{margin-bottom:34px!important;}',
          '  .lb-audience-section .container>div:first-child p{max-width:100%!important;}',
          '  .lb-audience-group-training,.lb-audience-group-pain{display:none!important;}',
          '  .lb-audience-mobile{display:flex!important;flex-direction:column;gap:10px;margin:0 0 34px;}',
          '  .lb-audience-mobile-card{padding:24px;border-radius:20px;background:var(--accent);color:#fff;box-shadow:0 18px 44px rgba(0,102,255,.18);}',
          '  .lb-audience-mobile-card span,.lb-audience-mobile-row>span{font-family:var(--mono);font-size:11px;letter-spacing:.12em;}',
          '  .lb-audience-mobile-card strong{display:block;margin-top:22px;font-size:23px;line-height:1.05;letter-spacing:-.03em;}',
          '  .lb-audience-mobile-card p{margin:12px 0 0!important;color:rgba(255,255,255,.78)!important;font-size:15.5px!important;}',
          '  .lb-audience-mobile-row{display:grid;grid-template-columns:42px 1fr;gap:14px;padding:18px 0;border-top:1px solid var(--line);}',
          '  .lb-audience-mobile-row:last-child{border-bottom:1px solid var(--line);}',
          '  .lb-audience-mobile-row>span{color:var(--accent);padding-top:3px;}',
          '  .lb-audience-mobile-row strong{display:block;font-size:18px;line-height:1.18;letter-spacing:-.02em;color:var(--ink);}',
          '  .lb-audience-mobile-row p{margin:8px 0 0!important;color:var(--ink-3)!important;font-size:15px!important;line-height:1.52!important;}',
          '  .lb-final-cta{padding:104px 0!important;}',
          '  .lb-final-cta h2{font-size:clamp(40px,12vw,58px)!important;}',
          '  .lb-final-cta p{margin-top:24px!important;font-size:16px!important;}',
          '  .lb-final-cta .reveal-2[style*=\"display: flex\"]{margin-top:34px!important;}',
          '  .lb-final-cta-button{width:auto!important;max-width:100%!important;padding:16px 22px!important;font-size:15px!important;}',
          '}',
          '@media(max-width:640px){',
          '  .photo-bento{display:none!important;}',
          '  .lb-mobile-gallery{display:flex!important;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;margin:6px -14px 0;padding:0 14px 18px;-webkit-overflow-scrolling:touch;}',
          '  .lb-mobile-photo{position:relative;flex:0 0 82%;aspect-ratio:4/5;border:0;border-radius:22px;overflow:hidden;background:var(--bg-3);padding:0;scroll-snap-align:center;box-shadow:0 18px 44px rgba(0,102,255,.10);}',
          '  .lb-mobile-photo img{width:100%;height:100%;object-fit:cover;display:block;}',
          '  .lb-mobile-photo span{position:absolute;left:12px;bottom:12px;padding:8px 11px;border-radius:999px;background:rgba(255,255,255,.84);color:var(--ink);font-size:11px;font-weight:600;backdrop-filter:blur(10px);}',
          '  .lb-clinic-pattern-section{padding-top:88px!important;padding-bottom:88px!important;}',
          '}',
          '@media(max-width:420px){',
          '  section h2.display{font-size:clamp(36px,11.4vw,48px)!important;}',
          '  .lb-mobile-photo{flex-basis:84%;}',
          '}'
        ].join('');

        (document.body || document.head).appendChild(style);
        loadGsap();
        var dashCleanRuns = 0;
        var dashCleanTimer = setInterval(function () {
          dashCleanRuns += 1;
          cleanVisibleDashes(document.body);
          if (dashCleanRuns >= 20) clearInterval(dashCleanTimer);
        }, 300);
      }, 120);
    })();
