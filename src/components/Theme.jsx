function Theme() {
    const palette = [
        {
            common: {
                black: "#000",
                white: "#fff"
            },
            primary: {
                light: 'rgba(248, 231, 28, 1)',
                main: 'rgba(245, 166, 35, 1)',
                dark: 'rgba(204, 142, 37, 1)',
                contrastText: "rgba(14, 11, 224, 1)"
            },
            text: 'rgba(0, 0, 0, 0.87)',
        },
        {secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
            text: 'rgba(0, 0, 0, 0.54)',
        }},
        {error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff"
        }},
        {text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)"
        }},
        ]

}

export default Theme