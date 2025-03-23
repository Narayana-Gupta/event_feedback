import { db, auth, ref, set, push, onValue, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "./firebase-config.js";

// Signup
document.getElementById("signup").addEventListener("click", () => {
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let role = document.getElementById("role").value;

createUserWithEmailAndPassword(auth, email, password).then((user) => {
    set(ref(db, "users/" + user.user.uid), { email, role });
    alert("Signup successful! Please login.");
}).catch(error => alert(error.message));
});

// Login
document.getElementById("login").addEventListener("click", () => {
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password).then((user) => {
    window.location.href = "dashboard.html";
}).catch(error => alert(error.message));
});

// Load Dashboard
onAuthStateChanged(auth, (user) => {
if (user) {
const userRef = ref(db, "users/" + user.uid);
onValue(userRef, (snapshot) => {
let role = snapshot.val().role;
if (role === "admin") document.getElementById("admin-section").style.display = "block";
else document.getElementById("user-section").style.display = "block";
});
}
});

// Create Event (Admin)
document.getElementById("create-event").addEventListener("click", () => {
let eventName = document.getElementById("event-name").value;
let newEventRef = push(ref(db, "events"));
set(newEventRef, { name: eventName });
alert("Event created!");
});

// Display Events (User)
onValue(ref(db, "events"), (snapshot) => {
let eventList = document.getElementById("event-list");
eventList.innerHTML = "";
snapshot.forEach(event => {
let li = document.createElement("li");
li.innerHTML = ${event.val().name} <button onclick="window.location.href='feedback.html'">Give Feedback</button>;
eventList.appendChild(li);
});
});
