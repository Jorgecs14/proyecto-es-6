function swap(array, index1, index2) {
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    console.log('Índices fuera de rango.')
    return array
  }

  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const resultado = swap(fantasticFour, 1, 3)
console.log(resultado)
