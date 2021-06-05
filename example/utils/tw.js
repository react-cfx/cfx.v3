import { tw } from '../deps.js'

const {
  wt
, twSetup
, twColors
} = tw

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

// styl cb
const scb = (stylArr) => {
  // console.log(wt)
  return wt(stylArr.join(' '))
}

export {
  scb
}

export default wt
