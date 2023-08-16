import React , {useEffect} from 'react'

export const useTitle = (title) => {
  useEffect(()=>{
    document.title = `${title}-shoppmate` ;


  } , [title])
  return (
    <div>useTitel</div>
  )
}
