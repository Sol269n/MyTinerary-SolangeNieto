import Header from '../components/Header'
import Footer from '../components/Footer'


const LayoutMain = (props) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-900 text-white">
      <Header />

      { props.children }

      <Footer/>
    </div>
  )
}

export default LayoutMain
