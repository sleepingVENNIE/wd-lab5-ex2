function getGeolocation() {
    var x = document.getElementById('geolocation'); // Get the paragraph element

    // Check if the Geolocation API is supported by the browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('geolocation').innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
