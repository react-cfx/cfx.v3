import { Navigo } from './deps.js'
import { rr } from './utils/index.js'

export default () => {

  const router = new Navigo("/")

  router

  .on("/", rr`p-router`)
  .on("/home", rr`p-router`)
  .on("/hello", rr`p-hello`)

  .on("/tw", rr`p-tw`)

  .on("/router", rr`p-router`)
  .on("/router-about", rr`p-routerabout`)
  .on("/router-links", rr`p-routerlinks`)

  .on("*", rr`p-router`)
  .resolve()

}
