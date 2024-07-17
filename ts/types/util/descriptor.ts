type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>;
};
