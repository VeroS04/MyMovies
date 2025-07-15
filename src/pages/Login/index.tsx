import { LoginForm } from "../../components/forms";
import { Layout } from "../../components/layout/Layout";
import { withAuth } from "../../hoc/withAuth";


const LoginPage = () => {

    return (
        <Layout>
            <LoginForm />
        </Layout>
    )
}

export const Login = withAuth(LoginPage)