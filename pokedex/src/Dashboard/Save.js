import React, {  useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { toast } from 'react-toastify'
import config from '../config/config';
import { useUser } from "../context/UserContext"; 

function Save({ pokemon }) {
    const [show, setShow] = useState(false);
    const [nickname,setNickname] = useState('');
    const context_user = useUser()
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const  handleAddPokemon = (pokemon) => {
        //console.log("hola",pokemon,nickname)
        const data = {
            id_user: context_user.id,
            idPokemon: pokemon.idPokemon,
            name: pokemon.name,
            nickname: nickname,
            moves: pokemon.moves,
            types: pokemon.types,
            url_photo: pokemon.url_photo
        }
        setNickname('');
        handleClose()
        console.log(data)
        //aqui hago el fetch POST para guardar el pokemon al usuario
        
        fetch(`${config.BACKEND}/user/addPokemon`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => { console.log("fetxhs")
            if (data.error == null) {
                toast.success('Pokemon added to your collection', {
                    /*
                    onClose: () => {
                        history.replace("/mypokemons")
                    }*/
                })
            }else{
                toast.error(data.msj)
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleInputChange = (event) => {
        setNickname(event.target.value);
    }


    return (
      <>
        <button type="button" className="btn btn-outline-primary" onClick={handleShow}>
          Save
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closebutton>
            <Modal.Title>Give a nickname to your new pokemon</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="nickname" className="col-form-label">Nickname</label>
                         </div>
                        <div className="col-auto">
                            <input type="text" name="nickname" id="nickname"  onChange={handleInputChange} className="form-control"></input>
                        </div>
                    </div>

          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-outline-primary" onClick={handleClose}>
              Close
            </button>
            <button type="button" className="btn btn-outline-success" onClick={() => handleAddPokemon(pokemon)}>
                            <i className="bi bi-plus-square"></i> Add to my collection
                            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default Save;