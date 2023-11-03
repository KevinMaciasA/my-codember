function decode(inputString) {
  const data = inputString.toLowerCase().split(" ")
  const reducer = (map, word) => {
    if(map.has(word))
      map.set(word, map.get(word) + 1)
    else
      map.set(word, 1)
    return map
  }
  const dict = data.reduce(reducer, new Map())
  return [...dict.entries()].flat().join("")
}

const test = "gato perro perro coche Gato peRRo sol"
decode(test) //gato2perro3coche1sol1
