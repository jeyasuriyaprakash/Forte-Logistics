import ApiManager from './ApiManager';

export const user_login = async data => {
  try {
    const result = await ApiManager('/adminUserLoginNew', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data:{"credentials":{"email":"","password":""}}
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
