import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    return <div>
        <h2>Oops!!!</h2>
        <h3>Something Went wrong 🫡</h3>
        <h1>{err.status} : {err.statusText}</h1>
    </div>
}

export default Error;