import { cfxify, cfxifys } from './C.js'

const accC = (Dom, attr) =>

  new Proxy(

    () => {}

  , {
      get: (target, property) =>

        (v) =>

          accC( Dom
          , {
              ...attr
            , [property]: v
            }
          )

    ,
      apply: (target, thisBinding, children) =>

        Dom.apply(null, [
          attr
        , ...(
            children.length === 0
            ? [] 
            : [ children ]
          )
        ])

    } 
  )

const D = (C) =>
  Object.keys(C)
  .reduce(
    (r, c) => (
      {
        ...r
      , [c]: accC(C[c], {})
      }
    )
  , {}
  )

const cfx = (options, compTags) => {
  const engineName =
      Object.keys(options)
      .includes('react')
    ? 'react'
    : Object.keys(options)
      .includes('vue')
    ? 'vue'
    :  Object.keys(options)
      .includes('dom')
    ? 'dom'
    : 'vue'
  return D(
    cfxifys(
      cfxify[
          engineName === 'dom'
        ? 'vue'
        : engineName
      ](options[engineName])
    )(compTags)
  )

}

export {
  D
}

export default cfx
