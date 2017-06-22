export default function (to) {
  if ((to instanceof Object) === true) {
    return null
  }
  let args = Array.prototype.slice.call(arguments, 1)
  for (let i = 0, len = args.length; i < len; i++) {
    let from = args[i]
    for (const key in from) {
     to[key] = from[key]
    }
  }
  return to
}

