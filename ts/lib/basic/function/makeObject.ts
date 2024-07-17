
function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D&M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return {...data, ...methods} as D & M;
}
