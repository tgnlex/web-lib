function reactStream(data: any) {
  return new Response(data, {
    header: {"Content-Type": "text/html" },
  })
};

export {reactStream};
