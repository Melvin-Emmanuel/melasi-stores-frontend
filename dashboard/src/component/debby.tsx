import {useState, useEffect} from "react"

const HotelMetricsComponent = () =>{
    //step 1: state to hold the selected period value
    const [period, setPeriod] = useState(1)
    const [HotelMetrics, setHotelMetrics] = useState(null)

    //step 2: function to get hotel metrics based on  the selected  period
    const getHotelMetrics = async () =>{
        try{
            const response = await apiGet(`/Dashboard/getHotelMetrics/${period}`, {
                headers: {Authorization: `Bearer ${bearerToken}`}
            })
            console.log(response)
            setHotelMetrics(response.data.data)
        }catch(error){
            console.log("error fetching hotel metrics", error)
        }
    }

    //step 3: fetch data whenever the period changes
useEffect(()=>{
    getHotelMetrics()
}, [period])

//step 4: handle changes in the select input
const handlePeriodChange = (event:any) =>{
    setPeriod(event.target.value)
}
return(
    <div>
        {/* step 5: select input to change the period */}
        <select value={period} onChange={handlePeriodChange}>
            <option value="1">Daily</option>
            <option value="2">Weekly</option>
            <option value="3">Monthly</option>
            <option value="4">Yearly</option>
        </select>
    </div>
)
}
