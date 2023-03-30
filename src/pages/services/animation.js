import { AnimationBottom } from '@/components/services/animation/bottom';
import { AnimationConditional } from '@/components/services/animation/conditional';
import { AnimationMain } from '@/components/services/animation/main';
import { ServiceBanner } from '@/components/services/ServiceBanner';
import React from 'react'
import imageBanner from '../../assetts/animation-banner-background.jpg'

const animation = () => {
  return (
    <>
        <ServiceBanner image={imageBanner} title="2D & 3D Animations"/>
        <AnimationMain/>
        <AnimationConditional/>
        <AnimationBottom/>
    </>
  )
}
export default animation