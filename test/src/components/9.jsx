import { Ten } from "@/components/10";
export const Nine = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>9</h1>
      <Ten name1={name1} />
    </div>
  );
};
