const APICALL = () => fetch();

const myFunction = () => {
  APICALL()
    .then(() => new Promise(() => {}))
    .then()
    .catch(() => new Promise(() => {}));

  const myFunctionTwo = () => new Promise(() => {});

  const myFunctionThree = () => new Promise(() => {});

  const myFunctionFour = () => new Promise(() => {});

  const myAsyncFunction = async () => {
    try {
      await APICALL();
      return myFunctionTwo;
    } catch (error) {
      return myFunctionThree;
    } finally {
      return myFunctionFour;
    }
  };
};
