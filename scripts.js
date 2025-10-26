// Scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Check on load

// Toggle projects visibility
function toggleProjects() {
    const otherProjects = document.getElementById('otherProjects');
    const viewAllBtn = document.getElementById('viewAllBtn');
    const btnText = document.getElementById('btnText');
    
    otherProjects.classList.toggle('expanded');
    viewAllBtn.classList.toggle('expanded');
    
    if (otherProjects.classList.contains('expanded')) {
        btnText.textContent = 'Show Less';
    } else {
        btnText.textContent = 'View All Projects';
    }
}