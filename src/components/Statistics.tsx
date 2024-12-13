interface propsStatistcs {
    type: string,
    value: number | null
}

function StatisticsUai (props: propsStatistcs){
    const { type, value } = props

    return(
        <>
            <div>
                <p>{type}</p>
                <div className="flex h-4 bg-slate-600">

                <p>{value}</p>
                </div>
            </div>
        </>
    )
}

export default StatisticsUai;