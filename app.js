/* ============================================
   WILMINGTON LAUGHS - JavaScript
   Event data, filtering, form handling

   LAST UPDATED: 2025-11-28T06:40:10.463Z
   Events are automatically scraped weekly via Perplexity API
   ============================================ */

// ============================================
// EVENT DATA (Auto-generated - do not edit manually)
// ============================================

const scrapedEvents = [
    {
        "name": "Chloe Radcliffe",
        "type": "standup",
        "date": "2025-11-29",
        "time": "8:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$10",
        "description": "Chloe Radcliffe performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": false,
        "id": 1
    },
    {
        "name": "Dead Crow Improv Night",
        "type": "improv",
        "date": "2025-12-03",
        "time": "8:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "FREE",
        "description": "Weekly improv comedy show. No reservations, first come, first served.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 2
    },
    {
        "name": "Meeser Eddie's Funtime Trivia",
        "type": "special",
        "date": "2025-12-03",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "FREE",
        "description": "Weekly themed trivia night with physical challenges and prizes.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 3
    },
    {
        "name": "Langston Kerman",
        "type": "standup",
        "date": "2025-12-05",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$105",
        "description": "Langston Kerman performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://seatgeek.com/venues/dead-crow-comedy-room/tickets",
        "recurring": false,
        "id": 4
    },
    {
        "name": "Langston Kerman",
        "type": "standup",
        "date": "2025-12-05",
        "time": "9:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$105",
        "description": "Langston Kerman performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://seatgeek.com/venues/dead-crow-comedy-room/tickets",
        "recurring": false,
        "id": 5
    },
    {
        "name": "Langston Kerman",
        "type": "standup",
        "date": "2025-12-06",
        "time": "9:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$105",
        "description": "Langston Kerman performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://seatgeek.com/venues/dead-crow-comedy-room/tickets",
        "recurring": false,
        "id": 6
    },
    {
        "name": "Dead Crow Improv Night",
        "type": "improv",
        "date": "2025-12-10",
        "time": "8:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "FREE",
        "description": "Weekly improv comedy show. No reservations, first come, first served.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 7
    },
    {
        "name": "Meeser Eddie's Funtime Trivia",
        "type": "special",
        "date": "2025-12-10",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "FREE",
        "description": "Weekly themed trivia night with physical challenges and prizes.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 8
    },
    {
        "name": "Rosebud Baker",
        "type": "standup",
        "date": "2025-12-12",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$112",
        "description": "Rosebud Baker performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://seatgeek.com/venues/dead-crow-comedy-room/tickets",
        "recurring": false,
        "id": 9
    },
    {
        "name": "Rosebud Baker",
        "type": "standup",
        "date": "2025-12-12",
        "time": "9:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$112",
        "description": "Rosebud Baker performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://seatgeek.com/venues/dead-crow-comedy-room/tickets",
        "recurring": false,
        "id": 10
    },
    {
        "name": "Rosebud Baker",
        "type": "standup",
        "date": "2025-12-13",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$108",
        "description": "Rosebud Baker performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://www.vividseats.com/rosebud-baker-tickets-wilmington-dead-crow-comedy-room-12-13-2025--theater-comedy/production/5939503",
        "recurring": false,
        "id": 11
    },
    {
        "name": "Rosebud Baker",
        "type": "standup",
        "date": "2025-12-13",
        "time": "9:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$108",
        "description": "Rosebud Baker performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://www.vividseats.com/rosebud-baker-tickets-wilmington-dead-crow-comedy-room-12-13-2025--theater-comedy/production/5939503",
        "recurring": false,
        "id": 12
    },
    {
        "name": "Dead Crow Improv Night",
        "type": "improv",
        "date": "2025-12-17",
        "time": "8:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "FREE",
        "description": "Weekly improv comedy show. No reservations, first come, first served.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 13
    },
    {
        "name": "Meeser Eddie's Funtime Trivia",
        "type": "special",
        "date": "2025-12-17",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "FREE",
        "description": "Weekly themed trivia night with physical challenges and prizes.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 14
    },
    {
        "name": "Aaron Berg",
        "type": "standup",
        "date": "2025-12-20",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$112",
        "description": "Aaron Berg performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://www.wilmingtonnctheater.com/shows/dead-crow-comedy-room/aaron-berg-18-event/tickets/seating?performance_id=6178588&performance_time=2025-12-20T19%3A00%3A00+00%3A00",
        "recurring": false,
        "id": 15
    },
    {
        "name": "Sam Jay",
        "type": "standup",
        "date": "2025-12-20",
        "time": "9:30 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N. 3rd Street",
        "price": "$112",
        "description": "Sam Jay performs stand-up comedy at Dead Crow Comedy Room.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": false,
        "id": 16
    }
];

// Convert date strings to Date objects
const defaultEvents = scrapedEvents.map(event => ({
    ...event,
    date: new Date(event.date + 'T00:00:00')
}));

// Helper function to get the next occurrence of a day (for fallback)
function getNextDay(dayIndex) {
    const today = new Date();
    const currentDay = today.getDay();
    let daysUntil = dayIndex - currentDay;

    if (daysUntil <= 0) {
        daysUntil += 7;
    }

    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysUntil);
    return nextDate;
}

