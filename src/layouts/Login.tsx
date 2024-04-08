import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Topbar from "../components/Topbar";

const Login = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <div className="flex flex-col items-center justify-center text-center mt-20">
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
