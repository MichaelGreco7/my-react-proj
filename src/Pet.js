import React from 'react'

// const Pet = ({ name, animal, breed }) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ])
// }

//export default Pet

const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h3>Breed: {breed}</h3>
    </div>
  )
}

export default Pet
