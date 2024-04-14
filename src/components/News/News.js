import React, { Component } from "react";
import NewsItems from "../NewsItem/NewsItems";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page:1,
      resultsFetched:0,
      totalResults:0,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}&apiKey=d5309e10ecdb4d79916eadf6d643ec94`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      loading: false,
      page:1,
      resultsFetched:parseData.articles.length+1,
      totalResults:parseData.totalResults+1
    });
  }

  
   paginationClick=async(page)=> {
    this.setState({
      ...this.state,
      loading: true,
    });
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page+page}&pageSize=${this.props.pageSize}&apiKey=d5309e10ecdb4d79916eadf6d643ec94`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      loading: false,
      page:this.state.page+page,
      totalResults:parseData.totalResults+1,
      resultsFetched:page>0?this.state.articles.length+1+parseData.articles.length+1:this.state.resultsFetched-this.state.articles.length-1
    });
  } 

  render() {
  //  let { pageSize } = this.props;
    return (
      <div className="container my-3">
        <h2 className="d-flex justify-content-center">NewsMonkey - Top Headlines</h2>
        {this.state.loading?(<div className="w-100 d-flex justify-content-center"><div className="spinner-border" role="status">
</div></div>):
        <><div className="row headline-scroll">
            {this.state.articles?.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element?.title?.length > 45
                      ? element?.title?.slice(0, 45) + "..."
                      : element?.title?.slice(0, 45)}
                    description={element?.description?.length > 88
                      ? element?.description?.slice(0, 88) + "..."
                      : element?.description?.slice(0, 88)}
                    url={element?.urlToImage}
                    newsUrl={element.url} />
                </div>
              );
            })}
          </div><div className="d-flex justify-content-between my-1">
              <div className="d-flex">      <button type="button" className="btn btn-dark" disabled={this.state.page === 1} onClick={() => { this.paginationClick(-1); } }>&larr; Previous</button></div>

              <div className="d-flex">      <button type="button" className="btn btn-dark" disabled={this.state.resultsFetched >= this.state.totalResults} onClick={() => { this.paginationClick(+1); } }>Next &rarr;</button> </div>
            </div></>
  }
      </div>
    );
  }
}
