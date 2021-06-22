import React from "react"
import { Container } from "./styles/index.jsx"

function Footer(){
  return(
    <>
      <Container>
        <div className="row">
          <div className="social-net">
            <h1>IMAGE A PLACEHOLDER</h1>
            <select>
              <option>English</option>
              <option>Portughuse</option>
              <option>English</option>
            </select>
            <ul>
              <li><button></button></li>
            </ul>
          </div>
          <div className="navigator">
            <ul className="row">
              <li>
                <ul className="column">
                  <h2>Product</h2>
                  <li><a href="/">Download</a></li>
                  <li><a href="/">Nitro</a></li>
                  <li><a href="/">Status</a></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <h2>Company</h2>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Jobs</a></li>
                  <li><a href="/">Branding</a></li>
                  <li><a href="/">Newroom</a></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <h2>Resources</h2>
                  <li><a href="/">Collegue</a></li>
                  <li><a href="/">Support</a></li>
                  <li><a href="/">Safety</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">Feebackd</a></li>
                  <li><a href="/">Developers</a></li>
                  <li><a href="/">StremKit</a></li>
                </ul>
              </li>
              <li>
                <ul className="column">
                  <h2>Policies</h2>
                  <li><a href="/">Terms</a></li>
                  <li><a href="/">Privacy</a></li>
                  <li><a href="/">Guidelines</a></li>
                  <li><a href="/">AcKnowledgements</a></li>
                  <li><a href="/">Licences</a></li>
                  <li><a href="/">MOdaration</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">

        </div>
      </Container>
    </>
  )
}
export default Footer