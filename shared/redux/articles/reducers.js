import actions from './actions';
import moment from 'moment'
const initState = {
  isLoading: false,
  errorMessage: false,
  articles: {},
  modalActive: false,
  article: {
    id: moment(),
    title: '',
    slug: '',
    excerpt: '',
    status: 'publish', // publish
    description: '',
    created_at: new Date().getTime(),
    deleted_at: null, // soft delete
  },
};

export default function reducer(
  state = initState,
  { type, payload, newRecord }
) {
  switch (type) {
    case actions.LOAD_FROM_FIRESTORE:
      return {
        ...state,
        isLoading: true,
        errorMessage: false,
        modalActive: false,
      };
    case actions.LOAD_FROM_FIRESTORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        articles: payload.data,
        errorMessage: false,
      };
    case actions.LOAD_FROM_FIRESTORE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'There is a loading problem',
      };
    case actions.TOGGLE_FIRESTORE_HANDLE_MODAL:
      return {
        ...state,
        modalActive: !state.modalActive,
        article: payload.data == null ? initState.article : payload.data,
      };
    case actions.FIRESTORE_UPDATE:
      return {
        ...state,
        article: payload.data,
      };
    default:
      return state;
  }
}
