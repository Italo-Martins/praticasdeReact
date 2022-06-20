import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import * as S from './styled';

function Repositories(){
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
    
        if(repositoriesName!== null){
            repositoriesName = JSON.parse(repositoriesName);
            setRepositories(repositoriesName);
            localStorage.clear();
        }else{
            history.push('/')
        }

    }, []);
    
    return(
        <S.Container>
            <S.Title>Reposiório</S.Title>
            <S.List>
                {repositories.map((repository, index) =>{
                    return(
                        <S.ListItem key={index}>Projeto: {repository}</S.ListItem>
                    )
                })}
            </S.List>
            <S.linkHome to="/">Voltar</S.linkHome>
        </S.Container>
    )
}

export default Repositories;