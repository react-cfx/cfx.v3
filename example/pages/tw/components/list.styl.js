import { cfx } from '../../../deps.js'
const { styl } = cfx

const {
  ul
, li
, span
, p
, code
} = styl()

export default (
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
