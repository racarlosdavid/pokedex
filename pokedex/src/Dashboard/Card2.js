import Moves from "./Moves";

function Card({ pokemon }) {
    return (
        <div key={pokemon.idPokemon} className="col">
            <div >
                <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={pokemon.url_photo} alt={pokemon.name} style={{height:200, width:200}}/>
                        </td>
                        <td>
                        
                            <table>
                            <tbody>
                                <tr>
                                    <td><h5 className="card-title">Name: </h5></td>
                                    <td><h5 className="card-title text-primary"> {pokemon.name}</h5></td>
                                </tr>
                                <tr>
                                    <td><h5 className="card-title">Nickname: </h5></td>
                                    <td><h5 className="card-title text-primary"> {pokemon.nickname}</h5></td>
                                </tr>
                                <tr>
                                    <td></td>
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
    )
}

export default Card;