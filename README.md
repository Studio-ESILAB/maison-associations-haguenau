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

## Documentation
L'essentiel du style appliqué se fait par l'ajout de classes directement en HTML sur les balises concernées pour faciliter et minimiser l'utilisation du CSS.

### Wrappers
L'ajout d'un conteneur sur un élément se fait avec le préfixe "`o-wrapper`". On peut rajouter "`o-wrapper-small`" pour obtenir un conteneur plus petit.
- `o-wrapper` Ajoute `display: block;`, `width: calc(100% - var(--grid-margin) * 2);`, `max-width: var(--wrapper-max-width);` et `margin-right: auto;`, `margin-left: auto;`, `padding-right: 0;`, `padding-left: 0;`.
- `o-wrapper-small` Ajoute `max-width: var(--wrapper-small-max-width);`.
> *Exemples :* `o-wrapper`, `o-wrapper-small`.
```html
<div class="o-wrapper">
    ...
</div>
```
```html
<div class="o-wrapper o-wrapper-small">
    ...
</div>
```

### Grid
L'ajout de `grid` sur un élément se fait avec le préfixe "`o-grid`" suivi d'un `raccourcis` de la propriété souhaitée.
- `o-grid` Ajoute `display: grid;`, `column-gap: var(--grid-gap);` et `grid-template-columns: repeat(var(--grid-cols), 1fr);`.
- `o-grid--row-gap` Ajoute `row-gap: var(--grid-gap);`.
- `o-grid--row-gap-large` Ajoute `row-gap: var(--space-xl);`.
- `o-grid--ng` Ajoute `gap: 0;`.
- `o-grid--ais` Ajoute `align-items: flex-start;`.
- `o-grid--aie` Ajoute `align-items: flex-end;`.
- `o-grid--aic` Ajoute `align-items: center;`.

Concernant les enfants de l'élément `grid`, différentes options sont également disponibles :
- `o-full` Ajoute `width: 100%;` et `grid-column: 1 / -1;`.
- `o-large` Ajoute `width: 100%;` et `grid-colum: 1 / -1` et un breakpoint *(min-width: 1025px)* avec `grid-column: 2 / -2`.
- `o-demi` Ajoute `grid-colum: 1 / -1` et un breakpoint à *(min-width: 1025px)* avec `grid-column: span 4`.
- `o-tiers` Ajoute `grid-colum: 1 / -1`, un breakpoint à *(min-width: 700px)* avec `grid-column: span 4` et un autre breakpoint à *(min-width: 1025px)* avec `grid-column: span 4`.
> *Exemples :* `o-grid`, `o-grid--ng`, `o-grid--aic`.
```html
<div class="o-grid o-grid--ng o-grid--aic">
    <div class="o-full">
        ...
    </div>
</div>
```
```html
<div class="o-grid o-grid--ng o-grid--aic">
    <div class="o-demi">
        ...
    </div>
    <div class="o-demi">
        ...
    </div>
</div>
```

### Flex
L'ajout de `flex` sur un élément se fait avec le préfixe "`o-flex`" suivi d'un `raccourcis` de la propriété souhaitée.
- `o-flex` Ajoute `display: flex;` et `gap: var(--grid-gap);`.
- `o-flex--col` Ajoute `flex-direction: column;`.
- `o-flex--fw` Ajoute `flex-wrap: wrap;`.
- `o-flex--ng` Ajoute `gap: 0;`.
- `o-flex--jcs` Ajoute `justify-content: flex-start;`.
- `o-flex--jce` Ajoute `justify-content: flex-end;`.
- `o-flex--jcc` Ajoute `justify-content: center;`.
- `o-flex--jcsb` Ajoute `justify-content: space-between;`.
- `o-flex--ais` Ajoute `align-items: flex-start;`.
- `o-flex--aie` Ajoute `align-items: flex-end;`.
- `o-flex--aic` Ajoute `align-items: center;`.
- `o-flex--aibl` Ajoute `align-items: baseline;`.
> *Exemples :* `o-flex`, `o-flex--col`, `o-flex--jcc`, `o-flex--aic`.
```html
<div class="o-flex o-flex--col o-flex--jcc o-flex--aic">
    ...
</div>
```

### Margin
Est à disposition un ensemble de tailles allant de 3xs à 4xl.

L'ajout d'une marge se fait avec le préfixe "`o-m`" suivi d'une `direction` (`t`,`b`,`r`,`l`) ou directement de la `taille` souhaitée.
> *Exemples :* `o-m-2xl`, `o-mt-m`, `o-mb-3xs`.
```html
<div class="o-m-2xl">
    ...
</div>
```
```html
<div class="o-mt-m o-mb-3xs">
    ...
</div>
```

### Padding
Est à disposition un ensemble de tailles allant de 3xs à 4xl.

L'ajout d'un padding se fait avec le préfixe "`o-p`" suivi d'une `direction` (`t`,`b`,`r`,`l`) ou directement de la `taille` souhaitée.
> *Exemples :* `o-p-m`, `o-pl-2xs`, `o-pr-xl`.
```html
<div class="o-p-m">
    ...
</div>
```
```html
<div class="o-pl-2xs o-pr-xl">
    ...
</div>
```

### Border-radius
Est à disposition un ensemble de tailles allant de 3xs à 4xl.

L'ajout d'un border-radius se fait avec le préfixe "`o-br`" suivi de la `taille` souhaitée.
> *Exemples :* `o-br-m`, `o-br-2xs`, `o-br-3xl`.
```html
<div class="o-br-m">
    ...
</div>
```

### Typos
Est à disposition un ensemble de tailles de titres et de textes allant de h1 à h6 et un style "small" et "big".

L'ajout d'une taille de titres se fait avec le préfixe "`o-`" suivi de la `taille` souhaitée de h1 à h6.

- `o-h1` Ajoute `font-size: var(--font-s-h1);`.
- `o-h2` Ajoute `font-size: var(--font-s-h2);`.
- `o-h3` Ajoute `font-size: var(--font-s-h3);`.
- `o-h4` Ajoute `font-size: var(--font-s-h4);`.
- `o-h5` Ajoute `font-size: var(--font-s-h5);`.
- `o-h6` Ajoute `font-size: var(--font-s-h6);`.
- `o-small` Ajoute `font-size: var(--font-s-small);`.
- `o-big` Ajoute `font-size: var(--font-s-big);`.

> *Exemples :* `o-h3`, `o-h2`, `o-big`.
```html
<h2 class="o-h3"></h2>
<h4 class="o-h2"></h2>
<p class="o-big"></h2>
```

## Authors

- [@Studio-ESILAB](https://github.com/Studio-ESILAB)