// Format date for display
function formatDate(date) {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Format date for sorting
function getDateValue(date) {
    return date.getTime();
}

// ============================================
// LOCAL STORAGE
// ============================================

const STORAGE_KEY = 'wilmington_laughs_events';
const SUBMISSIONS_KEY = 'wilmington_laughs_submissions';

function loadEvents() {
    // Always use the scraped events as the source of truth
    return [...defaultEvents];
}

function saveEvents(events) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

function loadSubmissions() {
    const stored = localStorage.getItem(SUBMISSIONS_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    }
    return [];
}

function saveSubmission(submission) {
    const submissions = loadSubmissions();
    submissions.push({
        ...submission,
        id: Date.now(),
        submittedAt: new Date().toISOString()
    });
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(submissions));
}

// ============================================
// EVENT RENDERING
// ============================================

let allEvents = loadEvents();
let currentFilter = 'all';

const eventColors = {
    standup: 'coral',
    improv: 'lavender',
    openmic: 'mint',
    workshop: 'green',
    special: 'magenta'
};

function renderEvents(filter = 'all') {
    const grid = document.getElementById('events-grid');
    if (!grid) return;

    // Filter events
    let filteredEvents = allEvents;
    if (filter !== 'all') {
        filteredEvents = allEvents.filter(e => e.type === filter);
    }

    // Sort by date
    filteredEvents.sort((a, b) => getDateValue(a.date) - getDateValue(b.date));

    // Only show events in the next 14 days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const twoWeeks = new Date(today);
    twoWeeks.setDate(today.getDate() + 14);

    filteredEvents = filteredEvents.filter(e => {
        const eventDate = new Date(e.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today && eventDate <= twoWeeks;
    });

    if (filteredEvents.length === 0) {
        grid.innerHTML = `
            <div class="no-events" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="font-size: 1.2rem; opacity: 0.7;">No ${filter === 'all' ? '' : filter} events this week</p>
                <p style="font-size: 0.9rem; opacity: 0.5; margin-top: 0.5rem;">Check back soon or submit an event!</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredEvents.map((event, index) => `
        <article class="event-card" data-type="${event.type}" style="animation-delay: ${index * 0.05}s">
            <span class="event-type">${event.type}</span>
            <h3>${event.name}</h3>
            <p class="event-date">${formatDate(event.date)} · ${event.time}</p>
            <p class="event-venue-name">${event.venue}</p>
            <span class="event-price">${event.price}</span>
            ${event.link && event.link !== '#' ? `
                <a href="${event.link}" target="_blank" class="event-link" title="More info">→</a>
            ` : ''}
        </article>
    `).join('');

    // Re-trigger animations
    grid.querySelectorAll('.event-card').forEach((card, i) => {
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.opacity = '';
        }, 50);
    });
}

// ============================================
// FILTER HANDLING
// ============================================

function initFilters() {
    const tabs = document.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter events
            currentFilter = tab.dataset.filter;
            renderEvents(currentFilter);
        });
    });
}

// ============================================
// FORM HANDLING
// ============================================

function initForm() {
    const form = document.getElementById('event-form');
    const successMessage = document.getElementById('submit-success');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const submission = {
            name: formData.get('eventName'),
            type: formData.get('eventType'),
            date: formData.get('eventDate'),
            time: formData.get('eventTime'),
            venue: formData.get('eventVenue'),
            description: formData.get('eventDescription'),
            price: formData.get('eventPrice') || 'TBD',
            link: formData.get('eventLink'),
            email: formData.get('submitterEmail')
        };

        // Save submission locally
        saveSubmission(submission);

        // Show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';

        // Reset after 3 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
        }, 3000);

        console.log('Event submitted:', submission);
    });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');

    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        nav.classList.toggle('active');
        btn.classList.toggle('active');
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            btn.classList.remove('active');
        });
    });
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateStats() {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateNumber(entry.target, 0, target, 1500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const current = Math.floor(start + range * easeOut);
        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(update);
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.venue-card, .class-card, .troupe-card, .comedian-card, .annual-card').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// NAV SCROLL EFFECT
// ============================================

function initNavScroll() {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(253, 221, 230, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'var(--pink-bg)';
            nav.style.backdropFilter = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        // Escape closes mobile menu
        if (e.key === 'Escape') {
            document.querySelector('.nav-links')?.classList.remove('active');
            document.querySelector('.mobile-menu-btn')?.classList.remove('active');
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Wilmington Laughs loaded!');

    // Initialize all features
    renderEvents();
    initFilters();
    initForm();
    initMobileMenu();
    animateStats();
    initSmoothScroll();
    initScrollAnimations();
    initNavScroll();
    initKeyboardNav();

    // Add current year to footer if needed
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// ============================================
// EXPORT FOR TESTING/DEBUGGING
// ============================================

window.WilmingtonLaughs = {
    events: allEvents,
    renderEvents,
    loadSubmissions,
    clearSubmissions: () => localStorage.removeItem(SUBMISSIONS_KEY),
    clearEvents: () => localStorage.removeItem(STORAGE_KEY),
    lastUpdated: '2025-11-28T06:40:10.463Z'
};
