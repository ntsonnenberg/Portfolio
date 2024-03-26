import {
  getDocs,
  collection,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db, storage } from "./firebase";
import { ref, getDownloadURL } from "firebase/storage";

export interface Project {
  id: string;
  title: string;
  link: string;
  image: string;
}

export const getProjects = async (): Promise<Project[]> => {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
    collection(db, "projects")
  );

  return querySnapshot.docs.map((doc) => {
    const { title, link, image } = doc.data();

    return {
      id: doc.id,
      title,
      link,
      image,
    };
  });
};
