// Translations
const translations = {
    EN: {
        nav: {
            home: "Home",
            about: "About",
            resources: "Resources",
            qa: "Athletes Q&A",
            donate: "Donate"
        },
        hero: {
            title: "Redefining Ability",
            subtitle: "See the Story. Support the Strength."
        },
        buttons: {
            askQuestion: "Ask a Question",
            donate: "Donate",
            buyTickets: "Buy Tickets",
            submitQuestion: "Submit Question"
        },
        countdown: {
            eyebrow: "Next Paralympic Highlight",
            days: "Days",
            hours: "Hours",
            minutes: "Minutes",
            seconds: "Seconds"
        },
        about: {
            title: "About the Initiative",
            description: "Redefining Ability is a multi-platform campaign dedicated to humanising athletes' stories, challenging stereotypes about disability, and promoting truly inclusive support from both the public and brands. At the heart of the initiative is our podcast–videocast series, where Paralympic athletes share real, long-form conversations in an open and relaxed setting. These episodes offer an unfiltered look at their journeys, motivations, and experiences—far beyond the headlines.",
            bullets: [
                "Educate the public about Paralympic sports and dispel myths around disability",
                "Engage people by letting them hear directly from athletes through stories and Q&A interactions",
                "Inspire brands to support inclusivity and long-term partnerships with Paralympic athletes and organisations"
            ]
        },
        infoCards: {
            educate: {
                title: "Educate",
                description: "We educate the public about Paralympic sports and dispel myths around disability, helping people understand what Paralympic sports are really about."
            },
            engage: {
                title: "Engage",
                description: "We engage people by letting them hear directly from athletes through stories and Q&A interactions, creating emotional connections through honest conversations."
            },
            inspire: {
                title: "Inspire Sponsors",
                description: "We inspire brands to support inclusivity and long-term partnerships with Paralympic athletes and organisations, connecting brands with values like inclusion and courage."
            }
        },
        contacts: {
            title: "Paralympic Contacts & Resources",
            visitSite: "Visit site →"
        },
        podcast: {
            title: "Podcast Episodes"
        },
        askSection: {
            title: "Ask a Question to an Athlete",
            description: "Have a question for our Paralympic athletes? Fill out the form below and we'll connect you with an athlete who can share their experience and insights. Your questions help us create meaningful conversations in our 'Voices of Strength' podcast-videocast series.",
            name: "Name",
            email: "Email",
            question: "Your Question",
            recordVoice: "Record Voice",
            recordVideo: "Record Video"
        },
        accessibility: {
            title: "Accessibility Options",
            largerText: "Larger Text",
            increaseSpacing: "Increase Word Spacing",
            screenReader: "Screen Reader Friendly",
            reduceMotion: "Reduce Motion"
        },
        footer: "© 2025 Redefining Ability. All rights reserved."
    },
    PT: {
        nav: {
            home: "Início",
            about: "Sobre",
            resources: "Recursos",
            qa: "Perguntas aos Atletas",
            donate: "Doar"
        },
        hero: {
            title: "Redefinir Capacidade",
            subtitle: "Veja a História. Apoie a Força."
        },
        buttons: {
            askQuestion: "Fazer uma Pergunta",
            donate: "Doar",
            buyTickets: "Comprar Bilhetes",
            submitQuestion: "Enviar Pergunta"
        },
        countdown: {
            eyebrow: "Próximo Destaque Paralímpico",
            days: "Dias",
            hours: "Horas",
            minutes: "Minutos",
            seconds: "Segundos"
        },
        about: {
            title: "Sobre a Iniciativa",
            description: "Redefinir Capacidade é uma campanha multiplataforma dedicada a humanizar as histórias dos atletas, desafiar estereótipos sobre deficiência e promover apoio verdadeiramente inclusivo tanto do público quanto das marcas. No centro da iniciativa está a nossa série de podcast-videocast, onde atletas paralímpicos partilham conversas reais e longas num ambiente aberto e descontraído. Estes episódios oferecem um olhar sem filtros sobre as suas jornadas, motivações e experiências—muito além das manchetes.",
            bullets: [
                "Educar o público sobre desportos paralímpicos e dissipar mitos sobre deficiência",
                "Envolver as pessoas permitindo que ouçam diretamente dos atletas através de histórias e interações de perguntas e respostas",
                "Inspirar marcas a apoiar a inclusividade e parcerias de longo prazo com atletas e organizações paralímpicas"
            ]
        },
        infoCards: {
            educate: {
                title: "Educar",
                description: "Educamos o público sobre desportos paralímpicos e dissipamos mitos sobre deficiência, ajudando as pessoas a entender o que os desportos paralímpicos realmente são."
            },
            engage: {
                title: "Envolver",
                description: "Envolvemos as pessoas permitindo que ouçam diretamente dos atletas através de histórias e interações de perguntas e respostas, criando conexões emocionais através de conversas honestas."
            },
            inspire: {
                title: "Inspirar Patrocinadores",
                description: "Inspiramos marcas a apoiar a inclusividade e parcerias de longo prazo com atletas e organizações paralímpicas, conectando marcas com valores como inclusão e coragem."
            }
        },
        contacts: {
            title: "Contactos e Recursos Paralímpicos",
            visitSite: "Visitar site →"
        },
        podcast: {
            title: "Episódios do Podcast"
        },
        askSection: {
            title: "Fazer uma Pergunta a um Atleta",
            description: "Tem uma pergunta para os nossos atletas paralímpicos? Preencha o formulário abaixo e conectaremos com um atleta que pode partilhar a sua experiência e perspetivas. As suas perguntas ajudam-nos a criar conversas significativas na nossa série de podcast-videocast 'Voices of Strength'.",
            name: "Nome",
            email: "Email",
            question: "A sua Pergunta",
            recordVoice: "Gravar Voz",
            recordVideo: "Gravar Vídeo"
        },
        accessibility: {
            title: "Opções de Acessibilidade",
            largerText: "Texto Maior",
            increaseSpacing: "Aumentar Espaçamento entre Palavras",
            screenReader: "Compatível com Leitor de Ecrã",
            reduceMotion: "Reduzir Movimento"
        },
        footer: "© 2025 Redefinir Capacidade. Todos os direitos reservados."
    }
};

