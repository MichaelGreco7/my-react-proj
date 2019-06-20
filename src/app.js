import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'
import SearchParams from './SearchParams'
// const Pet = ({ name, animal, breed }) => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, name),
//     React.createElement('h2', {}, animal),
//     React.createElement('h2', {}, breed)
//   ])
// }

// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet, { name: 'Tom', animal: 'Dog', breed: 'Mutt' }),
//     React.createElement(Pet, { name: 'Dash', animal: 'Dog', breed: 'Mutt' }),
//     React.createElement(Pet, {
//       name: 'Tootles',
//       animal: 'Dog',
//       breed: 'Minx'
//     }),
//     React.createElement(Pet, {
//       name: 'Freddy',
//       animal: 'Frog',
//       breed: 'American Bullfrog'
//     })
//   ])
// }

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Tucker" animal="Dog" breed="Carolina Ditch Dog" />
      <Pet name="Tucker" animal="Dog" breed="Carolina Ditch Dog" />
      <Pet name="Tucker" animal="Dog" breed="Carolina Ditch Dog" />
      <SearchParams />
    </div>
  )
}
render(React.createElement(App), document.getElementById('root'))
