import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const Home2 = () => {
  return (
    <>
      <div className="experience">
        <div>
          <h2 className="experience-heading">
            EXPLORE EXPERIENCES AT SOUNDSTORM 2021
          </h2>
        </div>
        <div className="experience-text">
          <div>
            <div>
              <p>
                From world famous artists to street performances to private
                party boxes - Soundstorm has it all and more!
              </p>
            </div>
            <div className="buttons">
              <span>
                <button className="btn btn-secondary">PLAN MY JOURNEY</button>
              </span>
              <span>
                <button className="btn btn-primary">EXPLORE EXPERIENCE</button>
              </span>
            </div>
          </div>
          <div>
            <StaticImage
              src="http://20.114.244.229/assets/web.png"
              alt="A kitten"
              layout="constrained"
              placeholder="blurred"
              width={550}
              heigth={350}
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home2
