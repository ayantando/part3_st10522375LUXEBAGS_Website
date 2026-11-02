
// LUXE BAGS - Google Maps Functionality

// Paste your NEW Google Maps Demo Key between the quotation marks.
const GOOGLE_MAPS_DEMO_KEY = "AIzaSyCLDbM1n-DhN6Z29QE1V6d2HPktEL13OwY";

const mapContainer = document.getElementById("store-map");

if (mapContainer) {

    // Create the map after Google Maps has loaded.
    window.initLuxeMap = async function () {

        try {

            // Load Google Maps libraries.
            const [
                { Map, InfoWindow },
                { AdvancedMarkerElement }
            ] = await Promise.all([
                google.maps.importLibrary("maps"),
                google.maps.importLibrary("marker")
            ]);

            // Approximate central Durban demonstration location.
            const storeLocation = {
                lat: -29.8585,
                lng: 31.0265
            };

            // Display the Google Map.
            const map = new Map(mapContainer, {
                center: storeLocation,
                zoom: 15,
                mapId: "DEMO_MAP_ID"
            });

            // Add the LUXE BAGS location marker.
            const marker = new AdvancedMarkerElement({
                map: map,
                position: storeLocation,
                title: "LUXE BAGS - Durban Demonstration Location",
                gmpClickable: true
            });

            // Create information displayed when the marker is clicked.
            const infoWindow = new InfoWindow({
                content: `
                    <div>
                        <h3>LUXE BAGS</h3>
                        <p>Central Durban, KwaZulu-Natal</p>
                        <p>Fictional demonstration location for this assignment.</p>
                    </div>
                `
            });

            // Open the information window.
            infoWindow.open({
                anchor: marker,
                map: map
            });

            // Allow visitors to click the marker.
            marker.addEventListener("gmp-click", function () {
                infoWindow.open({
                    anchor: marker,
                    map: map
                });
            });

        } catch (error) {
            console.error("Google Maps could not initialise:", error);
            mapContainer.textContent =
                "The map could not be loaded. Please check your connection and API key.";
        }
    };

    // Load Google Maps JavaScript API.
    const googleMapsScript = document.createElement("script");

    googleMapsScript.src =
        "https://maps.googleapis.com/maps/api/js" +
        "?key=" + encodeURIComponent(GOOGLE_MAPS_DEMO_KEY) +
        "&loading=async" +
        "&callback=initLuxeMap" +
        "&libraries=maps,marker";

    googleMapsScript.async = true;

    googleMapsScript.onerror = function () {
        mapContainer.textContent =
            "Google Maps could not load. Please check your internet connection.";
    };

    document.head.appendChild(googleMapsScript);
}
