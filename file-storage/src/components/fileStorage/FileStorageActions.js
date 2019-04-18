import store from '../../store'
import { showMessage, hideMessage } from './../status/StatusActions'

export const UPDATE_FILES = 'UPDATE_FILES'

function updateFiles(results) {
  return {
    type: UPDATE_FILES,
    payload: results
  }
}

export async function deleteFile(address, fileName) {
  let filestorage = store.getState().web3.filestorage;
  let pivateKey = '0x' + process.env.PRIVATE_KEY;
  showMessage("Deleting your file.");
  await filestorage.deleteFile(address, fileName, pivateKey);
  getFiles();
  hideMessage();
}

export async function download(link, index) {
  let filestorage = store.getState().web3.filestorage;
  showMessage("Downloading your file.");
  await filestorage.downloadToFile(link);
  hideMessage();
}

export async function preLoad(link, index) {
  let filestorage = store.getState().web3.filestorage;
  showMessage("Loading your image.");
  let file = await filestorage.downloadToBuffer(link);
      document.getElementById("image_" + index).src = 'data:image/png;base64,' + file.toString('base64');
  hideMessage();
}

export async function upload(fileName, fileData){
  let {account, filestorage} = store.getState().web3;
  let pivateKey = '0x' + process.env.PRIVATE_KEY;
  showMessage("Uploading your image.");
  await filestorage.uploadFile(account, fileName, fileData, pivateKey);
  hideMessage();
}

export async function getFiles(){
  let {account, filestorage} = store.getState().web3;
  let files = await filestorage.getFileInfoListByAddress(account);
  store.dispatch(updateFiles(files));
}


