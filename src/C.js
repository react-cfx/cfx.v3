const cfxify = {

  react: h => e =>
    (props, children) =>
      h(e, {
        ...props
      , ...(
            children === undefined
          ? {}
          : {children}
        )
      })

, vue: h => e =>
    (props, children) =>
      h.apply(null
      , [
          e
        , props
        , ...(
              children === undefined
            ? []
            : [children]
          )
        ]
      )
}

const cfxifys = cfx => tags =>
  Object.keys(tags)
  .reduce(
    (r, tagName) => ({
      ...r
    , [tagName]: cfx(tags[tagName])
    })
  , {}
  )

export {
  cfxify
, cfxifys
}
