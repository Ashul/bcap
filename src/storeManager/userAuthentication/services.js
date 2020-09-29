import GlobalConfig from '../../config/globalConfig';
import axios from 'axios';

export const userContact = (payload) => {
  const url = `${GlobalConfig.API_ROOT}/contact`;
  return axios.post(url, { ...payload })
  .then((response) => {
      const responseObj = response.data;
      return responseObj

    }).catch((e) => {
// console.log(e)
    });
};


export const applyOnline = (payload) => () =>{
   const url = `${GlobalConfig.API_ROOT}/apply`;
   return axios.post(url, { ...payload })
     .then((response) => {
       const responseObj = response && response.data;
       return responseObj
     }).catch((e) => {
//  console.log(e)
     });
};
 

export const GetFertilizerCompany = (payload) => () =>{
  const url = `${GlobalConfig.API_ROOT}/registration_form`;
  return axios.post(url, { ...payload })
  .then((response) => {
      const responseObj = response.data;
      return responseObj
    }).catch((e) => {
// console.log(e)
    });
};


export const checkStatus = (phone) => () => {
    const url = `${GlobalConfig.API_ROOT}/${phone}`;
    return axios.get(url)
    .then((response) => {
        const responseObj = response.data;
        return responseObj
      }).catch((e) => {
//   console.log(e)
      });
  };
  


 
 