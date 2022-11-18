import React from "react"

const Home1 = () => {
  return (
    <>
      <div className="jumbtron">
        <div className="languages">
          <select>
            <option value="">Language</option>
            <option value="en" defaultValue>
              English
            </option>
            <option value="hi-IN">Hindi</option>
            <option value="ar-BH">Arabic</option>
            <option value="fr-BE">French</option>
          </select>
          <h2 className="soundstrom-heading">SOUNDSTORM IN NUMBERS</h2>
        </div>
        <div className="rowz">
          <div>
            <h2>
              200+
              <span>ARTISTS</span>
            </h2>
          </div>
          <div>
            <h2>
              8<span>STAGES</span>
            </h2>
          </div>
          <div>
            <h2>
              4<span>DAYS OF LIVE MUSIC</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="reviews">
        <h2 className="reviews-heading">REVIEWS FROM SOUNDSTORM 2019</h2>
        <div className="container1">
          <div>
            <p>
              We've never seen something at this scale, with these stages, with
              this level of a attendance. I felt like it was something great.
            </p>
          </div>
          <div>
            <p>
              We've never seen something at this scale, with these stages, with
              this level of a attendance. I felt like it was something great.
            </p>
          </div>
          <div>
            <p>
              We've never seen something at this scale, with these stages, with
              this level of a attendance. I felt like it was something great.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home1
