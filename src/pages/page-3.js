import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <Seo title="Page Three" />
    <h1>Hi from the third page</h1>
    <p>Welcome to page 2</p>
    <Link to="https://wearevanish.com">Check out the vanish website</Link>
  </Layout>
)

export default ThirdPage
