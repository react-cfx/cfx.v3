import {
  E
, h
} from '../deps.js'

import styl from '../../../../src/styl.js'
import { stylCb } from '../utils/index.js'
import style from  './document.styl.js'

const css = styl(
  style
, stylCb
)

import Header from './header.js'
import Footer from './footer.js'
import Content from './content.js'

let {
  div
} = E

E.dom(h, E)
.comps()

const Document = () =>
  div.class( css.div() )(
    Header()
  , div.class( css.div.div() )(
      Content() 
    , Footer()
    )
  )

export default Document
