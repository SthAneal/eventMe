import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from './components/Layout';
import { Error } from './components/Error';
import { Landing } from "./components/Landing";
import { Dashboard } from "./components/Dashboard";
import { Auth } from "./components/Auth";
import { CreateNewEvent } from "./components/CreateNewEvent";
import { VerifyEmail } from "./components/VerifyEmail";
import { ViewEvents } from "./components/ViewEvents";

import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Layout/>}>
          <Route index element={<Landing/>}/> 
          <Route path="/aboutus" caseSensitive={false}/>
          <Route path="/contactus" caseSensitive={false}/>
          <Route path="/privacy" caseSensitive={false}/>
          <Route path="/faq" caseSensitive={false}/>
        </Route>
          
        <Route path="/dashboard" caseSensitive={false} element={<DashboardProvider><Dashboard/></DashboardProvider>}>
          <Route index element={<Auth/>}/>
          <Route path="/dashboard/event" caseSensitive={false} element={<ViewEvents/>}/>
          <Route path="/dashboard/event/new" caseSensitive={false} element={<CreateNewEvent/>}/>
          <Route path="/dashboard/send-v-link" caseSensitive={false} element={<VerifyEmail/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>

  );
}

export default App;
