const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList]
console.log(pointsListCopy)

const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyCopy = { ...toy }
console.log(toyCopy)

const pointList = [32, 54, 21, 64, 75, 43]
const pointList2 = [54, 87, 99, 65, 32]
const combinedPointList = [...pointList, ...pointList2]
console.log(combinedPointList)

const toys = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toysUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const updatedToys = { ...toys, ...toysUpdate }
console.log(updatedToys)

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']
const colorsWithoutYellow = [...colors.slice(0, 2), ...colors.slice(3)]
console.log(colorsWithoutYellow)
