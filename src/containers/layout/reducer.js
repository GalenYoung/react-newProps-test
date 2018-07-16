const ActionTypes = {
  CONTAINER_LEFT_CHANGE_TAB: "CONTAINER_LEFT_CHANGE_TAB"
};

function changeTab(status) {
  return {
    type: ActionTypes.CONTAINER_LEFT_CHANGE_TAB,
    status
  };
}

export const actions = {
  changeTab
};

const initialState ={
  activeTab: 1
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.CONTAINER_LEFT_CHANGE_TAB: {
      return { activeTab: action.status };
    }
    default:
      return state;
  }
}
