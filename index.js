var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return name
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}