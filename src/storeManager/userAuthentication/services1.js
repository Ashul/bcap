// import { getApi, postApi } from '@storeManager/common/repository';
// import GlobalConfig from '../../config/globalConfig';
// import { AxiosService } from '@services/apiService';

// class UserAuthService {
//   userContact(payload) {
//     const requestObj = { ...postApi };
//     //const requestObj = { ...getApi };
//     requestObj.params = { ...payload };
//     requestObj.url = `${GlobalConfig.API_ROOT}/contact`;
//     //requestObj.url = '/mocks/register.json';
//     const api = new AxiosService(requestObj);
//     return api.doAjax();
//   }

//   resetPassword(payload) {
//     const requestObj = { ...postApi };
//     requestObj.params = { ...payload };
//     requestObj.url = `${GlobalConfig.NODE_API_ROOT}${getUrlFromMockManifest().apiPath['myaccount_forgot_pwd_success']}`;
//     const api = new AxiosService(requestObj);
//     return api.doAjax();
//   }

//   changePassword(payload) {
//     const requestObj = { ...postApi };
//     requestObj.params = { ...payload };
//     requestObj.url = `${GlobalConfig.NODE_API_ROOT}${getUrlFromMockManifest().apiPath['myaccount_user_changepwd']}`;
//     const api = new AxiosService(requestObj);
//     return api.doAjax();
//   }

//   validateTokenForResetPassword(token) {
//     const requestObj = { ...postApi };
//     requestObj.params = {};
//     requestObj.url = `${GlobalConfig.NODE_API_ROOT}${getUrlFromMockManifest().apiPath['myaccount_forgot_tkn_validate']}/${token}`;
//     const api = new AxiosService(requestObj);
//     return api.doAjax();
//   }
// }
// export const userAuthService = new UserAuthService();
