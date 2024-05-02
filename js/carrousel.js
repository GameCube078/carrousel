(function () {
    console.log("Viva la Javascrip");
    let carrousel = document.querySelector(".carrousel");
    console.log("conteneur carrousel = " + carrousel.tagName);
    let bouton = document.querySelector(".bouton__ouvrir");
    console.log("bouton = " + bouton.tagName);
    let carrousel__x = document.querySelector(".carrousel__x");
    console.log("carrousel__x" + carrousel__x.tagName);
    let galerie = document.querySelector(".galerie");
    console.log("galerie = " + galerie.tagName);
    let carrousel__form = document.querySelector(".carrousel__form");

    let carrousel__figure = document.querySelector(".carrousel__figure");

    /* récupère la première image de la galerie */
    // let galerie__img = galerie.querySelector('img')
    /* pour créer une collection d'images de la galerie */
    let galerie__img = galerie.querySelectorAll("img");
    console.log(galerie__img);
    let index = 0;
    for (const elm of galerie__img) {
        creer_image_carrousel(index, elm);
        creer_radio_carrousel(index);
        index = index + 1;
    }

    /**
     * Créer l'image du carrousel à partir de la galerie
     * @param {*} index  le numéro de l'image
     * @param  elm l'élément image de la galerie
     */
    function creer_image_carrousel(index, elm) {
        console.log(elm.src);
        /* Création dynamique d'une image du carrousel */
        let carrousel__img = document.createElement("img");
        carrousel__img.src = elm.src;
        carrousel__img.classList.add("carrousel__img");
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    }
    let carrousel__imgs = document.querySelectorAll(".carrousel__img");
    /**
     * Création d'un radio bouton du carrousel
     * @param {*} index  le numéro du radio
     */
    function creer_radio_carrousel(index) {
        let carrousel__radio = document.createElement("input");
        // class
        carrousel__radio.classList.add("carrousel__radio");
        // index
        carrousel__radio.dataset.index = index;
        // type
        carrousel__radio.type = "radio";
        // name
        carrousel__radio.name = "carrousel__radio";
        // ajouter fans carrousel__form
        carrousel__form.appendChild(carrousel__radio);
    }

    /* écouteur pour changer l'image du carrousel */
    let radios = document.querySelectorAll(".carrousel__radio");
    console.log(radios);
    for (const radio of radios) {
        radio.addEventListener("change", function () {
            console.log("radio = " + radio.dataset.index);
            let index = radio.dataset.index;
            for (carrousel__img of carrousel__imgs) {
                if (radio.dataset.index == carrousel__img.dataset.index) {
                    carrousel__img.style.opacity = 1;
                } else {
                    carrousel__img.style.opacity = 0;
                }
            }
        });
    }
    // creer des fleches qui change les boutons radio selectionnes
    radios[0].checked = true;
    let fleche__gauche = document.createElement("button");
    fleche__gauche.classList.add("fleche__gauche");
    fleche__gauche.innerHTML = "<";
    carrousel.appendChild(fleche__gauche);
    let fleche__droite = document.createElement("button");
    fleche__droite.classList.add("fleche__droite");
    fleche__droite.innerHTML = ">";
    carrousel.appendChild(fleche__droite);
    fleche__gauche.addEventListener("click", function () {
        for (const radio of radios) {
            if (radio.checked) {
                console.log("radio checked = " + radio.dataset.index);
                index = radio.dataset.index;
            }
        }
        radios[index].checked = false;
        //si l'index est 0, on le remet au dernier index
        if (index <= 0) {
            index = radios.length - 1;
            //console.log("index = " + index);
        } else {
            index = index - 1;
        }
        radios[index].checked = true;
        //on met l'opacité à 1 pour l'image correspondante
        for (carrousel__img of carrousel__imgs) {
            if (index == carrousel__img.dataset.index) {
                carrousel__img.style.opacity = 1;
            } else {
                carrousel__img.style.opacity = 0;
            }
        }
    });
    fleche__droite.addEventListener("click", function () {
        for (const radio of radios) {
            if (radio.checked) {
                console.log("radio checked = " + radio.dataset.index);
                index = radio.dataset.index;
            }
        }
        radios[index].checked = false;
        //si l'index est au max, on le remet au premier index
        if (index >= radios.length - 1) {
            index = 0;
            console.log("index = " + index);
        } else {
            index++;
            console.log(index);
        }
        radios[index].checked = true;
        //on met l'opacité à 1 pour l'image correspondante
        for (carrousel__img of carrousel__imgs) {
            if (index == carrousel__img.dataset.index) {
                carrousel__img.style.opacity = 1;
            } else {
                carrousel__img.style.opacity = 0;
            }
        }
    });

    /*
    console.log("première image de la galerie = " + galerie__img.src)
    carrousel__img.src = galerie__img.src
    console.log("première image du carrousel = " + carrousel__img.src)
    carrousel__figure.appendChild(carrousel__img)
    console.log(carrousel__figure)
*/

    /* écouteur pour ouvrir la boîte modale */
    bouton.addEventListener("mousedown", function () {
        carrousel.classList.add("carrousel--ouvrir"); // ouvrir le carrousel
    });
    /* Écouteur pour fermer la boîte modale */
    carrousel__x.addEventListener("mousedown", function () {
        carrousel.classList.remove("carrousel--ouvrir"); // fermer le carrousel

        console.log("fermer carrousel");
    });
})();
