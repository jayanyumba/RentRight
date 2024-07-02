function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initially show the dashboard section
    showSection('dashboard');
    
    // Attach click event listeners to each sidebar item
    const sidebarItems = document.querySelectorAll('.side-menu ul li');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});

