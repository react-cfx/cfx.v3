const addChild = (element, child) =>

  typeof child === "number"
  ||  typeof child === "bigint"
  ||  child instanceof Date
  ||  child instanceof RegExp

  ?   element.append(String(child))
  :   Array.isArray(child)
  ?   child.map(
        (childChild) =>
          addChild(element, childChild)
      )
  :   (
            typeof child !== "undefined"
        &&  child !== null
        &&  typeof child !== "boolean"
        &&  typeof child !== "string"
      )
  ?   element.appendChild(child)

  :   element.append(child)

const createElement = (
  tagName
, props
, ...children
) => {

  tagName = tagName.toLowerCase()

  const isSVG = 
    [ 'svg', 'path' ].includes(tagName)
  ? true
  : false

  const element =
    isSVG === true
  ? document.createElementNS(
      "http://www.w3.org/2000/svg"
    , tagName
    )
  : document.createElement(tagName)

  Object.keys(props)
  .forEach(
    (key) => {

      let value = props[key]
      value =
            [
              'class'
            , 'className'
            ].includes(key)
        &&  Array.isArray(value)
        &&  value.length === 1
        &&  value[0].includes(' ')
        ?   value[0].split(' ')
            .join(' ')
        :   String(value)

      return typeof value === "string"
      ? isSVG
      ? key.startsWith("xlink:")
      ? element.createAttributeNS("http://www.w3.org/1999/xlink", key, value)
      : element.setAttribute(key, value)
      : element.setAttribute(key, value)
      : element[key] = value
    }
  )

  children.forEach(
    (child) => addChild(element, child)
  )

  return element

}

export default createElement
