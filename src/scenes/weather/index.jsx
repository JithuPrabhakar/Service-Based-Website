import React, { useState } from 'react'
import axios from 'axios'
import "../../index.css"
// import { tokens } from '../../theme';
import Header from '../../components/Header';
// import { Box, useTheme } from '@mui/material';

const Weather = () => {
    // const theme = useTheme()
    // const colors = tokens(theme.palette.mode)

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ee8d1f754f5ba5fc4702acaf9e38e4f2`

    const searchLocation = (e) => {
        if (e.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
    }

    return (
        <div className="m-5">
            <Header title="WEATHER" subtitle="Current Weather Data" />
            <div className="search text-center p-4">
                <input type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    onKeyUp={searchLocation}
                    placeholder="Enter Location"
                    className='py-3 px-6 text-xl rounded-3xl border border-solid border-white'
                />
            </div>
            <div className="container max-w-2xl h-fit m-auto px-4 flex flex-col justify-between">
                <div className="top w-full my-4">
                    <div className="location">
                        <p className='text-2xl'>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h2 className="text-8xl">{data.main.temp.toFixed()}°C</h2> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p className="text-2xl">{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name !== undefined &&
                    <div className="bottom flex justify-between text-center w-full my-4 mx-auto p-4 rounded-xl bg-[rgba(255,255,255,0.2)]">
                        <div className="feels">
                            <p className="text-2xl">Feels Like</p>
                            {data.main ? <p className="text-2xl font-bold">{data.main.feels_like.toFixed()}°C</p> : null}
                        </div>
                        <div className="humidity">
                            <p className="text-2xl">Humidity</p>
                            {data.main ? <p className="text-2xl font-bold">{data.main.humidity}%</p> : null}
                        </div>
                        <div className="wind">
                            <p className="text-2xl">Wind Speed</p>
                            {data.wind ? <p className="text-2xl font-bold">{data.wind.speed.toFixed()}km/h</p> : null}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Weather
