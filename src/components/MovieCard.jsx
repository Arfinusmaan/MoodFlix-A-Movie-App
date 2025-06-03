import React from 'react'

const MovieCard = ({movie:{title, release_date, vote_average, poster_path, original_language}}) => {
  return (
    <div className='movie-card cursor-pointer'>
      <img src={poster_path? `https://images.tmdb.org/t/p/w500/${poster_path}`
        : '/no-movie.png'  
    } alt={title} />

    <div className='mt-4'>
            <h3>{title}</h3>
    </div>

        <div className='content'>
            <div className='rating'>
                <img src="star.svg" alt="star icon" />

                <p>{vote_average ? vote_average.toFixed(1)
                    : 'N/A'    
            }</p>

            <span>•</span>
            <p className='lang'>
                {original_language}
            </p>

            <span>•</span>
            <p>
                {release_date? release_date.split('-')[0]
                :'N/A'    
            }
            </p>

            </div>

        </div>

    </div>
  )
}

export default MovieCard
