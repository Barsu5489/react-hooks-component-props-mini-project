import React from 'react'

function Article({date=  "January 1, 1970"}) {
  return (
    <article>
        <h3>tile of article</h3>
        <small>date of article</small>
        <p>preview of article</p>
    </article>
  )
}

export default Article