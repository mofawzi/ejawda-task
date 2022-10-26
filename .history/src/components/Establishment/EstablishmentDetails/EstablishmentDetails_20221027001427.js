import { FormattedMessage } from "react-intl";
import "./EstablishmentDetails.scss";

const EstablishmentDetails = (props) => {
    return (
        <section className="facility-info row mt-25">
            <div className="col-3">
                <div className="facility-info_type">
                    <div>
                        <i className="bi bi-building fs-4 text-primary mx-5"></i>
                    </div>
                    <div>
                        <p className="mb-5">
                            <FormattedMessage
                                id="instituteType"
                                defaultMessage="نوع الكيان التجارى"
                            />
                        </p>
                        <p className="facility-info--info">
                            <FormattedMessage id={props.info.type} />
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="facility-info_date">
                    <div>
                        <i className="bi bi-calendar2-date fs-4 text-primary mx-5"></i>
                    </div>
                    <div>
                        <p className="mb-5">
                            <FormattedMessage
                                id="recordExpirationDate"
                                defaultMessage="تاريخ الانتهاء"
                            />
                        </p>
                        <p className="facility-info_info">{props.info.expirationDate}</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="facility-info_uniform-number">
                    <div>
                        <i className="bi bi-signpost-2 fs-4 text-primary mx-5"></i>
                    </div>
                    <div>
                        <p className="fmb-5">
                            <FormattedMessage
                                id="recordunicode"
                                defaultMessage="الرقم الموحد للمنشأة"
                            />
                        </p>
                        <p className="facility-info_info">{props.info.unicode}</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="facility-info_facility-number">
                    <div>
                        <i className="bi bi-pencil-square fs-4 text-primary mx-5"></i>
                    </div>
                    <div>
                        <p className="mb-5">
                            <FormattedMessage
                                id="recordCommercialNumber"
                                defaultMessage="رقم السجل التجارى"
                            />
                        </p>
                        <p className="facility-info_info">
                            {props.info.commercialNumber}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EstablishmentDetails;