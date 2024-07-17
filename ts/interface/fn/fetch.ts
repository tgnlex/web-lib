interface Fetcher {
  fetchData(done: (data: unknown, elapsedTime: number) => void): void;
}
