// @flow
import React from 'react';
import styles from './Example.css'

export type Props = {
  title: String
};

const Example = (props: Props) => {
  const { title } = props
  return(
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default Example