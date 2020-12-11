import React, { Component } from 'react';
import Greeting from '../../components/Greeting/Greeting';
import PosterList from '../../components/PosterList/PosterList';
import withLoading from '../../components/withLoading/withLoading';
import ShowService from '../../services/showService';

const PosterListWithLoader = withLoading(PosterList);

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Greeting username={this.props.username} />
        <PosterListWithLoader
          title="netflix originals"
          load={ShowService.getNetflixOriginals}
        />
        <PosterListWithLoader
          title="trending now"
          load={ShowService.getTrendingNow}
        />
      </div>
    );
  }
}
