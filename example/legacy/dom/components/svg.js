import {
  E
, h
, tw
} from '../deps.js'

import styl from '../../../../src/styl.js'
import { stylCb } from '../utils/index.js'
import style from  './svg.styl.js'

const css = styl(
  style
, stylCb
)

let {
  svg
, path
} = E

E.dom(h, E)
.comps()

const Svg = () =>
  svg.class( css.svg() )
    .viewBox`0 0 20 20`
    .fill`currentColor`(
      path
      ['fill-rule']`evenodd`
      ['clip-rule']`evenodd`
      .d`M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z`
      ()
  )

export default Svg
