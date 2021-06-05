import styl from '../../../../src/styl.js'

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
