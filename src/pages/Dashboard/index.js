import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logoImg from '../../assets/logo.svg';
import Loader from '../../components/Loader';
import Repository from '../../components/Repository';
import Map from '../../components/Map';

import { setUsuarioRequest } from '../../store/actions/usuario';

import { Container, Title, Form, UserInfo, Error } from './style';


const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const { info: usuario, starred, error, loading, hasUser } = useSelector(state => state.usuario);
  const dispatch = useDispatch();

  const handleSearchUsuario = (event) => {
    event.preventDefault();
    dispatch(setUsuarioRequest(userName));
    setUserName('');
  }

  return (
    <Container>
      <img src={logoImg} alt="Github App" width={100} />
      <Title>Explore usuários do GitHub</Title>

      <Form hasError={!!error} onSubmit={handleSearchUsuario}>
        <input
          placeholder="Digite o apelido do usuário no Github"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit" disabled={userName === ''}>Pesquisar</button>
      </Form>
      {!!error && <Error>{error}</Error>}

      {loading ? (<Loader color="#5c6bc0" width="150px" height="150px" />) : (
        <>
          {hasUser && (
            <>
              <UserInfo>
                <img src={usuario.avatar_url} alt="Daniel" />
                <div>
                  <strong>
                    {usuario.name}
                    <span>(@{usuario.login})</span>
                  </strong>
                  <p>{usuario.bio || 'Sem biografia'}</p>
                  <a href={usuario.html_url}>{usuario.html_url}</a>
                </div>
              </UserInfo>


              {usuario.location && <Map location={usuario.location} />}

              <Title>Repositórios com estrela</Title>
              {starred.map(repository => <Repository key={repository.id} repository={repository} />)}
            </>
          )}
        </>
      )}

    </Container>
  )
};

export default Dashboard;
