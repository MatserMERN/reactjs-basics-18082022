import React from 'react'
import "./appStyles.css"
import styles from "./appStyles.module.css"

function AppStyles() {
  return (
    <div>
        <h1 className='success'>CSS Styles Success</h1>
        <h1 className='error'>CSS Styles Error</h1>
        <br />
        <h1 className={styles.success}>CSS Modules Success</h1>
        <h1 className={styles.error}>CSS Modules Success</h1>

    </div>
  )
}

export default AppStyles