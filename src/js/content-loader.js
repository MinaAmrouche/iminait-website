// Content loader utility
export class ContentLoader {
  constructor() {
    this.content = null;
  }

  async loadContent() {
    if (this.content) return this.content;
    
    try {
      const response = await fetch('./data/content.json');
      this.content = await response.json();
      return this.content;
    } catch (error) {
      console.error('Failed to load content:', error);
      return null;
    }
  }

  // Helper methods for easy content access
  getNavigation() {
    return this.content?.navigation || {};
  }

  getHero() {
    return this.content?.hero || {};
  }

  getAbout() {
    return this.content?.about || {};
  }

  getSkills() {
    return this.content?.skills || {};
  }

  getExperience() {
    return this.content?.experience || {};
  }

  getProjects() {
    return this.content?.projects || {};
  }

  getContact() {
    return this.content?.contact || {};
  }

  getFooter() {
    return this.content?.footer || {};
  }

  getSocial() {
    return this.content?.social || {};
  }

  getSite() {
    return this.content?.site || {};
  }
}

// Content rendering utilities
export class ContentRenderer {
  constructor(contentLoader) {
    this.contentLoader = contentLoader;
  }

  // Render page title
  renderPageTitle() {
    const site = this.contentLoader.getSite();
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
      titleElement.textContent = site.title || 'IMinaIT - Mina Amrouche';
    }
  }

  // Render navigation
  renderNavigation() {
    const nav = this.contentLoader.getNavigation();
    
    // Update logo
    const logoText = document.getElementById('nav-logo-text');
    const logoSubtitle = document.getElementById('nav-logo-subtitle');
    
    if (logoText) logoText.textContent = nav.logo?.text || 'IMinaIT';
    if (logoSubtitle) logoSubtitle.textContent = nav.logo?.subtitle || 'by Mina Amrouche';

    // Update desktop navigation links
    const desktopNav = document.getElementById('desktop-nav');
    if (desktopNav && nav.links) {
      desktopNav.innerHTML = nav.links.map(link => 
        `<a href="${link.href}" class="nav-link">${link.text}</a>`
      ).join('');
    }

    // Update mobile navigation links
    const mobileNav = document.getElementById('mobile-nav');
    if (mobileNav && nav.links) {
      mobileNav.innerHTML = nav.links.map(link => 
        `<a href="${link.href}" class="block nav-link py-3 text-lg touch-manipulation">${link.text}</a>`
      ).join('');
    }
  }

  // Render hero section
  renderHero() {
    const hero = this.contentLoader.getHero();
    const social = this.contentLoader.getSocial();
    
    // Update greeting
    const greeting = document.getElementById('hero-greeting');
    if (greeting) greeting.textContent = hero.greeting || 'Hello, I\'m';

    // Update name
    const firstName = document.getElementById('hero-first-name');
    const lastName = document.getElementById('hero-last-name');
    if (firstName) firstName.textContent = hero.name?.first || 'Mina';
    if (lastName) lastName.textContent = hero.name?.last || 'Amrouche';

    // Update subtitle
    const subtitle = document.getElementById('hero-subtitle');
    const company = document.getElementById('hero-company');
    if (subtitle && company) {
      const subtitleText = hero.subtitle || 'Founder of';
      const companyText = 'IMinaIT';
      subtitle.innerHTML = `${subtitleText} <span id="hero-company" class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-bold">${companyText}</span>`;
    }

    // Update description
    const description = document.getElementById('hero-description');
    if (description) description.textContent = hero.description || '';

    // Update buttons
    const primaryBtn = document.getElementById('hero-btn-primary');
    const secondaryBtn = document.getElementById('hero-btn-secondary');
    if (primaryBtn && hero.buttons?.primary) primaryBtn.textContent = hero.buttons.primary;
    if (secondaryBtn && hero.buttons?.secondary) secondaryBtn.textContent = hero.buttons.secondary;

    // Update social links
    const heroSocial = document.getElementById('hero-social');
    if (heroSocial && social) {
      heroSocial.innerHTML = `
        <a href="${social.github}" target="_blank" class="social-link">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="${social.linkedin}" target="_blank" class="social-link">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      `;
    }
  }

  // Render about section
  renderAbout() {
    const about = this.contentLoader.getAbout();
    
    // Update section title and subtitle
    const title = document.getElementById('about-title');
    const subtitle = document.getElementById('about-subtitle');
    
    if (title) title.textContent = about.title || 'About Me & IMinaIT';
    if (subtitle) subtitle.textContent = about.subtitle || '';

    // Update main content
    const mainTitle = document.getElementById('about-main-title');
    const description = document.getElementById('about-description');
    
    if (mainTitle) mainTitle.textContent = about.mainTitle || '';
    if (description) description.textContent = about.description || '';

    // Update experience badge
    const experienceYears = document.getElementById('about-experience-years');
    const experienceLabel = document.getElementById('about-experience-label');
    
    if (experienceYears) experienceYears.textContent = about.experienceYears || '8+ Years';
    if (experienceLabel) experienceLabel.textContent = about.experienceLabel || 'Experience';

    // Update skill cards
    const skillsContainer = document.getElementById('about-skills');
    if (skillsContainer && about.skills) {
      skillsContainer.innerHTML = about.skills.map((skill, index) => {
        const colors = ['primary', 'secondary', 'indigo', 'accent'];
        const color = colors[index % colors.length];
        return `
          <div class="bg-dark p-4 sm:p-6 rounded-2xl border border-${color}/20 hover:border-${color}/40 transition-all duration-300 hover:shadow-glow">
            <h4 class="font-bold text-${color} mb-2 text-sm sm:text-base">${skill.title}</h4>
            <p class="text-xs sm:text-sm text-gray-400">${skill.description}</p>
          </div>
        `;
      }).join('');
    }
  }

  // Render skills section
  renderSkills() {
    const skills = this.contentLoader.getSkills();
    
    // Update section title and subtitle
    const title = document.getElementById('skills-title');
    const subtitle = document.getElementById('skills-subtitle');
    
    if (title) title.textContent = skills.title || 'Technical Skills';
    if (subtitle) subtitle.textContent = skills.subtitle || '';

    // Update skill categories
    const categoriesContainer = document.getElementById('skills-categories');
    if (categoriesContainer && skills.categories) {
      categoriesContainer.innerHTML = skills.categories.map((category, index) => {
        const icons = [
          `<path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>`,
          `<path d="M0 0v24h24V0H0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>`,
          `<path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm-.094 19.283c-3.771 0-6.849-2.305-8.134-5.52l2.515-1.045c.694 2.252 2.707 3.89 5.619 3.89 2.913 0 5.26-2.369 5.26-5.283S15.913 6.042 12 6.042c-1.297 0-2.49.47-3.407 1.253l1.407 1.407-5.657 0V3.045l1.97 1.97C7.757 3.731 9.776 2.717 12 2.717c5.046 0 9.283 4.178 9.283 9.283S17.046 19.283 12 19.283z"/>`,
          `<path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>`
        ];
        const colors = ['primary', 'secondary', 'indigo', 'accent'];
        const gradients = [
          'from-primary to-secondary',
          'from-secondary to-indigo',
          'from-indigo to-accent',
          'from-accent to-primary'
        ];
        
        return `
          <div class="skill-category group">
            <div class="skill-icon bg-gradient-to-br ${gradients[index]}">
              <svg class="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                ${icons[index]}
              </svg>
            </div>
            <h3 class="text-lg sm:text-xl font-bold text-light mb-3 sm:mb-4">${category.title}</h3>
            <ul class="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-400">
              ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
        `;
      }).join('');
    }
  }

  // Render experience section
  renderExperience() {
    const experience = this.contentLoader.getExperience();
    
    // Update section title and subtitle
    const title = document.getElementById('experience-title');
    const subtitle = document.getElementById('experience-subtitle');
    
    if (title) title.textContent = experience.title || 'Professional Journey';
    if (subtitle) subtitle.textContent = experience.subtitle || '';

    // Update experience items
    const itemsContainer = document.getElementById('experience-items');
    if (itemsContainer && experience.positions) {
      itemsContainer.innerHTML = experience.positions.map((position, index) => {
        const icons = [
          `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,
          `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`
        ];
        const gradients = [
          'from-primary to-secondary',
          'from-secondary to-indigo'
        ];
        const colors = ['primary', 'secondary'];
        
        return `
          <div class="experience-item">
            <div class="flex items-start space-x-6">
              <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-full flex items-center justify-center shadow-glow">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  ${icons[index]}
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-light">${position.title}</h3>
                <p class="text-${colors[index]} font-medium">${position.company} • ${position.period}</p>
                <p class="text-gray-300 mt-2">${position.description}</p>
                <ul class="mt-4 space-y-2 text-gray-400">
                  ${position.achievements.map(achievement => `<li>• ${achievement}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Render projects section
  renderProjects() {
    const projects = this.contentLoader.getProjects();
    
    // Update section title and subtitle
    const title = document.getElementById('projects-title');
    const subtitle = document.getElementById('projects-subtitle');
    
    if (title) title.textContent = projects.title || 'Featured Projects';
    if (subtitle) subtitle.textContent = projects.subtitle || '';

    // Update project cards
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && projects.items) {
      projectsGrid.innerHTML = projects.items.map((project, index) => {
        const icons = [
          `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`,
          `<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>`,
          `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>`
        ];
        const gradients = [
          'from-primary to-secondary',
          'from-secondary to-indigo',
          'from-indigo to-accent'
        ];
        const colors = ['primary', 'secondary', 'indigo'];
        
        return `
          <div class="project-card group">
            <div class="project-image">
              <div class="bg-gradient-to-br ${gradients[index]} h-40 sm:h-48 rounded-t-2xl flex items-center justify-center">
                <svg class="w-12 sm:w-16 h-12 sm:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  ${icons[index]}
                </svg>
              </div>
            </div>
            <div class="p-4 sm:p-6">
              <h3 class="text-lg sm:text-xl font-bold text-light mb-3">${project.title}</h3>
              <p class="text-sm sm:text-base text-gray-400 mb-4">${project.description}</p>
              <div class="flex flex-wrap gap-1 sm:gap-2 mb-4">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
              <div class="flex space-x-3 sm:space-x-4">
                <a href="#" class="text-${colors[index]} hover:text-secondary transition-colors">
                  <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" class="text-${colors[index]} hover:text-secondary transition-colors">
                  <svg class="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  // Render contact section
  renderContact() {
    const contact = this.contentLoader.getContact();
    
    // Update section title and subtitle
    const title = document.getElementById('contact-title');
    const subtitle = document.getElementById('contact-subtitle');
    
    if (title) title.textContent = contact.title || 'Let\'s Create Together';
    if (subtitle) subtitle.textContent = contact.subtitle || '';

    // Update main content
    const mainTitle = document.getElementById('contact-main-title');
    const description = document.getElementById('contact-description');
    
    if (mainTitle) mainTitle.textContent = contact.mainTitle || 'Get In Touch';
    if (description) description.textContent = contact.description || '';

    // Update contact methods
    const contactMethods = document.getElementById('contact-methods');
    if (contactMethods && contact.contactMethods) {
      contactMethods.innerHTML = contact.contactMethods.map((method, index) => {
        const icons = [
          `<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/>`,
          `<path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd"/>`,
          `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`
        ];
        const gradients = [
          'from-primary to-secondary',
          'from-secondary to-indigo',
          'from-indigo to-accent'
        ];
        const colors = ['primary', 'secondary', 'indigo'];
        
        return `
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center shadow-glow">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                ${icons[index]}
              </svg>
            </div>
            <div>
              <h4 class="font-bold text-light">${method.title}</h4>
              <a href="${method.href}" ${method.href.includes('http') ? 'target="_blank"' : ''} class="text-gray-400 hover:text-${colors[index]} transition-colors">
                ${method.value}
              </a>
            </div>
          </div>
        `;
      }).join('');
    }

    // Update contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm && contact.form) {
      contactForm.innerHTML = `
        <div>
          <label for="name" class="block text-sm font-medium text-light mb-2">${contact.form.fields.name.label}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all touch-manipulation"
            placeholder="${contact.form.fields.name.placeholder}"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-light mb-2">${contact.form.fields.email.label}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all touch-manipulation"
            placeholder="${contact.form.fields.email.placeholder}"
          />
        </div>
        
        <div>
          <label for="subject" class="block text-sm font-medium text-light mb-2">${contact.form.fields.subject.label}</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all touch-manipulation"
            placeholder="${contact.form.fields.subject.placeholder}"
          />
        </div>
        
        <div>
          <label for="message" class="block text-sm font-medium text-light mb-2">${contact.form.fields.message.label}</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            class="w-full px-4 py-3 bg-dark-secondary border border-primary/30 rounded-xl text-light placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none touch-manipulation"
            placeholder="${contact.form.fields.message.placeholder}"
          ></textarea>
        </div>
        
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-indigo text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark touch-manipulation"
        >
          ${contact.form.submitButton}
        </button>
      `;
    }
  }

  // Render footer
  renderFooter() {
    const footer = this.contentLoader.getFooter();
    const social = this.contentLoader.getSocial();
    
    // Update footer logo
    const footerLogoText = document.getElementById('footer-logo-text');
    const footerLogoSubtitle = document.getElementById('footer-logo-subtitle');
    
    if (footerLogoText) footerLogoText.textContent = footer.logo?.text || 'IMinaIT';
    if (footerLogoSubtitle) footerLogoSubtitle.textContent = footer.logo?.subtitle || 'by Mina Amrouche';

    // Update footer social links
    const footerSocial = document.getElementById('footer-social');
    if (footerSocial && social) {
      footerSocial.innerHTML = `
        <a href="${social.github}" target="_blank" class="social-link">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="${social.linkedin}" target="_blank" class="social-link">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      `;
    }

    // Update copyright
    const copyright = document.getElementById('footer-copyright');
    if (copyright) copyright.textContent = footer.copyright || '';
  }

  // Render all content
  async renderAll() {
    await this.contentLoader.loadContent();
    
    this.renderPageTitle();
    this.renderNavigation();
    this.renderHero();
    this.renderAbout();
    this.renderSkills();
    this.renderExperience();
    this.renderProjects();
    this.renderContact();
    this.renderFooter();
  }
}