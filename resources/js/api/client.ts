import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { RouteDefinition } from './wayfinder/wayfinder';

export type ApiStatus = 'ok' | 'error';

// If T = void, then data is optional, otherwise it is required
export type ApiResponse<T = void> = T extends void
  ? {
      status: ApiStatus;
      data?: never;
      message?: string;
    }
  : {
      status: ApiStatus;
      data: T;
      message?: string;
    };

// Type guards
export function isSuccessResponse<T>(
  response: ApiResponse<T>,
): response is ApiResponse<T> & { status: 'ok' } {
  return response.status === 'ok';
}

export function isErrorResponse<T>(
  response: ApiResponse<T>,
): response is ApiResponse<T> & { status: 'error'; message: string } {
  return response.status === 'error';
}

const apiClient: AxiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;

if (csrfToken) {
  apiClient.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
}

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => {
    if (error.response?.status === 401) {
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export const api = {
  get: <T = void>(url: string, config?: AxiosRequestConfig) =>
    apiClient.get<ApiResponse<T>>(url, config).then(res => res.data),

  post: <T = void>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.post<ApiResponse<T>>(url, data, config).then(res => res.data),

  put: <T = void>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.put<ApiResponse<T>>(url, data, config).then(res => res.data),

  patch: <T = void>(url: string, data?: unknown, config?: AxiosRequestConfig) =>
    apiClient.patch<ApiResponse<T>>(url, data, config).then(res => res.data),

  delete: <T = void>(url: string, config?: AxiosRequestConfig) =>
    apiClient.delete<ApiResponse<T>>(url, config).then(res => res.data),

  call: <T = void>(
    route: RouteDefinition<'get' | 'post' | 'put' | 'delete' | 'patch'>,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => {
    const method = 'method' in route ? route.method : 'get';

    switch (method) {
      case 'get':
        return api.get<T>(route.url, { ...config, params: data });
      case 'post':
        return api.post<T>(route.url, data, config);
      case 'put':
        return api.put<T>(route.url, data, config);
      case 'patch':
        return api.patch<T>(route.url, data, config);
      case 'delete':
        return api.delete<T>(route.url, config);
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }
  },
};

export default apiClient;
