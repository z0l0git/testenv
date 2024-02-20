import { Six } from "@/components/6";

export const Five = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>5</h1>
      <Six name1={name1} />
    </div>
  );
};
