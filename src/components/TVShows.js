import React from 'react';
import PropTypes from 'prop-types';
import ActionLink from './ActionLink';


const TVShows = ({ item, img, genres, index }) => (
  <tr>
    <td>{index}</td>
    <td>{item.name}
      {/* <img src={'https://image.tmdb.org/t/p/w185_and_h278_bestv2/'+item.poster_path} /> */}
      <img src={img.src || '../download.png'} width="185" height="278" />
    </td>
    <td>{Math.round(item.popularity)}</td>
    <td>{item.first_air_date.replace(/-/g, '/')}</td>
    <td>{item.genre_ids.map(item => genres[item]).join(', ')}</td>
    <td onMouseEnter={(e) =>  e.currentTarget.innerText = item.overview}
        onMouseLeave={(e) =>  e.currentTarget.innerText = item.overview.slice(0, 350)+'.....'}
            >{item.overview.slice(0, 350)+'.....'}</td>
     <td>
       <ActionLink showId = {item.id}>Recommendations</ActionLink>
       <ActionLink showId = {item.id}>Similar</ActionLink>
     </td>
  </tr>
)

// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default TVShows