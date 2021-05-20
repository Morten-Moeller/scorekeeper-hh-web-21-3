function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function loadFromLocal(key) {
  const jsonString = localStorage.getItem(key)
  return JSON.parse(jsonString)
}

export { saveToLocal, loadFromLocal }
