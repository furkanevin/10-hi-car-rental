import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="h-screen bg-black text-white grid place-items-center">
      <div>
        <h1>404</h1>
        <p>Aradığınız sayfa bulunamadı</p>
        <Link to="/">Anasayfa</Link>
      </div>
    </div>
  );
};

export default Undefined;
