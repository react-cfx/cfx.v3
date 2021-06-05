import { cfx } from '../../../deps.js'
const { h, E, styl } = cfx

import { scb } from '../../../utils/tw.js'
import style from  './content.styl.js'
const css = styl( style , scb )

let {
  div
, p
} = E
E.dom(h, E).comps()

import List from './list.js'

const Content = () =>
  div.class( css.div() )(
    p`An advanced online playground for Tailwind CSS, including support for things like:`
  , List()
  , p`Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online.`
  )

export default Content