// Donate page translations
const donateTranslations = {
    EN: {
        nav: {
            home: "Home",
            about: "About",
            resources: "Resources",
            qa: "Athletes Q&A",
            donate: "Donate"
        },
        title: "Support Paralympic Athletes",
        description: "Your contribution helps Paralympic athletes in Europe achieve their goals and inspire millions around the world. Support the 'Redefining Ability' campaign and help us create better access, inclusive media representation, and more opportunities for future athletes with disabilities.",
        selectAmount: "Select Amount",
        customAmount: "Custom Amount",
        monthlySubscription: "Make this a monthly donation",
        donateNow: "Donate Now",
        impactTitle: "Your Donation Makes a Real Impact",
        impactIntro: "Based on real Paralympic equipment and training costs, here's what your support can achieve:",
        footer: "© 2025 Redefining Ability. All rights reserved."
    },
    PT: {
        nav: {
            home: "Início",
            about: "Sobre",
            resources: "Recursos",
            qa: "Perguntas aos Atletas",
            donate: "Doar"
        },
        title: "Apoiar Atletas Paralímpicos",
        description: "A sua contribuição ajuda os atletas paralímpicos na Europa a alcançar os seus objetivos e a inspirar milhões em todo o mundo. Apoie a campanha 'Redefinir Capacidade' e ajude-nos a criar melhor acesso, representação mediática inclusiva e mais oportunidades para futuros atletas com deficiência.",
        selectAmount: "Selecionar Valor",
        customAmount: "Valor Personalizado",
        monthlySubscription: "Tornar esta uma doação mensal",
        donateNow: "Doar Agora",
        impactTitle: "A Sua Doação Tem um Impacto Real",
        impactIntro: "Com base nos custos reais de equipamento e treino paralímpico, eis o que o seu apoio pode alcançar:",
        footer: "© 2025 Redefinir Capacidade. Todos os direitos reservados."
    }
};

