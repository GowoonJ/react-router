import useRouter from '../../hooks/useRouter'

const About = () => {
  const { push } = useRouter()

  return (
    <div>
      <h1>Pre-Onboarding HW1</h1>
      <h2>this is About Page</h2>
      <div className="card">
        <button onClick={() => push('/')}>go to Root</button>
      </div>
    </div>
  )
};

export default About