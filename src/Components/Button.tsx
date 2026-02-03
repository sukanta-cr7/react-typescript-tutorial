import type { JSX } from "react";

export function Button(): JSX.Element {
    //Arrow function
    const ButtonTitle = () => {
        const variable: number = 1;
        const text: string = variable > 1000 ? "more than 1000" : "less than 1000";
        return <h3>{text}</h3>;
    };
    return (
    <button onClick={() => alert("Click")}>
        <ButtonTitle />
    </button>);
}