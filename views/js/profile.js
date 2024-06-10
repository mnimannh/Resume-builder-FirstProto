document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tabs div");
    const sections = document.querySelectorAll(".section");
    const proceedButtons = document.querySelectorAll(".button");

    function setActiveTab(index) {
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add("active");
            } else {
                tab.classList.remove("active");
            }
        });

        sections.forEach((section, i) => {
            if (i === index) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            setActiveTab(index);
        });
    });

    // Proceed button in Profile
    proceedButtons[0].addEventListener("click", function(event) {
        event.preventDefault();
        setActiveTab(1);  // Navigate to School/College Details section
    });

    // Proceed button in school/college
    proceedButtons[1].addEventListener("click", function(event) {
        event.preventDefault();
        setActiveTab(2);  // Navigate to Experiences and Other section
    });
});
