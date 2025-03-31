import i20FerverLogo from "/sponsors/i20feverLogo_.jpg"
import OrientSpectraLogo from "/sponsors/OrientSpectraLogo_.jpg"
const Sponsors = () => {
  return (
    <div className="flex flex-col items-center py-15" >
        <h1 className="text-3xl py-10" >Sponsors</h1>
        <div className=" flex gap-5 flex-wrap justify-center" >
            <img className="h-50 p-3 bg-white rounded-lg hover:-translate-y-3 transition-all duration-500"  src={i20FerverLogo} alt="" />
            <img className="h-50 p-5 bg-white rounded-lg hover:-translate-y-3 transition-all duration-500"  src={OrientSpectraLogo} alt="" />
        </div>
    </div>
  )
}
export default Sponsors