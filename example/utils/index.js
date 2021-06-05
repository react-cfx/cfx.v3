import { cfx } from '../deps.js'

const { c, h, E } = cfx
let { host } = E
E.dom(h, E).comps()

// routerRender
const rr = (compName) => () =>

  document.querySelector("#app")
  .innerHTML = `<${compName}></${compName}>`

// componentRender
const cr = (compName, compContent) => {

  customElements.define(
    compName
  , c( () => {

      // .shadowDom``
      return host(
        compContent
      )
    })
  )

}

export {
  rr
, cr
}
