import { cfx } from '../../../deps.js'
const { styl } = cfx
const {
  div
, p
, a
} = styl()

export default (
  div(
    [
      'pt-6'
    , 'text-base'
    , 'leading-6'
    , 'font-bold'
    , 'sm:text-lg'
    , 'sm:leading-7'
    ]
  , [
      p()
    , p( []
      ,
        a([
          'text-cyan-600'
        , 'hover:text-cyan-700'
        ])
      )
    ]
  )
)
