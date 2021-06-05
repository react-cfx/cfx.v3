import {
  E
, h
} from '../deps.js'

import styl from '../../../../src/styl.js'
import { stylCb } from '../utils/index.js'
import style from  './list.styl.js'

const css = styl(
  style
, stylCb
, {
    listItem: 'ul.li.1.p'
  }
)

import Svg from './svg.js'

const {
  p
, code
, ul
, li
, span
} = E

E.dom(h, E)
.comps()

const listArr = [
    p.class( css.listItem() )(
      'Customizing your'
    , code.class( css.listItem.code() )
      (' tailwind.config.js ')
    , 'file'
    )
  , p.class( css.listItem() )(
      'Extracting classes with'
    , code.class( css.listItem.code() )
      (' @apply')
    )
  , p.class( css.listItem() )
    ('Code completion with instant preview')
]

const List = (arr) =>
  ul.class( css.ul() )(
    arr.map( (e) =>
      li.class( css.ul.li() )(
        span.class( css.ul.li.span() )(
          Svg()  
        )
      , e
      )
    )
  )

export default () =>
  List(listArr)
