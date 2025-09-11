import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'InvoicePal',
  webDir: 'dist',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '646717088545-fil699741liiii8dsqlj1ha4nu4igbpc.apps.googleusercontent.com', // from Google Cloud console (OAuth 2.0)
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
