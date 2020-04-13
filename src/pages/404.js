import React from "react"

import Theme from "../theme"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Theme>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Theme>
)

export default NotFoundPage
