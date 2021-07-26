import Page from '../../components/Page';
import SignupForm from '../../components/SignupForm/SignupForm';

export default function Signup({handleSignupOrLogin}) {
  return (
    <Page>
      <SignupForm handleSignupOrLogin={handleSignupOrLogin} />
    </Page>
  );
}