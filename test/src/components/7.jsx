import { Eight } from "@/components/8";
export const Seven = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>7</h1>
      <Eight name1={name1} />
    </div>
  );
};
