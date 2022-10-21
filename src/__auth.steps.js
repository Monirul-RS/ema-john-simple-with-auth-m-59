/*
AUTH SETUP
1.Create firebase project
2.enable web
3.enable sign in method
4. install firebase(npm i firebase)
5. install react router dom
6. get firebase config in firebase.config.js
7.export app from firebase.config.js

*/

/*
1.Create user context(Auth Context): UserContext --> Component name,
userContext Provides AuthContext
2.Create AuthContext
3.Set AuthContext.Provider 
4.destructure children {children}
5.
    <AuthContext.Provider>
        {children}
    <AuthContext.Provider>
6. const authInfo = {}
and <AuthContextProvider value={authInfo}>
7.go to index.js and
    <UserContext>
        <App/>
    </UserContext
8.export AuthContext

9.GO to other component and 
    const {user} = useContext(AuthContext)

10.get form data
11.getAuth in the UserContext




*/ 