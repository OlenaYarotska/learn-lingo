import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../services/firebase";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function AppBar() {

     const [user, setUser] = useState(null);

    useEffect(() => {
    const logOff = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
            await currentUser.reload(); 
            setUser(auth.currentUser);  
        } else {
            setUser(null);
        }
    });

    return () => logOff();
}, []);
    
    return (
        <div>
            {user ? <UserMenu user={user} /> : <AuthNav/>}
        </div>
    )
}
