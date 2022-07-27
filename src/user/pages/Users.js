import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Bryan Wong',
      image:
        'https://scontent.fkul2-2.fna.fbcdn.net/v/t1.6435-9/78659011_2834360436585196_8178051772388999168_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wgxO3Ocuru0AX8gbn4o&_nc_ht=scontent.fkul2-2.fna&oh=00_AT_noTMykiBK7PAbImJ4w7i2NGvlmW_6LA08hMTGyBZ9fQ&oe=62F869CA',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
