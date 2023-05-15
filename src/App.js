import React, { useCallback, useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "@firebase/auth";
import Navba from "./pages/Navba";
// import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import JaneHopkinsDoctor from "./pages/JaneHopkinsDoctor";
import JaneHopkinsAdmin from "./pages/JaneHopkinsAdmin";
import Bavaria from "./pages/Bavaria";
import FDA from "./pages/FDA";
import AddPatient from "./pages/AddPatient";
import UpdatePatient from "./pages/UpdatePatient";
import SendDrugs from "./pages/SendDrugs";
import AssignDrug from "./pages/AssignDrug";
import RequireAuth from "./components/RequireAuth";
import useAuth from "./hooks/useAuth";
import AuthContext from "./components/AuthProvider";
import AddVisit from "./pages/AddVisit";
import Footer from "./components/Footer";
import Sidebar1 from "./components/Sidebar1";
import AssignDoctor from "./pages/AssignDoctor";
import PostStudy from "./pages/PostStudy";
import ReviewPatient from "./pages/ReviewPatient";
import Home from "./pages/Home copy";

function App() {
  const { authorized, setAuth } = useAuth();
  const [user, setUser] = useState();
  const [id, setID] = useState();
  /*const [completed, setCompleted] = useState(false);

  const setCompletedTrue = useCallback(() => {
    try {
      if(completed === false)
        setCompleted(bool => !bool)
    } catch (error) {
      console.log(error.message)
    }
  },[])
*/
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
      setID(currentUser.uid);
    }
  });

  /*  useEffect(() => {
    setCompletedTrue()
  },[])
*/
  return (
    <div className="app">
      <AuthContext.Provider
        value={{
          user: user,
          setUser: setUser,
          id: id,
          setID: setID,
          authorized: authorized,
          setAuth: setAuth,
          /*completed: completed,
          setCompleted: setCompleted,
          setCompletedTrue: setCompletedTrue*/
        }}
      >
        <Navba />
        <Sidebar1>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route element={<RequireAuth allowedRoles={["FDA", "Admin"]} />}>
                <Route path="/FDA" element={<FDA />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={["FDA", "Admin"]} />}>
                <Route path="/FDA/AssignDrug" element={<AssignDrug />} />
              </Route>
              <Route
                element={
                  <RequireAuth
                    allowedRoles={[
                      "FDA",
                      "Admin",
                      "Bavaria",
                      "JaneHopkinsAdmin",
                      "JaneHopkinsDoctor",
                    ]}
                  />
                }
              >
                <Route path="/PostStudy" element={<PostStudy />} />
              </Route>
              <Route
                element={<RequireAuth allowedRoles={["Bavaria", "Admin"]} />}
              >
                <Route path="/Bavaria" element={<Bavaria />} />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsDoctor", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsDoctor"
                  element={<JaneHopkinsDoctor />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsAdmin", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsAdmin"
                  element={<JaneHopkinsAdmin />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsAdmin", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsAdmin/AddPatient"
                  element={<AddPatient />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsAdmin", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsAdmin/AssignDoctor"
                  element={<AssignDoctor />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsAdmin", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsAdmin/ReviewPatient"
                  element={<ReviewPatient />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsDoctor", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsDoctor/UpdatePatient"
                  element={<UpdatePatient />}
                />
              </Route>
              <Route
                element={
                  <RequireAuth allowedRoles={["JaneHopkinsDoctor", "Admin"]} />
                }
              >
                <Route
                  path="/JaneHopkinsDoctor/AddPatientVisit"
                  element={<AddVisit />}
                />
              </Route>
              <Route
                element={<RequireAuth allowedRoles={["Bavaria", "Admin"]} />}
              >
                <Route path="/Bavaria/SendDrugs" element={<SendDrugs />} />
              </Route>
            </Routes>
          </div>
        </Sidebar1>
        <Footer></Footer>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
