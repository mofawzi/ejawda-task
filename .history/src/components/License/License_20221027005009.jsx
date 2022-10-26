import { FormattedMessage } from "react-intl";
import "./License.scss";

const License = (props) => {
    return (
        <div className="card license-card">
            <div className="card-title">
                <div className="row">
                    <div className="col-8">
                        <h5 className="inst-name">{props.item.instituteName}</h5>
                    </div>
                    <div className="col-4 image-col">
                        <img src={require(`../../assets/images/${props.item.logo}`)} alt="not found" />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="row stats">
                    <div className="col ">
                        <h6>
                            <FormattedMessage
                                id={"requiredPayment"}
                                defaultMessage={"المبلغ المستحق"}
                            />
                        </h6>
                        <p className="badge custom-badge">
                            {props.item.requiredPayment}{" "}
                            <FormattedMessage id={"SAR"} defaultMessage={"SAR"} />
                        </p>
                    </div>
                    <div className="col ">
                        <h6>
                            <FormattedMessage
                                id={"totalCount"}
                                defaultMessage={"العدد الإجمالى"}
                            />
                        </h6>
                        <p className="total-count">{props.item.totalCount}</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default License;
