var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

function destructivelyAppendKitten(name) {
  name.shift(name)
  return name
}
