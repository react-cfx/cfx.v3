import E from 'https://unpkg.com/cfx.v3'
import { c, h } from "https://unpkg.com/atomico"
import styl from 'https://unpkg.com/cfx.v3@0.0.1/lib/styl.js'

import Navigo from 'https://unpkg.com/navigo@8.x.x/lib/es/index.js'

import {
  setup as twSetup
, tw as wt
} from 'https://cdn.skypack.dev/twind'
import * as twColors from 'https://cdn.skypack.dev/twind/colors'

const cfx = {
  E
, h
, c
, styl
}

const tw = {
  wt
, twSetup
, twColors
}

export {
  cfx
, Navigo
, tw
}
