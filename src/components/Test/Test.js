// @flow
import React from 'react';
import styles from './Test.css'

export type Props = {
  title: String
};

const Test = (props: Props) => {
  const { title } = props
  return(
    <div>
      <h1 className={styles.text}>{title}</h1>
    </div>
  )
}

export default Test