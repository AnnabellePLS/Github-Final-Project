// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Greeting (Based on Time of Day)
    const headerTitle = document.querySelector('header h1');
    const hour = new Date().getHours();
    let greeting = "Welcome to My Site";

    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    headerTitle.textContent = greeting;

    // 2. Sticky Header Logic
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };

    // 3. Simple Click Interaction
    // Log a message when the container is clicked
    const mainContent = document.querySelector('.container');
    mainContent.addEventListener('click', () => {
        console.log("Content area was clicked!");
    });
});