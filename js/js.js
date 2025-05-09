// 1) Corazones flotando
setInterval(function () {
    const r_num  = Math.floor(Math.random() * 40) + 1;
    const r_size = Math.floor(Math.random() * 65) + 10;
    const r_left = Math.floor(Math.random() * 100) + 1;
    const r_bg   = Math.floor(Math.random() * 25) + 100;
    const r_time = Math.floor(Math.random() * 5) + 5;
  
    $(".bg_heart").append(`
      <div class="heart" style="
        width: ${r_size}px;
        height: ${r_size}px;
        left: ${r_left}%;
        background: rgba(255, ${r_bg-25}, ${r_bg}, 1);
        animation: love ${r_time}s ease forwards;
      "></div>
    `);
  
    $(".bg_heart").append(`
      <div class="heart" style="
        width: ${r_size-10}px;
        height: ${r_size-10}px;
        left: ${r_left+r_num}%;
        background: rgba(255, ${r_bg-25}, ${r_bg+25}, 1);
        animation: love ${r_time+5}s ease forwards;
      "></div>
    `);
  
    // Limpia corazones fuera de pantalla o muy grandes
    $(".heart").each(function () {
      const top   = parseFloat($(this).css("top"));
      const width = parseFloat($(this).css("width"));
      if (top <= -100 || width >= 150) $(this).remove();
    });
  }, 500);
  
  
  // 2) Galería aleatoria

    const images = [
        { src: 'images/FullSizeRender(1).jpg',    alt: 'Foto 1'  },
        { src: 'images/FullSizeRender(2).jpg',    alt: 'Foto 2'  },
        { src: 'images/FullSizeRender.jpg',       alt: 'Foto 3'  },
        { src: 'images/FullSizeRender(3).jpg',    alt: 'Foto 4'  },
        { src: 'images/IMG_0121.jpg',             alt: 'Foto 5'  },
        { src: 'images/Screenshot_1.png',         alt: 'Foto 6'  },
        { src: 'images/IMG_1060.jpeg',            alt: 'Foto 7'  },
        { src: 'images/IMG_1537.jpg',             alt: 'Foto 8'  },
        { src: 'images/IMG_1605.jpg',             alt: 'Foto 9'  },
        { src: 'images/IMG_1951.jpeg',            alt: 'Foto 10' },
        { src: 'images/IMG_3437.jpeg',            alt: 'Foto 11' },
        { src: 'images/IMG_6023.jpg',             alt: 'Foto 12' },
        { src: 'images/IMG_7720.jpeg',             alt: 'Foto 13' },
        { src: 'images/IMG_8289.jpg',             alt: 'Foto 14' },
        { src: 'images/IMG_8804.jpg',             alt: 'Foto 15' }
        // añade más si tuvieras 13 o 14…
      ];
  
  function shuffleArray(arr) {
    for (let i = arr.length-1; i>0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  function createImageGrid() {
    shuffleArray(images);
    const grid = document.getElementById('image-grid');
    if (!grid) return;
    images.forEach(img => {
      grid.innerHTML += `
        <div class="col-12">
          <img src="${img.src}" class="img-fluid" alt="${img.alt}" onclick="toggleClick(this)">
        </div>
      `;
    });
  }
  
  function toggleClick(el) {
    el.classList.toggle('clicked');
  }
  
  // 3) Carta desplegable con checkbox
  $(document).ready(function () {
    // Inicializa galería
    createImageGrid();
  
    $("#messageState-carta").on("change", function () {
      const msg = $(".message-carta");
      const container = $(".container-carta");
  
      msg.removeClass("openNor closeNor");
      if (this.checked) {
        msg.removeClass("closed no-anim").addClass("openNor");
        container.stop().animate({ backgroundColor: "#f48fb1" }, 1000);
      } else {
        msg.removeClass("no-anim").addClass("closeNor");
        container.stop().animate({ backgroundColor: "#fce4ec" }, 1000);
      }
    });
  
    $(".message-carta").on("animationend webkitAnimationEnd oanimationend msAnimationEnd", function () {
      const msg = $(".message-carta");
      if (msg.hasClass("closeNor")) msg.addClass("closed");
      msg.removeClass("openNor closeNor").addClass("no-anim");
    });
  });
  


  var 
  myText = document.getElementById("bounceTxt").innerHTML,
  wrapText = "";

for (var i=0; i<myText.length; i++) {
   wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("bounceTxt").innerHTML = wrapText;

var 
  myLetters = document.getElementsByTagName("em"),
  j = 0;

function applyBounce() {
   setTimeout(function() {
        myLetters[j].className = "bounce-me";
        j++;
        
        if (j < myLetters.length) {
             applyBounce();
        }
   }, 150);
}

applyBounce();