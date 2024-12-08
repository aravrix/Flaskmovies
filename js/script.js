function openLightbox(videoId, title) {
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + videoId;
    document.getElementById('lightbox').style.display = 'flex';
    document.querySelector('.lightbox-title').innerText = title; // Set the title in the lightbox
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.getElementById('videoFrame').src = ''; // Stop the video
}

function minimizePlayer() {
    // Logic to minimize the player
    alert('Minimize functionality to be implemented.');
}

function filterVideos() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const videoContainer = document.getElementById('videoContainer');
    const videoThumbnails = videoContainer.getElementsByClassName('video-thumbnail');

    for (let i = 0; i < videoThumbnails.length; i++) {
        const title = videoThumbnails[i].getElementsByClassName('video-title')[0].innerText.toLowerCase();
        if (title.includes(filter)) {
            videoThumbnails[i].style.display = ""; // Show the video thumbnail
        } else {
            videoThumbnails[i].style.display = "none"; // Hide the video thumbnail
        }
    }
}
let isMinimized = false; // Track the minimized state

function minimizePlayer() {
const lightbox = document.getElementById('lightbox');
const title = document.querySelector('.lightbox-title'); // Get the title element
const minimizeButton = document.getElementById('minimizeButton'); // Get the minimize button

if (isMinimized) {
lightbox.classList.remove('minimized'); // Restore to original size
title.classList.remove('hidden'); // Show the title
lightbox.style.display = 'flex'; // Show the lightbox
minimizeButton.innerText = 'Minimize'; // Change button text to "Minimize"
} else {
lightbox.classList.add('minimized'); // Add minimized class
title.classList.add('hidden'); // Hide the title
lightbox.style.display = 'block'; // Keep it visible
minimizeButton.innerText = 'Unminimize'; // Change button text to "Unminimize"
}
isMinimized = !isMinimized; // Toggle the state
}

function openLightbox(videoId, title) {
// Check if the player is minimized
if (isMinimized) {
minimizePlayer(); // Restore to unminimized state
}

// Load the new video
document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + videoId;
document.getElementById('lightbox').style.display = 'flex';
document.querySelector('.lightbox-title').innerText = title; // Set the title in the lightbox
}
