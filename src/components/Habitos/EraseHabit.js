import axios from "axios";
import { useEffect, useState } from "react";
import trash from '../../assets/img/trash.svg'

export default function EraseHabit (habit, reloadPage) {

        const config = {
                headers: {
                    Authorization: `Bearer ${habit.token}`
                }
            }

        function apagar () {
                const request =  axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.habit}`, config);
    
                request.then(
                alert("Você deletou seu hábito!")
                )
                
            
        }
       
        return (
                <>
                <img src={trash} onClick={apagar}/>
                </>
        )
                

    
}