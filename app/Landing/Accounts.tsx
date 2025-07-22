import TestimonialCarousel from "../Components/TestimonialCourse";
import Text from "../Components/Text";
import Span from "../Components/TextGradient";

export default function Accounts(){
    return(
        <div className="bg-[#7725c450] flex flex-col items-center w-full py-8">
            <Text type="subtitle" className="self-center md:self-start text-center md:text-left mb-4 ml-0 md:ml-18 max-w-[85%] md:max-w-[45%]">
                Veja <Span>o que dizem</Span> os professores que já passaram pela Helem
            </Text>

            <TestimonialCarousel />

        </div>
    )
}