
const defaults = {
  popup: null,
};


export interface ActionType {
  type: string;
  payload: any;
}

export default (state = defaults, action: ActionType) => {
  switch (action.type) {
    case 'SHOW_POPUP': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return { ...state };
  }
};
