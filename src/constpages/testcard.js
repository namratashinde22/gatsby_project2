import { Link } from "gatsby"
import React, { Component } from "react"

const getCategories = items => {
  // console.log(items)
  let tempItems = items?.map(item => {
    return item.Year
  })
  // console.log(tempItems)

  let tempCategories = new Set(tempItems)
  // console.log(tempCategories)
  let categories = Array.from(tempCategories)
  categories = ["Year", ...categories]
  return categories
}

const apiurl = "http://20.114.244.229:1337"
const pageid = "/app/homedetails"

export default class Testcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props?.items?.allCustomApi.nodes,
      coffeeItems: props?.items?.allCustomApi.nodes,
      categories: getCategories(props?.items?.allCustomApi.nodes),
    }
    //console.log(this.state.categories)
    console.log(this.state.coffeeItems)
  }

  handleItems = e => {
    const Year = e.target.value
    let tempItems = [...this.state.items]
    if (Year === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      let items = tempItems.filter(itemy => itemy.Year === Year)
      this.setState(() => {
        return { coffeeItems: items }
      })
    }
  }

  render() {
    if (this.state.items.length > 0) {
      return (
        <div className="card-list">
          <div className="filter">
            <div>
              <select
                onChange={e => {
                  this.handleItems(e)
                }}
              >
                {this.state.categories?.map((Year, index) => {
                  return (
                    <option key={index} value={Year}>
                      {Year}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="container">
              <div className="row roww">
                {this.state.coffeeItems?.map((item, index) => {
                  return (
                    <div className="card-container" key={index}>
                      <div className="card my-2">
                        <img
                          alt="Card images"
                          className="card-img-top"
                          src={`${apiurl}${item?.Name?.url}`}
                        />
                        <div className="card-body">
                          <p className="card-text">{item.description}</p>
                          <span>$ {item.price}</span>
                          <br />
                          <Link
                            className="btnn btn-info btn-sm card-btn mx-4 mt-3"
                            tabindex="0"
                            to={`${pageid}${item.id__normalized}`}
                          >
                            {item.view}
                            {/* VIEW DETAILS */}
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 col-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
