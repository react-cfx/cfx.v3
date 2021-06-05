import { cfx } from '../../../deps.js'
const { h, E, styl } = cfx

import { scb } from '../../../utils/tw.js'
import style from  './footer.styl.js'
const css = styl( style , scb )

let {
  div
, p
, a
} = E
E.dom(h, E).comps()

const Footer = () =>
  div.class( css.div() )(
    p('Want to dig deeper into Tailwind?')
  , p(
      a.class(
        css.div[1].p.a()
      )
      .href('https://tailwindcss.com/docs')
      ( " Read the docs \u2192 " )
    )
  )

export default Footer
