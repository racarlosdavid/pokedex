import Moves from "./Moves";
import Save from "./Save";

function Card({ pokemon,handleAddPokemon,handleInputChange }) {
    return (
        <div key={pokemon.idPokemon} >
            <div className="card h-100">
            <div className="container-fluid">
  

                <div className="row g-1 align-items-center">
                    <img src={pokemon.url_photo} alt={pokemon.name} style={{height:200, width:200}}/>
                    <table>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td><h5 className="card-title">Name: </h5></td>
                                        <td><h5 className="card-title text-primary"> {pokemon.name}</h5></td>
                                    </tr>
                                    <tr>
                                        <td><h5 className="card-title">Moves: </h5></td>
                                        <td><Moves pokemon={pokemon}></Moves></td>
                                    </tr>
                                    </tbody>
                                </table> 
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                 <div className="card-footer">
                    <div className="row g-1 align-items-center">
                        <Save pokemon={pokemon}></Save>
                    </div>
                     {/* 
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="nickname" className="col-form-label">Nickname</label>
                         </div>
                        <div className="col-auto">
                            <input type="text" name="nickname" id="nickname"  onChange={handleInputChange} className="form-control"></input>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-outline-success" onClick={() => handleAddPokemon(pokemon)}>
                            <i className="bi bi-plus-square"></i>
                            </button>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </div>

    )
}

export default Card;