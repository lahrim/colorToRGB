function colorToRGB(color) {
  color = color.replace(/^#/, '')

  if (color.length === 3) color = color.split('').map(char => char + char).join('')

  const valeursRGB = [
    parseInt(color.slice(0, 2), 16), // Rouge
    parseInt(color.slice(2, 4), 16), // Vert
    parseInt(color.slice(4, 6), 16)  // Bleu
  ];

  return valeursRGB.join(', ')
}

module.exports = { colorToRGB }
