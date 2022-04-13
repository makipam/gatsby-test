import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { helloimage } from '../components/image.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A hairy cow looking towards you"
        src="https://cdn.pixabay.com/photo/2021/10/20/14/01/bull-6726185_1280.jpg"
        className={helloimage}/>
    </Layout>
  )
}

export default IndexPage