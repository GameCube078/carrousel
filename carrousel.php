<?php
    /**
     * Plugin Name: Carrousel
     * Author: Olivier Dorion
     * Description: affiche le caroussel associe a une galerie de wordpress
     * Version: 1.0.0
     * Plugin URI: https://github.com/GameCube078
     */
    function genere_html() {
 
        $html = '<button class="bouton_ouvrir"Ouvrir le carrousel</button>
        <div class="carrousel">
            <a href="" class="carrousel__x">X</a>
        </div>';
        return $html;
    }
    add_shortcode('carrousel', 'genere_html');
