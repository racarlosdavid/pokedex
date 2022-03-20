import React, {  useState,useEffect } from "react";
import Card from "./Card";
import { useUser } from "../context/UserContext"; 
import { toast } from 'react-toastify'
import config from '../config/config';
import NavbarDashboard from './NavbarDashboard';

const UserPokemons = () => {
    const [page,setPage] = useState(0);
    const [nickname,setNickname] = useState('');

    const [pokemons, setPokemons] = useState([])
    const context_user = useUser()

    useEffect(() => {
        const getAllPokemons = () => {
            fetch(`${config.BACKEND}/user/getPokemons/userid/${context_user.id}`, {
                method: "GET"
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                
                if (data.error == null) {
                    
                    setPokemons([...data.msj])
                    
                    
                }else{
                    toast.error(data.msj)
                }
            })
            .catch(error => {
                console.log(error)
            })

            
        }
        getAllPokemons()
        //console.log(pokemons)
    },[]);

    const paginationPokes = () => {
        return pokemons.slice(page,page+100)
    }

    const nextPage = () => { 
        //setPage(page+100);
        if (page+100 <= 898) {
            setPage(page+100);
        }
    }

    const previewPage = () => {
        if (page-10 >= 0) {
            setPage(page-100);
        }
    }

    const  handleAddPokemon = (pokemon) => {
        console.log("hola",pokemon,nickname)
        //aqui hago el fetch POST para guardar el pokemon al usuario
        
    }

    const handleInputChange = (event) => {
        setNickname( event.target.value);
    }

    return(
        <div>
            <NavbarDashboard></NavbarDashboard>
            <br></br>
            <div className="row row-cols-1 row-cols-md-5 g-4">
                { paginationPokes().map((pokemon) => (   //{idPokemon, name, moves, types, url_photo}                  
                    <Card pokemon={pokemon} handleAddPokemon={handleAddPokemon} handleInputChange={handleInputChange}></Card>
                ))}
            </div>
            <nav aria-label="navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                    <button type="button" className="btn btn-outline-primary" onClick={previewPage}>Previous</button>
                    </li>
                    <li className="page-item">
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                    <li className="page-item">
                    <button type="button" className="btn btn-outline-primary" onClick={nextPage}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default UserPokemons;
