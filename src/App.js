import React, { useEffect } from "react";
import "./assets/index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { db } from "./firebase.config";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setTea } from "./features/tea/teaSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getItems = async () => {
      onSnapshot(collection(db, "tea"), (snapshot) => {
        let tempTea = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        dispatch(setTea(tempTea));
      });
    };

    getItems();
  }, [dispatch]);

  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
