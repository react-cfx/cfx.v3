import { cfx } from '../../../deps.js'
const { styl } = cfx
const {
  div
} = styl()

export default (
  div(
    [
      'max-w-md'
    , 'mx-auto'
    ]
  , 
    div([
      'divide-y'
    , 'divide-gray-200'
    ])
  )
)
