import Header from "./Header/Header";
import AboutCompany from './AboutCompany/AboutCompany';

function Page() {
  return (
    <div className='flex-grow-1'>
      <Header/>
      <div className='container'>  {/* Bootstrap контейнер */}
        <div className='about-company-wrapper'>
          <AboutCompany/>
        </div>
      </div>
      <style jsx>{`
        .about-company-wrapper {
          padding-left: 72px;
          padding-right: 72px;
        }
      `}</style>
    </div>
  );
}

export default Page;