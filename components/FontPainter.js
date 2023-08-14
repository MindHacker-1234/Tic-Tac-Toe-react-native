import React, { useState, useEffect } from 'react';
import { Font } from 'react-native';

const FontLoader = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'SignPainterHouseScriptRegular': require('../assets/fonts/SignPainterHouseScriptRegular.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }
};

export default FontLoader;