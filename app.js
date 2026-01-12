/* ============================================
   WILMINGTON LAUGHS - JavaScript
   Event data, filtering, form handling

   LAST UPDATED: 2026-01-12T11:15:25.018Z
   Events are automatically scraped weekly via Perplexity API
   ============================================ */

// ============================================
// EVENT DATA (Auto-generated - do not edit manually)
// ============================================

const scrapedEvents = [
    {
        "name": "Open Mic Comedy",
        "type": "openmic",
        "date": "2026-01-15",
        "time": "8:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N 3rd Street",
        "price": "FREE",
        "description": "Every Thursday open mic for aspiring comics. Doors 6:30PM. Performer sign up 7PM -- Showtime 8PM. Seating first come, first served.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": true,
        "id": 1
    },
    {
        "name": "Scott Thompson",
        "type": "standup",
        "date": "2026-01-23",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N 3rd Street",
        "price": "$101+",
        "description": "Stand-up comedy show featuring Scott Thompson.",
        "link": "https://www.unation.com/event/scott-thompson-62962044/",
        "recurring": false,
        "id": 2
    },
    {
        "name": "Shuler King",
        "type": "standup",
        "date": "2026-01-30",
        "time": "7:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N 3rd Street",
        "price": "$71+",
        "description": "Stand-up comedy show featuring Shuler King. 21+ event.",
        "link": "https://www.vividseats.com/shuler-king-tickets-wilmington-dead-crow-comedy-room-1-30-2026/production/6481543",
        "recurring": false,
        "id": 3
    },
    {
        "name": "Open Mic Comedy (after Shuler King)",
        "type": "openmic",
        "date": "2026-01-30",
        "time": "9:00 PM",
        "venue": "Dead Crow Comedy Room",
        "address": "511 N 3rd Street",
        "price": "FREE",
        "description": "Open mic starting after Shuler King show. Sign up 7-8PM. Doors 6PM.",
        "link": "https://deadcrowcomedy-com.seatengine.com",
        "recurring": false,
        "id": 4
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

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        try {
            // Submit to Netlify Forms
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                // Show success message
                form.style.display = 'none';
                successMessage.style.display = 'block';

                // Reset after 3 seconds
                setTimeout(() => {
                    form.reset();
                    form.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 3000);

                console.log('Event submitted successfully');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your event. Please try again.');
        }
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
    lastUpdated: '2026-01-12T11:15:25.018Z'
};
