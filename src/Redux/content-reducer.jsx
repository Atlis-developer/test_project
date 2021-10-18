import { contentAPI } from '../api/api';

export const setPhotos = (photos) =>({ type: 'photosSeach-reducer/SET-PHOTOS', photos: photos})
export const changePhotos = (photos) =>({ type: 'photosSeach-reducer/CHANGE-PHOTOS', photos: photos})


const SET_PHOTOS = 'photosSeach-reducer/SET-PHOTOS';
const CHANGE_PHOTOS = 'photosSeach-reducer/CHANGE-PHOTOS'

let defaultState = {
    photos: [ ]
}

export const contentReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SET_PHOTOS: {
            return {
                ...state,
                photos: action.photos.map(p =>{
                    return p
                })
            }
        };
        case CHANGE_PHOTOS: {
            return {
                ...state,
                photos: action.photos.map(p =>{
                    return p
                })
            }
        };
        default:
            return state;
    }
};

export const contentThunkCreator = () => async (dispatch) =>{

        let response = await contentAPI.getPhotos()
            dispatch(setPhotos(response.data));    
}

export const changePhotosThunk = (photos) => (dispatch) =>{
            dispatch(changePhotos(photos));
}

