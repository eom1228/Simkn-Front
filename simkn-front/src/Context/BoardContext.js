import React, { useReducer, createContext, useContext } from 'react';

const initialBoards = {
  inputs: {
    photoURL: '',
    title: '',
    description: '',
  },
  portfolios: [],
  news: [],
  notices: [],
  //   portfolios: [
  //     {
  //       id: 1,
  //       photoURL: '',
  //       title: '',
  //       description: '',
  //       createdAt: '',
  //     },
  //     {
  //       id: 2,
  //       photoURL: '',
  //       title: '',
  //       description: '',
  //       createdAt: '',
  //     }
  //   ],
  //   news: [
  //     {
  //       id: 1,
  //       photoURL: '',
  //       title: '',
  //       description: '',
  //       createdAt: '',
  //     },
  //     {
  //       id: 2,
  //       photoURL: '',
  //       title: '',
  //       description: '',
  //       createdAt: '',
  //     }
  //   ],
  //   notices: [
  //     {
  //       id: 1,
  //       photoURL: '',
  //       title: '',
  //       description: '',
  //       createdAt: '',
  //     },
  //     {
  //       id: 2,
  //       photoURL: '',
  //       title: '',
  //       description: '',
  //       createdAt: '',
  //     }
  //   ]
};

function boardReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'ADD_PORTFOLIO':
      return {
        inputs: initialBoards.inputs,
        portfolios: state.portfolios.concat(action.portfolio),
      };
    case 'REMOVE_PORTFOLIO':
      return {
        ...state,
        portfolios: state.portfolios.filter((portfolio) => portfolio.id !== action.id),
      };
    case 'EDIT_PORTFOLIO':
      return {
        ...state,
        portfolios: state.portfolios.map((portfolio) => {
          if (portfolio.id !== action.id) {
            return portfolio;
          }
          return action.portfolio;
        }),
      };
    case 'ADD_NEWS':
      return {
        inputs: initialBoards.inputs,
        news: state.news.concat(action.singleNews),
      };
    case 'REMOVE_NEWS':
      return {
        ...state,
        news: state.news.filter((singleNews) => singleNews.id !== action.id),
      };
    case 'EDIT_NEWS':
      return {
        ...state,
        news: state.news.map((singleNews) => {
          if (singleNews.id !== action.id) {
            return singleNews;
          }
          return action.singleNews;
        }),
      };
    case 'ADD_NOTICE':
      return {
        inputs: initialBoards.inputs,
        notices: state.notices.concat(action.notice),
      };
    case 'REMOVE_NOTICE':
      return {
        ...state,
        notices: state.notices.filter((notice) => notice.id !== action.id),
      };
    case 'EDIT_NOTICE':
      return {
        ...state,
        notices: state.notices.map((notice) => {
          if (notice.id !== action.id) {
            return notice;
          }
          return action.notice;
        }),
      };
    default:
      return state;
  }
}

const BoardStateContext = createContext();
const BoardDispatchContext = createContext();

export function BoardProvider({ children }) {
  const [state, dispatch] = useReducer(boardReducer, initialBoards);

  return (
    <BoardStateContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>{children}</BoardDispatchContext.Provider>
    </BoardStateContext.Provider>
  );
}

export function useBoardState() {
  const context = useContext(BoardStateContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}

export function useBoardDispatch() {
  const context = useContext(BoardDispatchContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}
