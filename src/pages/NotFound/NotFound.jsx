import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p>Sorry, this page not found!</p>
            <p> Please, go to{" "}
                <NavLink to="/">Home Page</NavLink>
            </p>
        </div>
    )
};

