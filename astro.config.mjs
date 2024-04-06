import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react()],
    scripts: [
        {
            src: '/path/to/countdown.js',
            type: 'module',
        },
    ],
    output: 'hybrid',
    adapter: netlify(),
});
