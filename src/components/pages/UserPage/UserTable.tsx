import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { User } from "../../../types/models/User.model";
import UserService from "../../../Services/UserService";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardContentFromDatabase = (user: User) => {
  return (
    <Card>
      <CardContent>
        {user.firstName} | {user.lastName} | {user.email}
      </CardContent>
    </Card>
  );
};

const UserTable = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleAdd = () => {
    navigate("../useredit/");
  };

  const handleEdit = (id: string) => {
    navigate("../useredit/" + id);
  };

  const handleDelete = (id: string) => {
    console.log(id);
    UserService.deleteUser(id);
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea>
          <CardContent>
            {users.map((user) => (
              <>
                <CardContentFromDatabase {...user} />
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </>
            ))}
          </CardContent>
        </CardActionArea>
        <Button
          size="small"
          color="success"
          variant="contained"
          onClick={handleAdd}
        >
          Add
        </Button>
      </Card>
    </>
  );
};

export default UserTable;
