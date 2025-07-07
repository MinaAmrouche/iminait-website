import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger, ScrollToPlugin);

class ModernWebsite {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupTypingAnimation();
    this.setupScrollAnimations();
    this.setupContactForm();
    this.setupSmoothScrolling();
    this.setupInteractiveEffects();
  }

  setupNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Navbar background on scroll with softer transition
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('bg-dark/95', 'backdrop-blur-md', 'shadow-glow');
      } else {
        navbar.classList.remove('bg-dark/95', 'backdrop-blur-md', 'shadow-glow');
      }
    });

    // Mobile menu toggle with smooth animation
    mobileMenuBtn?.addEventListener('click', () => {
      const isHidden = mobileMenu?.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        gsap.fromTo(mobileMenu, 
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      } else {
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => mobileMenu.classList.add('hidden')
        });
      }
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => {
        gsap.to(mobileMenu, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => mobileMenu.classList.add('hidden')
        });
      });
    });
  }

  setupTypingAnimation() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;

    const texts = [
      'Software Engineer',
      'Creative Problem Solver',
      'Full-Stack Developer',
      'React Specialist',
      'Vue.js Expert',
      'Technical Leader',
      'UI/UX Enthusiast'
    ];

    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2500;

    const type = () => {
      const fullText = texts[currentIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      typedText.textContent = currentText;

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && currentText === fullText) {
        speed = pauseTime;
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        speed = 500;
      }

      setTimeout(type, speed);
    };

    type();
  }

  setupScrollAnimations() {
    // Optimized fade in animations for sections - reduced duration and improved timing
    gsap.utils.toArray('section').forEach((section, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Optimized skill cards animation - faster and more responsive
    gsap.utils.toArray('.skill-category').forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 20,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Simplified project cards animation - better performance
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Optimized experience timeline animation
    gsap.utils.toArray('.experience-item').forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30,
          scale: 0.98
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Optimized parallax effect - reduced complexity for better performance
    gsap.utils.toArray('.floating-element').forEach((element, index) => {
      gsap.to(element, {
        y: -60,
        rotation: 180,
        duration: 8 + index * 2,
        repeat: -1,
        ease: 'none',
        yoyo: true
      });
    });
  }

  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Enhanced form submission animation
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Loading state
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
      `;
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.innerHTML = `
          <svg class="w-5 h-5 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Message Sent!
        `;
        submitBtn.classList.add('bg-gradient-to-r', 'from-green-500', 'to-green-600');
        submitBtn.classList.remove('from-primary', 'to-secondary');
        
        // Success animation
        gsap.to(submitBtn, {
          scale: 1.05,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
          ease: 'power2.out'
        });
        
        setTimeout(() => {
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('from-green-500', 'to-green-600');
          submitBtn.classList.add('from-primary', 'to-secondary');
        }, 3000);
      }, 2000);
    });
  }

  setupSmoothScrolling() {
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 80;
          
          gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: offsetTop, autoKill: false },
            ease: 'power3.inOut'
          });
        }
      });
    });
  }

  setupInteractiveEffects() {
    // Optimized hover effects for project cards - reduced motion for better performance
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -8,
          scale: 1.03,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Optimized hover effects for skill cards
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Simplified button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.03,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
    });

    // Optimized social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.1,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      });
    });

    // Add mobile-specific optimizations
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Disable complex animations on mobile for better performance
      gsap.set('.floating-element', { display: 'none' });
      
      // Reduce motion for users who prefer reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set('*', { animation: 'none', transition: 'none' });
      }
    }
  }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ModernWebsite();
});

// Add loading animation
window.addEventListener('load', () => {
  gsap.from('body', {
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  });
});