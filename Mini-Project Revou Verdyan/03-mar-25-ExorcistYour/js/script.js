
// Message Us Form Validation

document.addEventListener('DOMContentLoaded', function() {
    var currentTime = new Date();
    document.getElementById('currentTime').innerText = currentTime.toLocaleString();

    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        var name = document.getElementById('name').value;
        var dateOfBirth = document.getElementById('dateOfBirth').value;
        var gender = document.getElementById('gender').value;
        var pesan = document.getElementById('pesan').value;

        var submittedInfo = `Name: ${name}\nDate Of Birth: ${dateOfBirth}\nGender: ${gender}\nMessage: ${pesan}`;
        document.getElementById('submittedInfo').innerText = submittedInfo;
    });
});

// AutoSlide Banner

let bannerIndex = 0;
showBanner();

// Function to change banner
function nextBanner() {
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    // Get all banner elements
    const banners = document.getElementsByClassName('banner-img');

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }

    // Loop through all banner elements
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    banners[bannerIndex].style.display = 'block';
}

// Set interval to change banner
setInterval(nextBanner, 3000);