import SimpleCrypto from 'simple-crypto-js';

const defaults = {
  GUID: null,
  licenseKey: null,
  deviceExternalId: null,
};

export interface CacheState {
  /*  */
  licenseKey: string;
  GUID: string;
  deviceExternalId: string;
}

export interface ActionType {
  type: string;
  payload: any;
}

export default (state: CacheState, action: ActionType) => {
  switch (action.type) {
    case 'CACHE_LICENSE': {
      const simpleCrypto = new SimpleCrypto(action.payload.GUID);
      const licenseKey = simpleCrypto.encrypt(action.payload.licenseKey);
      return { ...state, ...action.payload, licenseKey };
    }
    case 'CACHE_CHECKS': {
      return { ...state, ...action.payload };
    }
    case 'LOGIN_REQUEST': {
      return { ...state, deviceExternalId: action.payload.deviceExternalId };
    }
    default:
      return { ...state };
  }
};
