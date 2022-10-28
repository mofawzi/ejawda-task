import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Establishment from "../Establishment/Establishment";
import License from "../License/License";
import "./EstablishmentStats.scss";

const establishments = require("../../assets/mockup/establishments.json");
const insuranceLicenses = require("../../assets/mockup/insuranceLicenses.json");
const establishmentCategory = require("../../assets/mockup/establishmentCategories.json");


const EstablishmentStats = () => {
    const [active, setActive] = useState(1);
    const [facilities, updateFacilities] = useState(establishments.facilities);
    const licenses = insuranceLicenses?.licenses;

    const selectTab = (tab) => {
        setActive(tab.id);
        if (tab.id === 1) {
            updateFacilities(establishments.facilities);
            return;
        }

        const subRecordEstablishments = establishments.facilities.filter((item) => item.type === 'subRecord');
        const inistitutionEstablishments = establishments.facilities.filter((item) => item.type === 'inistitution');
        const favoriteEstablishments = establishments.facilities.filter((item) => item.isFavorite);

        // let filteredestablishments = establishments.facilities.filter((item) => {
        //     switch (tab.id) {
        //         case 2:
        //             return item.type === "subRecord";
        //         case 3:
        //             return item.institutionInfo.type === "inistitution";
        //         case 4:
        //             return item.isFavorite;
        //         default:
        //             return true;
        //     }
        // });
        updateFacilities([...subRecordEstablishments, ...inistitutionEstablishments, ...favoriteEstablishments]);
    };
    const markFavorite = (item) => {
        let updatedRecords = establishments.facilities.map((record) => {
            if (item.id === record.id) {
                record.isFavorite = !item.isFavorite;
            }
            return record;
        });

        updateFacilities(updatedRecords);
        setActive(1);
    };

    const commercialRecords = facilities.map((record) => {
        return (
            <Establishment
                item={record}
                key={`r-${record.id}`}
                onToggleFavorite={markFavorite}
            ></Establishment>
        );
    });
    const licensesList = licenses.map((license) => {
        return (
            <div className="col-md-4 my-10" key={`col-l-${license.id}`}>
                <License key={`l-${license.id}`} item={license} />
            </div>
        );
    });
    return (
        <>
            <section className="facilities" key={"records"}>
                <header className="section-header mb-20">
                    <h2 className="section-header-title fw-bold">
                        <FormattedMessage
                            id={"commercialLists"}
                            defaultMessage={"Commercial Lists"}
                        />
                    </h2>
                </header>
                <ul className="nav nav-pills px-0 mb-20 ">
                    {establishmentCategory.tabs.map((tab) => {
                        return (
                            <li className="nav-item " key={`t-${tab.id}`}>
                                <button
                                    className={`nav-link facilities-tabs fw-normal ${active === tab.id && "active fw-bold"
                                        }`}
                                    aria-current="page"
                                    onClick={() => selectTab(tab)}
                                >
                                    <FormattedMessage id={tab.name} defaultMessage={tab.name} />
                                    {active === tab.id ? ` (${commercialRecords.length}) ` : ""}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {commercialRecords}
            </section>
            <section className="licence-statistics" key={"licence-statistics"}>
                <header className="section-header mb-20">
                    <h2 className="section-header-title fw-bold">
                        <FormattedMessage
                            id={"licencesStatistics"}
                            defaultMessage={"Licences Statistics"}
                        />
                    </h2>
                </header>

                <div className="row">{licensesList}</div>
            </section>
        </>
    );
};

export default EstablishmentStats;
