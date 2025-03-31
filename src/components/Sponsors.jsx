import i20FerverLogo from "/sponsors/i20feverLogo.jpg"
import OrientSpectraLogo from "/sponsors/OrientSpectraLogo.jpg"
const Sponsors = () => {
  return (
    <div id="sponsors" className="flex flex-col items-center pb-30 py-15 scroll-mt-20" >
        <h1 className="text-3xl py-10" >Sponsors</h1>
        <div className=" flex gap-5 flex-wrap justify-center" >
            <img className="h-50 p-3 bg-white rounded-lg hover:-translate-y-3 transition-all duration-500"  src={i20FerverLogo} alt="" />
            <img className="h-50 p-5 bg-white rounded-lg hover:-translate-y-3 transition-all duration-500"  src={OrientSpectraLogo} alt="" />
        </div>
    </div>
  )
}
export default Sponsors