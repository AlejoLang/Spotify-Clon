import './styles.css'

function ResultsMainTracks({results}) {

  const convertMsToMinutes = (time) => {
    const minutes = Math.floor(time / 60000)
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
  }
  console.log(results)

  return (
    <ul className='resultsMainTracksList'>
      {results?.map(item => 
        <li className='resultsMainTracksList-item'>
          <img src={item.album?.images[0]?.url} alt={item?.name} width='20' height={20} className='resultsMainTracksList-item-img'/>
          <div className='resultsMainTracksList-item-info'>
            <p className='resultsMainTracksList-item-name'>{item?.name}</p>
            <p className='resultsMainTracksList-item-artist'>
              {
                item?.artists
                  .map((artist) => artist?.name)
                  .join(', ')
              }
            </p>
          </div>
          <div className="resultsMainTracksList-item-duration">{convertMsToMinutes(item?.duration_ms)}</div>
        </li>
      )}
    </ul>
  )
}

export default ResultsMainTracks