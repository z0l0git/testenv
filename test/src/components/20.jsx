import { Twentyone } from "@/components/21";
export const Twenty = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>20</h1>
      <Twentyone name1={name1} />
    </div>
  );
};
