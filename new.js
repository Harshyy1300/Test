// JavaScript to handle popouts
const buttons = document.querySelectorAll(".food-button");
const popouts = document.querySelectorAll(".popout");
const addressLinks = document.querySelectorAll(".address");

// Initialize all popouts as hidden
popouts.forEach((popout) => {
    popout.style.display = "none";
});

// Function to toggle the display of a popout
function togglePopout(button, popout) {
    button.addEventListener("click", () => {
        // Close all popouts first
        popouts.forEach((p) => {
            p.style.display = "none";
        });
        popout.style.display = "block";
    });
}

// Toggle popouts for each button
for (let i = 0; i < buttons.length; i++) {
    togglePopout(buttons[i], popouts[i]);
}

// Function to display the correct address when the link is clicked
function displayAddress(addressLink, addressPopout) {
    addressLink.addEventListener("click", (event) => {
        // Prevent the click event from propagating to the button
        event.stopPropagation();

        // Close all address popouts first
        document.querySelectorAll(".address-popout").forEach((p) => {
            p.style.display = "none";
        });
        addressPopout.style.display = "block";
    });
}

// Toggle address popouts for each address link
for (let i = 0; i < addressLinks.length; i++) {
    displayAddress(addressLinks[i], popouts[i]);
}

// Click event for the background to close any open popouts
document.body.addEventListener("click", (event) => {
    if (event.target === document.body) {
        popouts.forEach((popout) => {
            popout.style.display = "none";
        });
    }
});
