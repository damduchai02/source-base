import RegisterForm from '@/features/authentication/components/RegisterForm';

function RegisterLayout() {
  return (
    <section className='h-screen grid place-items-center'>
      <div className='max-w-2xl mx-auto text-center'>
        <h4 className='text-4xl font-medium mb-2'>Register</h4>
        <RegisterForm />
      </div>
    </section>
  );
}

export default RegisterLayout;
