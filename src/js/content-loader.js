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

  // Render navigation
  renderNavigation() {
    const nav = this.contentLoader.getNavigation();
    
    // Update logo
    const logoText = document.querySelector('.font-mono.text-lg');
    const logoSubtitle = document.querySelector('.text-xs.text-gray-400');
    
    if (logoText) logoText.textContent = nav.logo?.text || 'IMinaIT';
    if (logoSubtitle) logoSubtitle.textContent = nav.logo?.subtitle || 'by Mina Amrouche';

    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    if (nav.links && navLinks.length > 0) {
      nav.links.forEach((link, index) => {
        if (navLinks[index]) {
          navLinks[index].textContent = link.text;
          navLinks[index].href = link.href;
        }
      });
    }
  }

  // Render hero section
  renderHero() {
    const hero = this.contentLoader.getHero();
    
    // Update greeting
    const greeting = document.querySelector('#hero p');
    if (greeting) greeting.textContent = hero.greeting || 'Hello, I\'m';

    // Update name
    const nameElements = document.querySelectorAll('#hero h1 span');
    if (nameElements.length >= 2) {
      nameElements[0].textContent = hero.name?.first || 'Mina';
      nameElements[1].textContent = hero.name?.last || 'Amrouche';
    }

    // Update subtitle
    const subtitle = document.querySelector('#hero .text-primary\\/90');
    if (subtitle) {
      const companySpan = subtitle.querySelector('span');
      if (companySpan) companySpan.textContent = hero.subtitle || 'Founder of IMinaIT';
    }

    // Update description
    const description = document.querySelector('#hero .text-gray-300');
    if (description) description.textContent = hero.description || '';

    // Update buttons
    const buttons = document.querySelectorAll('#hero .btn-primary, #hero .btn-secondary');
    if (buttons.length >= 2 && hero.buttons) {
      buttons[0].textContent = hero.buttons.primary || 'View My Work';
      buttons[1].textContent = hero.buttons.secondary || 'Let\'s Connect';
    }
  }

  // Render about section
  renderAbout() {
    const about = this.contentLoader.getAbout();
    
    // Update section title and subtitle
    const title = document.querySelector('#about .section-title');
    const subtitle = document.querySelector('#about .text-gray-300');
    
    if (title) title.textContent = about.title || 'About Me & IMinaIT';
    if (subtitle) subtitle.textContent = about.subtitle || '';

    // Update main content
    const mainTitle = document.querySelector('#about h3');
    const description = document.querySelector('#about .text-gray-300.leading-relaxed');
    
    if (mainTitle) mainTitle.textContent = about.mainTitle || '';
    if (description) description.textContent = about.description || '';

    // Update experience badge
    const experienceText = document.querySelector('#about .font-bold.text-lg');
    const experienceLabel = document.querySelector('#about .text-xs.opacity-90');
    
    if (experienceText) experienceText.textContent = about.experienceYears || '8+ Years';
    if (experienceLabel) experienceLabel.textContent = about.experienceLabel || 'Experience';

    // Update skill cards
    const skillCards = document.querySelectorAll('#about .bg-dark');
    if (about.skills && skillCards.length > 0) {
      about.skills.forEach((skill, index) => {
        if (skillCards[index]) {
          const skillTitle = skillCards[index].querySelector('h4');
          const skillDesc = skillCards[index].querySelector('p');
          
          if (skillTitle) skillTitle.textContent = skill.title;
          if (skillDesc) skillDesc.textContent = skill.description;
        }
      });
    }
  }

  // Render skills section
  renderSkills() {
    const skills = this.contentLoader.getSkills();
    
    // Update section title and subtitle
    const title = document.querySelector('#skills .section-title');
    const subtitle = document.querySelector('#skills .text-gray-300');
    
    if (title) title.textContent = skills.title || 'Technical Skills';
    if (subtitle) subtitle.textContent = skills.subtitle || '';

    // Update skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    if (skills.categories && skillCategories.length > 0) {
      skills.categories.forEach((category, index) => {
        if (skillCategories[index]) {
          const categoryTitle = skillCategories[index].querySelector('h3');
          const skillList = skillCategories[index].querySelector('ul');
          
          if (categoryTitle) categoryTitle.textContent = category.title;
          if (skillList && category.skills) {
            skillList.innerHTML = category.skills.map(skill => `<li>${skill}</li>`).join('');
          }
        }
      });
    }
  }

  // Render experience section
  renderExperience() {
    const experience = this.contentLoader.getExperience();
    
    // Update section title and subtitle
    const title = document.querySelector('#experience .section-title');
    const subtitle = document.querySelector('#experience .text-gray-300');
    
    if (title) title.textContent = experience.title || 'Professional Journey';
    if (subtitle) subtitle.textContent = experience.subtitle || '';

    // Update experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experience.positions && experienceItems.length > 0) {
      experience.positions.forEach((position, index) => {
        if (experienceItems[index]) {
          const jobTitle = experienceItems[index].querySelector('h3');
          const company = experienceItems[index].querySelector('.text-primary');
          const description = experienceItems[index].querySelector('.text-gray-300');
          const achievementsList = experienceItems[index].querySelector('ul');
          
          if (jobTitle) jobTitle.textContent = position.title;
          if (company) company.textContent = `${position.company} • ${position.period}`;
          if (description) description.textContent = position.description;
          if (achievementsList && position.achievements) {
            achievementsList.innerHTML = position.achievements.map(achievement => `<li>• ${achievement}</li>`).join('');
          }
        }
      });
    }
  }

  // Render projects section
  renderProjects() {
    const projects = this.contentLoader.getProjects();
    
    // Update section title and subtitle
    const title = document.querySelector('#projects .section-title');
    const subtitle = document.querySelector('#projects .text-gray-300');
    
    if (title) title.textContent = projects.title || 'Featured Projects';
    if (subtitle) subtitle.textContent = projects.subtitle || '';

    // Update project cards
    const projectCards = document.querySelectorAll('.project-card');
    if (projects.items && projectCards.length > 0) {
      projects.items.forEach((project, index) => {
        if (projectCards[index]) {
          const projectTitle = projectCards[index].querySelector('h3');
          const projectDesc = projectCards[index].querySelector('.text-gray-400');
          const techTags = projectCards[index].querySelector('.flex.flex-wrap');
          
          if (projectTitle) projectTitle.textContent = project.title;
          if (projectDesc) projectDesc.textContent = project.description;
          if (techTags && project.technologies) {
            techTags.innerHTML = project.technologies.map(tech => 
              `<span class="tech-tag">${tech}</span>`
            ).join('');
          }
        }
      });
    }
  }

  // Render contact section
  renderContact() {
    const contact = this.contentLoader.getContact();
    
    // Update section title and subtitle
    const title = document.querySelector('#contact .section-title');
    const subtitle = document.querySelector('#contact .text-gray-300');
    
    if (title) title.textContent = contact.title || 'Let\'s Create Together';
    if (subtitle) subtitle.textContent = contact.subtitle || '';

    // Update main content
    const mainTitle = document.querySelector('#contact h3');
    const description = document.querySelector('#contact .text-gray-300.mb-8');
    
    if (mainTitle) mainTitle.textContent = contact.mainTitle || 'Get In Touch';
    if (description) description.textContent = contact.description || '';

    // Update contact methods
    const contactMethods = document.querySelectorAll('#contact .flex.items-center.space-x-4');
    if (contact.contactMethods && contactMethods.length > 0) {
      contact.contactMethods.forEach((method, index) => {
        if (contactMethods[index]) {
          const methodTitle = contactMethods[index].querySelector('h4');
          const methodLink = contactMethods[index].querySelector('a');
          
          if (methodTitle) methodTitle.textContent = method.title;
          if (methodLink) {
            methodLink.textContent = method.value;
            methodLink.href = method.href;
          }
        }
      });
    }

    // Update form fields
    if (contact.form) {
      const formFields = document.querySelectorAll('#contact-form label, #contact-form input, #contact-form textarea');
      
      // Update labels and placeholders
      Object.entries(contact.form.fields).forEach(([fieldName, fieldData]) => {
        const label = document.querySelector(`label[for="${fieldName}"]`);
        const input = document.querySelector(`#${fieldName}`);
        
        if (label) label.textContent = fieldData.label;
        if (input) input.placeholder = fieldData.placeholder;
      });

      // Update submit button
      const submitBtn = document.querySelector('#contact-form button[type="submit"]');
      if (submitBtn) submitBtn.textContent = contact.form.submitButton || 'Send Message';
    }
  }

  // Render footer
  renderFooter() {
    const footer = this.contentLoader.getFooter();
    
    // Update footer logo
    const footerLogoText = document.querySelector('footer .font-mono');
    const footerLogoSubtitle = document.querySelector('footer .text-xs');
    
    if (footerLogoText) footerLogoText.textContent = footer.logo?.text || 'IMinaIT';
    if (footerLogoSubtitle) footerLogoSubtitle.textContent = footer.logo?.subtitle || 'by Mina Amrouche';

    // Update copyright
    const copyright = document.querySelector('footer .text-gray-400');
    if (copyright) copyright.textContent = footer.copyright || '';
  }

  // Render all content
  async renderAll() {
    await this.contentLoader.loadContent();
    
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