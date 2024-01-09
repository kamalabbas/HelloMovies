import useSeries from "../hooks/useSeries";

export const SeriesPage = () => {
  const {data, error} = useSeries();

  if(error) throw error;

  return (
    <>
        {data?.results?.map(item => <div key={item.id}> {item.name} </div>)}
    </>
  )
};