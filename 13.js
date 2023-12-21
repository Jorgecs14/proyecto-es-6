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
function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

console.log(removeItem([...mainCharacters], 'Han Solo'))
console.log(removeItem([...mainCharacters], 'Rey'))
console.log(removeItem([...mainCharacters], 'Yoda'))
