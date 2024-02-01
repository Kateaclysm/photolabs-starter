import React from 'react';
import PhotoList from './components/PhotoList'
import photos from './mocks/photos'
import './App.scss';
import topics from './mocks/topics'
import HomeRoute from './components/HomeRoute';
// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
