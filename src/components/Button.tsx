import { HTMLAttributes } from "react";

export default function Button(
    props: {
        variant: "primary" | "secondary";
    } & HTMLAttributes<HTMLButtonElement>
) {
    return <button></button>;
}
