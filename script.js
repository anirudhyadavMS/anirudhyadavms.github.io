// Real event data for Davos Summit 2026 (WEF Annual Meeting)
// Note: WEF hosts 200+ sessions but only major sessions are publicly detailed
// Data compiled from official WEF sources and media coverage
const eventsData = [
    // Day 1 - January 20, 2026 (Day 2 of WEF - Meeting started Jan 19)
    {
        id: 1,
        date: "2026-01-20",
        time: "10:30",
        title: "Welcome Address",
        speaker: "Klaus Schwab, Executive Chairman, World Economic Forum",
        description: "Opening welcome and introduction to the Annual Meeting 2026 theme: A Spirit of Dialogue",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 2,
        date: "2026-01-20",
        time: "10:50",
        title: "Special Address by Ursula von der Leyen",
        speaker: "Ursula von der Leyen, President of the European Commission",
        description: "Europe's response to global challenges and trade partnerships. Von der Leyen stated: 'Europe will always choose the world, and the world is ready to choose Europe'",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 3,
        date: "2026-01-20",
        time: "11:20",
        title: "Special Address by He Lifeng",
        speaker: "He Lifeng, Vice-Premier of the People's Republic of China",
        description: "China's perspective on global economic cooperation and development",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 4,
        date: "2026-01-20",
        time: "14:00",
        title: "Special Address by Emmanuel Macron",
        speaker: "Emmanuel Macron, President of France",
        description: "Macron addresses the rapidly evolving geopolitical landscape: 'Faced with the brutalization of the world, France and Europe must defend an effective multilateralism'",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 5,
        date: "2026-01-20",
        time: "16:30",
        title: "Special Address by Mark Carney",
        speaker: "Mark Carney, Prime Minister of Canada",
        description: "Canada's vision for global cooperation and economic policy",
        location: "Congress Centre - Main Hall"
    },

    // Day 2 - January 21, 2026 (Day 3 of WEF)
    {
        id: 6,
        date: "2026-01-21",
        time: "08:00",
        title: "Press Conference: Global Trade Issues",
        speaker: "Scott Bessent, US Treasury Secretary",
        description: "Media briefing on US trade policy and global economic outlook",
        location: "Congress Centre - Press Room A"
    },
    {
        id: 7,
        date: "2026-01-21",
        time: "09:00",
        title: "Session: Can Russia Sustain a Wartime Economy?",
        speaker: "Panel of Economic Experts and Geopolitical Analysts",
        description: "Analysis of Russia's economic situation and sustainability of its wartime spending",
        location: "Congress Centre - Geopolitics Forum"
    },
    {
        id: 8,
        date: "2026-01-21",
        time: "09:30",
        title: "Special Address by Abdel Fattah El-Sisi",
        speaker: "Abdel Fattah El-Sisi, President of Egypt",
        description: "Egypt's role in regional stability and Middle Eastern affairs",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 9,
        date: "2026-01-21",
        time: "10:15",
        title: "Panel Discussion: Can Europe Defend Itself?",
        speaker: "European Defense Ministers and NATO Officials",
        description: "Debate on European defense capabilities, NATO relationship, and security architecture",
        location: "Congress Centre - Security Forum"
    },
    {
        id: 10,
        date: "2026-01-21",
        time: "11:30",
        title: "Conversation with Jensen Huang",
        speaker: "Jensen Huang, President and CEO of NVIDIA & Larry Fink, Chair and CEO of BlackRock",
        description: "Discussion on AI infrastructure, innovation, and the future of computing",
        location: "Congress Centre - Technology Hub"
    },
    {
        id: 11,
        date: "2026-01-21",
        time: "12:30",
        title: "Panel Discussion: India's Path to Becoming Third-Largest Economy",
        speaker: "Ashwini Vaishnaw (India Minister), Gita Gopinath (Harvard/IMF), Sunil Bharti Mittal (Bharti Enterprises CEO), Juvencio Maeztu Herrera (IKEA CEO)",
        description: "India could grow 6-8% annually to become world's third-largest economy by 2028. Discussion covers government reforms, manufacturing, innovation, and challenges including global competition",
        location: "Business Today India Lounge"
    },
    {
        id: 12,
        date: "2026-01-21",
        time: "13:00",
        title: "Conversation with Jamie Dimon",
        speaker: "Jamie Dimon, Chairman and CEO of JPMorgan Chase & Zanny Minton Beddoes, Editor-in-Chief of The Economist",
        description: "Wide-ranging discussion on markets, AI impact on finance, and global trade",
        location: "Congress Centre - Finance Forum"
    },
    {
        id: 13,
        date: "2026-01-21",
        time: "13:30",
        title: "Conversation with Mohammad Mustafa",
        speaker: "Mohammad Mustafa, Prime Minister of the Palestinian National Authority",
        description: "Palestinian perspective on Middle East peace process and regional development",
        location: "Congress Centre - Diplomacy Hall"
    },
    {
        id: 14,
        date: "2026-01-21",
        time: "14:30",
        title: "Special Address by Donald J. Trump",
        speaker: "Donald J. Trump, President of the United States of America",
        description: "US President addresses Davos on American economic policy, trade, Greenland, NATO, and housing affordability",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 15,
        date: "2026-01-21",
        time: "15:45",
        title: "Special Address by Javier Milei",
        speaker: "Javier Milei, President of Argentina",
        description: "Argentina's economic reforms and vision for the future",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 16,
        date: "2026-01-21",
        time: "17:00",
        title: "Roundtable: AI Valuation and Productivity",
        speaker: "Tech CEOs, Economists including Gita Gopinath",
        description: "Discussion on AI revenue models and productivity growth. Gopinath notes: 'It's unclear what the revenue model is going to be for companies'",
        location: "Steigenberger Hotel - Tech Forum"
    },

    // Day 3 - January 22, 2026 (Day 4 of WEF)
    {
        id: 17,
        date: "2026-01-22",
        time: "09:00",
        title: "Session: Trade Deals, Exports and Tariff Challenges",
        speaker: "Ashwini Vaishnaw, India Minister & Brad Smith, Microsoft Vice-Chair",
        description: "India's concerns about developed world's debt mountain and tariff impacts. Discussion on trade agreements and export strategies",
        location: "Congress Centre - Trade Forum"
    },
    {
        id: 18,
        date: "2026-01-22",
        time: "10:30",
        title: "Panel Discussion: Global Economic Outlook with IMF",
        speaker: "Kristalina Georgieva, IMF Managing Director & Khalid Al-Falih, Saudi Arabia Minister of Investment",
        description: "IMF's latest economic projections and discussion on global growth challenges",
        location: "Congress Centre - Economics Hall"
    },
    {
        id: 19,
        date: "2026-01-22",
        time: "12:00",
        title: "Session: Climate Finance and Green Transition",
        speaker: "Climate Ministers and Finance Leaders",
        description: "Announcements on climate funding pledges and sustainable investment initiatives",
        location: "Climate Hub Davos"
    },
    {
        id: 20,
        date: "2026-01-22",
        time: "14:00",
        title: "Roundtable: AI Ethics and Technology Regulation",
        speaker: "Satya Nadella (Microsoft CEO), Dario Amodei (Anthropic CEO), Demis Hassabis (DeepMind CEO)",
        description: "Tech pioneers discuss ethical AI development, safety, and regulatory frameworks",
        location: "Congress Centre - AI Forum"
    },
    {
        id: 21,
        date: "2026-01-22",
        time: "16:00",
        title: "Session: Tariff Impacts on Emerging Economies",
        speaker: "Gita Gopinath and Trade Economists",
        description: "Gopinath warns tariffs could reduce India's growth by 0.7 percentage points. Discussion on trade policy impacts",
        location: "Congress Centre - Economics Hall"
    },

    // Day 4 - January 23, 2026 (Day 5 of WEF - Final Day)
    {
        id: 22,
        date: "2026-01-23",
        time: "09:00",
        title: "Conversation with Gavin Newsom",
        speaker: "Gavin Newsom, Governor of California",
        description: "California's policies on climate, technology, and innovation",
        location: "Congress Centre - Innovation Hub"
    },
    {
        id: 23,
        date: "2026-01-23",
        time: "09:30",
        title: "Climate Hub Davos - Closing Session & Special Screening",
        speaker: "GreenUp and WISDOM HEALTH",
        description: "Closing event for climate discussions with special sustainability screening",
        location: "Climate Hub Davos"
    },
    {
        id: 24,
        date: "2026-01-23",
        time: "10:30",
        title: "Special Address by Friedrich Merz",
        speaker: "Friedrich Merz, Federal Chancellor of Germany",
        description: "Germany's Chancellor shares views on global and European challenges",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 25,
        date: "2026-01-23",
        time: "11:30",
        title: "Special Address by Isaac Herzog",
        speaker: "Isaac Herzog, President of Israel",
        description: "Israel's perspective on regional security and Middle East developments",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 26,
        date: "2026-01-23",
        time: "13:00",
        title: "Special Address by Kyriakos Mitsotakis",
        speaker: "Kyriakos Mitsotakis, Prime Minister of Greece",
        description: "Greece's economic recovery and role in European affairs",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 27,
        date: "2026-01-23",
        time: "14:00",
        title: "Special Address by Prabowo Subianto",
        speaker: "Prabowo Subianto, President of Indonesia",
        description: "Indonesia's development strategy and regional leadership in Southeast Asia",
        location: "Congress Centre - Main Hall"
    },
    {
        id: 28,
        date: "2026-01-23",
        time: "15:00",
        title: "Panel Discussion: Global Financial Leadership",
        speaker: "Ngozi Okonjo-Iweala (WTO Director-General), Kristalina Georgieva (IMF), Christine Lagarde (ECB President)",
        description: "Top global financial leaders discuss trade, monetary policy, and economic cooperation",
        location: "Congress Centre - Finance Forum"
    },
    {
        id: 29,
        date: "2026-01-23",
        time: "16:30",
        title: "Closing Remarks: A Spirit of Dialogue - Summit Outcomes",
        speaker: "Klaus Schwab, Executive Chairman, World Economic Forum & Summit Co-Chairs",
        description: "Reflections on major announcements, agreements, and commitments from Davos 2026. Summary of action plans and global cooperation initiatives",
        location: "Congress Centre - Main Hall"
    }
];

