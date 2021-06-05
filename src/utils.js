const keyMirror = strs =>
  strs.reduce(
    (r, c) => ({
      ...r
    , [c]: c
    })
  , {}
  )

const handleObjkeys = (obj, cb) => {
  const keys = Object.keys(obj)
  return Array.isArray(keys)
  &&  keys.length !== 0
  ?   cb === undefined
  ?   obj
  :   cb(keys)
  :   {}
}

export {
  keyMirror
, handleObjkeys
}
