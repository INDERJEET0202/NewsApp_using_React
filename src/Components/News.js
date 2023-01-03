import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinner from './Spinner';

const News = (props) => {

    const [article, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    

    const capitalize = (str) => {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    const newsUpdate = async() => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`;
        newsUpdate();
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles((article)=>[...article, ...parsedData.articles]);
        // setArticles(article.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }



    // const handlePrevClick = async () => {
    //     setPage(page - 1);
    //     newsUpdate();
    // }

    // const handleNextClick = async () => {
    //     setPage(page + 1);
    //     newsUpdate();
    // }


        return (
            <>
                <h3 className='text-center' style={{ marginTop: "35px" }}>NewsMonkey - Top Headlines</h3>
                <p className='text-center' style={{ padding: '10px' }}>
                    Category: <strong>{capitalize(props.category)}</strong>
                </p>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {article.map((element) => {
                                return <div key={element.url} className="col-md-4">
                                    <NewsItem title={element.title ? element.title.slice(0, 40) + "..." : ""} description={element.description ? element.description.slice(0, 190) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} newsSource={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* For previous and next buttons */}
                {/* <div className="container d-flex justify-content-between">
            <button disabled = {page <= 1} type="button" className="btn btn-dark" onClick = {handlePrevClick} > ← Previous</button>
            <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick = {handleNextClick} >Next → </button>
            </div> */}
            </>
        )

}

News.defaultProps = {
    country: 'in',
    pageSize: 3,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News