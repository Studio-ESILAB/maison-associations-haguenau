# Maison des Associations de Haguenau

## Structure et arborescence
    .
    ├── assets
    │   ├── images
    │   │   ├── icons
    │   │   │   └── ...         # Fichiers des icônes
    │   │   ├── logos
    │   │   │   └── ...         # Fichiers des logos
    │   │   ├── svg
    │   │   │   └── ...         # Fichiers des shapes
    │   │   └── ...             # Fichiers des images principales
    │   ├── scripts
    │   │   └── ...             # Fichiers des scripts
    │   └── styles
    │       └── ...             # Fichiers des styles
    │
    ├── favicons
    │   └── ...                 # Fichiers des favicons
    │
    ├── 404.html                # Page d'erreur 404
    ├── answers.html            # Page du topic
    ├── forum.html              # Page du forum
    ├── galerie.html            # Page de la galerie
    ├── index.html              # Page d'accueil (déconnecté)
    ├── log-in.html             # Page de connexion
    ├── logged-in.html          # Page d'accueil (connecté)
    ├── new.html                # Page d'actualité
    ├── news.html               # Page des actualités
    ├── portfolio.html          # Page du portfolio
    │
    └── README.md

> Pour accèder à la page d'accueil (connecté), il faut cliquer sur "Se connecter" depuis le menu de la page de connexion (log-in.html).

## Utilisation
L'essentiel du style appliqué se fait par l'ajout de classes directement en HTML sur les balises concernées pour faciliter et minimiser l'utilisation du CSS.

*Quelques Exemples :*

Ajouter "display: flex", "align-item: center" et "justify-content: center" à l'élément.
```html
<div class="o-flex o-flex--aic o-flex--jcc"></div>
```

Ajouter "margin: 120px"
```html
<div class="o-m-4xl"></div>
```

Ajouter "padding: 32px"
```html
<div class="o-p-m"></div>
```

Ajouter "margin-left: 32px", "padding-top: 64px" et "padding-bottom: 64px"
```html
<div class="o-ml-m o-pt-xl o-pb-xl"></div>
```
*Les tailles disponibles pour les propriétés margin/padding/border-radius vont de 3xs à 4xl*

## Authors

- [@Studio-ESILAB](https://github.com/Studio-ESILAB)
