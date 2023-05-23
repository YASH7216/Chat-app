import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "./config/firebase"
// import {postcss}from "rollup-plugin-postcss";
function App() {
  const [user, setuser] = useState(null);

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => setuser(result._tokenResponse))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      {user ? (
        <Chat user={user} />
      ) : (
        <div className="p-5 text-center">
          <div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/561/500/original/chat-app-logo-icon-vector.jpg"
              alt="logo"
              width={400}
              height={400}
              className="pr-2"
              style={{ borderRadius: 200 }}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              style={{ marginTop: "50px" }}
              onClick={handleSingIn}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
