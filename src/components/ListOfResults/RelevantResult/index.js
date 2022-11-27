import './styles.css'

function RelevantResult({result}) {
  return (
    <div className="listOfResultsDiv-relevant">
        <img 
          src={result?.album?.images[0]?.url} 
          alt={result?.name}
          className="listOfResultsDiv-relevant-img" 
        />
        <div className="listOfResultsDiv-relevant-info">
          <p className="listOfResultsDiv-relevant-info-trackTitle">
            {result?.name}
          </p>
          <p className="listOfResultsDiv-relevant-info-trackArtists">
            {
              result?.artists
                .map((artist) => artist?.name)
                .join(', ')
            }
          </p>
          <p className="listOfResultsDiv-relevant-info-trackType">
            {result?.type}
          </p>
        </div>
      </div>
  )
}

export default RelevantResult