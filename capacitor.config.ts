import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.smartnotespro.app',
  appName: 'SmartNotesPro',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#f8fafc',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      style: 'DEFAULT',
      backgroundColor: '#f8fafc',
    },
  },
};

export default config;
