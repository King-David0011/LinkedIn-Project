document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Switch Logic
    const toggleSwitch = document.getElementById('billingToggle');
    const priceDisplay = document.querySelector('.amount');
    const periodDisplay = document.querySelector('.period');
    
    let isYearly = true; // Default as per screenshot

    if(toggleSwitch) {
        toggleSwitch.addEventListener('click', () => {
            isYearly = !isYearly;
            
            if(isYearly) {
                // Visual logic is handled by CSS in a real app, 
                // but here we simulate the switch
                console.log("Switched to Yearly");
                if(priceDisplay) priceDisplay.innerText = "89";
                if(periodDisplay) periodDisplay.innerText = "/ month, Billed annually";
            } else {
                console.log("Switched to Monthly");
                if(priceDisplay) priceDisplay.innerText = "99"; 
                if(periodDisplay) periodDisplay.innerText = "/ month, Billed monthly";
            }
        });
    }

    // Attendee Selection Logic (Premium Card)
    const attendeeBoxes = document.querySelectorAll('.attendee-options .attendee-box');
    
    attendeeBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Remove selected class from all
            attendeeBoxes.forEach(b => b.classList.remove('selected'));
            // Add to clicked
            box.classList.add('selected');
        });
    });

    // Host Counter Logic
    window.changeHost = function(delta) {
        const input = document.getElementById('hostCount');
        if(input) {
            let val = parseInt(input.value);
            val += delta;
            if (val < 1) val = 1;
            input.value = val;
        }
    };
    
    // Cookie Banner close logic
    const cookieButtons = document.querySelectorAll('.cookie-buttons button');
    cookieButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const banner = document.querySelector('.cookie-banner');
            if(banner) banner.style.display = 'none';
        });
    });
});

// Sidebar Navigation active state toggle
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(link => {
        link.addEventListener('click', function(e) {
            navItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });