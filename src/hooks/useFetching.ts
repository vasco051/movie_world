import { useState } from "react";


export const useFetching = (callback: any) => {
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  const [ isError, setIsError ] = useState<string>("")

  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch (e: any) {
      // TODO загуглить тивизацию ошибки
      setIsError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [ fetching, isLoading, isError ] as const
}