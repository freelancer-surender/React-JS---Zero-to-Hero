import MyContext from "./MyContext";
import { useContext } from "react";

const AnotherComponent = () => {
    const value = useContext(MyContext);
    return (
        <>
            <h2>Another Component - {value}</h2>
        </>
    );
}

export default AnotherComponent;