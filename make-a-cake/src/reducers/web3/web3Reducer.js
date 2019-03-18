const initialState = {
  skale: false,
  web3Instance: null,
  web3Mainnet: null,
  web3SKALE: null,
  account: null,
  filestorage: null,
  files: [],
  ingredients: 0,
}

const web3Reducer = (state = initialState, action) => {
  if (action.type === 'WEB3_INITIALIZED')
  {
    return Object.assign({}, state, {
      web3Instance: action.payload.web3,
      web3Mainnet: action.payload.web3,
      web3SKALE: action.payload.web3SKALE,
      account: action.payload.account,
      filestorage: action.payload.filestorage,
    })
  }
  if (action.type === 'UPDATE_FILES')
  {
    return Object.assign({}, state, {
      files: action.payload
    })
  }
  if (action.type === 'USE_INGREDIENT')
  {
    console.log(state.ingredients++)
    return Object.assign({}, state, {
      ingredients: state.ingredients++
    })
  }
  if (action.type === 'WEB3_SKALE')
  {
    return Object.assign({}, state, {
      web3Instance: state.web3Instance,
      skale: true,
    })
  }
  if (action.type === 'WEB3_MAINNET')
  {
    return Object.assign({}, state, {
      web3Instance: state.web3Mainnet,
      skale: false,
      files: [],
    })
  }
  return state
}

export default web3Reducer
