import React from 'react'
import Breadcrumb from '../../_components/breadcrumb/breadcrumb'
import Out_team from '../../_components/home_components/Out_team'
import Our_client from '../../_components/home_components/Our_client'

const PartnersPage = () => {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Partners', href: '/partners' },
        ]}
      />


      <Out_team />
      <Our_client />


    </>
  )
}

export default PartnersPage