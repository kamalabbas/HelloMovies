interface Props {
  count: number;
}

export const SkeletonText = ({ count }: Props) => {
  return (
    <>
      <div className="skeleton h-5 w-[50%] mb-8"></div>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="skeleton h-5 w-full mb-8"></div>
      ))}
    </>
  );
};
