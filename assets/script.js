document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tabs li");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and content
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add("active");
            const tabContent = document.getElementById(tab.dataset.tab);
            tabContent.classList.add("active");
        });
    });
});
