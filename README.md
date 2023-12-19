# colorToRGB - module pour Node.js
colorToRGB, permet de convertir une couleur hexadécimal en rgb


## installation
Placer le fichier colorToRGB.js dans le dossier modules


## utilisation
Dans le fichier, ajouter sur la première ligne
```
const { colorToRGB } = require('./colorToRGB')
```

Exemple d'utilisation
```
const codeCouleurHex = '#1a2b3c'
const valeursRGB = colorToRGB(codeCouleurHex)

// Afficher le résultat
console.log('Le code couleur ' + codeCouleurHex + ' en valeurs RGB est : ' + valeursRGB)
```
