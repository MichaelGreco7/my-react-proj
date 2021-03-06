import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
const SearchParams = () => {
  const [location, setLocation] = useState('Seattle, WA')
  const [animal, setAnimal] = useState('All')
  const [breed, setBreed] = useState('')
  const [breeds, setBreeds] = useState(['Terrior'])

  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet.breeds(animal).then(result => {
      console.log({ result })

      const catNames = result.breeds.map(catObj => catObj.name)
      setBreeds(catNames)
    })
  }, [animal])

  return (
    <div className="search-params">
      <form>
        <label htmlForm="location">
          location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id={animal}
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          breed
          <select
            id={breed}
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
