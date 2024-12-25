'use client'
import React, { useState } from 'react'
import Breadcrumb from '../_components/breadcrumb/breadcrumb'
import Tabs from '../_components/tabs/Tabs'
import ProductCard from '../_components/productCard/ProductCard'
import Pagination from '../_components/pagination/Pagination'

const RenderProducts = () => {

    const [First, setFirst] = useState<number>(1)
  

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
      <Pagination currentPage={First} totalPages={3} onPageChange={(t) => setFirst(t)} />

    </>
  )
}

const page = () => {

  const tabs = [
    {
      id: 'tab1',
      label: 'All',
      content: RenderProducts
    },
    {
      id: 'tab2',
      label: 'initial offering',
      content: RenderProducts
    },
    {
      id: 'tab3',
      label: 'from customers',
      content: RenderProducts
    },
    {
      id: 'tab4',
      label: 'from company',
      content: RenderProducts
    }
  ];

  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Market', href: '/market' },
        ]}
      />

      <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-20 md:my-32">
        <Tabs
          tabs={tabs}
          defaultTab="tab1"
          className="w-full"
        />

      </div>


    </>
  )
}

export default page