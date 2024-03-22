import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export const addEmail = async (email: string): Promise<void> => {
  await addDoc(collection(db, "contacts"), {
    email,
    timestamp: serverTimestamp(),
  });
};

interface ContactFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  message: string;
}

export const addContact = async (contact: ContactFormInputs): Promise<void> => {
  await addDoc(collection(db, "contacts"), {
    ...contact,
    timestamp: serverTimestamp(),
  });
};
