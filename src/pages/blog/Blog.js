import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blog.css";

const Blog = () => {
  const [myData, setData] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=e816fdfdc42e44c6a7509ef139610e4c"
      )
      .then((result1) => {
        // console.log("here's the data", result1.data);
        // const specilalityArr = result1.data.map((item, index) => {
        //   return item.health;
        // });
        // console.log("SHaktiman", result1.data.data);
        // console.log("console_data", [...new Set(specilalityArr)]);
        setData(result1.data.articles);
        console.log("data", result1.data.articles);
      });
  };
  useEffect(() => {
    getNews();
    const interval = setInterval(() => {
      getNews();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container pt-3 pb-3">
      <h3 className="blog_heading">Healthcare Blogs</h3>
      <div className="row">
        {myData.map((ndata, index) => {
          return (
            <>
              <div className="col-4 mb-4 cardholder">
                <div className="card ncard ">
                  <img
                    className="card-img-top img-fluid card_img"
                    src={ndata.urlToImage}
                    alt="we'll back soon"
                  />
                  <div className="card-body">
                    <h6 className="card-title">
                      {ndata.title.slice(0, 55).toUpperCase()}
                    </h6>
                    <p className="card-text">
                      {ndata.description?.slice(0, 120)}
                    </p>
                    <a
                      href={ndata.url}
                      className="btn btn-outline-primary"
                      data-mdb-ripple-color="dark"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
