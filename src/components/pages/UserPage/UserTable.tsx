import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { User } from "../../../types/models/User.model";
import UserService from "../../../Services/UserService";
import { CardActionArea } from "@mui/material";

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
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleAdd = (event: React.MouseEvent<HTMLElement>) => {};

  const handleEdit = (event: React.MouseEvent<HTMLElement>) => {};

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {};

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
                    onClick={handleEdit}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    variant="contained"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </CardActions>
              </>
            ))}
          </CardContent>
          <Button
            size="small"
            color="success"
            variant="contained"
            onClick={handleAdd}
          >
            Add
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default UserTable;
