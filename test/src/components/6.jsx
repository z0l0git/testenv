import { Seven } from "@/components/7";

export const Six = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>6</h1>
      <Seven name1={name1} />
    </div>
  );
};
