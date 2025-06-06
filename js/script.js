/**
 * Escobar Insurance - Main JavaScript
 * =================================
 * This file contains all the interactive functionality for the Escobar Insurance website.
 */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize variables
    const body = document.body;
    const languageToggle = document.querySelectorAll('.dropdown-item[data-lang]');
    const backToTopBtn = document.getElementById('backToTop');

    // Current language (default: Spanish)
    let currentLang = 'es';

    // ====================================
    // Language Switcher Functionality
    // ====================================

    // Check if language preference is stored in local storage
    if (localStorage.getItem('escobar_lang')) {
        currentLang = localStorage.getItem('escobar_lang');
        switchLanguage(currentLang);
    }

    // Add event listeners to language toggles
    languageToggle.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');

            // Update language in local storage
            localStorage.setItem('escobar_lang', lang);

            // Switch language on the page
            switchLanguage(lang);
        });
    });

    /**
     * Switches the website language
     * @param {string} lang - Language code ('en' or 'es')
     */
    function switchLanguage(lang) {
        currentLang = lang;

        // Update the language selector text
        document.querySelector('#languageDropdown').innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;

        // Get all elements with data-en and data-es attributes
        const elements = document.querySelectorAll('[data-en], [data-es]');

        // Update each element's text content based on the language
        elements.forEach(el => {
            if (el.hasAttribute(`data-${lang}`)) {
                const text = el.getAttribute(`data-${lang}`);

                // Check if element is an input/textarea
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    // For placeholder, title, etc.
                    if (el.hasAttribute('placeholder')) {
                        el.setAttribute('placeholder', text);
                    } else {
                        el.value = text;
                    }
                } else {
                    el.textContent = text;
                }
            }
        });

        // Update the html lang attribute
        document.documentElement.setAttribute('lang', lang);
    }

    // ====================================
    // Sticky Navigation
    // ====================================

    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');

        if (window.scrollY > 50) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }

        // Back to top button visibility
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // ====================================
    // Back to Top Button
    // ====================================

    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ====================================
    // Form Validation
    // ====================================

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic form validation
            let isValid = true;
            const formElements = contactForm.elements;

            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && formElements[i].value.trim() === '') {
                    isValid = false;
                    formElements[i].classList.add('is-invalid');
                } else {
                    formElements[i].classList.remove('is-invalid');
                }
            }

            if (isValid) {
                // If the form is valid, you would normally submit it
                // For demo purposes, we'll just show a success message
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ' +
                    (currentLang === 'es' ? 'Enviando...' : 'Sending...');

                // Simulate form submission delay
                setTimeout(() => {
                    // Show success message
                    const successAlert = document.createElement('div');
                    successAlert.className = 'alert alert-success mt-3 animate__animated animate__fadeIn';
                    successAlert.innerHTML = currentLang === 'es' ?
                        '<i class="fas fa-check-circle me-2"></i> ¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.' :
                        '<i class="fas fa-check-circle me-2"></i> Thank you! Your message has been sent. We will get back to you soon.';

                    contactForm.appendChild(successAlert);

                    // Reset form
                    contactForm.reset();

                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;

                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successAlert.remove();
                    }, 5000);
                }, 1500);
            } else {
                // Show validation error message
                const errorAlert = document.createElement('div');
                errorAlert.className = 'alert alert-danger mt-3 animate__animated animate__fadeIn';
                errorAlert.innerHTML = currentLang === 'es' ?
                    '<i class="fas fa-exclamation-circle me-2"></i> Por favor completa todos los campos requeridos.' :
                    '<i class="fas fa-exclamation-circle me-2"></i> Please fill out all required fields.';

                // Remove existing error messages
                const existingAlerts = contactForm.querySelectorAll('.alert-danger');
                existingAlerts.forEach(alert => alert.remove());

                contactForm.appendChild(errorAlert);

                // Remove error message after 3 seconds
                setTimeout(() => {
                    errorAlert.remove();
                }, 3000);
            }
        });
    }

    // ====================================
    // Smooth Scrolling for Anchor Links
    // ====================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ====================================
    // Initialize Bootstrap Components
    // ====================================

    // Initialize all tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize all popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // ====================================
    // Zoho Form Adjust
    // ====================================

    // Ajustar automáticamente la altura del iFrame de Zoho
    window.addEventListener('message', function (event) {
        if (event.data && typeof event.data === 'string' && event.data.indexOf('zf_setHeight') >= 0) {
            var height = event.data.split('|')[1];
            document.querySelector('.zoho-form-wrapper iframe').style.height = height + 'px';
        }
    });
});