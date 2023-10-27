//TODO add web storage

//temp array for testing
const tempStorage = {};

function getStorage() {
    return tempStorage;
}

function setStorage(key, value){
    tempStorage[key] = value;
}

function removePairFromStorage(key){
    delete tempStorage[key];
}

export {
    getStorage,
    setStorage,
    removePairFromStorage
}