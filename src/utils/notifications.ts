import { toast, ToastOptions } from 'react-toastify';

const notificationConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const notificationError = (message: string) =>
  toast.error(message, notificationConfig);

export const notificationSuccess = (message: string) =>
  toast.success(message, notificationConfig);

export const notificationInfo = (message: string) =>
  toast.info(message, notificationConfig);
