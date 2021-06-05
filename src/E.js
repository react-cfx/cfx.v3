import { handleObjkeys, keyMirror as km } from './utils.js' 
import D from './D.js'

const E =

  new Proxy(
    {}
  , {

      get: (target, property) => {

          target.hasOwnProperty('comps')
        ? {}
        : target.comps = {}

          target.hasOwnProperty('engine')
        ? {}
        : target.engine = {}

        return [
          'react'
        , 'vue'
        , 'dom'
        ].includes(property)

        ? (engine, self) => {
            target.engine = {
              [property]: engine
            }
            return self
          }

        : property === 'comps'

        ? (Comps = {}) => {

            target.comps = D(
              target.engine
            , {
                ...handleObjkeys(
                  target.comps
                , (keys) => km(keys)
                )
              , ...handleObjkeys(Comps)
              }
            )

            return target.comps
          }

        : (() => {

            target.comps[property] = property
            return new Proxy(
              () => {}
            , {
                get: (t, p) => (v) => {
                  return target.comps[property][p](v)
                }
              , apply: (t, b, a) => target.comps[property](a)
              }
            )

          })()

      }
    }
  )

export default E
