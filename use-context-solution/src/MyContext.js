import { createContext, useState } from "react";

const MyContext = createContext();

function Provider(props) {
  const [productCnt, setProductCnt] = useState(0);
  return (
    <MyContext.Provider value={[productCnt, setProductCnt]}>
      {props.children}
    </MyContext.Provider>
  );
}

export { Provider };
export default MyContext;
