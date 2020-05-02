// @flow
import React from 'react';
import styles from './Test.css'

export type Props = {
  /** The content of the button. */
  text: String
};

const Test = (props: Props) => {
  const { text } = props
  return(
    <div>
      <h1 className={styles.text}>{text}</h1>
    </div>
  )
}

export default Test