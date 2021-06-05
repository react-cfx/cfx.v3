import { cr } from '../../utils/index.js'
import { cfx } from '../../deps.js'
const { h, E } = cfx

let {
  h1
, hr
, p
, a
} = E
const cNav = E['c-routernav']
E.dom(h, E).comps()

export default () => cr(
  'p-routerlinks'
, [
    h1`Navigo basic example | Other links`
  , hr()
  , cNav()
  , hr()
  , p(
      a.href('https://github.com/krasimir/navigo')
      .target('_blank')`Documentation`
    , ' | '
    , a.href('https://www.npmjs.com/package/navigo')
      .target('_blank')`NPM package`
    )
  ]
)
