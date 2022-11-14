import { useQuery } from '@tanstack/react-query';
import { nhAPI } from 'services/notificationHub';

interface Notification {
  id: string;
}

const fetchNotifications = async (): Promise<[Notification]> => {
  const response = await nhAPI.getNotifications();
  return response.data;
};

export const useNotifications = () => {
  return useQuery(['notifications'], fetchNotifications);
};
