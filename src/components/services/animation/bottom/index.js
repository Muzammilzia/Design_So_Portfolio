import React from 'react'
import styles from './AnimationBottom.module.css'
import { Card } from './Card';

export const AnimationBottom = () => {
  return (
    <div className={styles.container}>
        <h1 style={{textAlign: "center"}}>Our Process for 2D and 3D Animation</h1>
        <p style={{textAlign: "center   "}}>We are one of those animation companies that have “everything” in its cards. We have a prototype process for producing top of the line 2D & 3D illustrations that we managed to create after years of experience. </p>
        <div>
            <Card color="#F47D91" title="Conceive an Idea" body="We don’t be generic or like to take inspiration from somewhere else. We prefer to crack a new idea and present it effectively instead. Our skills and industry expertise makes us piece a cake for us to convey your ideas in an amazing way."/>
            <Card color="#9FC9EF" title="Screenplay" body="Screenplay and scripts play a crucial part in bringing the idea into visualization. We help you to envision the end picture by illustrating the idea in your mind first. Our screenplay makes your idea come into reality. "/>
            <Card color="#A8B2E5" title="Storyboarding" body="After visualizing the idea, we convert the ideas into images to better represent the outline. The whole storyboard is presented in the form of image manipulations, dialogues, a plot outline, and several images."/>
            <Card color="#6FCCAD" title="Illustrate the Plans" body="Lastly, all these parts come together like a puzzle and are finalized with a voiceover to make the illustration alive and bring the characters to life to get a comprehensively illustrated animation."/>
        </div>
    </div>
  )
}
