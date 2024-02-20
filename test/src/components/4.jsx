import { Five } from "@/components/5";
export const Four = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>4</h1>
      <Five name1={name1} />
    </div>
  );
};
