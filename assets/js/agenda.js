function toggleContent(showId, hideId, showTrigger, hideTrigger) {
    // Hide the current content
    document.getElementById(hideId).style.opacity = 0;
    setTimeout(() => {
        document.getElementById(hideId).style.display = "none";
    }, 500); // This should match the transition duration
    
    // Show the new content
    document.getElementById(showId).style.display = "grid";
    setTimeout(() => {
        document.getElementById(showId).style.opacity = 1;
    }, 50); // A small delay to allow the display property to take effect

    // Handle the triggers visibility
    document.getElementById(showTrigger).style.display = "grid";
    document.getElementById(hideTrigger).style.display = "none";
}

document.getElementById("indexAgenda").addEventListener("click", function() {
    toggleContent("indexAgenda-content", "gridAgenda-content", "gridAgenda", "indexAgenda");
});

document.getElementById("gridAgenda").addEventListener("click", function() {
    toggleContent("gridAgenda-content", "indexAgenda-content", "indexAgenda", "gridAgenda");
});

// Initialize by showing the indexAgenda content and gridAgenda heading
document.getElementById("indexAgenda").click();
