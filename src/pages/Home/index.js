import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import * as S from './styled'

function Home() {
  const [ usuario, setUsuario ] = useState('');
  const history = useHistory();
  const [erro , setErro] = useState(false);

  function handlePesquisa (){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false)
      history.push('/repositories')
    })
    .catch(err => {
      setErro(true);
    });
  }

  return (
    <S.HomeContainer>
      <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e=>{setUsuario(e.target.value)}} />
      <S.Button className="" type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
    </S.Container>
    {erro ? <S.MessageError>Ocorreu um Erro. Tente novamente .</S.MessageError>: ''}
    </S.HomeContainer>

  );
}

export default Home;
