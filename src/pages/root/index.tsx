import useRouter from '../../hooks/useRouter'

const Root = () => {
  const { push } = useRouter()

  return (
    <div>
      <h1>Pre-Onboarding HW1</h1>
      <h2>this is Root Page</h2>
      <div className="card">
        <button onClick={() => push('/about')}>go to about</button>
      </div>
    </div>
    )
};

export default Root
