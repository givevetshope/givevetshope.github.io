  function displayThumb() {

      var imgThumb = ['img4.jpg', 'img6.jpg',
          'img7.jpeg',
          'img13.jpg',
          'img14.jpg',
          'img25.jpg',
          'img17.jpeg',
          'img22.jpg',
          'img19.jpeg', 
          'img15.jpeg',         
          'img24.jpg',          
          'img20.jpeg',
          'img26.jpg',
          'img27.jpg',
          'img23.jpeg',
          'img10.jpg',
          'img11.jpg',
          'img12.jpeg',          
          'img9.jpg',
          'img21.jpeg',
      ]



      for (i = 0; i < 20; i++) {
          document.getElementById('thumb'.concat(i)).src = "assets/img/" + imgThumb[i];
          document.getElementById('thumb'.concat(i)).setAttribute("class", "img-thumbnail img-gallery modal-hover-opacity shadow");
          document.getElementById('thumb'.concat(i)).setAttribute("style", "width:300px; margin-top: 20px");
      }


  }

  window.addEventListener("load", displayThumb, false);

  function imageSwap(element) {


      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = element.src;
      var modalImg = document.getElementById("img01");
    
      modalImg.src = img;
      
  }