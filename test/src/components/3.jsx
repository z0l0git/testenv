import { Four } from "@/components/4";

export const Three = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>3</h1>
      <Four name1={name1} />
    </div>
  );
};
