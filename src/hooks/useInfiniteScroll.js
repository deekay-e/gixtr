import { useCallback, useEffect } from 'react'

const useInfiniteScroll = (bodyRef, bottomLineRef, callback) => {
  const handleScroll = useCallback(() => {
    const containerHeight = bodyRef?.current?.getBoundingClientHeight().height
    const { top: blTop } = bottomLineRef?.current?.getBoundingClientHeight()
    if (blTop <= containerHeight)
      callback()
  }, [bodyRef, bottomLineRef, callback])

  useEffect(() => {
    const brCurrent = bodyRef?.current
    brCurrent?.addEventListener('scroll', handleScroll, true)

    return () => brCurrent.removeEventListener('scroll', handleScroll, true)
  }, [bodyRef, handleScroll])
}

export default useInfiniteScroll
