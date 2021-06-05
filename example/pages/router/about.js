import { cr } from '../../utils/index.js'
import { cfx } from '../../deps.js'
const { h, E } = cfx

let {
  h1
, hr
, p 
} = E
const cNav = E['c-routernav']
E.dom(h, E).comps()

export default () => cr(
  'p-routerabout'
, [
    h1`Navigo basic example | About`
  , hr()
  , cNav()
  , hr()
  , p`Navigo is vanilla JavaScript router. It has no dependencies.`
  ]
)
