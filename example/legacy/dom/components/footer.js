import {
  E
, h
} from '../deps.js'

import styl from '../../../../src/styl.js'
import { stylCb } from '../utils/index.js'
import style from  './footer.styl.js'

const css = styl(
  style
, stylCb
)

let {
  div
, p
, a
} = E

E.dom(h, E)
.comps()

const Footer = () =>
  div.class( css.div() )(
    p('Want to dig deeper into Tailwind?')
  , p(
      a.class(
        css.div[1].p.a()
      )
      .href`https://tailwindcss.com/docs`
      ( " Read the docs \u2192 ")
    )
  )

export default Footer
