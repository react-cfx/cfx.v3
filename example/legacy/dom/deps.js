
import E from 'https://unpkg.com/cfx.v3'
import h from 'https://unpkg.com/cfx.v3@0.0.0/lib/h.js'

import { setup as twSetup, tw } from 'https://cdn.skypack.dev/twind'
import * as twColors from 'https://cdn.skypack.dev/twind/colors'

twSetup({
  mode: 'jit'
, theme: {
    extend: {
      colors: {
        'light-blue': twColors.lightBlue
      , cyan: twColors.cyan
      }
    }
  }
, variants: {}
, plugins: []
})

export {

  E
, h

, tw
, twSetup
, twColors

}
