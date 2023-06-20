// https://docs.expo.dev/guides/environment-variables/
// Extra field is for environment variables
// To see the variables please look at README.md

module.exports = {
    name: 'BlueWatch',
    version: '1.0.0',
    extra: {
        apiAppKey: process.env.API_APP_KEY,
        apiAppId: process.env.API_APP_ID,
    },
};
