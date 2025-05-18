document.addEventListener("DOMContentLoaded", function() {
	// Debug: Change background color to red
	// document.body.style.backgroundColor = "red";

	// Cursor movement + hover
	const cursor = document.querySelector('.cursor');
	document.addEventListener('mousemove', e => { cursor.style.top = `${e.clientY}px`; cursor.style.left = `${e.clientX}px`; });
	document.querySelectorAll('a,button,input,textarea,.project-card, .tool-icon, .contact-card, .cursor-red').forEach(el => { el.addEventListener('mouseenter', () => cursor.classList.add('hover')); el.addEventListener('mouseleave', () => cursor.classList.remove('hover')); });
	document.querySelectorAll('footer').forEach(el => { el.addEventListener('mouseenter', () => cursor.classList.add('hover2')); el.addEventListener('mouseleave', () => cursor.classList.remove('hover2')); });

	// Modal Logic
	const modal = document.getElementById('projectModal');
	const modalTitle = document.getElementById('modalTitle');
	const modalImage = document.getElementById('modalImage');
	const modalDesc = document.getElementById('modalDesc');
	const modalClose = document.getElementById('modalClose');

	const projectData = {
		project1: { title: 'Project One', img: 'images/project1.png', desc: 'Detailed story of Project One: Challenge, idea, process, result.' },
		project2: { title: 'Project Two', img: 'images/project1.png', desc: 'Detailed story of Project Two: Challenge, idea, process, result.' },
		project3: { title: 'Project Three', img: 'images/project1.png', desc: 'Detailed story of Project Three: Challenge, idea, process, result.' },
		project4: { title: 'Project Four', img: 'images/project1.png', desc: 'Detailed story of Project Four: Challenge, idea, process, result.' }
	};

	document.querySelectorAll('.project-card').forEach(card => {
		card.addEventListener('click', () => {
			const key = card.getAttribute('data-key');
			fetch(`projects/${key}.html`)
				.then(res => res.text())
				.then(html => {
					document.getElementById('modalBody').innerHTML = html;
					modal.classList.add('active');
				});
		});		
	});

	modalClose.addEventListener('click', () => modal.classList.remove('active'));
	modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

	// Floating cards interaction
	const cards = document.querySelectorAll('.contact-card');

	cards.forEach(card => {
		card.addEventListener('click', () => {
			if (card.classList.contains('active')) {
				cards.forEach(c => c.classList.remove('active'));
			} else {
				cards.forEach(c => c.classList.remove('active'));
				card.classList.add('active');
			}
		});
	});	

	// Tools section interactions
	document.querySelectorAll('.tool-card').forEach(card => {
		const icon = card.querySelector('.tool-icon');
		const label = card.querySelector('.tool-label');
		// Hover in
		icon.addEventListener('mouseenter', () => {
			// Tooltip fade in
			label.style.opacity = 1;
			// Icon animation: float up and rotate
			icon.style.transition = 'transform .6s ease';
			icon.style.transform = 'translateY(-20px) rotate(15deg)';
		});
		// Hover out
		icon.addEventListener('mouseleave', () => {
			label.style.opacity = 0;
			icon.style.transform = 'translateY(0) rotate(0)';
		});
		// Click bounce
		icon.addEventListener('click', () => {
			icon.animate([
				{ transform: 'scale(1)' },
				{ transform: 'scale(1.2)' },
				{ transform: 'scale(1)' }
			], { duration: 500, easing: 'ease-out' });
		});
	});
});

document.addEventListener("DOMContentLoaded", function() {

	const sections = document.querySelectorAll('section');
    const overlay = document.getElementById('overlay');
    let isTransitioning = false;

    function getCurrentIndex() {
      return Array.from(sections).find(sec => sec.classList.contains('active')).getAttribute('data-index');
    }

    function goToSection(targetIndex) {
      if (isTransitioning) return;
      isTransitioning = true;
      overlay.classList.add('active');
      setTimeout(() => {
        sections.forEach(sec => sec.classList.remove('active'));
        document.querySelector(`section[data-index='${targetIndex}']`).classList.add('active');
        overlay.classList.remove('active');
        setTimeout(() => { isTransitioning = false; }, 600);
      }, 600);
    }

	    // Toggle TOC panel
		tocButton.addEventListener('click', () => {
			tocPanel.classList.toggle('show');
		  });
	  
		  // Navigate on TOC click
		  document.querySelectorAll('.toc-item').forEach(item => {
			item.addEventListener('click', () => goToSection(item.getAttribute('data-target')));
		  });

    function handleWheel(e) {
      e.preventDefault();
      const delta = e.deltaY;
      let current = parseInt(getCurrentIndex());
      if (delta > 0) {
        goToSection((current + 1) % sections.length);
      } else {
        goToSection((current - 1 + sections.length) % sections.length);
      }
    }

    let touchStartY = 0;
    function handleTouchStart(e) {
      touchStartY = e.changedTouches[0].clientY;
    }
    function handleTouchEnd(e) {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50) {
        let current = parseInt(getCurrentIndex());
        if (diff > 0) goToSection((current + 1) % sections.length);
        else goToSection((current - 1 + sections.length) % sections.length);
      }
    }

    // Disable default scroll and bind wheel and touch events
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    // Hero block clicks
    document.querySelectorAll('.hero .block').forEach(block => {
      block.addEventListener('click', () => {
        goToSection(block.getAttribute('data-target'));
      });
    });
});