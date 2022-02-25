import { StatsContainer, ChartsContainer, Loading } from "../../components"
import { useAppContext } from "../../context/appContext"
import { useEffect } from "react"

const Stats = () => {
    const { showStats, isLoading, monthlyApplications } = useAppContext()

    useEffect(() => {
        showStats()
    }, [])
    if (isLoading) {
        return <Loading center />
    }
    return (
        <>
            <StatsContainer/>
            {monthlyApplications.length > 0 && <ChartsContainer/>}
        </>
        
    )
}

export default Stats