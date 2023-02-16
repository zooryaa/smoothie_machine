import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../../types/models/User.model";
import UserService from "../../../Services/UserService";
import UserForm from "../../molecules/UserForm/UserForm";
import { useEffect, useState } from "react";

const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    roles: [],
  });

  useEffect(() => {
    return () => {
      console.log(userId);
      if (userId) {
        console.log("hi");
        UserService.getUserByID(userId).then((res) => {
          console.log(res, "res");
          return setUser(res);
        });
      }
      console.log("uhm");
    };
  }, [userId]);

  const submitActionHandler = (values: User) => {
    if (userId !== undefined) {
      console.log("aaa");
      UserService.updateUser(values).then(() => {
        navigate("../users/");
      });
    } else {
      console.log("bbb");
      console.log(values);
      UserService.addUser(values).then(() => {
        navigate("/users");
      });
    }
  };

  return <UserForm user={user} submitActionHandler={submitActionHandler} />;
};
export default UserPage;
