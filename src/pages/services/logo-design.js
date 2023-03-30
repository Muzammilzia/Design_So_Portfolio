import { LogoDesignMain } from '@/components/services/logo-design/main';
import { ServiceBanner } from '@/components/services/ServiceBanner';
import React from 'react'
import image from '../../assetts/logo-design-service-banner.jpg'

const logoDesign = () => {
  return (
    <>
        <ServiceBanner image={image} title="Logo Design"/>
        <LogoDesignMain/>
    </>
  )
}

export default logoDesign