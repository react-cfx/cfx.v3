import { cfx } from '../../../deps.js'
const { h, E, styl } = cfx

import { scb } from '../../../utils/tw.js'
import style from  './svg.styl.js'

const css = styl(style , scb)

let {
  svg
, path
} = E
E.dom(h, E).comps()

const Svg = () =>
  svg.class( css.svg() )
    .viewBox('0 0 20 20')
    .fill('currentColor')(
      path
      ['fill-rule']('evenodd')
      ['clip-rule']('evenodd')
      .d('M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z')
      ()
    )

export default Svg
