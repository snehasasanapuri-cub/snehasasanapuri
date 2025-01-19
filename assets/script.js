document.addEventListener("DOMContentLoaded", () => {
    // Tab navigation logic (unchanged)
    const tabs = document.querySelectorAll(".tabs li");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));
            tab.classList.add("active");
            const tabContent = document.getElementById(tab.dataset.tab);
            tabContent.classList.add("active");
            window.location.hash = tab.dataset.tab;
        });
    });

    const hash = window.location.hash.substring(1);
    if (hash) {
        const activeTab = document.querySelector(`.tabs li[data-tab="${hash}"]`);
        if (activeTab) activeTab.click();
    }

    // Audio playback logic
    const audioPlayer = document.getElementById('audio-player');
    const captions = document.getElementById('audio-captions');

    if (audioPlayer) {
        audioPlayer.addEventListener('play', () => {
            console.log('Audio is playing...');
        });

        audioPlayer.addEventListener('pause', () => {
            console.log('Audio is paused.');
        });

        audioPlayer.addEventListener('timeupdate', () => {
            const currentTime = audioPlayer.currentTime;
            console.log(`Current time: ${currentTime}s`);
            if (captions) {
                if (currentTime < 10) {
                    captions.textContent = "Segment 0–10s: A sustained string melody is played in the background with long notes.";
                } else if (currentTime < 20) {
                    captions.textContent = "Segment 11–20s: Childlike notes create an enigmatic atmosphere.";
                } else {
                    captions.textContent = "";
                }
            }
        });

        audioPlayer.addEventListener('ended', () => {
            console.log('Audio playback ended.');
        });

        audioPlayer.addEventListener('error', (e) => {
            console.error('Error playing audio:', e);
        });
    }

    // Background animation using particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#808080" },
            shape: { type: "triangle" },
            opacity: { value: 0.5, random: true },
            size: { value: 5, random: true },
            line_linked: { enable: true, distance: 150, color: "#808080", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: false, straight: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});

