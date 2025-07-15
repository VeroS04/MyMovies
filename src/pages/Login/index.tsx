
import { LoginForm } from "../../components/common/forms";
import { Layout } from "../../components/layout";
import { withAuth } from "../../hoc/withAuth";


const LoginPage = () => {

    return (
        <Layout>
            <LoginForm />
        </Layout>
    )
}

export const Login = withAuth(LoginPage)