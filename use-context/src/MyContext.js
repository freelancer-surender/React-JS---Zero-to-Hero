import { createContext, useState } from "react";

const MyContext = createContext();

function Provider(props) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <MyContext.Provider value={[isSubscribed, setIsSubscribed]}>
            {props.children}
        </MyContext.Provider>
    )
}

export { Provider };
export default MyContext;