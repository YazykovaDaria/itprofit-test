const url = 'http://localhost:9090/api/registration';

const registration = async (body:FormData) => {
  const response = await fetch(url, {
    method: 'POST',
    body,
  });
  return response.json();
};

export default registration;
