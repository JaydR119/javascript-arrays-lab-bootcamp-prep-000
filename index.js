var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  const newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  const newKittens = [name, ...kittens]
  return newKittens
}

function removeLastKitten() {
  return removeLastKitten.slice(0, kittens.length - 1)
}
