import GlobalConfig from '../../../config/globalConfig';
import axios from 'axios';




export const Contactlist = () => () =>{
  const url = `${GlobalConfig.API_ROOT}/allcontact`;
  return axios.get(url)
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
    });
};

export const Registrationform = () => () =>{
  const url = `${GlobalConfig.API_ROOT}/all`;
  return axios.get(url)
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
    });
};
