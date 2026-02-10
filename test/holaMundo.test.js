const { remote } = require('webdriverio');

//jest.setTimeout(60000);

const capabilities = {
    'platformName': 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:automationName': 'UiAutomator2',
    'appium:app': '/Users/Gabriel/Downloads/Desafio_Latam/desafio_6/CalculadoraIMC.apk',
    'appium:apppackage': 'com.calculadoraimc',
    'appium:appActivity': '.MainActivity'
};
const wdOpts = {

    hostname: '127.0.0.1',
    port: 4723,
    loglevel: 'info',
    capabilities: capabilities
};

describe('verificando coneccion', () => {
    it('Seleccionar elemento', async () => {
        const driver = await remote(wdOpts);

        const titulo = await driver.$('~Título: Calculadora de IMC');
        expect (await titulo.isDisplayed()).toBe(true);

        //await driver.deleteSession();
    });
});