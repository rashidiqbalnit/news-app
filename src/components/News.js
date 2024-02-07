import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
 }

  constructor(props){
    super(props);
     console.log("Constructor")
      this.state={
         articles: [],
         loading: true,
         page: 1,
         totalResults : 0
      }
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - DailyNews`;
  }
  

  async updateNews(){
      this.props.setProgress(10);
      const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.props.setProgress(30);
      this.setState({loading: true});
      let data= await fetch(url);
      this.props.setProgress(70);
      console.log(data);
      let parsedData=await data.json()
      this.setState({
        articles: parsedData.articles, 
        totalResults: parsedData.totalResults,
        loading: false
      })
      this.props.setProgress(100);
  }

  //The componentDidMount() method's main purpose is to perform any setup tasks or face effects required for the element to work decently.
  async componentDidMount(){
      this.updateNews();
      //let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f1ab3e5b2fa4670bf8496be16ac1428&page=1&pageSize=${this.props.pageSize}`;
      //this.setState({loading: true});
      //let data= await fetch(url);
      //console.log(data);
      //let parsedData=await data.json()
      //console.log(parsedData);
      //this.setState({
      //  articles: parsedData.articles, 
      //  totalResults: parsedData.totalResults,
      //  loading: false
      //})
  }


    handlePrevClick = async ()=>{
      //console.log("P")
      //let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f1ab3e5b2fa4670bf8496be16ac1428&page=${this.props.page-1}&pageSize=${this.props.pageSize}`;
      //this.setState({loading: true});
      //let data= await fetch(url);
      //console.log(data);
      //let parseData=await data.json()
      ////console.log(parseData);
      //this.setState({
      //  page: this.state.page-1,
      //  articles: parseData.articles,
      //  loading: false
      //})
      this.setState({page: this.state.page-1});
      this.updateNews();
     }


     handleNextClick = async()=>{
     //console.log("N")
     //if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
     //{

     //let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f1ab3e5b2fa4670bf8496be16ac1428&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
     //this.setState({loading: true});
     //let data= await fetch(url);
     //console.log(data);
     //let parseData=await data.json()
     //this.setState({
     //  page: this.state.page+1,
     //  articles: parseData.articles,
     //  loading: false
     //})
     //
     this.setState({page: this.state.page+1});
     this.updateNews();
    }

    fetchMoreData = async () => {
      this.setState({page: this.state.page+1})
      //this.updateNews()
      const url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      console.log(data);
      let parsedData=await data.json()
      this.setState({
        articles: this.state.articles.concat(parsedData.articles), 
        totalResults: parsedData.totalResults,
      })
    };

  render() {
    return (
      <>
      <h1 className="text-center" style={{margin: '30px 0px'}}>DailyNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
       {this.state.loading && <Spinner/>}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="container">

        <div className="row">
        {this.state.articles.map((element)=>{  //{this.state.articles && this.state.articles.map((element)}
          return <div className="col-md-4" key={element.url}>
                   <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} 
                             imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} 
                             source={element.source.name}/>
                 </div>
             })}
        </div>

        </div>
        </InfiniteScroll>

        {/*Button
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>/}
        </div>
        */}

      </>
    )
  }
}

export default News
