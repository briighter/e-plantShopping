// In your server file (e.g., server.js)
import { createServer } from 'vite';

const server = await createServer();

if (import.meta.hot) {
    import.meta.hot.on('vite:beforeFullReload', () => {
        console.log('Reloading server...');
        server.close();
    });

    import.meta.hot.dispose(() => {
        server.close();
    });
}