
function render(path: string, data: any, url = url) {
  if (url === path) {
    return new Response(data);
  }
}

function server() {
  Bun.serve({
    port: 300, 
    async fetch(request) {
      let url = new URL(request.url);
      render("/", "hello world");
    }
  })
}
