// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Wise men say", time: 6 },
  { text: "Only fools rush in", time: 11 },
  { text: "But I can't help falling in love with you", time: 18 },
  { text: "Shall I stay?", time: 36 },          
  { text: "Would it be a sin", time: 40 },      
  { text: "If I can't help falling in love with you?", time: 46 }, 
  { text: "Like a river flows", time: 51 },     
  { text: "Surely to the sea", time: 56 },      
  { text: "Darling, so it goes", time: 61 },    
  { text: "Some things are meant to be", time: 67 }, 
  { text: "Take my hand", time: 76 },           
  { text: "Take my whole life, too", time: 82 },
  { text: "For I can't help falling in love with you", time: 88 },
  { text: "Like a river flows", time: 95 },     
  { text: "Surely to the sea", time: 100 },     
  { text: "Darling, so it goes", time: 106 },   
  { text: "Some things are meant to be", time: 112 }, 
  { text: "Take my hand", time: 146 },          
  { text: "Take my whole life, too", time: 152 },
  { text: "For I can't help falling in love with you", time: 157 }, 
  { text: "For I can't help falling in love with you", time: 164 }  
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);