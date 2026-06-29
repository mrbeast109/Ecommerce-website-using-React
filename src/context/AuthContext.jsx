import React, { createContext,useState } from 'react'

export const AuthContext = createContext(null);


function AuthProvider({children}) {
    const [user,setUser] = useState(
        localStorage.getItem('currentUserEmail')
        ? {email: localStorage.getItem('currentUserEmail')}
        : null
    );

    function signup(email, password){
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.email == email)){
            alert("User already exists");
            return {success: false, error: "User already exists"};
            
        }


        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUserEmail', email);
        setUser(newUser);
    }

    function logout(){
        localStorage.removeItem('currentUserEmail');
        setUser(null);
    }

    function login(email, password){
         const users = JSON.parse(localStorage.getItem('users')) || [];

         const existingUser = users.find((u) => u.email === email);

         if (!existingUser) {
             return { success: false, errorType: 'NOT_FOUND', error: "User doesn't exist. Please sign up first." };
         }

         if (existingUser.password !== password) {
             return { success: false, errorType: 'WRONG_PASSWORD', error: 'Incorrect password. Please try again.' };
         }

         localStorage.setItem('currentUserEmail', email);
         setUser(existingUser);
         return { success: true };
    }



  return (
    <AuthContext.Provider value={{signup, user, logout, login}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider