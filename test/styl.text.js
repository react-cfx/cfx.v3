import {
  setStyl
, getStyl
} from '../src/styl.js'

const {
  ul
, li
, p
, span
, code
} = setStyl

const style = (
  ul(
    [
      'list-disc'
    , 'space-y-2'
    ]
  , li(
      [
        'flex'
      , 'items-start'
      ]
    , [
        span([
          'h-6'
        , 'flex'
        , 'items-center'
        , 'sm:h-7'
        ])
      , p(
          'ml-2'
        , code([
            'text-sm'
          , 'font-bold'
          , 'text-gray-900'
          ])
        )
      ]
    )
  )
)

console.log(JSON.stringify(style, null, 2))

const css = getStyl(
  style
, {
    cb: (e) => e
  , alias: {}
  }
)

console.log( css.ul.li[0].span() )
console.log( css.ul.li[1].p() )
console.log( css.ul.li[1].p.code() )

console.log( css.ul.li(0).span() )
console.log( css.ul.li(1).p() )
console.log( css.ul.li(1).p.code() )

console.log( css.ul.li.span() )
console.log( css.ul.li.p.code() )
