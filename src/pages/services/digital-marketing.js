import { DigitalMarketingMain } from '@/components/services/digital-marketing/main';
import { ServiceBanner } from '@/components/services/ServiceBanner';
import React from 'react'
import banner from '../../assetts/digital-media-marketing.jpg'

const digitalMarketing = () => {
  return (
    <>
        <ServiceBanner image={banner} title="Digital Marketing"/>
        <DigitalMarketingMain/>
    </>
  )
}

export default digitalMarketing