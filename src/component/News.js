import React , {useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // making states
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async() => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);

    props.setProgress(30)

    let parsedData = await data.json();
    props.setProgress(70)
    // console.log(parsedData)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setPage(page)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsJunction`;
    updateNews();
  }, [])

  // fetch more data
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setPage(page+1)
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }


    return (
        <>
        <h1 className='my-3 text-center'>NewsJunction - Top {capitalize(props.category)} headlines</h1>

        {/* infinite scroll */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={(articles.length < totalResults)}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row">
              {articles.map((element, index) => {
                return <div key={index} className="col-md-4">
                  <NewsItem title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} sourceColor={props.sourceColor} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}

News.callerdefaulProps = {
  country: 'in',
  category: 'general',
  pageSize: 6
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number
}

export default News
