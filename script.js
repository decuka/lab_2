document.addEventListener("DOMContentLoaded", () => {
    const systemInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform || "Unknown",
        language: navigator.language,
        cookieEnabled: navigator.cookieEnabled,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
    };

    localStorage.setItem("systemInfo", JSON.stringify(systemInfo));

    const displayContainer = document.getElementById("local-storage-display");

    if (displayContainer) {
        const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));

        let htmlContent = "<ul>";

        for (const [key, value] of Object.entries(savedInfo)) {
            htmlContent += `<li><strong>${key}:</strong> ${value}</li>`;
        }

        htmlContent += "</ul>";
        displayContainer.innerHTML = htmlContent;
    }

    const commentsContainer = document.getElementById("comments-container");

    const fetchComments = async () => {
        if (!commentsContainer) return;

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/16/comments");

            if (!response.ok) {
                throw new Error("Failed to load comments");
            }

            const comments = await response.json();

            commentsContainer.innerHTML = "";

            comments.forEach((comment) => {
                const commentElement = document.createElement("div");
                commentElement.classList.add("comment-card");

                commentElement.innerHTML = `
                    <h3>${comment.name}</h3>
                    <a href="mailto:${comment.email}">${comment.email}</a>
                    <p>${comment.body}</p>
                `;

                commentsContainer.appendChild(commentElement);
            });
        } catch (error) {
            commentsContainer.innerHTML = `
                <p class="error-message">Comments loading error: ${error.message}</p>
            `;
        }
    };

    fetchComments();

    const modal = document.getElementById("feedback-modal");
    const closeModalBtn = document.getElementById("close-modal");

    const showModal = () => {
        if (modal) {
            modal.style.display = "flex";
        }
    };

    setTimeout(showModal, 60000);

    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    const themeToggleBtn = document.getElementById("theme-toggle");

    const setTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add("dark-theme");
            themeToggleBtn.textContent = "Денна тема";
        } else {
            document.body.classList.remove("dark-theme");
            themeToggleBtn.textContent = "Нічна тема";
        }
    };

    const applyThemeBasedOnTime = () => {
        const currentHour = new Date().getHours();

        if (currentHour >= 7 && currentHour < 21) {
            setTheme(false);
        } else {
            setTheme(true);
        }
    };

    applyThemeBasedOnTime();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const isDark = document.body.classList.contains("dark-theme");
            setTheme(!isDark);
        });
    }
});