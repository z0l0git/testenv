import { Nine } from "@/components/9";
export const Eight = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>8</h1>
      <Nine name1={name1} />
    </div>
  );
};
