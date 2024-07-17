import {EventEmitter, errorMonitor} from 'node:events';

class BasicEmitter extends EventEmitter {}

const ee = new BasicEmitter();

ee.on(errorMonitor, (err) => {
  console.log(err);
})

ee.on('greet', () => {
  console.log('[SSE]: Hello Client!!');
});

ee.on('status', () => {
  console.log('[SSE]: Server is running.')
})

ee.emit('greet')