import react, {useReducer} from 'react';


function reducer(state, action) {
  switch (action.type) {
      case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload
      };

        case "CLOSE_MODAL":
        return {
          ...state,
          isModalOpen: false
        };

        case 'TOGGLE_FAVORITE':
        const isFavorite = state.favoritePhotos.includes(action.payload);
          return {
        ...state,
        favoritePhotos: isFavorite ? state.favoritePhotos.filter(id => id !== action.payload) // Remove from favorites
        : //OR---------------------
        [...state.favoritePhotos, action.payload], // Add to favorites
  };

      default: return state;
  };
};

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favoritePhotos: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    toggleFavorite
  };
};








export default useApplicationData;