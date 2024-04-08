import { usePathname } from 'next/navigation';

export const useCustomRouter = () => {
  const pathname = usePathname();
  const isActive = (url: string) => url === pathname;

  return { pathname, isActive };
};
