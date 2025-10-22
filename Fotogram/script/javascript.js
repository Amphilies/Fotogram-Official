// Images
let images = [
  'beach-2465444_1280.jpg',
  'czech-republic-991650_1280.jpg',
  'lotte-world-tower-1791802_1280.jpg',
  'motorcycles-3045706_1280.jpg',
  'ox-6931801_1280.jpg',
  'photographs-256888_1280.jpg',
  'sloth-6883939_1280.jpg',
  'snail-5371526_1920.jpg',
  'soap-bubble-522890_1280.jpg',
  'spider-5311908_1280.jpg',
  'stone-wall-road-2801183_1280.jpg',
  'volcanic-landscape-3834703_1280.jpg'
];

// Images Name
let imagesName = [
  'Strand-mit-Palmen',
  'Tschechisches-Dorf',
  'lotte-world-tower',
  'Kunst-Frau-mit-oldtimer-Motorrad',
  'Kuh mit großen Höhrnern',
  'Fotografen-Layout',
  'Ein-Faultier-am-Baum',
  'Schneckenhaus-im-Regen',
  'Seifenblase-in-der-Natur',
  'Kleine-Netzspinne',
  'Steinwand',
  'Vulcan-Landschaft'
]

let currentImageIndex; // 

// Funktion für die generierung der Miniaturen Galerie
function generateMinatureImage() {
  let minature = document.getElementById('section_Minature');             // Setzt das Element der Miniaturen ansicht fest
  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {    // Schleife zum hinzufügen der Image Array
    minature.innerHTML += loadMinatureImage(imageIndex);                  // Fügt das HTML Element für die Miniaturenansicht ein
  }
}

// Function für die Erstellung des HTML Elements (Miniaturen Galerie)
function loadMinatureImage(imageIndex) {
  return `   
      <div class="container_image_minature">
        <img class="image_minature" onclick="openImage(${imageIndex})" src="./img/album/${images[imageIndex]}" alt="${imagesName[imageIndex]}">
      </div>
    `
}

// Function zum Öffnen und darstellen des auswählten Bildes
function openImage(imageIndex) {                                          //Parameter ImageIndex des Images Arrays

  currentImageIndex = imageIndex;                                         //Übergibt den Aktuellen ImageIndex zur Globalen Variable
  document.addEventListener('keyup', keyNavigation);                      // Fügt eine Eventfunktion (keyup = los lassen der Taste) hinzu

  let windowImage = document.getElementById('dialog_Image_Opened');       // Das Dialogfenster
  let descriptionImage = document.getElementById('content_Description');  // Beschreibung des Bildes
  let openedImage = document.getElementById('full_Image');                // Die Bilddatei
  let imageCounter = document.getElementById('image_counter');            // Der Bildzähler

  windowImage.showModal();                                                // Lässt das Dialogfenster erscheinen
  openedImage.src = './img/album/' + images[imageIndex];                  // Greift auf den Ordner der Bildergalerie zu und zeigt das angeklickte Bild
  imageCounter.innerHTML = `${imageIndex + 1} / ${images.length}`;        // Zeigt den Bildzähler an
  descriptionImage.innerHTML = `${imagesName[imageIndex]}`;               // Zeigt die Bildbeschreibung an
}

// Funktion die das Dialogfenster wieder versteckt
function closeImage() {
  document.removeEventListener('keyup', keyNavigation);                   // Entfernt eine Eventfunktion (keyup = los lassen der Taste)

  let windowImage = document.getElementById('dialog_Image_Opened');       // Das Dialogfenster

  windowImage.close();                                                    // Versteckt das Dialogfenster
  console.log("Image Closed");
}

// Funcktion für das nächste Bild
function nextImg() {
  if (currentImageIndex < images.length - 1) {                            // Wenn das derzeitige Bild kleiner ist als der Array -1 ...
    currentImageIndex++;                                                  // Zählt 1 dazu
    console.log("Next Img");
  } else {
    currentImageIndex = 0;                                                // Sobald das Ende des Arrays erreicht wurde, wird das erste Bild angezeigt
    console.log("First Img");
  }
  updateImage();                                                          // Funktion wird ausgeführt
}

// Funcktion für das vorherige Bild
function prevImg() {
  if (currentImageIndex > 0) {                                            // Wenn das derzeitige Bild größer ist als 0 ...
    currentImageIndex--;                                                  // Zählt 1 runter 
    console.log("Prev Img");
  } else {
    currentImageIndex = images.length - 1;                                // Sobald der Anfang des Arrays erreicht wurde, wird das letzte Bild angezeigt
    console.log("Last Img");
  }
  updateImage();                                                          // Funktion wird ausgeführt
}

// Funcktion zum aktualisieren der Bildinformationen und des Bildes
function updateImage() {
  let descriptionImage = document.getElementById('content_Description');  // Beschreibung des Bildes
  let openedImage = document.getElementById('full_Image');                // Die Bilddatei
  let imageCounter = document.getElementById('image_counter');            // Der Bildzähler

  imageCounter.innerHTML = `${currentImageIndex + 1} / ${images.length}`; // Zeigt die Aktuelle Bildnummer an
  openedImage.src = './img/album/' + images[currentImageIndex];           // Zeigt das Aktuelle Bild an
  descriptionImage.innerHTML = `${imagesName[currentImageIndex]}`;        // Zeigt die Dazugehörige Bild beschreibung an
}

// Funktion, um das Dialogfenster mit der Tastatur zu steuern
function keyNavigation(event) {
  if (event.key === 'ArrowRight') {                                       // Wenn die Taste Pfeil Rechts ist führt er die nächste Funktion aus
    nextImg()
  }
  if (event.key === 'ArrowLeft') {                                        // Wenn die Taste Pfeil Links ist führt er die nächste Funktion aus
    prevImg()
  }
  if (event.key === '"Escape"') {                                         // Wenn die Taste ESC gedrückt wird führt er die nächste Funktion aus
    closeImage()
  }
}