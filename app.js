// GLOBAL STATE
let workouts = [];
let meals = [];
let streak = 0;
let badges = [];
let notes = "";
let timerInterval;
let restInterval;
let timerSeconds = 0;
let workoutLevel = "Beginner";

// TAB SWITCHING 
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active", "bg-blue-600", "text-white"));
        btn.classList.add("active", "bg-blue-600", "text-white");

        const target = btn.getAttribute("data-tab");
        tabContents.forEach(tab => tab.classList.add("hidden"));
        document.getElementById(target).classList.remove("hidden");
    });
});

// DARK MODE 
const toggleDark = document.getElementById("darkModeToggle");
toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

//  WORKOUT ADD 
document.getElementById("addWorkoutBtn").addEventListener("click", () => {
    const day = document.getElementById("workoutDay").value;
    const name = document.getElementById("workoutName").value;
    const duration = Number(document.getElementById("workoutDuration").value);
    const calories = Number(document.getElementById("workoutCalories").value);

    if (!name || !duration) return alert("Fill all workout details.");

    const workout = { day, name, duration, calories, date: new Date().toLocaleString() };
    workouts.push(workout);

    updateDashboard();
    updateCalendar();
    updateHistory();
});

//UPDATE DASHBOARD 
function updateDashboard() {
    document.getElementById("weekWorkouts").textContent = workouts.length;
    document.getElementById("totalCaloriesBurned").textContent = workouts.reduce((t, w) => t + w.calories, 0);

    updateBadges();
    drawWeeklyChart();
    console.log("Dashboard updated");

}

// BADGES 
function updateBadges() {
    const container = document.getElementById("badgesContainer");
    container.innerHTML = "";

    const rules = [
        { id: "first", text: "First Workout", condition: workouts.length >= 1 },
        { id: "five", text: "5 Workouts", condition: workouts.length >= 5 },
        { id: "burn500", text: "500+ Calories Burned", condition: workouts.reduce((t, w) => t + w.calories, 0) >= 500 }
    ];

    rules.forEach(rule => {
        if (rule.condition && !badges.includes(rule.id)) badges.push(rule.id);
    });

    badges.forEach(b => {
        const badge = document.createElement("div");
        badge.className = "bg-yellow-400 text-black p-3 rounded text-center font-bold badge-earned";
        badge.textContent = rules.find(r => r.id === b).text;
        container.appendChild(badge);
    });
}

// WEEKLY CHART 
let weeklyChart = null;

function drawWeeklyChart() {
    const ctx = document.getElementById("weeklyChart");
    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const dayCount = Object.fromEntries(weekDays.map(d => [d, 0]));

    workouts.forEach(w => {
        const d = w.day.slice(0, 3);
        if (dayCount[d] !== undefined) dayCount[d]++;
    });

    if (weeklyChart) weeklyChart.destroy();

    weeklyChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: weekDays,
            datasets: [{ data: Object.values(dayCount) }]
        }
    });
}

// CALENDAR 
function updateCalendar() {
    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    days.forEach(day => {
        const div = document.createElement("div");
        div.className = "calendar-day p-3 border rounded";

        const heading = document.createElement("h4");
        heading.className = "font-bold mb-2";
        heading.textContent = day;

        div.appendChild(heading);

        workouts.filter(w => w.day === day).forEach(w => {
            const item = document.createElement("div");
            item.className = "workout-item p-2 bg-blue-100 rounded mb-2";
            item.textContent = `${w.name} (${w.duration}m)`;
            div.appendChild(item);
        });

        grid.appendChild(div);
    });
}

// CALORIE LOGGING 
document.getElementById("addMeal").addEventListener("click", () => {
    const name = document.getElementById("mealName").value;
    const cal = Number(document.getElementById("mealCalories").value);

    if (!name || !cal) return alert("Enter meal details.");

    meals.push({ name, cal });

    updateMeals();
});

function updateMeals() {
    document.getElementById("caloriesConsumed").textContent = meals.reduce((t, m) => t + m.cal, 0);
    document.getElementById("caloriesBurned").textContent = workouts.reduce((t, w) => t + w.calories, 0);
    document.getElementById("caloriesNet").textContent =
        meals.reduce((t, m) => t + m.cal, 0) -
        workouts.reduce((t, w) => t + w.calories, 0);

    const list = document.getElementById("mealsList");
    list.innerHTML = "";
    meals.forEach(m => {
        const div = document.createElement("div");
        div.className = "p-2 bg-orange-100 rounded";
        div.textContent = `${m.name} - ${m.cal} cal`;
        list.appendChild(div);
    });
}

// HISTORY 
function updateHistory() {
    const list = document.getElementById("historyList");
    list.innerHTML = "";

    workouts.forEach(w => {
        const div = document.createElement("div");
        div.className = "p-3 border rounded bg-gray-50";
        div.textContent = `${w.date}: ${w.name} (${w.duration}m)`;
        list.appendChild(div);
    });

    drawProgressChart();
}

//  PROGRESS CHART
let progressChart = null;

function drawProgressChart() {
    const ctx = document.getElementById("progressChart");

    if (progressChart) progressChart.destroy();

    progressChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: workouts.map((w, i) => `W${i + 1}`),
            datasets: [{ data: workouts.map(w => w.duration) }]
        }
    });
}

// BMI
document.getElementById("calcBMI").addEventListener("click", () => {
    const w = Number(document.getElementById("bmiWeight").value);
    const h = Number(document.getElementById("bmiHeight").value) / 100;

    if (!w || !h) return alert("Enter valid details.");

    const bmi = (w / (h * h)).toFixed(1);

    document.getElementById("bmiResult").textContent = `BMI: ${bmi}`;
});

// BMR 
document.getElementById("calcBMR").addEventListener("click", () => {
    const w = Number(document.getElementById("bmrWeight").value);
    const h = Number(document.getElementById("bmrHeight").value);
    const age = Number(document.getElementById("bmrAge").value);
    const gender = document.getElementById("bmrGender").value;

    if (!w || !h || !age) return alert("Enter valid details.");

    let bmr;
    if (gender === "male") bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * age);
    else bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * age);

    document.getElementById("bmrResult").textContent = `BMR: ${Math.round(bmr)}`;
});

// Starting workout timer

function format(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
}

document.getElementById("startTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerSeconds++;
        document.getElementById("timerDisplay").textContent = format(timerSeconds);
    }, 1000);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
});

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerSeconds = 0;
    document.getElementById("timerDisplay").textContent = "00:00";
});

//REST TIMER 
document.getElementById("startRest").addEventListener("click", () => {
    clearInterval(restInterval);
    let sec = Number(document.getElementById("restSeconds").value);

    restInterval = setInterval(() => {
        if (sec <= 0) {
            clearInterval(restInterval);
            document.getElementById("restDisplay").textContent = "Done!";
        } else {
            document.getElementById("restDisplay").textContent = `${sec--}s`;
        }
    }, 1000);
});

// NOTES SAVE 
document.getElementById("saveNotes").addEventListener("click", () => {
    notes = document.getElementById("workoutNotes").value;
    alert("Notes saved.");
});
function setWorkoutLevel(level) {
  workoutLevel = level;
}
document.getElementById("levelSelect").addEventListener("change", e => {
  setWorkoutLevel(e.target.value);
});

