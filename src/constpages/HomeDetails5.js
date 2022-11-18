import React from "react"
import Layout from "../components/Layout"

function HomeDetails5() {
  return (
    <Layout>
      <div className="container-fluid py-5 details ">
        <div className="card card1">
          <img
            src="http://20.114.244.229:1337/uploads/event3_1ec7cfebc6.jpg"
            alt="first-img"
            className="first-img"
          />
          <div className="card-body my-4 desc-text">
            <p>
              EVERYTHING IN VIB WITH: HANG IN WITH YOUR FRIENDS VIB TABLE
              SERVICE With the VIB ticket, you can elevate your experience with
              table service. Reservations available for groups of 6,8,10 or 12
              people. If your friends like to get lost at the festival, book a
              table as a welcome base!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeDetails5
