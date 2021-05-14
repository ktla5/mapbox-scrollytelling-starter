mapboxgl.accessToken = 'pk.eyJ1Ijoia2NkZWxlb24iLCJhIjoiY2o2OG5yMTF3MGhkODMycGxnamZwaGsydiJ9._CkK8kkDpQ_88-_aiV4YMg';

var chapters = {
    'part-1': {
        center: [-118.243683, 34.052235],
        zoom: 11,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [-118.3004, 34.1186],
        zoom: 14.5,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [-118.496475, 34.024212],
        zoom: 15.1,
        bearing: 0,
        pitch: 52,
    },
    'part-4': {
        center: [-118.243683, 34.052235],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-118.243683, 34.052235],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}