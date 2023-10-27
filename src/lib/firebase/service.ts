import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // mengambil sisa data properti lainnya
  }));

  return data;
}

export async function retriveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(userData: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // mengambil sisa data properti lainnya
  }));

  if (data) {
    // ambil data pertama
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // mengambil sisa data properti lainnya
  }));

  if (data.length > 0) {
    console.log(data);

    callback({
      status: false,
      message: "Email already registered",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Register Success",
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: error,
        });
      });
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(), // mengambil sisa data properti lainnya
  }));

  if (data.length > 0) {
    userData.role = data[0].role; // ambil role yg sudah ada
    // update data
    await updateDoc(doc(firestore, "users", data[0].id), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign In With Google Success",
          // mengirimkan data
          data: userData,
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: "Sign In With Google Failed",
        });
      });
  } else {
    userData.role = "member";
    await addDoc(collection(firestore, "users"), userData)
      .then(() => {
        callback({
          status: true,
          message: "Sign In With Google Success",
          // mengirimkan data
          data: userData,
        });
      })
      .catch((error) => {
        callback({
          status: false,
          message: "Sign In With Google Failed",
        });
      });
  }
}
