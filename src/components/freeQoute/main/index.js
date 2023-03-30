import React from 'react'
import styles from './QouteMain.module.css'

export const QouteMain = () => {
  return (
    <div className={styles.container}>
        <h1>quote request form</h1>
        <p>Please fill out the form below to receive a free quote for our search marketing services. Select what services you are interested in below and we’ll contact you as soon as possible.</p>
        <div className={styles.formContainer}>
            <input type='text' placeholder='Website URL'/>
            <input type='text' placeholder='Company Name'/>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <input type='text' placeholder='Phone Number'/>
            <input type='text' placeholder='Email Address'/>
            <div>
                <label>Approximate Monthly Budget</label>
                <select>
                    <option>undecided</option>
                    <option>1000</option>
                    <option>1000+</option>
                </select>
            </div>
            <div>
                <label>What services are you interested in?</label>
                <select>
                    <option>undecided</option>
                    <option>1000</option>
                    <option>1000+</option>
                </select>
            </div>
            <label>Tell us a little about your Web site and the services you are interested in:</label>
            <textarea></textarea>
            <button>Submit</button>
        </div>
    </div>
  )
}
