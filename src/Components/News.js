import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 3,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    // article = [
    //     {
    //         "source": {
    //             "id": "the-verge",
    //             "name": "The Verge"
    //         },
    //         "author": "Alex Heath",
    //         "title": "Zuck turns up the heat",
    //         "description": "Meta CEO Mark Zuckerberg has bluntly told his employees that he expects them to work harder. But with their confidence in him at an all-time low, it’s unclear if they’ll rise to the challenge.",
    //         "url": "https://www.theverge.com/23277797/mark-zuckerberg-meta-facebook-employees-pressure",
    //         "urlToImage": null,
    //         "publishedAt": "2022-07-26T12:00:00Z",
    //         "content": "Photo: Amelia Holowaty Krales and Alex Castro / Sculpture: Okamoto Studio Custom Ice\r\n\n \n\n\n As Meta’s growth slows, Mark Zuckerberg is pushing even harder. Will his employees melt under the pressure?… [+17958 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Stocks wobble on Walmart warning, looming Fed hike - Reuters",
    //         "description": "Asian shares wobbled on Tuesday and bonds were firm as a profit warning from Walmart put consumption and company earnings under a cloud ahead of what is likely to be another sharp U.S. interest rate hike.",
    //         "url": "https://www.reuters.com/markets/europe/global-markets-wrapup-1-2022-07-26/",
    //         "urlToImage": "https://www.reuters.com/resizer/AysGGSd10sYex-xyJoNcSPFglzU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NT44ZEEGFFPZROV4KQSEPPSLN4.jpg",
    //         "publishedAt": "2022-07-26T02:44:00Z",
    //         "content": "HONG KONG, July 26 (Reuters) - Asian shares wobbled on Tuesday and bonds were firm as a profit warning from Walmart put consumption and company earnings under a cloud ahead of what is likely to be an… [+2400 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": null,
    //         "title": "Taiwan Q2 GDP to gain from chip exports, but face COVID headwinds - Reuters.com",
    //         "description": "Taiwan's trade-reliant economy is expected to have expanded on the back of strong global demand for computer chips, though COVID-19 lockdowns in top export market China and a surge in domestic infections could drag on demand, a Reuters poll showed.",
    //         "url": "https://www.reuters.com/markets/asia/taiwan-q2-gdp-gain-chip-exports-face-covid-headwinds-2022-07-26/",
    //         "urlToImage": null,
    //         "publishedAt": "2022-07-26T02:52:00Z",
    //         "content": "TAIPEI, July 26 (Reuters) - Taiwan's trade-reliant economy is expected to have expanded on the back of strong global demand for computer chips, though COVID-19 lockdowns in top export market China an… [+2146 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MacRumors"
    //         },
    //         "author": "Sami Fathi",
    //         "title": "Apple Replaces Last Remaining Intel-Made Component in M2 MacBook Air",
    //         "description": "In the M2 MacBook Air, Apple has replaced an Intel-made component responsible for controlling the USB and Thunderbolt ports with a custom-made controller, meaning the last remnants of Intel are now fully out of the latest Mac.\n\n\n\n\n\nEarlier this month, the rep…",
    //         "url": "https://www.macrumors.com/2022/07/26/apple-replaces-intel-component-in-macbook-air/",
    //         "urlToImage": "https://images.macrumors.com/t/kdZPgdGBtn7KigCgvnbjP2ffY70=/2500x/article-new/2022/06/M2-MacBook-Air-2022-Feature0007.jpg",
    //         "publishedAt": "2022-07-26T10:17:13Z",
    //         "content": "In the M2MacBook Air, Apple has replaced an Intel-made component responsible for controlling the USB and Thunderbolt ports with a custom-made controller, meaning the last remnants of Intel are now fu… [+977 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "gglover@insider.com (George Glover)",
    //         "title": "Global stocks mixed as analysts anticipate another 'snooze-fest' ahead of July Fed meeting and Big Tech earnings",
    //         "description": "Tech giants Apple, Amazon, Microsoft, and Alphabet will all release quarterly earnings reports later this week.",
    //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-federal-reserve-meeting-big-tech-earnings-2022-7",
    //         "urlToImage": "https://i.insider.com/6140f3bff0cb130019e8c243?width=1200&format=jpeg",
    //         "publishedAt": "2022-07-26T08:38:03Z",
    //         "content": "Markets were subdued once again on Tuesday as investors waited on the Federal Reserve's latest meeting and the release of Big Tech quarterly earnings reports later this week.\r\nThe Federal Open Market… [+1825 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "jerb@insider.com (Jordan Parker Erb)",
    //         "title": "Facebook employees are preparing for staff cuts of up to 10%",
    //         "description": "The biggest story in tech right now is that Facebook employees are preparing for layoffs — with some predicting cuts of up to 10%.",
    //         "url": "https://www.businessinsider.com/meta-facebook-employees-expect-layoffs-2022-7",
    //         "urlToImage": "https://i.insider.com/62df16f1d571050018ad7b00?width=1200&format=jpeg",
    //         "publishedAt": "2022-07-26T10:15:00Z",
    //         "content": "Hey, maybe you should take it easy. Yes, you. While major industry figures like Elon Musk believe working 80 hours a week is the only way to \"change the world,\" research suggests working less can act… [+3946 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "business-insider",
    //             "name": "Business Insider"
    //         },
    //         "author": "gglover@insider.com (George Glover)",
    //         "title": "This latest rally is full of 'wishful thinking' and stocks have further to fall as the Fed fights inflation, Morgan Stanley says",
    //         "description": "The stock market is looking resilient, but the CIO of the bank's wealth management division expects the Federal Reserve to keep hiking rates.",
    //         "url": "https://markets.businessinsider.com/news/stocks/bear-market-rally-stocks-outlook-analysis-morgan-stanley-wealth-management-2022-7",
    //         "urlToImage": "https://i.insider.com/62dfaddbd571050018ad8022?width=1200&format=jpeg",
    //         "publishedAt": "2022-07-26T10:11:55Z",
    //         "content": "Investors should brace for further Federal Reserve hawkishness that will likely cause July's stock market rebound to fizzle out, according to Morgan Stanley Wealth Management.\r\nThe S&amp;P 500 has cl… [+2109 chars]"
    //     }
    // ]
    article = []
    constructor(){
        super();
        console.log('News constructor');
        this.state = {
            article : this.article,
            loading : false, 
            page: 1,
        }
    }
    async componentDidMount(){
        console.log('News componentDidMount');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ece7c4f3951e4bde964a70ad771916d0&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({article: parsedData.articles, totalResults : parsedData.totalResults, loading: false});
    }


    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ece7c4f3951e4bde964a70ad771916d0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            article: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {

        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ece7c4f3951e4bde964a70ad771916d0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();
            
            this.setState({
                page: this.state.page + 1,
                article: parsedData.articles,
                loading: false
            })
    }
}


  render() {
    return (
        <> 
        <div className="container my-3">
            <h3 className='text-center' style={{margin:"35px"}}>NewsMonkey - Top Headlines</h3>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.article.map((element) => {
                return <div key = {element.url}  className="col-md-4">
                <NewsItem title = {element.title?element.title.slice(0, 40) + "...":""} description = { element.description?element.description.slice(0, 90)+"...":""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
            </div>
            })}
            </div>
            <div className="container d-flex justify-content-between">
            <button disabled = {this.state.page <= 1} type="button" className="btn btn-dark" onClick = {this.handlePrevClick} > ← Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick = {this.handleNextClick} >Next → </button>
            </div>
        </div>
    </>
    )
  }
}

export default News