// Content data structure - Based on WhatsApp chat campaign notes
const content = {
    hero: {
        title: "Redefining Ability",
        subtitle: "See the Story. Support the Strength."
    },
    events: [
        {
            title: "Milano Cortina 2026 Paralympic Winter Games",
            location: "Milano-Cortina, Italy · 6–15 March 2026",
            startDate: "2026-03-06T10:00:00+01:00"
        },
        {
            title: "Los Angeles 2028 Paralympic Games",
            location: "Los Angeles, USA · 15–27 August 2028",
            startDate: "2028-08-15T09:00:00-07:00"
        },
        {
            title: "2030 Paralympic Winter Games",
            location: "Host city TBD · Dates to be confirmed",
            startDate: "2030-03-01T09:00:00+00:00"
        }
    ],
    aboutSection: {
        title: "About the Initiative",
        description: 'Redefining Ability is a multi-platform campaign dedicated to humanising athletes’ stories, challenging stereotypes about disability, and promoting truly inclusive support from both the public and brands. At the heart of the initiative is our podcast–videocast series, "Rising Through", where Paralympic athletes share real, long-form conversations in an open and relaxed setting. These episodes offer an unfiltered look at their journeys, motivations, and experiences—far beyond the headlines.',
        bullets: [
            "Educate the public about Paralympic sports and dispel myths around disability",
            "Engage people by letting them hear directly from athletes through stories and Q&A interactions",
            "Inspire brands to support inclusivity and long-term partnerships with Paralympic athletes and organisations"
        ]
    },
    media: {
        trailer: "trailer2.mp4",
        videos: [
            {
                title: "Beyond the Podium: Maria's Journey",
                description: "Episode 01: Training through accessibility challenges and redefining strength.",
                url: "https://www.youtube.com/embed/ysz5S6PUM-U"
            },
            {
                title: "Voices of Strength: The Power of Community",
                description: "Episode 02: The role of family, teammates, and allies in athlete resilience.",
                url: "https://www.youtube.com/embed/ScMzIvxBSi4"
            },
            {
                title: "Future Vision: Inclusive Media for Athletes",
                description: "Episode 03: Athletes speak about representation and opportunities for the next generation.",
                url: "https://www.youtube.com/embed/aqz-KE-bpKQ"
            }
        ]
    },
    infoCards: [
        {
            title: "Educate",
            description: "We educate the public about Paralympic sports and dispel myths around disability, helping people understand what Paralympic sports are really about."
        },
        {
            title: "Engage",
            description: "We engage people by letting them hear directly from athletes through stories and Q&A interactions, creating emotional connections through honest conversations."
        },
        {
            title: "Inspire Sponsors",
            description: "We inspire brands to support inclusivity and long-term partnerships with Paralympic athletes and organisations, connecting brands with values like inclusion and courage."
        }
    ],
    contacts: [
        {
            type: "International",
            name: "International Paralympic Committee",
            url: "https://www.paralympic.org",
            description: "The global governing body of the Paralympic Movement"
        },
        {
            type: "National",
            name: "Portugal National Paralympic Committee",
            url: "https://www.paralympic.org/portugal",
            description: "National Paralympic Committee representing Portugal"
        },
        {
            type: "National",
            name: "Cyprus National Paralympic Committee",
            url: "https://www.paralympic.org/cyprus",
            description: "National Paralympic Committee representing Cyprus"
        },
        {
            type: "Regional",
            name: "European Paralympic Committee",
            url: "https://www.europaralympic.org",
            description: "Regional organisation for Paralympic sports in Europe"
        },
        {
            type: "National",
            name: "ParalympicsGB",
            url: "https://www.paralympics.org.uk",
            description: "National Paralympic Committee for Great Britain"
        }
    ],
    donatePage: {
        title: "Support Paralympic Athletes",
        description: "Your contribution helps Paralympic athletes in Europe achieve their goals and inspire millions around the world. Support the 'Redefining Ability' campaign and help us create better access, inclusive media representation, and more opportunities for future athletes with disabilities."
    },
    askSection: {
        title: "Ask a Question to an Athlete",
        description: "Have a question for our Paralympic athletes? Fill out the form below and we'll connect you with an athlete who can share their experience and insights. Your questions help us create meaningful conversations in our 'Voices of Strength' podcast-videocast series."
    }
};

