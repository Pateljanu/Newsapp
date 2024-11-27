import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=525bdfcdc6af47239188fd9aa1a84c2c&pageSize=20";
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
    });
  }
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=525bdfcdc6af47239188fd9aa1a84c2c&page=${
      this.state.page + 1
    }&pageSize=20`;
    if (this.state.page + 1 > Math.ceil(this.totalResults / 20)) {
    } else {
      let data = await fetch(url);
      console.log("next");
      let parsedata = await data.json();
      console.log(parsedata);

      this.setState({
        page: this.state.page + 1,
        articles: parsedata.articles,
      });
    }
  };
  handlePriviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=525bdfcdc6af47239188fd9aa1a84c2c&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);

    this.setState({
      page: this.state.page - 1,
      articles: parsedata.articles,
    });
  };
  render() {
    return (
      <div className="container my-3">
        <h2>Aaj Tak-Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imgeurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button "
            className="btn btn-dark"
            onClick={this.handlePriviousClick}
          >
            Privious
          </button>
          <button
          
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
