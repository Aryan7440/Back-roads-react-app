import React from 'react'
import { pageLinks } from '../data'
const PageLinks = ({ itemClass, parentClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        const { href, title, id } = link
        return (
          <li key={id} className={itemClass}>
            <a href={href}>{title}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
