import React from "react"
import Layout from "../components/Layout"
import Home1 from "../constpages/Home1"
import Home2 from "../constpages/Home2"

import Home4 from "../constpages/Home4"
import Home5 from "../constpages/Home5"
import Testquery from "../constpages/test"

const Home = () => {
  return (
    <Layout>
      <Home1 />
      <Home2 />
      <Testquery />
      <Home4 />
      <Home5 />
    </Layout>
  )
}
export default Home
