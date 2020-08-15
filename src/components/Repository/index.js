/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

import { RepositoryCard } from './style';

const Repository = ({ repository }) => {
  return (
    <RepositoryCard>
      <div>
        <img src={repository.owner.avatar_url} alt="Autor" />
        <div>
          <strong>{repository.full_name}</strong>
          <p>{repository.description}</p>
        </div>
        <button type="button">
          <AiFillStar color="yellow" size={30} />
        </button>
      </div>
    </RepositoryCard>
  );
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number,
    full_name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
