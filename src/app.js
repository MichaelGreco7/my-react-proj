const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

const App = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('div', {}, [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Trigger',
        animal: 'Dog',
        breed: 'Visla'
      }),
      React.createElement(Pet, {
        name: 'George',
        animal: 'Cat',
        breed: 'Lion'
      }),
      React.createElement(Pet, {
        name: 'Boo-boo',
        animal: 'SSSSnake',
        breed: 'Viper'
      }),
      React.createElement(Pet, {
        name: 'Valentine',
        animal: 'Horse',
        breed: 'Mustang'
      })
    ])
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
