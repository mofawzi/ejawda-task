import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sbc_logo.png";
import { updateLang } from './../../actions/languageActions';
import "./Sidebar.scss";


const Sidebar = () => {
    const userData = require("../../assets/mockup/userData.json");
    const language = useSelector((state) => state.language);
    const dispatch = useDispatch();

    const sidebarSections = (sections) => {
        return userData[sections].map((section) => {
            return (
                <li className="aside-wrapper-nav-item" key={`n-${section.id}`}>
                    <Link
                        to={section.link}
                        className="text-white text-decoration-none d-block py-10 px-30"
                    >
                        {section.iconName ? (
                            <i className={`bi ${section.iconName} mx-10 fs-5`}></i>
                        ) : ("")}
                        <FormattedMessage id={section.name} defaultMessage={section.name} />
                    </Link>
                </li>
            );
        });
    };

    return (
        <aside className="aside-wrapper h-100">
            <div className="aside-wrapper d-flex justify-content-center align-items-center p-30">
                <img src={logo} className="d-block logo-image " alt="not found" />
            </div>

            <div className="language_block">
                <FormattedMessage id="lang" defaultMessage="اللغة" /> : <select
                    className="form-select  d-block d-md-inline-block lang_btn"
                    value={language.locale}
                    onChange={(e) => { dispatch(updateLang(e)) }}
                >
                    <option defaultValue value="ar">العربية</option>
                    <option value="en">English</option>
                </select>
            </div>

            <div className="aside-wrapper-user px-30">
                <div className="d-flex justify-content-between mb-10">
                    <p className="text-white fs-6">
                        <FormattedMessage id="hello" defaultMessage="مرحباّ" />
                    </p>
                </div>
                <p className="aside-wrapper-user text-white fs-5 pb-5 d-flex justify-content-between">
                    <span className="aside-wrapper-user-name">
                        <i className="bi bi-person bold"></i>{" "}
                        <FormattedMessage
                            id="user"
                            defaultMessage="أحمد خالد الغامدى القحطاني"
                        />
                    </span>
                    <button className="btn btn-link fs-5">
                        <i
                            className={`bi bi-box-arrow-${language.locale === "en" ? "right" : "left"
                                } `}
                        ></i>
                    </button>
                </p>
            </div>

            <nav className="aside-wrapper-nav">
                <ul className="aside-wrapper-nav-items list-unstyled px-0">
                    {sidebarSections("general")}
                </ul>
                <hr className="bg-white" />
                <ul className="aside-wrapper-nav-items list-unstyled px-0 mt-20">
                    <p className="link-category-name px-30 fw-bold">
                        <FormattedMessage
                            id="electronicServices"
                            defaultMessage="الخدمات الالكترونية"
                        />
                    </p>
                    {sidebarSections("services")}
                </ul>
                <hr className="bg-white" />
                <ul className="aside-wrapper-nav-items list-unstyled px-0 mt-20">
                    <p className="link-category-name  px-30 fw-bold">
                        <FormattedMessage id="otherLinks" defaultMessage="روابط اخري" />
                    </p>
                    {sidebarSections("otherLinks")}
                </ul>
                <div className="nav-footer mt-99">
                    <div className="card create-record">
                        <div className="card-body py-40 px-md-30">
                            <h5 className="card-title pb-10">
                                <FormattedMessage id="createRecord" />
                            </h5>
                            <p className="card-text">
                                <FormattedMessage id="ifYouDontKnow" />{" "}
                                <a href="/#" className="press-here">
                                    <FormattedMessage id="pressHere" />
                                </a>
                            </p>
                            <a href="#" className="btn btn-info px-20 py-5">
                                <FormattedMessage id="startNow" />
                            </a>
                        </div>
                    </div>

                    <div className="card create-licence">
                        <div className="card-body py-40 px-md-30">
                            <p className="card-text">
                                <FormattedMessage id="createInstantLicence" />{" "}
                            </p>
                            <a href="#" className="btn btn-light mt-10 px-20 py-5">
                                <FormattedMessage id="createLicences" />
                            </a>
                        </div>
                    </div>

                    <div className="copyright w-100">
                        <div className="row">
                            <div className="col-12">
                                <img src={require("../../assets/images/sdaia_logo.png")} alt="not found" />
                            </div>
                            <div className="col-12 text-center mt-8  mb-0 developed-by">
                                <p className="mb-0">
                                    <FormattedMessage id="developedBy" />{" "}
                                </p>
                            </div>
                            <div className="col-12 text-center mt-4 mb-5 copyright-text">
                                <p>
                                    <FormattedMessage id="copyrights" />{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
