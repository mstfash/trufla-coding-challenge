import Axios from 'axios';
import { Filters } from '../helper/interfaces';
import { SERVER_URL } from '../helper/constants';


Axios.interceptors.request.use(function (config: any) {
  if (config.url.startsWith('/')) {
    config.url = SERVER_URL + config.url;
  }
  return config;
});

const fetchDepartments = () => Axios.get(`/api/departments`);

export let cancelKeywordRequest: any;

const fetchProducts = ({
  limit = '5',
  page = '0',
  dep_id = '',
  promo_code = '',
  query = '',
}: Filters) => {
  return Axios({
    method: 'GET',
    url: `/api/products?limit=${limit}&page=${page}&dep_id=${dep_id}&promo_code=${promo_code}&query=${query}`,
    cancelToken: new Axios.CancelToken((c) => (cancelKeywordRequest = c)),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const api = {fetchDepartments,
  fetchProducts,}

export default api
