import { HomepageCounter } from '@containers/counter/HomepageCounter'
import Link from 'next/link'
import React from 'react'

/**
 * Homepage
 */
const Certification: React.FC = () => {
  return (
    <main>
      <h1>Certifications!</h1>
      <p>This is a certification page with list of my certifications</p>
      <Link href={'/reset'}>reset page</Link>
      <HomepageCounter />
    </main>
  )
}

export default Certification
