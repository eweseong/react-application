import React, { useContext } from 'react';
import Greeting from '../../components/Greeting/Greeting';
import PosterList from '../../components/PosterList/PosterList';
import withLoading from '../../components/withLoading/withLoading';
import UserContext from '../../contexts/UserContext';
import ShowService from '../../services/showService';

const PosterListWithLoader = withLoading(PosterList);

export default function Home() {
  const user = useContext(UserContext);

  return (
    <div className="home-page">
      <Greeting username={user.username} />
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
