module.exports = {

    reporters: [
        "default",
        ["jest-html-reporter", { pageTitle: "Pruebas de Calculadora" }]
    ],
    testTimeout: 60000,
}