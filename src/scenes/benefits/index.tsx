import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import { toast } from "react-toastify";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Ən Müasir Avadanlıqlar",
        description:
            "Zalımızda ən müasir avadanlıqlar mövcuddur. Bunun üçün dünyadakı sayılıb seçilən idman zallarını örnək götürmüşük.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100dən çox qrup",
        description:
            "İdman zalımızda 100dən çox fərqli qruplar mövcuddur, öz istədiyin vaxta və rejimə uyğun qruplara qoşula biləcəksiz",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Peşəkar və ekspert məşqçilər",
        description:
            "Məşqçilərimiz ABŞ və Avropada bu sahə üzrə təhsil almış, peşəkar insanlardır. Sizin üçün ən uyğun məşq proqramını tərtib edəcəklərinə əmin olun.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="üstünlüklər" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Üstünlüklər)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>Fitnessdən daha artıq.</HText>
                    <p className="my-5 text-sm">
                    Sizi son fitness məqsədlərinizə asanlıqla çatdırmaq üçün dünya səviyyəli fitnes avadanlığı, məşqçilər və dərslər təqdim edirik. Biz hər bir üzvə əsl qayğı göstəririk.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        Yüzlərlə məmnun {" "}
                                        <span className="text-primary-500">ÜZV</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                              İdman zalımıza üzv olmaqla yüzlərlə məmnun üzvdən birinə çevrilin. Məşqlərimizə üzv olaraq gümrah həyata və ideal bədən quruluşuna sahib ola bilərsiz.
                            </p>
                            <p className="mb-5">
                                Hazırda sayt təqdimat məqsədli olduğu üçün üzv olmaq mümkün olmayacaqdır, amma əlaqə bölməsindən email göndərərək saytı hazırlayan şəxsə veb layihələr üçün müraciət edə bilərsiz.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16" onClick={() => toast.info("Sayt təqdimat məqsədlidir, digər saytlarda auth sistemi quraşdırılmışdır")}>
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Üzv ol
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;