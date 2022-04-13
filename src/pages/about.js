import * as React from 'react'
import Layout from '../components/layout'
import HelloIcon from '../images/svg/undraw_hello_re_3evm.svg'
import { helloimage } from '../components/image.module.css'



const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <HelloIcon alt="jeejee" className={helloimage}/>
    </Layout>
  )
}

export default AboutPage