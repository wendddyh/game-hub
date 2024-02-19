import React from 'react'
import useGenre from '../hooks/useGenre'

const GenreList = () => {
  const {genres} = useGenre();

  return (
    <ul>
      {genres.map(genre => <li color='white' key={genre.id}>{genre.name}</li>)}
    </ul>

  )
}

export default GenreList
