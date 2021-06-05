import { cr } from '../../utils/index.js'
import { cfx } from '../../deps.js'
const { h, E, styl } = cfx

import { scb } from '../../utils/tw.js'
import style from  './index.styl.js'
const css = styl( style , scb )

let {
  div
} = E
E.dom(h, E).comps()

import Document from './components/documents.js'

export default () => cr(
  'p-tw'
, div.class( css.div() )(
    div.class( css.div.div() )(
      div.class( css.div.div[0].div() )()
    , div.class( css.div.div[1].div() )(
        Document()
      )
    )
  )
)
