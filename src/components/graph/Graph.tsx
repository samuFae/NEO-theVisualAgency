import { useDatesStore } from "@store/hooks"

export const Graph = () => {

    /*     const {
            data: posts,
            isLoading,
            isSuccess,
            isError,
            error,
        } = useGetNasaQuery("2023-02-01"); */
    const { displayDate, apiDate } = useDatesStore();

    return (
        <>{/* {JSON.stringify(posts)} */displayDate + " " + apiDate}</>
    )
}
