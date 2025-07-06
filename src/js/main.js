import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

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
  }

  setupNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('bg-dark/95', 'backdrop-blur-md', 'shadow-lg');
      } else {
        navbar.classList.remove('bg-dark/95', 'backdrop-blur-md', 'shadow-lg');
      }
    });

    // Mobile menu toggle
    mobileMenuBtn?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  setupTypingAnimation() {
    const typedText = document.getElementById('typed-text');
    if (!typedText) return;

    const texts = [
      'Software Engineer',
      'Full-Stack Developer',
      'React Specialist',
      'Vue.js Expert',
      'Technical Leader',
      'Problem Solver'
    ];

    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

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
    // Fade in animations for sections
    gsap.utils.toArray('section').forEach((section, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate skill cards
    gsap.utils.toArray('.skill-category').forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 40,
          rotationY: 15
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate experience timeline
    gsap.utils.toArray('.experience-item').forEach((item, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Parallax effect for floating elements
    gsap.utils.toArray('.floating-element').forEach((element, index) => {
      gsap.to(element, {
        y: -100,
        rotation: 360,
        duration: 10 + index * 2,
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
      
      // Simulate form submission
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.classList.add('bg-green-500', 'hover:bg-green-600');
        submitBtn.classList.remove('bg-accent', 'hover:bg-accent/90');
        
        setTimeout(() => {
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
          submitBtn.classList.add('bg-accent', 'hover:bg-accent/90');
        }, 3000);
      }, 2000);
    });
  }

  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ModernWebsite();
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Add hover effects to skill cards
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
});