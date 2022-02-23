import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import Pagination from './Pagination';
import { goPrev, goNext } from '../users.action';

const ITEMS_PER_PAGE = 3;

const UsersList = ({ users, goPrevPage, goNextPage, currentPage }) => {
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const usersToRender = users.slice(startIndex, endIndex);

  return (
    <div>
      <Pagination
        goPrev={goPrevPage}
        goNext={goNextPage}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />

      <ul className="users">
        {usersToRender.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goPrevPage: goPrev,
  goNextPage: goNext,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
