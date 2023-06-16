// https://docs.expo.dev/guides/environment-variables/
// Champ extra pour les variables d'environnements
// Pour les variables se référer au README.md

module.exports = {
    name: 'BlueWatch',
    version: '1.0.0',
    extra: {
        apiAppKey: process.env.API_APP_KEY,
        apiAppId: process.env.API_APP_ID,
    },
};
