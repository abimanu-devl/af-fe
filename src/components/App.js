import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import "./App.css";
import CreateAttendee from "../components/Users/CreateAttendee";
import CreateReseacher from "../components/Users/CreateResearcher";
import EditorDashboard from "./EditorWorkspace/EditorDashboard";
import CreateAttendee from "./Users/CreateAttendee";
import HeroSection from "../components/HeroSection/HeroSection";
import viewResearches from "./Reviewer/viewResearches";
import CreateWsConductor from "../components/Users/CreateWsConductor";
import UserRegistrationButton from "./Users/UserRegistrationButton/UserRegistrationButton";
import AddSpeaker from "./EditorWorkspace/AddSpeaker";
import ViewSpeaker from "./EditorWorkspace/ViewSpeaker";
import AdminNavBar from "./Admin/AdminNavBar/AdminNavBar";
import Home from "../components/Admin/Pages/Home";
import viewWorkshops from "./Reviewer/viewWorkshops";
import downloadResearchs from "./DownloadPage/downloadResearchs"
import downloadWorkshops from "./DownloadPage/downloadWorkshops"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Header />
            <HeroSection />
          </Route>
          <Route exact path="/user/attendee">
            <CreateAttendee />
          </Route>
          <Route path="/reviewer/viewResearches" component={viewResearches} />
          <Route exact path="/user/researcher">
            <CreateReseacher />
          </Route>
          <Route exact path="/user/wsconductor">
            <CreateWsConductor />
          </Route>
          <Route exact path="/editor/dashboard">
            <EditorDashboard />
          </Route>
          <Route path="/reviewer/viewWorkshops" component ={viewWorkshops}/>
          <Route path="/downloads/Research" component ={downloadResearchs}/>
          <Route path="/downloads/Workshops" component ={downloadWorkshops}/>
          <Route exact path="/sign-up">
            <UserRegistrationButton />
          </Route>
          <Route exact path="/editor/addSpeaker">
            <AddSpeaker />
          </Route>
          <Route exact path="/editor/viewSpeaker">
            <ViewSpeaker />
          </Route>
          <Route exact path="/admin">
            <AdminNavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
