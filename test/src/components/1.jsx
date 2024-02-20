import { Two } from "@/components/2";

export const One = (props) => {
  const { name1 } = props;

  return (
    <div>
      <h1>1</h1>
      <Two name1={name1} />
    </div>
  );
};
