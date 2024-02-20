import { Three } from "@/components/3";

export const Two = (props) => {
  const { name1 } = props;
  return (
    <div>
      <h1>2</h1>
      <Three name1={name1} />
    </div>
  );
};
