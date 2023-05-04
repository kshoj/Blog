import React, { useEffect, useContext, useCallback, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Loading from "src/components/Loading";
import UserComponent from "src/components/User";
import { FullBack } from "src/components/User/style";
import { AppContext } from "src/context";

const UserContainer = () => {
  const [userList, setUserList] = useState(null);
  const [loading, setLoading] = useState(true);

  const { baseURL } = useContext(AppContext);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = useCallback(async () => {
    try {
      const { data } = await axios.get(`${baseURL}users`);
      setUserList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <FullBack>
        {userList.map((user) => (
          <UserComponent
            key={user.id}
            id={user.id}
            fullName={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))}
      </FullBack>
    </Container>
  );
};

export default UserContainer;