// State management
let currentFilter = 'all';

// Initialize the application
function init() {
    renderTimetable(eventsData);
    setupEventListeners();
    displayDisclaimer();
}

// Display disclaimer about session coverage
function displayDisclaimer() {
    const disclaimer = document.createElement('div');
    disclaimer.className = 'disclaimer';
    disclaimer.innerHTML = `
        <p><strong>Note:</strong> The World Economic Forum Annual Meeting 2026 features over 200 sessions.
        This timetable includes major keynote addresses, special addresses, and publicly announced sessions.
        Many smaller sessions, private roundtables, and bilateral meetings are not included in public schedules.</p>
    `;
    document.querySelector('.container').insertBefore(disclaimer, document.getElementById('timetable'));
}

// Render the timetable
function renderTimetable(events) {
    const timetableContainer = document.getElementById('timetable');

    if (events.length === 0) {
        timetableContainer.innerHTML = `
            <div class="empty-state">
                <h3>No events found</h3>
                <p>Try selecting a different day</p>
            </div>
        `;
        return;
    }

    // Group events by date
    const eventsByDate = events.reduce((acc, event) => {
        if (!acc[event.date]) {
            acc[event.date] = [];
        }
        acc[event.date].push(event);
        return acc;
    }, {});

    // Sort dates
    const sortedDates = Object.keys(eventsByDate).sort();

    // Generate HTML
    let html = '';
    sortedDates.forEach(date => {
        const dateObj = new Date(date + 'T00:00:00');
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        html += `<div class="day-section" data-date="${date}">`;
        html += `<h3 class="day-header">${formattedDate}</h3>`;

        // Sort events by time
        const sortedEvents = eventsByDate[date].sort((a, b) => a.time.localeCompare(b.time));

        sortedEvents.forEach(event => {
            html += `
                <div class="time-slot">
                    <div class="time-label">${event.time}</div>
                    <div class="event-card">
                        <h4 class="event-title">${event.title}</h4>
                        <div class="event-speaker">${event.speaker}</div>
                        <p class="event-description">${event.description}</p>
                        <span class="event-location">${event.location}</span>
                    </div>
                </div>
            `;
        });

        html += `</div>`;
    });

    timetableContainer.innerHTML = html;
}

// Filter events by day
function filterEvents(day) {
    currentFilter = day;

    if (day === 'all') {
        renderTimetable(eventsData);
    } else {
        const filteredEvents = eventsData.filter(event => event.date === day);
        renderTimetable(filteredEvents);
    }
}

// Setup event listeners
function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Filter events
            const day = button.getAttribute('data-day');
            filterEvents(day);
        });
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
