import ListReload from "../context/ListReload";
import axios from "axios";
import trash from '../../assets/img/trash.svg'
import { useContext } from "react";

export default function EraseHabit (habit) {
        const { reload, setReload } = useContext(ListReload)

        function rerender () {
                if (!reload) {setReload(true)} else {setReload(false)}
                console.log(reload)
            }

        const config = {
                headers: {
                    Authorization: `Bearer ${habit.token}`
                }
            }

        function apagar () {

                if (window.confirm("Você realmente quer apagar esse hábito?")) {
                const request =  axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.habit}`, config);
    
             
                request.then( rerender )
                request.then( () => alert("Hábito apagado com sucesso!") ) 
                }

                
                
            
        }
       
        return (
                <>
                <img src={trash} onClick={apagar}/>
                </>
        )
                

    
}