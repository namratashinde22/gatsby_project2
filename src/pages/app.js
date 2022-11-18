import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../constpages/Home"

import Experience from "../constpages/Experience"
import Buyticketes from "../constpages/Buytickets"
import Login from "../components/Login"
import Planyourjourney from "../constpages/Planyourjourney"
import HomeDetails3 from "../constpages/HomeDetails3"
import HomeDetails2 from "../constpages/HomeDetails2"
import HomeDetails4 from "../constpages/HomeDetails4"
import HomeDetails5 from "../constpages/HomeDetails5"
import HomeDetails6 from "../constpages/HomeDetails6"
import LineUp from "../constpages/Lineup"

const App = () => (
  <>
    <Router>
      <Login path="/app/login" />
      <PrivateRoute path="/app/home" component={Home} />
      <PrivateRoute path="/app/lineup" component={LineUp} />
      <PrivateRoute path="/app/experience" component={Experience} />
      <PrivateRoute path="/app/buytickets" component={Buyticketes} />
      <PrivateRoute path="/app/planyourjourney" component={Planyourjourney} />
      <PrivateRoute path="/app/homedetails2" component={HomeDetails2} />
      <PrivateRoute path="/app/homedetails3" component={HomeDetails3} />
      <PrivateRoute path="/app/homedetails4" component={HomeDetails4} />
      <PrivateRoute path="/app/homedetails5" component={HomeDetails5} />
      <PrivateRoute path="/app/homedetails6" component={HomeDetails6} />
    </Router>
  </>
)

export default App
