import { API_PATH } from './apiPath';

const APP_VERSION = 1;
const API_ENV = (process.env.NODE_ENV && process.env.NODE_ENV === 'production') ? process.env.NODE_ENV : 'development';

const Settings = {
  APP_VERSION,
  API_ROOT: API_PATH[API_ENV].API_ROOT,
  MESSAGES_TYPES: {
    INPROGRESS: 'INPROGRESS',
    ERROR: 'ERROR',
    WARNING: 'WARNING',
    SUCCESS: 'SUCCESS',
    S3_SUCCESS: 'SUCCESS',
    INFO: 'INFO',
    FAIL: 'FAIL',
  },
  getApiUrlFromRoot(url) {
    return this.API_ROOT + url;
  },
  getHeaders(headers) {
    const HEADERS = {
      JSON: {
        'Content-Type': 'application/json',
      },
      URL_ENCODED: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      MULTIPART_FORM_DATA: {
        'Content-Type': 'multipart/form-data',
      },
      TEXT_HTML: {
        'Content-Type': 'text/html',
      },

    };
    function getHeaders() {
      let headerObj = [];
      for (const i in headers) {
        const header = HEADERS[headers[i]];
        headerObj = Object.assign(headerObj, header);
      }
      return headerObj;
    }
    return getHeaders();
  },
};

export default Settings;
