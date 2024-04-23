interface Props {
  count: number,
  width?: number
}

export const SekeltonCard = ({ count, width}: Props) => {

  return (
    <>
      {Array.from({length: count}).map((_, index) => <div key={index} className={`skeleton h-[28.125rem]`} style={{width:width+'rem'}}></div>)}
      
    </>
  )
}
