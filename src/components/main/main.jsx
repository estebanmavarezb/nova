import BannerContentTwo from "../bannerImg/bannerImg-2";
import BannerContent from "../bannersImg/bannerImg";
import FeatureComponent from "../feature";
import MarcasComponent from "../marcasComponent/marcas";
import TeamComponent from "../teamComponent/teamComponent";


function MainComponentContent() {
    return (
        <main className="contendor">
            <FeatureComponent />
            <BannerContent />
            <TeamComponent />
            <BannerContentTwo />
            <MarcasComponent />
        </main>
    )
}

export default MainComponentContent