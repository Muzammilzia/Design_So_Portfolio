import { ServiceBanner } from '@/components/services/ServiceBanner';
import { WebDesignMain } from '@/components/services/web-design/main';
import React from 'react'
import image from '../../assetts/web-development-service-banner.jpg'

const webDesign = () => {
  return (
    <>
        <ServiceBanner image={image} title="Web Design and Development"/>
        <WebDesignMain/> 
    </>
  )
} 

export default webDesign