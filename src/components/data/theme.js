let palette = [
    {
        "primaryMain": 'rgba(245, 166, 35, 1)',
        "secondaryMain": '#1e2021',
        "secondaryContrastText": "#ff4400",
        "textPrimary": "rgba(0, 0, 0, 0.87)",
        "contrastThreshold": 3,
        "tonalOffset": 0.2
    }
    // {"primary": {
    //   // light: será calculada com base em palette.primary.main,
    //   "main": 'rgba(245, 166, 35, 1)',
    //   // dark: será calculada com base em palette.primary.main,
    //   // contrastText: será calculada para contrastar com palette.primary.main
    // }},
    // {"secondary": {
    //   // light: será calculada com base palette.secondary.main,,
    //   "main": '#1e2021',
    //   // dark: será calculada com base palette.secondary.main,
    //   "contrastText": '#ff4400',
    // }},
    // {"text": {
    //     "primary": "rgba(0, 0, 0, 0.87)",
    //     "secondary": "rgba(0, 0, 0, 0.54)",
    //     "disabled": "rgba(0, 0, 0, 0.38)",
    //     "hint": "rgba(0, 0, 0, 0.38)"
    // }},
    // // Usado por `getContrastText()` para maximizar o contraste entre
    // // o plano de fundo e o texto.
    // {"contrastThreshold": 3},
    // // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // // dois índices dentro de sua paleta tonal.
    // // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    // {"tonalOffset": 0.2},
]

module.exports = { palette }