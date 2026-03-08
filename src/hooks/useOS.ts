import { useState, useEffect } from 'react';

type OS = 'mac' | 'windows' | 'other';

export const useOS = (): OS => {
  const [os, setOS] = useState<OS>('other');

  useEffect(() => {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes('mac') || userAgent.includes('mac')) {
      setOS('mac');
    } else if (platform.includes('win') || userAgent.includes('win')) {
      setOS('windows');
    } else {
      setOS('other');
    }
  }, []);

  return os;
};

export const useModifierKey = () => {
  const os = useOS();
  return os === 'mac' ? '⌘' : 'Ctrl';
};
