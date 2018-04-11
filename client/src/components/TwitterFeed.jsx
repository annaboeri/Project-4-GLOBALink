import React from 'react'
import httpClient from '../httpClient'
import './TwitterFeed.css'


class TwitterFeed extends React.Component {

    state = {
        twitterTrends: []
    }

    componentDidMount(){
        httpClient.getTwitterTrends(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                twitterTrends: serverResponse.data
            })
        })
    } 

	render(){ 
        console.log(this.state.twitterTrends)
        return (
		<div className="TwitterFeed ticker-wrap">
            <div className="ticker">Top Twitter Trends:
                {this.state.twitterTrends.map((t, i) => {
                    return <div className="ticker__item" key={i}>
                        <a target="_blank" href={t.url}>{t.name}</a>
                        </div>
                }) }
               {/* <div className="ticker-item">Tweet</div> */}
            </div>
		</div>
    )
    }
}

export default TwitterFeed