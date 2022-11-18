import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Testcard from "./testcard"

const Testquery = () => {
  const data = useStaticQuery(query)
  return (
    <div>
      <Testcard items={data} />
    </div>
  )
}

export const query = graphql`
  {
    allCustomApi {
      nodes {
        Name {
          url
        }
        description
        details
        id__normalized
        price
        Year
        view
      }
    }
  }
`
export default Testquery
