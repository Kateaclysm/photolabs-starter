import react, {useReducer, useEffect} from 'react';


function reducer(state, action) {
  switch (action.type) {

    case 'SET_PHOTO_DATA': // Returns the current photo information.
      return {
        ...state,
        photoData: action.payload
      };
      
      case "OPEN_MODAL": // Returns the "close-up" view of a selected photo.
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload
      };

        case "CLOSE_MODAL": // Closes the currently selected "close-up" view of a selected photo.
        return {
          ...state,
          isModalOpen: false
        };

        case 'TOGGLE_FAVORITE': // Toggles if a given photo has been "liked" or not.
        const isFavorite = state.favoritePhotos.includes(action.payload);
        return {
          ...state,
          favoritePhotos: isFavorite ? state.favoritePhotos.filter(id => id !== action.payload) // Remove from favorites
          : //OR---------------------
          [...state.favoritePhotos, action.payload], // Add to favorites
        };

        case "SET_TOPIC_DATA": //Returns the current Topic Information.
        return {
          ...state,
          topicData: action.payload
        };

      default: return state;
  };
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
  photoData: [],
  topicData: []
};

// UseApplicationData is our reducer function responsible for handling all functions related to state change.
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTopicPhotos= (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
    .then(res=> res.json())
    .then(data => {
      dispatch({type: "SET_PHOTO_DATA", payload: data})
    });
  };

  useEffect(() =>{
    fetch("/api/photos")
    .then(res => res.json())
    .then(data => {
      dispatch({ type: "SET_PHOTO_DATA", payload: data})
    })
  }, []);
  
  useEffect(() =>{
    fetch("/api/topics")
    .then(res => res.json())
    .then(data => {
      dispatch({ type: "SET_TOPIC_DATA", payload: data})
    })
  }, []);


  const openModalWithPhoto = (photo) => {
    dispatch({ type: 'OPEN_MODAL', payload: photo});
  };

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  };

  const toggleFavorite = (photoId) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photoId})
  }
  return {
    state,
    closeModal,
    openModalWithPhoto,
    toggleFavorite,
    fetchTopicPhotos
  };
};



export default useApplicationData;