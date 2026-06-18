const typewriterElement = document.getElementById("typewriter");
const text = "Hello, I'm Michal";

let index = 0;

function typeWriter() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05,
    rootMargin: "0px 0px 250px 0px"
});

sections.forEach(function(section, sectionIndex) {
    if (sectionIndex < 4) {
        section.classList.add("visible");
    } else {
        observer.observe(section);
    }
});

console.log("MajkWeb initialized.");
console.log("Portfolio loaded successfully.");

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const emailLink = document.getElementById("email-link");

emailLink.addEventListener("click", function (event) {
    event.preventDefault();

    navigator.clipboard.writeText("msvrcek15@gmail.com");

    emailLink.textContent = "Copied to clipboard";

    setTimeout(function () {
        emailLink.textContent = "msvrcek15@gmail.com";
        window.location.href = "mailto:msvrcek15@gmail.com";
    }, 900);
});

const terminalMessages = [
    "Building V2XController...",
    "Loading CAM decoder...",
    "Compiling MajkLib...",
    "Reading OBD-II data...",
    "Initializing embedded systems..."
];

console.log(terminalMessages[Math.floor(Math.random() * terminalMessages.length)]);

const launchDate = new Date("2026-06-18");

function updateUptime() {
    const now = new Date();

    const diff = now - launchDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("uptime").textContent =
        `majkweb uptime: ${days} day${days !== 1 ? "s" : ""}`;
}

updateUptime();

const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const commands = {
    help:
        "Available commands: help, whoami, projects, skills, contact",

    whoami:
        "Computer Science Student | C# / C / C++ Developer | V2X & Embedded",

    projects:
        "V2XController, MajkLib, OBD-DataReader, and more. Visit my GitHub for details.",

    skills:
        "C#, .NET, WPF, C, C++, Linux, V2X Systems, Embedded Systems, OBD-II, Git, and more...",

    contact:
        "Email: msvrcek15@gmail.com"
};

terminalInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        const command = terminalInput.value.trim().toLowerCase();

        terminalOutput.innerHTML +=
            `<br><span>michal@majkweb:~$ ${command}</span><br>`;

        terminalOutput.innerHTML +=
            (commands[command] || "Command not found.") + "<br>";

        terminalInput.value = "";

        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    const header = document.querySelector("header");

    canvas.width = header.clientWidth;
    canvas.height = header.clientHeight;
}

resizeCanvas();

const letters = "01{}[]<>$#/";
const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(7,11,16,0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9c";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text =
            letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (
            drops[i] * fontSize > canvas.height &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", resizeCanvas);