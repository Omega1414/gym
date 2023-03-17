import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                    Dünya səviyyəli, mükəmməl idman zalı. Analoqsuz təlim fitness dərsləri. Xəyal etdiyiniz bədən formalarını əldə etmək üçün imkan. Elə indi müraciət edin.
                    </p>
                    <p>© AzeFitness müəllif hüquqları qorunur.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Bağlantılar</h4>
                    <p className="my-5">Tezliklə</p>
                    <p className="my-5">Tezliklə</p>
                    <p>Tezliklə</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Əlaqə</h4>
                    <p className="my-5">Telefon nömrəmiz </p>
                    <p>050------</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;