const map = L.map('map').setView([55.603861686665525, 13.003157338451782], 12);

const form = document.getElementById('suggestions');
const overlay = document.getElementById('overlay');

let imageArray = [];
let usedImages = [];

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const eightBall = L.icon({
    iconUrl: '/images/8ball.png',
    shadowUrl: '/images/shadow.png',
    iconSize: [25, 25],
    shadowSize: [45, 45],
    shadowAnchor: [19, 17],
    popupAnchor: [0, -15],
});

const blueberry = L.icon({
    iconUrl: '/images/blueberry.png',
    shadowUrl: '/images/shadow.png',
    iconSize: [25, 25],
    shadowSize: [45, 45],
    shadowAnchor: [19, 17],
    popupAnchor: [0, -15],
});

const vinyl = L.icon({
    iconUrl: '/images/vinyl.png',
    shadowUrl: '/images/shadow.png',
    iconSize: [25, 25],
    shadowSize: [45, 45],
    shadowAnchor: [19, 17],
    popupAnchor: [0, -15],
});

const lime = L.icon({
    iconUrl: '/images/lime.png',
    shadowUrl: '/images/shadow.png',
    iconSize: [25, 25],
    shadowSize: [45, 45],
    shadowAnchor: [19, 17],
    popupAnchor: [0, -15],
});

const pearl2 = L.icon({
    iconUrl: '/images/pearl-2.png',
    shadowUrl: '/images/shadow.png',
    iconSize: [25, 25],
    shadowSize: [45, 45],
    shadowAnchor: [19, 17],
    popupAnchor: [0, -15],
});

const disco = L.icon({
    iconUrl: '/images/disco.png',
    shadowUrl: '/images/shadow.png',
    iconSize: [25, 25],
    shadowSize: [45, 45],
    shadowAnchor: [19, 17],
    popupAnchor: [0, -15],
});

imageArray.push(eightBall, blueberry, vinyl, lime, pearl2, disco);

addMarkers();

function addMarkers() {

    const bullarBynPopup = L.popup([55.59883611352993, 13.0093240355636], { content: '<p>bullarbyn! polsk fika!</p>' }, { offset: [-50, -50] });
    const bullarByn = L.marker([55.59883611352993, 13.0093240355636], { icon: eightBall }).addTo(map)
        .bindPopup(bullarBynPopup);
    usedImages.push(eightBall);

    const adlibrisPopup = L.popup([55.59790209126014, 13.001295643158516], { content: '<p>adlibris! böcker, garn & massa annat!</p>' }, { offset: [-50, -50] });
    const adlibris = L.marker([55.59790209126014, 13.001295643158516], { icon: blueberry }).addTo(map)
        .bindPopup(adlibrisPopup);
    usedImages.push(blueberry);

    const orumPopup = L.popup([55.60636467089989, 12.984338136531656], { content: '<p>örum! god fika!</p>' }, { offset: [-50, -50] });
    const orum = L.marker([55.60636467089989, 12.984338136531656], { icon: vinyl }).addTo(map)
        .bindPopup(orumPopup);
    usedImages.push(vinyl);

    const zakkasinePopup = L.popup([55.606973335389505, 13.000142678193791], { content: '<p>ZAKKasine! japansk stationary!</p>' }, { offset: [-50, -50] });
    const zakkasine = L.marker([55.606973335389505, 13.000142678193791], { icon: lime }).addTo(map)
        .bindPopup(zakkasinePopup);
    usedImages.push(lime);

    const sajvvaPopup = L.popup([55.60652603091502, 13.0203888395134], { content: '<p>sajvva! vegansk indisk mat!</p>' }, { offset: [-50, -50] });
    const sajvva = L.marker([55.60652603091502, 13.0203888395134], { icon: pearl2 }).addTo(map)
        .bindPopup(sajvvaPopup);
    usedImages.push(pearl2);

    const fyrtornetPopup = L.popup([55.56289334961122, 12.974787392385878], { content: '<p>fyrtornet! nytt bibliotek!</p>' }, { offset: [-50, -50] });
    const fyrtornet = L.marker([55.56289334961122, 12.974787392385878], { icon: disco }).addTo(map)
        .bindPopup(fyrtornetPopup);
    usedImages.push(disco);

}

function addNewMarker(name, description, lat, lng) {

    const newMarkerPopup = L.popup([lat, lng], { content: `<p>${description}</p>` }, { offset: [-50, -50] });
    const newMarker = L.marker([lat, lng], { icon: selectRandomImage() }).addTo(map)
        .bindPopup(newMarkerPopup);
    usedImages.push(selectRandomImage());

}

function selectRandomImage(){

    for (let i = 0; i < imageArray.length; i++) {
        if (!usedImages.includes(imageArray[i])) {
            return imageArray[i];
        }
    }

}

function suggestionWish() {

    form.style.display = 'block';
    overlay.style.display = 'block';

}

function suggestionSubmitted() {

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const lat = document.getElementById('lat').value;
    const lng = document.getElementById('lng').value;

    if(name !== '' && description !== '' && lat !== '' && lng !== ''){
        addNewMarker(name, description, lat, lng);
        form.style.display = 'none';
        overlay.style.display = 'none';
        alert('Tack för din önskan!');    
    }
}

function suggestionCancelled() {

    form.style.display = 'none';
    overlay.style.display = 'none';

}