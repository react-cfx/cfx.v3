import {
  E
, h
, tw
} from './deps.js'

import Document from './components/document.js'

let {
  div
, h1
} = E

E.dom(h, E)
.comps()

let rootClass = [
  'min-h-screen'
, 'bg-gray-100'
, 'py-6'
, 'flex'
, 'flex-col'
, 'justify-center'
, 'sm:py-12'
].join(' ')

let app =
  div.class(tw(rootClass))(
    div.class(tw`relative py-3 sm:max-w-xl sm:mx-auto`)(
      div.class(tw`absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`)()
    , div.class(tw`relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20`)(
        h1`Document()`
      )
    )
  )

// document.body.replaceWith(app)
document
.getElementById('app')
.replaceWith(app)
