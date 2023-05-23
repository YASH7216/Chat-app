import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addDoc, collection,onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Chat({ user }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messageRef = collection(db, "messages");
  
  const handleSubmit = async () => {
    const date = new Date();
    await addDoc(messageRef, {
      text,
      email: user.email,
      logo: user.photoUrl,
      name: user.displayName,
      date,
    });
    setText("");
    setTimeout(
      () =>
        document.querySelector('#copyright').scrollIntoView({ behavior: 'smooth'}),
      0.5
    );
   };
   useEffect(() => {
    const unsubscribe = onSnapshot(messageRef, (quertSnapshot) => {
      const newMessages = quertSnapshot.docs
        .map((doc) => doc.data())
        .sort((a, b) => a.date - b.date);
      setMessages(newMessages)
      setTimeout(
        () =>
          document
            .querySelector("#copyright")
            .scrollIntoView({ behavior: "smooth" }),
        0.5
      );
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <div>
      <div className="justify-content-center">
        <h2 className="text-primary">Chat app</h2>
      </div>
      <div className="row mt-4">
        <div className="col-x1-4 col-lg-4 col-sm-3 col-2"></div>
        <div className="col-xl-4 col-lg-4 col-sm-6 col-8 chat-message">
          {messages.map((message) => (
            <ChatMessage {...message} user={user} key={crypto.randomUUID()} />
          ))}
          <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-secondary ms-3" onClick={handleSubmit}>
              send
            </button>
          </div>
          <div id="copyright" className="mt-3">
            yash bastawad
          </div>
        </div>
      </div>
    </div>
  );
}
