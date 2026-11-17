
// STUDENT DASHBOARD - DEMO DATA

const student = {
    name: "Student",
    email: "student@epoka.edu.al",
    role: "student"
};

const myChampionships = [
    {
        name: "Campus Football Cup",
        sport: "Football",
        status: "Registered"
    },
    {
        name: "3v3 Basketball Challenge",
        sport: "Basketball",
        status: "Pending"
    },
    {
        name: "University Chess Open",
        sport: "Chess",
        status: "Registered"
    }
];

const upcomingMatches = [
    {
        championship: "Campus Football Cup",
        opponent: "Team Wolves",
        date: "20 Nov 2026",
        time: "15:00"
    },
    {
        championship: "University Chess Open",
        opponent: "Alex",
        date: "23 Nov 2026",
        time: "12:00"
    }
];

const myResults = [
    {
        championship: "Campus Football Cup",
        opponent: "Team Eagles",
        score: "3 - 1",
        result: "Win"
    },
    {
        championship: "Campus Football Cup",
        opponent: "Team Lions",
        score: "2 - 0",
        result: "Win"
    },
    {
        championship: "University Chess Open",
        opponent: "Daniel",
        score: "0 - 1",
        result: "Loss"
    }
];

// DISPLAY STUDENT INFORMATION

document.getElementById("studentName").textContent =
    student.name;

document.getElementById("profileName").textContent =
    student.name;

document.getElementById("profileEmail").textContent =
    student.email;

// DISPLAY STATISTICS

document.getElementById("championshipCount").textContent =
    myChampionships.length;

document.getElementById("matchCount").textContent =
    upcomingMatches.length;

document.getElementById("winCount").textContent =
    myResults.filter(function(match) {
        return match.result === "Win";
    }).length;

// DISPLAY CHAMPIONSHIPS

const championshipContainer =
    document.getElementById("myChampionships");

myChampionships.forEach(function(championship) {
    const card = document.createElement("div");
    card.className = "dashboard-item";

    const info = document.createElement("div");
    const title = document.createElement("h3");
    const sport = document.createElement("p");
    const status = document.createElement("span");

    title.textContent = championship.name;
    sport.textContent = championship.sport;
    status.className =
        "status " + championship.status.toLowerCase();
    status.textContent = championship.status;

    info.append(title, sport);
    card.append(info, status);
    championshipContainer.appendChild(card);
});

// DISPLAY UPCOMING MATCHES

const matchContainer =
    document.getElementById("upcomingMatches");

upcomingMatches.forEach(function(match) {
    const card = document.createElement("div");
    card.className = "dashboard-item";

    const info = document.createElement("div");
    const title = document.createElement("h3");
    const details = document.createElement("p");
    const status = document.createElement("span");

    title.textContent = match.championship;
    details.textContent =
        "vs " + match.opponent + " | " +
        match.date + " at " + match.time;

    status.className = "status upcoming";
    status.textContent = "Upcoming";

    info.append(title, details);
    card.append(info, status);
    matchContainer.appendChild(card);
});

// DISPLAY RESULTS

const resultsBody = document.getElementById("resultsBody");

myResults.forEach(function(match) {
    const row = document.createElement("tr");

    const championshipCell = document.createElement("td");
    const opponentCell = document.createElement("td");
    const scoreCell = document.createElement("td");
    const resultCell = document.createElement("td");
    const badge = document.createElement("span");

    championshipCell.textContent = match.championship;
    opponentCell.textContent = match.opponent;
    scoreCell.textContent = match.score;

    badge.className = "status " + match.result.toLowerCase();
    badge.textContent = match.result;

    resultCell.appendChild(badge);

    row.append(
        championshipCell,
        opponentCell,
        scoreCell,
        resultCell
    );

    resultsBody.appendChild(row);
});

// LOG OUT - DEMO NAVIGATION

document.getElementById("logoutBtn")
    .addEventListener("click", function() {
        window.location.href = "login.html";
    });
