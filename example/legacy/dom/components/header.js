import {
  E
, h
, tw
} from '../deps.js'

import styl from '../../../../src/styl.js'
import { stylCb } from '../utils/index.js'
import style from  './header.styl.js'

const css = styl(
  style
, stylCb
)

let {
  div
, img
} = E

E.dom(h, E)
.comps()

const Header = () =>
  div(
    img.class( css.div.img() )
    .src`https://play.tailwindcss.com/img/logo.svg`
    ()
  )

export default Header
