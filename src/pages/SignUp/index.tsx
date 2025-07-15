import { SignUpForm } from "../../components/common/forms";
import { Layout } from "../../components/layout";
import { withAuth } from "../../hoc/withAuth";



const SignUpPage = () => {
  return (
    <Layout>
        <SignUpForm />
    </Layout>
  );
};

export const SignUp = withAuth(SignUpPage) 