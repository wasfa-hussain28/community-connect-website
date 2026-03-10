// ========================================
// 1. INITIALIZE MOCK DATA
// ========================================
function initializeData() {
    if (!localStorage.getItem('communityIssues')) {
        const initialIssues = [
            { id: 1, title: "Garbage Overflow", category: "Garbage", status: "Pending", location: "Park Ave", desc: "Bins overflowing near the playground." },
            { id: 2, title: "Water Leakage", category: "Water", status: "Resolved", location: "Main St", desc: "Pipe burst near the intersection." },
            { id: 3, title: "Broken Streetlight", category: "Lighting", status: "Pending", location: "Oak Lane", desc: "Dark alleyway causing safety concerns." },
            { id: 4, title: "Pothole Damage", category: "Road", status: "Pending", location: "Highway 101", desc: "Large pothole damaging tires." },
            { id: 5, title: "Trash Collection", category: "Garbage", status: "Resolved", location: "Elm St", desc: "Missed collection on Tuesday." },
            { id: 6, title: "Flooded Drain", category: "Water", status: "Pending", location: "River Rd", desc: "Drain blocked after rain." },
            { id: 7, title: "Streetlight Flicker", category: "Lighting", status: "Resolved", location: "Central Park", desc: "Intermittent power to lamp post." },
            { id: 8, title: "Cracked Sidewalk", category: "Road", status: "Pending", location: "School Zone", desc: "Trip hazard for children." }
        ];
        localStorage.setItem('communityIssues', JSON.stringify(initialIssues));
    }
}

// ========================================
// 2. GET ISSUES FROM STORAGE
// ========================================
function getIssues() {
    return JSON.parse(localStorage.getItem('communityIssues')) || [];
}

// ========================================
// 3. UPDATE STATS (Home Page)
// ========================================
function updateStats() {
    const issues = getIssues();
    const total = issues.length;
    const pending = issues.filter(i => i.status === 'Pending').length;
    const resolved = issues.filter(i => i.status === 'Resolved').length;
    
    document.getElementById('stat-total').innerText = total;
    document.getElementById('stat-pending').innerText = pending;
    document.getElementById('stat-resolved').innerText = pending;
    document.getElementById("myVideo").playbackRate = 2;}