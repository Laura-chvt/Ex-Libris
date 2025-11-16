 // on sélectionne la grille
  const grid = document.querySelector('.grid');

    imagesLoaded( grid, function() {
      // new Masonry(grid, options)
      const msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 16 // espace entre colonnes (optionnel)
      });

    });