import {
  E
, h
} from '../deps.js'

import styl from '../../../../src/styl.js'
import { stylCb } from '../utils/index.js'
import style from  './content.styl.js'

const css = styl(
  style
, stylCb
)

import List from './list.js'

const {
  div
, p
} = E

E.dom(h, E)
.comps()

const Content = () =>
  div.class( css.div() )(
    p`An advanced online playground for Tailwind CSS, including support for things like:`
  , List()
  , p`Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.`
  )

export default Content
