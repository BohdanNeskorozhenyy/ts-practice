// react-autocomplete

type MyReturnType<Fn> = Fn extends (...args) => infer ReturnData ? ReturnData : never;

const fn = (v: boolean) => {
    if (v)
      return 1
    else
      return 2
  }
  
  type a = MyReturnType<typeof fn> // should be "1 | 2"