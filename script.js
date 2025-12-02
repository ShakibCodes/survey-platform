// DARK MODE TOGGLE LOGIC
    const darkToggle = document.getElementById("darkModeToggle");

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        darkToggle.checked = true;
    }

    darkToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        // Save preference
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });