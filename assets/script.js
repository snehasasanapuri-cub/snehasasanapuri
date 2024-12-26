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

            // Update the URL hash
            window.location.hash = tab.dataset.tab;
        });
    });

    // Ensure the correct tab is active on page load based on the hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const activeTab = document.querySelector(`.tabs li[data-tab="${hash}"]`);
        if (activeTab) {
            activeTab.click();
        }
    }
});
