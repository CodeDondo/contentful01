import { MainStyled } from "./Main.js";
import { client } from "../../contentful.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useEffect, useState } from "react";

client.getEntry("43jLiGNYJTwQQmVjC7oyXV")
  .then((entry) => console.log(entry))
  .catch(console.error);

export const Main = () => {  // Named export
  const [data, setData] = useState()


  useEffect(() => {
    client.getEntry("43jLiGNYJTwQQmVjC7oyXV")
      .then((entry) => setData(entry))
      .catch(console.error);
  }, [])
  console.log(data)

  return (
    <MainStyled>
      <div>
        <h1>{data?.fields.title}</h1>
        <img src={"https:" + data?.fields.image.fields.file.url} />
        {documentToReactComponents(data?.fields.body)}
      </div>
    </MainStyled>
  );
};
