# Blue Watch

Blue watch is your companion to help you during your weight gain/loss and helps you track and manage your calories intakes !

## Team

- Steve XU
- Adham AWAD

## Objective

- Users can set their health goal : lose/gain/maitain weight
- Users can receive a daily intake suggestion
- Users can search nutritional information for foods
- Users can plan their meals thourghout the week

## Run the project on your own

To run the project on your own you will first need to install the necessary dependencies.
To do this place yourself in the project directory and run :

```bash
# Install node modules
npm install

# Run expo project
API_APP_ID="ba5f846a" API_APP_KEY="36a4c3f3a6a11e2ae624186f144de96c" npx expo start
```

## Features availaible

- Light Theme 🌞/ Dark Theme 🌙
- Get your recommanded daily calories intake via BMR
- Search food in a database and select it for meal planning
- Organise your meal planning for any day

## Features not implemented yet

- In the food database page you can't see details about the food searched
- In the meal planning page you can't see directly if you are under or above your goal
- Adding and removing food items from meal plan
- Persist the data between openings of the application

## Dev Roadmap

Labels :

✅ Done
🟨 Partially done
⏩ To do

- ✅ Setup the project
- ✅ Setup Paper with custom Light Theme 🌞/ Dark Theme 🌙
- ✅ Setup Env variables
- 🟨 Health Goals
- 🟨 Health Goals objective shows in Meal planning
- ✅ Food database
- ✅ Setup API
- 🟨 Show results with a nice UI
- ✅ Selecting foods carry on to Meal Planning  
- ✅ Meal Planning
- 🟨 Update, Edit, Remove Meals And Foods
- ⏩ Add animations

## Architecture

This project follows a logic splitted into multiple folders :

`/src` contains most of the code appart from the entry file App.js
`/src/components` contains all of the components which are rendered multiple times in the App
`/src/context` contains all the contexts
`/src/navigation` contains the BottomTabs navigator
`/src/pages` 3 main pages of the app
`/src/services` Code service such as API
`/src/styles` Global app styles such as themes
`/src/utils` Global app styles such as themes

## Difficulties

We had several difficulties with the Status Bar and the BottomNavigation Component from React native Paper.
Syncing the theme of the whole app correctly was very hard, since you the components do not take the theme provided by paper by default. For the status Bar since it is from expo it is understandable but from Paper it is a bit hard to believe. We succeeded by doing a "hacky" tactic of passing the theme as a prop.

In general the React Native Paper library is nice, but we feel the documentation is lacking especially to find how to customise colors since the properties to use are nowhere near evident for newcomers to the library.
However it gives a very nice overall and global feeling.

We had a bit of issues understanding how to correctly use providers and contexts since in the end we feel our whole app
is using all the contexts since everything is wrapped in them in `App.js`. We looked a bit into Redux but it was a bit to late to integrate it.

We are happy about what we produced globally even if it lacks a bit of polish here and there. We could have added animations and a better error checking logic in certain components. We spent to much time at the beginning doing the setup for the global theme and some styles.


## Food database API

This project uses the API availaible at :
<https://developer.edamam.com/food-database-api-docs>

## GITMOJI

This project is using gitmoji for more information : <https://github.com/carloscuesta/gitmoji>

## License

This project is under Apache-2.0 license.

## Presentation Video

The video presentation is in this repo `BlueWatch.mp4`

## Course

This project was made for this course : <https://react-native-course-esiee.netlify.app/>
