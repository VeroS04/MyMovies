import { Layout } from "../../components";
import { SignUpForm } from "../../components/forms";
import { withAuth } from "../../hoc/withAuth";



const SignUpPage = () => {
  return (
    <Layout>
        <SignUpForm />
    </Layout>
  );
};

export const SignUp = withAuth(SignUpPage) 