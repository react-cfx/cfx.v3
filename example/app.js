import router from './router.js'

import pHello from './pages/hello/index.js'

import pRouter from './pages/router/index.js'
import cRouterNav from './pages/router/components/nav.js'
import pRouterAbout from './pages/router/about.js'
import pRouterLinks from './pages/router/links.js'

import pTw from './pages/tw/index.js'

pHello()

cRouterNav()
pRouter()
pRouterAbout()
pRouterLinks()

pTw()

window.addEventListener(
  "load"
, router
)
