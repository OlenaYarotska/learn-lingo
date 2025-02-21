import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import { auth } from "./firebase";

export const signUp = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: name });
        await user.reload();
        const updatedUser = auth.currentUser;

        console.log("Updated user:", updatedUser);
        return updatedUser;
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
};

export const logIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    await userCredential.user.reload();
    const updatedUser = auth.currentUser; 
    console.log("User logged in:", updatedUser);
    return updatedUser; 
  } catch (error) {
    console.error("Error logging in:", error.message);
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error.message);
  }
};


export const getUser = onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Current user:", user);
  } else {
    console.log("No user logged in");
  }
});