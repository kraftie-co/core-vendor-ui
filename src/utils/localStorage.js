const LOCAL_STORAGE_NAMESPACE = 'KRAFTIE_VENDOR_APP';

function save(key, value) {
  try {
    window.localStorage.setItem(`${LOCAL_STORAGE_NAMESPACE}_${key}`, JSON.stringify(value));
  } catch (error) {
    // do nothing
  }
}

function load(key) {
  try {
    return JSON.parse(window.localStorage.getItem(`${LOCAL_STORAGE_NAMESPACE}_${key}`));
  } catch (error) {
    // do nothing
  }

  return undefined;
}

function remove(key) {
  window.localStorage.removeItem(`${LOCAL_STORAGE_NAMESPACE}_${key}`);
}

export { load, save, remove };
