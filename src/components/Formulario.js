import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineSearch } from "react-icons/hi";
import { TbHomeCheck } from "react-icons/tb";


import '../components/formulario.css'

const Formulario = () => {
    return(
        <div className='container'>
            <form>
                <label className='label-compra'>Pretensão</label><br />
                <div className="inputs compra">
                    <select>
                        <option>Comprar</option>
                        <option>MOGI DAS CRUZES</option>
                        <option>SUZANO</option>
                        <option>FERRAZ</option>
                    </select>
                </div>
                <div className="inputs">
                    <TbHomeCheck className='icon-home' />
                    <select>
                        <option>Tipo de imóvel</option>
                        <option>MOGI DAS CRUZES</option>
                        <option>SUZANO</option>
                        <option>FERRAZ</option>
                    </select>
                </div>
                <div className="inputs search">
                    <label><HiOutlineSearch className='icon-search' />
                        <input placeholder="Digite o condominio, rão, bairro ou"/>
                    </label>
                </div>
                <div className='div-button'>
                    <button>Encontrar imóvel</button>
                </div>
            </form>
        </div>
    )
}

export default Formulario;