// Initialize page content
document.addEventListener('DOMContentLoaded', function() {
    // Populate info cards
    const infoGrid = document.getElementById('infoGrid');
    if (infoGrid && content.infoCards) {
        content.infoCards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'info-card slide-up';
            cardElement.style.animationDelay = `${index * 0.1}s`;
            cardElement.innerHTML = `
                <h3>${card.title}</h3>
                <p>${card.description}</p>
            `;
            infoGrid.appendChild(cardElement);
        });
    }

    // Populate about section
    const aboutSection = document.getElementById('about');
    if (aboutSection && content.aboutSection) {
        const aboutContent = document.createElement('div');
        aboutContent.className = 'about-content slide-up';
        aboutContent.innerHTML = `
            <p class="about-description">${content.aboutSection.description}</p>
            <ul class="about-bullets">
                ${content.aboutSection.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
            </ul>
        `;
        const infoGrid = document.getElementById('infoGrid');
        if (infoGrid && infoGrid.parentNode) {
            infoGrid.parentNode.insertBefore(aboutContent, infoGrid);
        }
    }

    // Populate contacts
    const contactsGrid = document.getElementById('contactsGrid');
    if (contactsGrid && content.contacts) {
        content.contacts.forEach((contact, index) => {
            const contactElement = document.createElement('div');
            contactElement.className = 'contact-card slide-up';
            contactElement.style.animationDelay = `${index * 0.1}s`;
            contactElement.innerHTML = `
                <div class="contact-type">${contact.type}</div>
                <h3>${contact.name}</h3>
                ${contact.description ? `<p>${contact.description}</p>` : ''}
                ${contact.url ? `<a href="${contact.url}" target="_blank" rel="noopener noreferrer" class="contact-link">Visit site →</a>` : ''}
            `;
            contactsGrid.appendChild(contactElement);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a.smooth-scroll').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Question form handling
    const questionForm = document.getElementById('questionForm');
    if (questionForm) {
        questionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const question = document.getElementById('question').value.trim();
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            
            // Validation
            let isValid = true;
            
            if (!name) {
                document.getElementById('nameError').textContent = 'Name is required';
                isValid = false;
            }
            
            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            if (!question) {
                document.getElementById('questionError').textContent = 'Question is required';
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Log form data
            const formData = {
                name: name,
                email: email,
                question: question,
                timestamp: new Date().toISOString()
            };
            console.log('Question submitted:', formData);
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Thank you! Your question has been submitted. We\'ll get back to you soon.';
            successMessage.className = 'success-message show';
            
            // Reset form
            questionForm.reset();
            
            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.className = 'success-message';
                successMessage.textContent = '';
            }, 5000);
        });
    }

    // Initialize hero content
    if (content.hero) {
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroTitle) heroTitle.textContent = content.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
    }

    // Hero trailer setup
    const heroVideo = document.querySelector('.hero-media video');
    const openTrailerBtn = document.getElementById('openTrailer');
    const closeTrailerBtn = document.getElementById('closeTrailer');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalTrailer');

    if (content.media?.trailer) {
        if (heroVideo) {
            heroVideo.src = content.media.trailer;
            heroVideo.load();
            heroVideo.play().catch(() => {});
        }
        if (modalVideo) {
            modalVideo.src = content.media.trailer;
            modalVideo.load();
        }
    }

    function toggleModal(show) {
        if (!videoModal) return;
        videoModal.classList.toggle('open', show);
        videoModal.setAttribute('aria-hidden', show ? 'false' : 'true');
        if (modalVideo) {
            if (show) {
                modalVideo.currentTime = 0;
                modalVideo.play().catch(() => {});
            } else {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
        }
    }

    if (openTrailerBtn) {
        openTrailerBtn.addEventListener('click', () => toggleModal(true));
    }
    if (closeTrailerBtn) {
        closeTrailerBtn.addEventListener('click', () => toggleModal(false));
    }
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                toggleModal(false);
            }
        });
    }

    // Countdown setup
    const getNextEvent = () => {
        if (Array.isArray(content.events) && content.events.length) {
            const now = Date.now();
            const upcoming = content.events
                .map(event => ({ ...event, timestamp: new Date(event.startDate).getTime() }))
                .sort((a, b) => a.timestamp - b.timestamp)
                .find(event => event.timestamp > now);
            return upcoming || content.events[content.events.length - 1];
        }
        return content.event || null;
    };

    const nextEvent = getNextEvent();
    if (nextEvent) {
        const eventTitle = document.getElementById('eventTitle');
        const eventLocation = document.getElementById('eventLocation');
        if (eventTitle) eventTitle.textContent = nextEvent.title;
        if (eventLocation) eventLocation.textContent = nextEvent.location;

        const targetTime = new Date(nextEvent.startDate).getTime();
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        function updateCountdown() {
            const now = Date.now();
            let distance = targetTime - now;

            if (distance < 0) distance = 0;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // Video carousel
    if (content.media?.videos?.length) {
        const featureVideo = document.getElementById('featureVideo');
        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        const prevBtn = document.getElementById('videoPrev');
        const nextBtn = document.getElementById('videoNext');
        let currentVideo = 0;

        function renderVideo(index) {
            const video = content.media.videos[index];
            if (featureVideo) featureVideo.src = `${video.url}?rel=0`;
            if (videoTitle) videoTitle.textContent = video.title;
            if (videoDescription) videoDescription.textContent = video.description;
        }

        if (featureVideo) {
            renderVideo(currentVideo);
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentVideo = (currentVideo - 1 + content.media.videos.length) % content.media.videos.length;
                renderVideo(currentVideo);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentVideo = (currentVideo + 1) % content.media.videos.length;
                renderVideo(currentVideo);
            });
        }
    }


    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Update active nav link on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || 
                (current === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.info-card, .contact-card, .section-title, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

