import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import { trackEvent } from 'lib/utils/trackEvent';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClickThemeToggle = () => {
    trackEvent({
      eventName: `Toggle to ${colorMode === 'light' ? 'dark' : 'light'}`,
      eventData: { type: 'theme' },
    });
    toggleColorMode();
  };

  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={handleClickThemeToggle}
    />
  );
};

export default ThemeToggle;
