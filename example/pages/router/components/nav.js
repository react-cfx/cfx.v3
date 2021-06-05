import { cr } from '../../../utils/index.js'
import { cfx } from '../../../deps.js'
const { h, E } = cfx
let {
  ul
, li
, a
} = E
E.dom(h, E).comps()

export default () => cr(
  'c-routernav'
, ul(

    li(
      a.href('/hello')
      ['data-navigo'](true)
      `Hello`
    )

  , li(
      a.href('/tw')
      ['data-navigo'](true)
      `TailWindCSS`
    )

  , li(
      a.href('/router')
      ['data-navigo'](true)
      `Home`
    )
  , li(
      a.href('/router-about')
      ['data-navigo'](true)
      `About navigo`
    )
  , li(
      a.href('/router-links')
      ['data-navigo'](true)
      `Links`
    )

  ) 
)
