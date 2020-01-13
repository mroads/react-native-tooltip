export function showPopup(payload) {
  return {
    action: 'SHOW_POPUP',
    payload,
  };
}


export function hidePopup() {
  return {
    action: 'SHOW_POPUP',
    payload: {
      popup: null,
    },
  };
}
