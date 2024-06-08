import { useContext, useEffect } from 'react';
import {BaseContext} from '../../base/Base';

export const WebpackPage = () => {
  const baseContext = useContext(BaseContext);
  useEffect(() => baseContext.setTitle('About Vite'));
  const code = `
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notfound: resolve(__dirname, '404.html'),
      },
    },
  },
})
      `;

  return (
    <div>
      <div className="margin-bottom-md">
        Vite is a bundler for modules defined by vite.config.ts. The main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
      </div>
      <div className="margin-bottom-md">
        Browse the contents in the left sidebar.
      </div>
      <div className="margin-bottom-md">
        If you are new to vite, you may want to start by reading this page or the Getting started section on the left.
      </div>

      <pre>{code}</pre>
    </div>
  );
}

export default WebpackPage;