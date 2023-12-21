const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  return array.indexOf(text)
}
console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Chewbacca'))
console.log(findArrayIndex(mainCharacters, 'Obi-Wan'))
console.log(findArrayIndex(mainCharacters, 'Yoda'))
