import LoginForm from '@/features/authentication/components/LoginForm';

function LoginLayout() {
  return (
    <section className='h-screen grid place-items-center'>
      <div className='max-w-2xl mx-auto text-center'>
        <h4 className='text-4xl font-medium mb-2'>Login</h4>
        <LoginForm />
      </div>
    </section>
  );
}

export default LoginLayout;
