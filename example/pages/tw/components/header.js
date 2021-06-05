import { cfx } from '../../../deps.js'
const { h, E, styl } = cfx

import { scb } from '../../../utils/tw.js'
import style from  './header.styl.js'
const css = styl( style , scb )

let {
  div
, img
} = E
E.dom(h, E).comps()

const Header = () =>
  div(
    img.class( css.div.img() )
    .src('https://play.tailwindcss.com/img/logo.svg')
    ()
  )

export default Header
