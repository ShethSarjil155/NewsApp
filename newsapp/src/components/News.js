import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  //  articles = [
  // //   //   {
  // //   //   "source": {
  // //   //   "id": null,
  // //   //   "name": "9to5Mac"
  // //   //   },
  // //   //   "author": "Filipe Espósito",
  // //   //   "title": "TikTok expands integration with Apple Music and Spotify to more regions",
  // //   //   "description": "TikTok last year introduced a new “Add to Music app” feature which, as the name suggests, lets users quickly save a song they’ve heard in a TikTok video to Apple Music, Spotify or even Amazon Music. While this feature was previously available to users in the …",
  // //   //   "url": "https://9to5mac.com/2024/02/23/tiktok-apple-music-spotify/",
  // //   //   "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/11/tiktok-apple-music.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  // //   //   "publishedAt": "2024-02-24T00:23:12Z",
  // //   //   "content": "TikTok last year introduced a new “Add to Music app” feature which, as the name suggests, lets users quickly save a song they’ve heard in a TikTok video to Apple Music, Spotify or even Amazon Music. … [+1452 chars]"
  // //   //   },
  // //   //   {
  // //   //   "source": {
  // //   //   "id": null,
  // //   //   "name": "Yanko Design"
  // //   //   },
  // //   //   "author": "Srishti Mitra",
  // //   //   "title": "Top 10 Pop Culture Designs To Help You Stay Relevant & Up-To-Date",
  // //   //   "description": "Top 10 Pop Culture Designs To Help You Stay Relevant & Up-To-DateIf you are a lover of pop culture, and your personal space is adorned with Pokémon, Star Wars, Marvel, or Mario-themed products and devices, then,...",
  // //   //   "url": "https://www.yankodesign.com/2024/02/23/top-10-pop-culture-designs-to-help-you-stay-relevant-up-to-date/",
  // //   //   "urlToImage": "https://www.yankodesign.com/images/design_news/2024/02/top-10-pop-culture-designs/top_10_pop_culture_designs_yanko_design_hero.webp",
  // //   //   "publishedAt": "2024-02-24T00:30:53Z",
  // //   //   "content": "If you are a lover of pop culture, and your personal space is adorned with Pokémon, Star Wars, Marvel, or Mario-themed products and devices, then, well you’re at the right spot. There’s something abo… [+9426 chars]"
  // //   //   },
  // //   //   {
  // //   //   "source": {
  // //   //   "id": null,
  // //   //   "name": "Wwwhatsnew.com"
  // //   //   },
  // //   //   "author": "Nelson Herrera",
  // //   //   "title": "3 trucos para saber el momento ideal para cambiar mi iPhone por uno nuevo",
  // //   //   "description": "Todos los dispositivos electrónicos tienen un tiempo de vida útil para su funcionamiento en óptimas condiciones. Depende de nuestro uso y cuidado si extendemos o recortamos dicho periodo, y por ello es necesario conocer algunos factores imprescindibles para d…",
  // //   //   "url": "https://wwwhatsnew.com/2024/02/24/3-trucos-para-saber-el-momento-ideal-para-cambiar-mi-iphone-por-uno-nuevo/",
  // //   //   "urlToImage": "https://wwwhatsnew.com/wp-content/uploads/2024/02/bateria-movil.jpg",
  // //   //   "publishedAt": "2024-02-24T03:00:30Z",
  // //   //   "content": "Todos los dispositivos electrónicos tienen un tiempo de vida útil para su funcionamiento en óptimas condiciones. Depende de nuestro uso y cuidado si extendemos o recortamos dicho periodo, y por ello … [+2536 chars]"
  // //   //   },
  // //   //   {
  // //   //   "source": {
  // //   //   "id": null,
  // //   //   "name": "Slickdeals.net"
  // //   //   },
  // //   //   "author": "Eragorn",
  // //   //   "title": "41mm Apple Watch Series 8 GPS + Cellular Aluminum Case w/ Sport Band (2 Colors) $199 + Free Shipping",
  // //   //   "description": "Walmart has the *41mm* *Apple Watch Series 8 GPS + Cellular (PRODUCT)RED Aluminum Case* *with (PRODUCT)RED Sport Band* on sale for *$199*. *Shipping is free*. \n \nWalmart has the *41mm* *Apple Watch...",
  // //   //   "url": "https://slickdeals.net/f/17313571-41mm-apple-watch-series-8-gps-cellular-aluminum-case-w-sport-band-red-199-free-shipping",
  // //   //   "urlToImage": "https://static.slickdealscdn.com/attachment/1/4/8/5/3/3/0/15042175.attach",
  // //   //   "publishedAt": "2024-02-24T00:45:04Z",
  // //   //   "content": "Walmart[walmart.com] has the Apple Watch Series 8 GPS + Cellular 41mm (PRODUCT)RED Aluminum Case on sale for $199. Shipping is free.Walmart[walmart.com] has the Apple Watch Series 8 GPS + Cellular 41… [+60 chars]"
  // //   //   },
  //  ]

  const capitalized = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  // document.title= `${capitalized(props.category)}-News Jadiya App`;

  const updatenews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=yourapikey&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let passedata = await data.json();
    props.setProgress(70);
    console.log(passedata);
    setArticles(passedata.articles);
    setTotalResults(passedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updatenews();
  }, []);

  //  const handlePrev = async () => {
  //     // this.setState({ page: this.state.page - 1 });
  //     // this.updatenews();
  //     setPage(page-1)
  //     updatenews();
  //   };

  //   const handleNext = async () => {
  //     // this.setState({ page: this.state.page + 1 });
  //     setPage(page+1)
  //     updatenews();
  //   };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=d586a7584fd7441d8c88e80ed595fe1d&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let passedata = await data.json();
    console.log(passedata);
    setArticles(articles.concat(passedata.articles));
    setTotalResults(passedata.totalResults);
  };

  return (
    <>
      <h1 className="text-center " style={{ marginTop: "70px" }}>
        News FGV App {capitalized(props.category)} Category
      </h1>
      {loading && <Spinner />}
      {articles && totalResults && (
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 70)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
      <div className="container d-flex justify-content-between">
        {/* <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-primary"
              onClick={this.handlePrev}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / props.pageSize)
              }
              type="button"
              className="btn btn-primary"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button> */}
      </div>
    </>
  );
};

News.defaultPropTypes = {
  pageSize: 8,
  country: "in",
  category: "sports",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
