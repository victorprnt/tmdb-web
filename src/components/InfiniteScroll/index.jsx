import React, { useEffect, useRef, useState } from 'react';

const divStyle = {
  color: 'blue',
  height: '250px',
  // textAlign: 'center',
  padding: '5px 10px',
  background: '#eee',
  marginTop: '15px',
};

const containerStyle = {
  maxWidth: '1280px',
  margin: '0 auto',
};

const InfiniteScroll = () => {
  // base list for HTML elements
  const [postList, setPostList] = useState({ list: [1, 2, 3, 4] });
  // control for wihich page is being loaded
  const [page, setPage] = useState(1);
  // Study what useRef does!!!!!!!!!!!!!!!!!!!!!!!!!
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, options);
    loader.current && observer.observe(loader.current);
  }, []);

  useEffect(() => {
    // here we simulate adding new posts to List
    const newList = postList.list.concat([1, 1, 1, 1]);
    setPostList({
      list: newList,
    });
    console.log(`>>>>>${page}`);
  }, [page]);

  const handleObserver = entities => {
    const target = entities[0];
    const newPage = page + 1;
    // eslint-disable-next-line no-shadow
    target.isIntersecting && setPage(newPage);
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="post-list">
        {postList.list.map(post => {
          return (
            <div key={Math.random()} className="post" style={divStyle}>
              <h2> {post} </h2>
            </div>
          );
        })}
        <div className="loading" ref={loader}>
          <h2>Load More</h2>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
