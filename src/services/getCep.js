export const getCep = (cep) => {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .catch((err) => console.log(err.message));
};
