import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Topbar from "../components/Topbar";
import Vector1 from '../assets/Vector1.png';
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";

const Login = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative bg-bgLoginColor w-full h-full">
      <img src={isMobile? Vector3 : Vector1} alt="vector" className="h-1/2 w-20 md:w-80 md:h-auto absolute  md:bottom-0 left-0" />
      <img src={Vector2} alt="vector" className="h-1/3 w-20 md:w-80 md:h-auto absolute bottom-0 right-0" />
      <Topbar />
      <Header />
      <div className="flex flex-col items-center justify-center text-center mt-32">
        <h1 className="text-5xl">Знакомства без преград</h1>
        <p className="mt-6">
          Для современного мира сплочённость команды профессионалов однозначно
          фиксирует необходимость<br />системы обучения кадров, соответствующей
          насущным потребностям.
        </p>
      </div>
      <Form />
      <Footer />
    </div>
  );
};

export default Login;