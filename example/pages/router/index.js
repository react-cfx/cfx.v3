import { cr } from '../../utils/index.js'
import { cfx } from '../../deps.js'
const { h, E } = cfx

let {
  h1
, hr
} = E
const cNav = E['c-routernav']
E.dom(h, E).comps()

export default () => cr(
  'p-router'
, [
    h1`Navigo basic example`
  , hr()
  , cNav()
  ]
)
