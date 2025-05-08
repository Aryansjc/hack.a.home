document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.section-nav li');
    const contentSections = document.querySelectorAll('.content-section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            navItems.forEach(navItem => navItem.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            document.getElementById(targetSection).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            item.classList.toggle('active');
            const toggle = this.querySelector('.faq-toggle');
            toggle.textContent = item.classList.contains('active') ? '−' : '+';
        });
    });
    
    const pcbElements = document.querySelectorAll('.info-card, .req-item, .rule, .prize-card, .gallery-item');
    
    pcbElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    const learnMoreBtn = document.querySelector('.cta-button.secondary');
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            const aboutNavItem = document.querySelector('.section-nav li[data-section="about"]');
            contentSections.forEach(section => section.classList.remove('active'));
            navItems.forEach(navItem => navItem.classList.remove('active'));
            aboutSection.classList.add('active');
            aboutNavItem.classList.add('active');
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    const pcbBg = document.querySelector('.pcb-bg');
    
    if (pcbBg) {
        let offset = 0;
        
        function animatePcbBg() {
            offset += 0.1;
            const scale = 1 + Math.sin(offset * 0.05) * 0.02;
            const brightness = 0.9 + Math.sin(offset * 0.1) * 0.05;
            pcbBg.style.filter = `contrast(1.1) brightness(${brightness})`;
            pcbBg.style.transform = `scale(${scale})`;
            requestAnimationFrame(animatePcbBg);
        }
        
        animatePcbBg();
    }
    
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                heroContent.style.transition = 'all 0.8s ease-out';
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 100);
        }, 300);
    }
    
    const registerBtn = document.querySelector('.cta-button.primary');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            alert('Registration form will be available soon!');
        });
    }
    
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
        const toggle = faqItems[0].querySelector('.faq-toggle');
        if (toggle) {
            toggle.textContent = '−';
        }
    }
}); 
