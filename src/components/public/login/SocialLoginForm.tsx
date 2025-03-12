import Typography from '@/components/ui/Typography';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SocialLogin } from '@/actions';

const SocialLoginForm = () => {
  return (
    <form action={SocialLogin} className="flex flex-col space-y-3">
      <button
        type="submit"
        name="action"
        value="google"
        className="w-full border border-slate-200 shadow-lg flex justify-center items-center space-x-4 py-2 px-4 rounded-md"
      >
        <FcGoogle className="w-7 h-7" />
        <Typography as="p" type="p">
          Continue with Google
        </Typography>
      </button>
      <button
        type="submit"
        name="action"
        value="github"
        className="w-full border border-slate-200 shadow-lg flex justify-center items-center space-x-4 py-2 px-4 rounded-md"
      >
        <FaGithub className="w-7 h-7" />
        <Typography as="p" type="p">
          Continue with GitHub
        </Typography>
      </button>
    </form>
  );
};

export default SocialLoginForm;
