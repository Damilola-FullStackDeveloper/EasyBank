// Function to toggle the navigation menu
function toggleMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    
    // Toggle the menu visibility
    navbarLinks.classList.toggle('active');
    
    // Change the icon from ☰ to ×
    if (navbarLinks.classList.contains('active')) {
        menuToggle.innerHTML = '×';
    } else {
        menuToggle.innerHTML = '☰';
    }
}

// Function to show a message when "Request Invite" is clicked
function requestInvite() {
    alert('Your invite request has been submitted!');
}

// Add event listeners for both "Request Invite" buttons
document.querySelector('.request-invite-1').addEventListener('click', requestInvite);
document.querySelector('.request-invite-2').addEventListener('click', requestInvite);
