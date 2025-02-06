import { HeaderStyled } from "./HeaderStyled";
import { client } from "../../contentful.js";
import { useEffect, useState } from "react";

client.getEntry("4Qs8UAPOUAccLNUQ3rFK4N")
    .then((entry) => console.log(entry))
    .catch(console.error);

export const Header = () => {  // Named export
    const [data, setData] = useState()


    useEffect(() => {
        client.getEntry("4Qs8UAPOUAccLNUQ3rFK4N")
            .then((entry) => setData(entry))
            .catch(console.error);
    }, [])
    console.log(data)

        return (
            <HeaderStyled>
                <h1>{data?.fields.title}</h1>
            </HeaderStyled>
        );
    };