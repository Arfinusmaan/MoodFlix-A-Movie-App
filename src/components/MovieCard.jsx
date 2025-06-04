import React from 'react'

const MovieCard = ({movie}) => {
  

  const {Title, Year, imdbRating, Poster, Language} = movie

  // console.log(movie)
  
  return (
    <div className='movie-card cursor-pointer'>
      <img className="w-[800] h-[400px]"  src={ Poster ? Poster
        : '/no-movie.png'  
    } alt={Title} />
      
    <div className='mt-4'>
            <h3 className='font-[palanquin]'>{Title}</h3>
    </div>

        <div className='content'>
            <div className='rating'>
                <img src="star.svg" alt="star icon" />

                <p>{imdbRating ? imdbRating
                    : 'N/A'    
            }</p>

            <span>•</span>
            <p className='lang'>
                {Language ? Language.split('').slice(0,3)
                :
                'N/A'}
            </p>

            <span>•</span>
            <p>
                {Year? Year.split('-')[0]
                :'N/A'    
            }
            </p>

            </div>

        </div>

    </div>
  )
}

export default MovieCard
