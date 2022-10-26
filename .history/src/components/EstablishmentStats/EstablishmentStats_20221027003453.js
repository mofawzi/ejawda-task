import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Establishment from "../Establishment/Establishment";
import LicenceCard from "../LicenceCard/LicenceCard";
import "./EstablishmentStats.scss";
const establishments = require("../../assets/json/establishments.json");
const insuranceLicences = require("../../assets/json/insuranceLicences.json");
const establishmentCategory = require("../../assets/json/establishmentCategory.json");


const EstablishmentStats = () => {


    const [active, setActive] = useState(1);
    const [records, updateRecords] = useState(establishments.records);
    const licences = insuranceLicences.licences;

    const selectTab = (tab) => {
        setActive(tab.id);
        if (tab.id === 1) {
            updateRecords(establishments.records);
            return;
        }
        let filteredItems = establishments.records.filter((item) => {
            switch (tab.id) {
                case 2:
                    return item.type === "subRecord";
                case 3:
                    return item.institutionInfo.type === "inistitution";
                case 4:
                    return item.isFavorite;
                default:
                    return true;
            }
        });
        updateRecords(filteredItems);
    };
    const toggleFavourite = (item) => {
        let updatedRecords = establishments.records.map((record) => {
            if (item.id === record.id) {
                record.isFavorite = !item.isFavorite;
            }
            return record;
        });

        updateRecords(updatedRecords);
        setActive(1);
    };

    const commercialRecords = records.map((record) => {
        return (
            <Establishment
                item={record}
                key={`r-${record.id}`}
                onToggleFavourite={toggleFavourite}
            ></Establishment>
        );
    });
    const licencesList = licences.map((licence) => {
        return (
            <div className="col-md-4 my-10" key={`col-l-${licence.id}`}>
                <LicenceCard key={`l-${licence.id}`} item={licence} />
            </div>
        );
    });

    return (
        <>
            <section className="records" key={"records"}>
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
                                    className={`nav-link records-tabs fw-normal ${active === tab.id && "active fw-bold"
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

                <div className="row">{licencesList}</div>
            </section>
        </>
    );
};

export default EstablishmentStats;
