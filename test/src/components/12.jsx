import { Thirteen } from "@/components/13";
export const Twelve = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>12</h1>
      <Thirteen name1={name1} />
    </div>
  );
};
