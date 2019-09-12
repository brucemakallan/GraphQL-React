import React, { Component } from 'react';
import { Query } from 'react-apollo';
import FETCH_ALL_ARTICLES from './article-queries';


class Articles extends Component {
  state = { }

  render() {
    return (
      <Query query={FETCH_ALL_ARTICLES}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching ...</div>;
          if (error) return <div>Error!</div>;
          return (
            <div>
              {data.articles.map(article => (
                <div key={article.id}>
                  <div>{article.title}</div>
                  <div>{article.body}</div>
                  <div>{article.imageUrl}</div>
                  <div>{`${article.author.firstName} ${article.author.lastName}`}</div>
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Articles;
