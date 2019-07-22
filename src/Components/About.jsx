import React from 'react';

export default function About(props) {
    const layoutStyles = {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',

    }
    const divStyles = {
        // color: "white",
        // backgroundColor: '#0000006b',
        // width: '250px',
        margin: '100px auto'
      }
    const pStyles = {
      padding: '15px',
      margin: '0 auto',
    }
    return (
      <div style={layoutStyles}>

      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <div style={divStyles}>
        <h1>Global Temperature Rise</h1>
        </div>
        </div>
          <div className="flip-card-back">
      <p style={pStyles}>The planet's average surface temperature has risen about 1.62 degrees Fahrenheit (0.9 degrees Celsius) since the late 19th century, a change driven largely by increased carbon dioxide and other human-made emissions into the atmosphere. Most of the warming occurred in the past 35 years, with the five warmest years on record taking place since 2010. Not only was 2016 the warmest year on record, but eight of the 12 months that make up the year — from January through September, with the exception of June — were the warmest on record for those respective months.</p>
          </div>
        </div>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <div style={divStyles}>

        <h1>Warming Oceans</h1>
        </div>
        </div>
          <div className="flip-card-back">
          <p style={pStyles}>The oceans have absorbed much of this increased heat, with the top 700 meters (about 2,300 feet) of ocean showing warming of more than 0.4 degrees Fahrenheit since 1969.</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <div style={divStyles}>

        <h1>Shrinking Ice Sheets</h1>
        </div>
        </div>
          <div className="flip-card-back">
      <p style={pStyles}>The Greenland and Antarctic ice sheets have decreased in mass. Data from NASA's Gravity Recovery and Climate Experiment show Greenland lost an average of 286 billion tons of ice per year between 1993 and 2016, while Antarctica lost about 127 billion tons of ice per year during the same time period. The rate of Antarctica ice mass loss has tripled in the last decade.</p>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
        <div className="flip-card-front">
        <div style={divStyles}>

        <h1>Glacial Retreat</h1>
        </div>
        </div>
          <div className="flip-card-back">
      <p style={pStyles}>Glaciers are retreating almost everywhere around the world — including in the Alps, Himalayas, Andes, Rockies, Alaska and Africa.</p>
          </div>
        </div>
      </div>

          <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
            <div style={divStyles}>

            <h1>Decreased Snow Cover</h1>
            </div>
            </div>
              <div className="flip-card-back">
              <p style={pStyles}>Satellite observations reveal that the amount of spring snow cover in the Northern Hemisphere has decreased over the past five decades and that the snow is melting earlier.</p>
              </div>
            </div>
          </div>



          <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
            <div style={divStyles}>

            <h1>Sea Level Rise</h1>
            </div>
            </div>
              <div className="flip-card-back">
              <p style={pStyles}>Global sea level rose about 8 inches in the last century. The rate in the last two decades, however, is nearly double that of the last century and is accelerating slightly every year.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
            <div style={divStyles}>

            <h1>Decling Arctic Sea Ice</h1>
            </div>
            </div>
              <div className="flip-card-back">
              <p style={pStyles}>Both the extent and thickness of Arctic sea ice has declined rapidly over the last several decades.</p>
              </div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
            <div className="flip-card-front">
            <div style={divStyles}>

            <h1>Extreme Events</h1>
            </div>
            </div>
              <div className="flip-card-back">
          <p style={pStyles}>The number of record high temperature events in the United States has been increasing, while the number of record low temperature events has been decreasing, since 1950. The U.S. has also witnessed increasing numbers of intense rainfall events.</p>
              </div>
            </div>
          </div>

        <div className="flip-card">
          <div className="flip-card-inner">
          <div className="flip-card-front">
          <div style={divStyles}>

          <h1>Ocean Acidification</h1>
          </div>
          </div>
            <div className="flip-card-back">
        <p style={pStyles}>Since the beginning of the Industrial Revolution, the acidity of surface ocean waters has increased by about 30 percent. This increase is the result of humans emitting more carbon dioxide into the atmosphere and hence more being absorbed into the oceans. The amount of carbon dioxide absorbed by the upper layer of the oceans is increasing by about 2 billion tons per year.</p>
            </div>
          </div>
        </div>

        </div>

    )
};