// Content data structure - Based on WhatsApp chat campaign notes
const content = {
    hero: {
        title: "Redefining Ability",
        subtitle: "See the Story. Support the Strength."
    },
    events: [
        {
            title: "Milano Cortina 2026 Paralympic Winter Games",
            location: "Milano-Cortina, Italy · 7–15 March 2026",
            startDate: "2026-03-07T10:00:00+01:00",
            ticketUrl: "https://www.paralympic.org/milano-cortina-2026/tickets"
        },
        {
            title: "Los Angeles 2028 Paralympic Games",
            location: "Los Angeles, USA · 15–27 August 2028",
            startDate: "2028-08-15T09:00:00-07:00",
            ticketUrl: "https://www.paralympic.org/los-angeles-2028/tickets"
        },
        {
            title: "2030 Paralympic Winter Games",
            location: "Host city TBD · Dates to be confirmed",
            startDate: "2030-03-01T09:00:00+00:00",
            ticketUrl: "https://www.paralympic.org/tickets"
        }
    ],
    aboutSection: {
        title: "About the Initiative",
        description: "Redefining Ability is a multi-platform campaign dedicated to humanising athletes' stories, challenging stereotypes about disability, and promoting truly inclusive support from both the public and brands. At the heart of the initiative is our podcast–videocast series, where Paralympic athletes share real, long-form conversations in an open and relaxed setting. These episodes offer an unfiltered look at their journeys, motivations, and experiences—far beyond the headlines.",
        bullets: [
            "Educate the public about Paralympic sports and dispel myths around disability",
            "Engage people by letting them hear directly from athletes through stories and Q&A interactions",
            "Inspire brands to support inclusivity and long-term partnerships with Paralympic athletes and organisations"
        ]
    },
    media: {
        trailer: "trailer2.mp4"
    },
    podcastEpisodes: [
        {
            episode: "Episode 1",
            title: "Beyond the Podium: Maria's Journey",
            description: "Training through accessibility challenges and redefining strength."
        },
        {
            episode: "Episode 2",
            title: "Voices of Strength: The Power of Community",
            description: "The role of family, teammates, and allies in athlete resilience."
        },
        {
            episode: "Episode 3",
            title: "Future Vision: Inclusive Media for Athletes",
            description: "Athletes speak about representation and opportunities for the next generation."
        }
    ],
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
            
            const audioRecording = document.getElementById('audioRecording')?.value;
            const videoRecording = document.getElementById('videoRecording')?.value;
            
            // Require either text question or recording
            if (!question && !audioRecording && !videoRecording) {
                document.getElementById('questionError').textContent = 'Please enter a question or record audio/video';
                isValid = false;
            }
            
            if (!isValid) {
                return;
            }
            
            // Log form data
            const formData = {
                name: name,
                email: email,
                question: question || '',
                audioRecording: audioRecording || null,
                videoRecording: videoRecording || null,
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
        const buyTicketsBtn = document.getElementById('buyTicketsBtn');
        if (eventTitle) eventTitle.textContent = nextEvent.title;
        if (eventLocation) eventLocation.textContent = nextEvent.location;
        
        // Set buy tickets URL based on event
        if (buyTicketsBtn) {
            if (nextEvent.ticketUrl) {
                buyTicketsBtn.href = nextEvent.ticketUrl;
            } else {
                // Default to Paralympic tickets page
                buyTicketsBtn.href = 'https://www.paralympic.org/tickets';
            }
        }

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

    // Podcast Episodes Carousel
    const podcastContainer = document.getElementById('podcastContainer');
    const podcastPrev = document.getElementById('podcastPrev');
    const podcastNext = document.getElementById('podcastNext');
    let currentPodcastIndex = 0;

    if (podcastContainer && content.podcastEpisodes) {
        // Create all podcast cards
        content.podcastEpisodes.forEach((episode, index) => {
            const episodeCard = document.createElement('div');
            episodeCard.className = 'podcast-card';
            episodeCard.style.display = index === 0 ? 'block' : 'none';
            episodeCard.innerHTML = `
                <div class="podcast-image">
                    <img src="https://via.placeholder.com/400x300?text=Podcast+${index + 1}" alt="${episode.title}" class="podcast-placeholder">
                </div>
                <div class="podcast-content">
                    <p class="podcast-episode">${episode.episode}</p>
                    <h3 class="podcast-title">${episode.title}</h3>
                    <p class="podcast-description">${episode.description}</p>
                </div>
            `;
            podcastContainer.appendChild(episodeCard);
        });

        // Navigation functions
        function showPodcast(index) {
            const cards = podcastContainer.querySelectorAll('.podcast-card');
            if (cards.length === 0) return;
            
            currentPodcastIndex = index;
            if (currentPodcastIndex < 0) currentPodcastIndex = cards.length - 1;
            if (currentPodcastIndex >= cards.length) currentPodcastIndex = 0;
            
            cards.forEach((card, i) => {
                card.style.display = i === currentPodcastIndex ? 'block' : 'none';
            });
        }

        if (podcastPrev) {
            podcastPrev.addEventListener('click', () => {
                showPodcast(currentPodcastIndex - 1);
            });
        }

        if (podcastNext) {
            podcastNext.addEventListener('click', () => {
                showPodcast(currentPodcastIndex + 1);
            });
        }
    }


    // Mobile navigation toggle - only on index.html, not donate.html
    const isDonatePage = window.location.pathname.includes('donate.html');
    if (!isDonatePage) {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        
        function closeMobileMenu() {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
            
            // Close menu when clicking nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    // Small delay to allow smooth scroll to work
                    setTimeout(() => {
                        closeMobileMenu();
                    }, 100);
                });
            });
        }
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

    // Language Toggle and Translation
    const languageToggle = document.getElementById('languageToggle');
    const currentLangSpan = document.getElementById('currentLang');
    let currentLanguage = localStorage.getItem('siteLanguage') || 'EN';

    function translatePage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Update HTML lang attribute
        document.documentElement.lang = lang.toLowerCase();

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length >= 5) {
            navLinks[0].textContent = t.nav.home;
            navLinks[1].textContent = t.nav.about;
            navLinks[2].textContent = t.nav.resources;
            navLinks[3].textContent = t.nav.qa;
            navLinks[4].textContent = t.nav.donate;
        }

        // Hero
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (heroTitle) heroTitle.textContent = t.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;

        // Hero buttons
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        if (heroButtons.length >= 2) {
            heroButtons[0].textContent = t.buttons.askQuestion;
            heroButtons[1].textContent = t.buttons.donate;
        }

        // Countdown
        const countdownEyebrow = document.querySelector('.eyebrow');
        const countdownLabels = document.querySelectorAll('.countdown-label');
        const buyTicketsBtn = document.getElementById('buyTicketsBtn');
        if (countdownEyebrow) countdownEyebrow.textContent = t.countdown.eyebrow;
        if (countdownLabels.length >= 4) {
            countdownLabels[0].textContent = t.countdown.days;
            countdownLabels[1].textContent = t.countdown.hours;
            countdownLabels[2].textContent = t.countdown.minutes;
            countdownLabels[3].textContent = t.countdown.seconds;
        }
        if (buyTicketsBtn) buyTicketsBtn.textContent = t.buttons.buyTickets;

        // About section
        const aboutTitle = document.querySelector('#about .section-title');
        const aboutDescription = document.querySelector('.about-description');
        const aboutBullets = document.querySelectorAll('.about-bullets li');
        if (aboutTitle) aboutTitle.textContent = t.about.title;
        if (aboutDescription) aboutDescription.textContent = t.about.description;
        if (aboutBullets.length >= 3) {
            aboutBullets.forEach((bullet, index) => {
                if (t.about.bullets[index]) bullet.textContent = t.about.bullets[index];
            });
        }

        // Info cards
        const infoCardTitles = document.querySelectorAll('.info-card h3');
        const infoCardDescriptions = document.querySelectorAll('.info-card p');
        if (infoCardTitles.length >= 3 && infoCardDescriptions.length >= 3) {
            infoCardTitles[0].textContent = t.infoCards.educate.title;
            infoCardDescriptions[0].textContent = t.infoCards.educate.description;
            infoCardTitles[1].textContent = t.infoCards.engage.title;
            infoCardDescriptions[1].textContent = t.infoCards.engage.description;
            infoCardTitles[2].textContent = t.infoCards.inspire.title;
            infoCardDescriptions[2].textContent = t.infoCards.inspire.description;
        }

        // Contacts section
        const contactsTitle = document.querySelector('#contacts .section-title');
        const visitSiteLinks = document.querySelectorAll('.contact-link');
        if (contactsTitle) contactsTitle.textContent = t.contacts.title;
        visitSiteLinks.forEach(link => {
            link.textContent = t.contacts.visitSite;
        });

        // Podcast section
        const podcastTitle = document.querySelector('#podcast .section-title');
        if (podcastTitle) podcastTitle.textContent = t.podcast.title;

        // Ask section
        const askTitle = document.querySelector('#ask-question .section-title');
        const nameLabel = document.querySelector('label[for="name"]');
        const emailLabel = document.querySelector('label[for="email"]');
        const questionLabel = document.querySelector('label[for="question"]');
        const submitBtn = document.querySelector('#questionForm button[type="submit"]');
        const recordVoiceBtn = document.getElementById('recordVoiceBtn');
        const recordVideoBtn = document.getElementById('recordVideoBtn');
        if (askTitle) askTitle.textContent = t.askSection.title;
        if (nameLabel) nameLabel.textContent = t.askSection.name;
        if (emailLabel) emailLabel.textContent = t.askSection.email;
        if (questionLabel) questionLabel.textContent = t.askSection.question;
        if (submitBtn) submitBtn.textContent = t.buttons.submitQuestion;
        if (recordVoiceBtn) recordVoiceBtn.innerHTML = `<span>🎤</span> ${t.askSection.recordVoice}`;
        if (recordVideoBtn) recordVideoBtn.innerHTML = `<span>📹</span> ${t.askSection.recordVideo}`;

        // Accessibility panel
        const accTitle = document.getElementById('accessibilityTitle');
        const accLabels = document.querySelectorAll('.accessibility-option label span');
        if (accTitle) accTitle.textContent = t.accessibility.title;
        if (accLabels.length >= 4) {
            accLabels[0].textContent = t.accessibility.largerText;
            accLabels[1].textContent = t.accessibility.increaseSpacing;
            accLabels[2].textContent = t.accessibility.screenReader;
            accLabels[3].textContent = t.accessibility.reduceMotion;
        }

        // Footer
        const footer = document.querySelector('.footer p');
        if (footer) footer.textContent = t.footer;
    }

    if (languageToggle && currentLangSpan) {
        currentLangSpan.textContent = currentLanguage;
        translatePage(currentLanguage);
        
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'EN' ? 'PT' : 'EN';
            currentLangSpan.textContent = currentLanguage;
            localStorage.setItem('siteLanguage', currentLanguage);
            translatePage(currentLanguage);
        });
    }

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

    // Accessibility Panel
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    const largeTextCheck = document.getElementById('largeText');
    const increaseSpacingCheck = document.getElementById('increaseSpacing');
    const screenReaderCheck = document.getElementById('screenReader');
    const reduceMotionCheck = document.getElementById('reduceMotion');

    // Load saved preferences
    const savedPrefs = JSON.parse(localStorage.getItem('accessibilityPrefs') || '{}');
    
    function applyAccessibilityPrefs() {
        if (savedPrefs.largeText && largeTextCheck) {
            document.body.classList.add('large-text');
            largeTextCheck.checked = true;
        }
        if (savedPrefs.increaseSpacing && increaseSpacingCheck) {
            document.body.classList.add('increase-spacing');
            increaseSpacingCheck.checked = true;
        }
        if (savedPrefs.screenReader && screenReaderCheck) {
            document.body.setAttribute('aria-live', 'polite');
            document.body.setAttribute('role', 'main');
            screenReaderCheck.checked = true;
        }
        if (savedPrefs.reduceMotion && reduceMotionCheck) {
            document.body.classList.add('reduce-motion');
            reduceMotionCheck.checked = true;
        }
    }

    applyAccessibilityPrefs();

    if (accessibilityToggle && accessibilityPanel) {
        accessibilityToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = accessibilityPanel.classList.toggle('open');
            accessibilityToggle.setAttribute('aria-expanded', isOpen);
            accessibilityPanel.setAttribute('aria-hidden', !isOpen);
        });

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (accessibilityPanel.classList.contains('open') && 
                !accessibilityPanel.contains(e.target) && 
                !accessibilityToggle.contains(e.target)) {
                accessibilityPanel.classList.remove('open');
                accessibilityToggle.setAttribute('aria-expanded', 'false');
                accessibilityPanel.setAttribute('aria-hidden', 'true');
            }
        });

        // Large text toggle
        if (largeTextCheck) {
            largeTextCheck.addEventListener('change', (e) => {
                document.body.classList.toggle('large-text', e.target.checked);
                savedPrefs.largeText = e.target.checked;
                localStorage.setItem('accessibilityPrefs', JSON.stringify(savedPrefs));
            });
        }

        // Increase word spacing toggle
        if (increaseSpacingCheck) {
            increaseSpacingCheck.addEventListener('change', (e) => {
                document.body.classList.toggle('increase-spacing', e.target.checked);
                savedPrefs.increaseSpacing = e.target.checked;
                localStorage.setItem('accessibilityPrefs', JSON.stringify(savedPrefs));
            });
        }

        // Screen reader toggle
        if (screenReaderCheck) {
            screenReaderCheck.addEventListener('change', (e) => {
                if (e.target.checked) {
                    document.body.setAttribute('aria-live', 'polite');
                    document.body.setAttribute('role', 'main');
                } else {
                    document.body.removeAttribute('aria-live');
                    document.body.removeAttribute('role');
                }
                savedPrefs.screenReader = e.target.checked;
                localStorage.setItem('accessibilityPrefs', JSON.stringify(savedPrefs));
            });
        }

        // Reduce motion toggle
        if (reduceMotionCheck) {
            reduceMotionCheck.addEventListener('change', (e) => {
                document.body.classList.toggle('reduce-motion', e.target.checked);
                savedPrefs.reduceMotion = e.target.checked;
                localStorage.setItem('accessibilityPrefs', JSON.stringify(savedPrefs));
            });
        }
    }

    // Recording functionality for Ask Question form
    const recordVoiceBtn = document.getElementById('recordVoiceBtn');
    const recordVideoBtn = document.getElementById('recordVideoBtn');
    const recordingStatus = document.getElementById('recordingStatus');
    const recordingPreview = document.getElementById('recordingPreview');
    const audioRecordingInput = document.getElementById('audioRecording');
    const videoRecordingInput = document.getElementById('videoRecording');
    const questionTextarea = document.getElementById('question');

    let mediaRecorder = null;
    let audioChunks = [];
    let videoChunks = [];
    let currentStream = null;

    function stopCurrentRecording() {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        if (currentStream) {
            currentStream.getTracks().forEach(track => track.stop());
            currentStream = null;
        }
    }

    if (recordVoiceBtn) {
        recordVoiceBtn.addEventListener('click', async () => {
            try {
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    stopCurrentRecording();
                    return;
                }

                stopCurrentRecording();
                audioChunks = [];
                
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                currentStream = stream;
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) audioChunks.push(e.data);
                };
                
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    const audioUrl = URL.createObjectURL(audioBlob);
                    recordingPreview.innerHTML = `<audio controls src="${audioUrl}"></audio>`;
                    recordingPreview.classList.add('active');
                    if (audioRecordingInput) audioRecordingInput.value = audioUrl;
                    if (recordingStatus) {
                        recordingStatus.textContent = 'Voice recording saved!';
                        recordingStatus.className = 'recording-status stopped';
                    }
                    recordVoiceBtn.textContent = '🎤 Record Voice';
                };
                
                mediaRecorder.start();
                recordVoiceBtn.textContent = '⏹ Stop Recording';
                if (recordingStatus) {
                    recordingStatus.textContent = 'Recording voice...';
                    recordingStatus.className = 'recording-status recording';
                }
            } catch (err) {
                console.error('Error accessing microphone:', err);
                alert('Could not access microphone. Please check permissions.');
            }
        });
    }

    if (recordVideoBtn) {
        recordVideoBtn.addEventListener('click', async () => {
            try {
                if (mediaRecorder && mediaRecorder.state === 'recording') {
                    stopCurrentRecording();
                    return;
                }

                stopCurrentRecording();
                videoChunks = [];
                
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
                currentStream = stream;
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) videoChunks.push(e.data);
                };
                
                mediaRecorder.onstop = () => {
                    const videoBlob = new Blob(videoChunks, { type: 'video/webm' });
                    const videoUrl = URL.createObjectURL(videoBlob);
                    recordingPreview.innerHTML = `<video controls src="${videoUrl}"></video>`;
                    recordingPreview.classList.add('active');
                    if (videoRecordingInput) videoRecordingInput.value = videoUrl;
                    if (recordingStatus) {
                        recordingStatus.textContent = 'Video recording saved!';
                        recordingStatus.className = 'recording-status stopped';
                    }
                    recordVideoBtn.textContent = '📹 Record Video';
                };
                
                mediaRecorder.start();
                recordVideoBtn.textContent = '⏹ Stop Recording';
                if (recordingStatus) {
                    recordingStatus.textContent = 'Recording video...';
                    recordingStatus.className = 'recording-status recording';
                }
            } catch (err) {
                console.error('Error accessing camera:', err);
                alert('Could not access camera. Please check permissions.');
            }
        });
    }
});

