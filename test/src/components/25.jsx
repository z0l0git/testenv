import { useContext } from "react";
import { NameContext } from "@/components/MainProvider";

export const Twentyfive = () => {
  const { name1, setName1 } = useContext(NameContext);

  return (
    <div>
      <h1>25 {name1}</h1>
    </div>
  );
};
