const setStyl = new Proxy( {}
, {
  get: (r, p) => (arr, children) => {
    return {
      [p]: {
        ...(
              Array.isArray(arr)
          &&  arr.length !== 0
          ?   { class: arr }
          :   { class: [arr] }
        )
      , ...(
            children
          ? Array.isArray(children)
          ? { children }
          : { children: [ children ] }
          : {}
        )
      }
    }
  }
})

const getStyl = (
  styleData
, {
    cb = (e) => e
  , alias = {}
  }
, tag = []
) =>
  new Proxy(
    () => {}
  , {
      get: (r, p) => {

        // console.log({ get: p })

        return Object.keys(alias).includes(p)
        ? getStyl(
            styleData
          , { cb }
          , alias[p].split('.')
          )
        : getStyl(
            styleData
          , {
              cb
            }
          , [ ...tag, p ]
          )

      }

    , apply: (r, b, p) => {

        // console.log({ apply: p })

        return p.length !== 0
        ? getStyl(
            styleData
          , {
              cb
            }
          , [ ...tag, ...p ]
          )
        : cb(tag.reduce(
            (r, c, i, a) => {

              const _c = 
                  Number.parseInt(c) * 0 === 0
                ? Number.parseInt(c)
                : c

              const _r =
                  typeof _c === 'string'
                ? r.filter(
                    (e) =>
                      typeof e[_c] === 'object'
                      ? true
                      : false
                  )[0]
                : [ r[_c] ]

              if (typeof _c !== 'string') {
                return _r
              }

              return i < (a.length - 1)

              ? _r[_c].children

              : Array.isArray(
                  _r[_c].class
                )

              ? _r[_c].class
              : [ _r[_c].class ]

            }

          , [ styleData ]
          ))

      }

    }
  )

const Styl = (
  style
, cb = (e) => e
, alias = {}
) =>
    style
  ? getStyl(
      style
    , {
        cb
      , alias
      }
    )
  : new Proxy(
    {}
  , {
      get: (r, p) => setStyl[p]
    }
  )

export {
  setStyl
, getStyl
}

export default Styl
