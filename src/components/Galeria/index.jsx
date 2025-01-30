import styled from "styled-components";
import Populares from "./Populares/Populares";
import Tags from "./Tags";
import Titulo from "../Titulo";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const Galeria = () => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                </SecaoFluida>

                <Populares>

                </Populares>

            </GaleriaContainer>
        </>
    )
}

export default Galeria