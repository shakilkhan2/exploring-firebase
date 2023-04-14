/**
 *              -------------------------
 *                     INITIAL SETUP
 *              -------------------------
 * 1. Visit: console.firebase.google.com
 * 2. Create a project (skip google analytics)
 * 3. Register app (create config)
 * 4. Install firebase: npm install firebase
 * 5. and config file to your project
 * 6. Danger!!!: Do not publish or make firebase config to public by pushing those to github
 *             ---------------------------
 *                     INTEGRATION
 *             ---------------------------
 * 7. Visit: Go to Docks > Build > Authentication > Get started
 * 8. export auth from the firebase.config.js file: export default app
 * 9. login.jsx: import getAuth from firebase/auth
 * 10. create const auth = getAuth(app)
 *             --------------------------
 *                   Provider Set Up
 *             --------------------------
 * 11. import new GoogleAuthProvider and create a new provider.
 * 12. use signWithPopUp and pass the auth and provider
 * 13. Activate sign in method (google, facebook, github etc)
 * 14. [vite]: change 127.0.0.1 to localhost
 *             ----------------------------
 *                  More Auth Provider
 *             ----------------------------
 * 1. Activate the auth provider; (create app, provide redirect url, client id, client secret )
 * 2.
 * */
