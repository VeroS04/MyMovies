import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { type LoginForm } from "../../../types";
import { useMe } from "../../../hooks/useMe";

const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { login } = useMe();

  const onSubmit = (data: LoginForm) => {
    login(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="container-signup">
      <Form.Group className="info-signup" controlId="formBasicName">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresar email"
          {...register("email")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>
      <Form.Group className="info-signup" controlId="formBasicLastName">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresar password"
          {...register("pass")}
        />
        <Form.Text className="text-danger">Estan mal los datos</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="btn-signup">
        Iniciar sesión
      </Button>
    </Form>
  );
};

export { Login };