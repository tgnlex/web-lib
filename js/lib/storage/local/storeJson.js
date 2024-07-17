
function storeJson(name, obj) {
  const json = JSON.stringify(obj);
  localStorage.setItem(`${name}`, json_data)
};

