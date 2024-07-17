import {renderToReadableStream} from 'react-dom/server';
function reactStream(data: any) {
  return new Response(data, {
    header: {"Content-Type": "text/html" },
  })
};

async function ssr(path: string, component, url: URL = url) {
  if (url.pathname === path) {
    const view = await renderToReadableStream(component);
    return reactStream(view);
  } else { 
    return new Response('Component not found');
  }
};

export {render};
