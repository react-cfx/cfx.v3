import { cfx } from '../../../deps.js'
const { h, E, styl } = cfx

import { scb } from '../../../utils/tw.js'
import style from  './documents.styl.js'
const css = styl( style , scb )

let {
  div
} = E
E.dom(h, E).comps()

import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js'

export default () => (
  div.class( css.div() )(
    Header()
  , div.class( css.div.div() )(
      Content()
    , Footer()
    )
  )
)
