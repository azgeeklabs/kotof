import React from 'react'
import Breadcrumb from '@/app/_components/breadcrumb/breadcrumb'
import Out_team from '@/app/_components/home_components/Out_team'
import Our_client from '@/app/_components/home_components/Our_client'

const page = () => {
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

export default page