import apisauce from 'apisauce';

const create = (baseURL = 'http://ec2-52-57-131-113.eu-central-1.compute.amazonaws.com/api') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  });

  function json(data) {
    return JSON.stringify(data);
  }

  function formData(data) {
    const str = [];
    for (const p in data) {
      const key = encodeURIComponent(p);
      const value = encodeURIComponent(data[p]);
      str.push(`${key}=${value}`);
    }
    return str.join('&');
  }

  const login = (authData) => {
    const { email, password } = authData.user;
    return api.post('/user/login', json({
      email,
      password,
    }));
  };

  return {
    login,
  };
};

// let's return back our create method as the default.
export default {
  create,
};
