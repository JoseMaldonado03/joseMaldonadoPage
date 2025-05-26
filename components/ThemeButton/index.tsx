'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Button from './Button';

export default function ThemeButton() {
  const [rendered, setRendered] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => setRendered(true), []);

  if (!rendered) {
    return <Button isDark={false} />;
  }

  return (
    <Button
      isDark={isDark}
      onClick={() => setTheme(isDark ? 'default' : 'dark')}
    />
  );
}
