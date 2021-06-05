import {
  tw
} from '../deps.js'

const stylCb = (stylArr) =>
  tw(stylArr.join(' '))

export {
  stylCb
}
