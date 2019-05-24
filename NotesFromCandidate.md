1. To run the application - I have connected the backend to the frontend with concurrently. Install the node modules in Server and FE and then in the Server Directory, run the application using "npm run dev".

2. App architecture - I have structured the app as follow: App(root) => 4 Parent Components (NavBar, LandingPage,Car2GoContainer, MyTaxiContainer) => 3 child components (Dropdown, Card and Map) in both Car2GoContainer and MyTaxi parent components. NavBar only appears in Car2GoContainer and MyTaxiContainer.

3. Instead of writing the app in class components, I have tried to learn and write the app using React Hooks (so this is the first app i have written in hooks). This is because React Hooks is the latest feature and functional components are better than class components, with less side effects.

4. State management - I have not used redux or API context to manage state as the data fetch is not considered too big. Of the 2, I would prefer to use API context in the future for state management. To increase performance, I could probably cache the data fetched in local storage.

5. Unit tests - I have written a few tests for axios and rendering components using jest and enzyme.
