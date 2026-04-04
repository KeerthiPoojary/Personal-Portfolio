// Interactive Elements: Project Cards + Contact Form Validation

// Project data
const projectsData = [
    {
        title: "E-commerce Website",
        desc: "A fully responsive online store with product filtering and cart functionality using HTML, CSS, JS.",
        img: "https://via.placeholder.com/400x200?text=E-commerce+Project",
        link: "#"
    },
    {
        title: "Weather App",
        desc: "Real-time weather application using OpenWeatherMap API. Displays temperature, humidity, and conditions.",
        img: "https://via.placeholder.com/400x200?text=Weather+App",
        link: "#"
    },
    {
        title: "Task Manager",
        desc: "A to-do list app with local storage support, dark mode toggle, and task prioritization.",
        img: "https://via.placeholder.com/400x200?text=Task+Manager",
        link: "#"
    },
    {
        title: "Portfolio Template",
        desc: "Minimalist portfolio template like this one! Built with Bootstrap and custom CSS, fully responsive.",
        img: "https://via.placeholder.com/400x200?text=Portfolio+Template",
        link: "#"
    }
];

// Function to dynamically generate project cards
function loadProjects() {
    const container = document.getElementById('projectCardsContainer');
    if (!container) return;
    
    let cardsHTML = '';
    projectsData.forEach(project => {
        cardsHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="project-card">
                    <img src="${project.img}" alt="${project.title}">
                    <div class="card-body">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-text">${project.desc}</p>
                        <a href="${project.link}" class="btn-sm" target="_blank">View Project →</a>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = cardsHTML;
}

// Typing animation effect for home section
function typingEffect() {
    const typingElement = document.querySelector('.typing');
    if (!typingElement) return;
    
    const phrases = ["Web Developer & UI Designer", "Student & Creator", "Front-end Enthusiast"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 150);
        }
    }
    type();
}

// Contact Form Handling with validation & mock submission
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const statusDiv = document.getElementById('formStatus');
        
        // Simple validation
        if (name === '' || email === '' || message === '') {
            statusDiv.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            statusDiv.innerHTML = '<div class="alert alert-danger">Please enter a valid email address.</div>';
            return;
        }
        
        // Simulate form submission (no backend)
        statusDiv.innerHTML = '<div class="alert alert-success">Thank you, ' + name + '! I will get back to you soon.</div>';
        form.reset();
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 5000);
    });
}

// Download Resume (simulate)
function setupResumeDownload() {
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Resume download simulation: In a real project, you would link a PDF file here.");
            // In actual use: window.open('path/to/resume.pdf', '_blank');
        });
    }
}

// Smooth scrolling for nav links (optional but adds UX)
function smoothScroll() {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Initialize all functions when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    typingEffect();
    initContactForm();
    setupResumeDownload();
    smoothScroll();
});