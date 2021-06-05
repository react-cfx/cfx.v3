import { cr } from '../../utils/index.js'
import { cfx } from '../../deps.js'
const { E , h } = cfx

let { h1 } = E
E.dom(h, E).comps()

export default () => cr(
  'p-hello'
, [
    h1`Hello World!!!`
  , h1`Hello Atomico!!!`
  , h1`Hello Navigo!!!`
  , h1`Hello Twind!!!`
  , h1`Hello Tailwindcss!!!`
  , h1`Hello CFX.V3!!!`
  ]
)
